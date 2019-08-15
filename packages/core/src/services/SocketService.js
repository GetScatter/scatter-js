import StorageService from './StorageService'
import getRandomValues from 'get-random-values';
import createHash from 'create-hash';
import WebSocket from 'isomorphic-ws';
import device from "../util/Device";

const suffix = '/socket.io/?EIO=3&transport=websocket';


const sha256 = data => createHash('sha256').update(data).digest('hex');

const random = () => {
    const array = new Uint8Array(24);
    getRandomValues(array);
    return array.join('');
};

export default class SocketService {

    constructor(_plugin, _timeout){
	    this.plugin = _plugin;
	    this.timeout = _timeout;

        this.uuid = null;
        this.socket = null;
        this.connected = false;
        this.paired = false;
        this.openRequests = [];
        this.pairingPromise = null;
        this.eventHandlers = {};

	    this.appkey = StorageService.getAppKey();
	    if(!this.appkey) this.appkey = 'appkey:'+random();
    }

    addEventHandler(handler, key){
        if(!key) key = 'app';
	    this.eventHandlers[key] = handler;
    }

    removeEventHandler(key){
	    if(!key) key = 'app';
	    delete this.eventHandlers[key];
    }

    link(allowHttp = true, _uuid = null, socketHost = null){
	    this.uuid = _uuid;

        return Promise.race([
            new Promise((resolve, reject) => setTimeout(() => {
                if(this.connected) return;
                resolve(false);

                if(this.socket) {
	                this.socket.close();
	                this.socket = null;
                }
            }, this.timeout)),
            new Promise(async (resolve, reject) => {

                const setupSocket = () => {
	                this.socket.onmessage = msg => {
                        // Handshaking/Upgrading
                        if(msg.data.indexOf('42/scatter') === -1) return false;


                        // Real message
                        const [type, data] = JSON.parse(msg.data.replace('42/scatter,', ''));

		                if(type === 'pong') return;
		                if(type === 'ping') return this.socket.send(`42/scatter,["pong"]`);

                        switch(type){
                            case 'paired': return msg_paired(data);
                            case 'rekey': return msg_rekey();
                            case 'api': return msg_api(data);
                            case 'event': return event_api(data);
                        }
                    };


                    const msg_paired = result => {
	                    this.paired = result;

                        if(this.paired) {
                            const savedKey = StorageService.getAppKey();
                            const hashed = this.appkey.indexOf('appkey:') > -1 ? sha256(this.appkey) : this.appkey;

                            if (!savedKey || savedKey !== hashed) {
                                StorageService.setAppKey(hashed);
	                            this.appkey = StorageService.getAppKey();
                            }
                        }

	                    this.pairingPromise.resolve(result);
                    };

                    const msg_rekey = () => {
	                    this.appkey = 'appkey:'+random();
	                    this.send('rekeyed', {data:{ appkey:this.appkey, origin:this.getOrigin() }, plugin:this.plugin});
                    };

                    const msg_api = response => {
                        const openRequest = this.openRequests.find(x => x.id === response.id);
                        if(!openRequest) return;

	                    this.openRequests = this.openRequests.filter(x => x.id !== response.id);

                        const isErrorResponse = typeof response.result === 'object'
                            && response.result !== null
                            && response.result.hasOwnProperty('isError');

                        if(isErrorResponse) openRequest.reject(response.result);
                        else openRequest.resolve(response.result);
                    };

                    const event_api = ({event, payload}) => {
						if(Object.keys(this.eventHandlers).length) Object.keys(this.eventHandlers).map(key => {
							this.eventHandlers[key](event, payload);
						});
                    };
                };

                const getHostname = (port, ssl) => {
                    if(socketHost) return socketHost;
                    return ssl ? `local.get-scatter.com:${port}` : `127.0.0.1:${port}`;
                }

                const ports = await (async () => {
                    if(socketHost) return [50006];

                    const checkPort = (host, cb) => fetch(host).then(r => r.text()).then(r => cb(r === 'scatter')).catch(() => cb(false));

                    let startingPort = 50005;
                    let availablePorts = [];
	                [...new Array(5).keys()].map(i => {
		                const _port = startingPort+(i*1500);
		                return Promise.all([
			                checkPort(`https://`+getHostname(_port+1, true), x => x ? availablePorts.push(_port+1) : null),
			                allowHttp ? checkPort(`http://`+getHostname(_port, false), x => x ? availablePorts.push(_port) : null) : null
		                ])
	                });

                    let tries = 0;
                    while(tries < 50){
	                    if(availablePorts.length) break;
	                    await new Promise(r => setTimeout(() => r(true),2));
	                    tries++;
                    }

                    return (!availablePorts.length ?  /* BACKWARDS COMPAT */ [50006, 50005] : availablePorts).filter(x => {
                    	if(allowHttp) return true;
                    	return !(x % 2);
                    }).sort((a,b) => {
	                    // Always try to use SSL first.
	                    return !(b % 2) ? 1 : !(a % 2) ? -1 : 0;
                    });
                })();


                const trySocket = (port, resolver = null) => {
                    let promise;
                    if(!resolver) promise = new Promise(r => resolver = r);
	                const ssl = !(port % 2);
                    const hostname = getHostname(port, ssl);
                    const protocol = ssl ? 'wss://' : 'ws://';
                    const host = `${protocol}${hostname}${suffix}`;
                    const s = new WebSocket(host);

                    s.onerror = () => resolver(false);
                    s.onopen = () => resolver(s);

                    return promise;
                };

                for(let i = 0; i < ports.length; i++){
                    const s = await trySocket(ports[i]);
                    if(s){
	                    this.socket = s;
	                    this.send();
	                    this.connected = true;
	                    this.pair(true).then(() => resolve(true));
	                    setupSocket();
	                    break;
                    }
                }

            })
        ])
    }

    isConnected(){
        return this.connected;
    }

    isPaired(){
        return this.paired;
    }

    disconnect(){
        console.log('disconnect')
        if(this.socket) this.socket.close();
        return true;
    }

    sendApiRequest(request){
        return new Promise((resolve, reject) => {
            if(request.type === 'identityFromPermissions' && !this.paired) return resolve(false);

	        this.pair().then(() => {
                if(!this.paired) return reject({code:'not_paired', message:'The user did not allow this app to connect to their Scatter'});

                // Request ID used for resolving promises
                request.id = random();

                // Set Application Key
                request.appkey = this.appkey;

                // Nonce used to authenticate this request
                request.nonce = StorageService.getNonce() || 0;
                // Next nonce used to authenticate the next request
                const nextNonce = random();
                request.nextNonce = sha256(nextNonce);
                StorageService.setNonce(nextNonce);

                if(request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin'))
                    request.payload.origin = this.getOrigin();


		        this.openRequests.push(Object.assign(request, {resolve, reject}));
		        this.send('api', {data:request, plugin:this.plugin})
            })
        });
    }





	pair(passthrough = false){
		return new Promise((resolve, reject) => {
			this.pairingPromise = {resolve, reject};
			this.send('pair', {data:{ appkey:this.appkey, origin:this.getOrigin(), passthrough }, plugin:this.plugin})
		})
	}

	send(type = null, data = null){
		if(type === null && data === null) this.socket.send('40/scatter');
		else this.socket.send('42/scatter,' + JSON.stringify([type, Object.assign(data, {device, uuid:this.uuid})]));
	}


	getOrigin(){
		return SocketService.getOriginOrPlugin(this.plugin);
	}

	static getOriginOrPlugin(plugin){
		let origin;
		if(typeof location !== 'undefined')
			if(location.hasOwnProperty('hostname') && location.hostname.length && location.hostname !== 'localhost')
				origin = location.hostname;
			else origin = plugin;
		else origin = plugin;
		if(origin.substr(0, 4) === 'www.') origin = origin.replace('www.','');
		return origin;
	}








}
