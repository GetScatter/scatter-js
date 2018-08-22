import StorageService from '../services/StorageService'
import getRandomValues from 'get-random-values';
import Eos from 'eosjs';
const {ecc} = Eos.modules;

const host = '127.0.0.1:50005';

let socket = null;
let connected = false;
let paired = false;

let plugin;
let openRequests = [];

let allowReconnects = true;
let reconnectionTimeout = null;

const reconnectOnAbnormalDisconnection = () => {
    if(!allowReconnects) return;

	clearTimeout(reconnectionTimeout);
	reconnectionTimeout = setTimeout(() => {
		SocketService.link();
	}, 1000);
};

const random = () => {
    const array = new Uint8Array(24);
    getRandomValues(array);
    return array.join('');
};

const getOrigin = () => {
    let origin;
    if(typeof location !== 'undefined')
        if(location.hasOwnProperty('hostname') && location.hostname.length && location.hostname !== 'localhost')
            origin = location.hostname;
        else origin = plugin;
    else origin = plugin;
    return origin;
}


// StorageService.removeAppKey();
// StorageService.removeNonce();

let appkey = StorageService.getAppKey();
if(!appkey) appkey = 'appkey:'+random();

const send = (type = null, data = null) => {
    if(type === null && data === null) socket.send('40/scatter');
    else socket.send('42/scatter,' + JSON.stringify([type, data]));
}

let pairingPromise = null;
const pair = (passthrough = false) => {
    return new Promise((resolve, reject) => {
        pairingPromise = {resolve, reject};
        // socket.emit('pair', {data:{ appkey, origin:getOrigin(), passthrough }, plugin});
        send('pair', {data:{ appkey, origin:getOrigin(), passthrough }, plugin})
    })
};

export default class SocketService {

    static init(_plugin, timeout = 60000){
        plugin = _plugin;
        this.timeout = timeout;
    }

    static link(){

        return Promise.race([
            new Promise((resolve, reject) => setTimeout(() => {
                if(connected) return;
                resolve(false);

                if(socket) {
                    socket.disconnect();
                    socket = null;
                }

                reconnectOnAbnormalDisconnection();
            }, this.timeout)),
            new Promise((resolve, reject) => {
                // socket = io.connect(`${host}/scatter`, { secure:true, reconnection: false, rejectUnauthorized : false, transports: ['websocket', 'polling', 'flashsocket'] });

                socket = new WebSocket(`ws://${host}/socket.io/?EIO=3&transport=websocket`);

                socket.onclose = x => {
                    resolve(false);
                };

                socket.onerror = err => {
                    console.error('err', err);
                    resolve(false);
                }

                socket.onopen = x => {
                    send();
                    clearTimeout(reconnectionTimeout);
                    connected = true;
                    pair(true).then(() => {
                        console.log('then pair', connected);
                        resolve(true);
                    });
                };

                socket.onmessage = msg => {
                    // Handshaking/Upgrading
                    if(msg.data.indexOf('42/scatter') === -1) return false;


                    // Real message
                    const [type, data] = JSON.parse(msg.data.replace('42/scatter,', ''));
                    console.log('TYPE: ', type, ' | DATA: ', data);

                    switch(type){
                        case 'paired': return msg_paired(data);
                        case 'rekey': return msg_rekey();
                        case 'api': return msg_api(data);
                    }
                };

                const msg_paired = result => {
                    console.log('paired', result);
                    paired = result;

                    if(paired) {
                        const savedKey = StorageService.getAppKey();
                        const hashed = appkey.indexOf('appkey:') > -1 ? ecc.sha256(appkey) : appkey;

                        if (!savedKey || savedKey !== hashed) {
                            StorageService.setAppKey(hashed);
                            appkey = StorageService.getAppKey();
                        }
                    }

                    pairingPromise.resolve(result);
                };

                const msg_rekey = () => {
                    appkey = 'appkey:'+random();
                    send('rekeyed', {data:{ appkey, origin:getOrigin() }, plugin});
                };

                const msg_api = result => {
                    console.log('api res', result);
                    const openRequest = openRequests.find(x => x.id === result.id);
                    if(!openRequest) return;
                    if(typeof result.result === 'object'
                        && result.result !== null
                        && result.result.hasOwnProperty('isError')) openRequest.reject(result.result);
                    else openRequest.resolve(result.result);
                };


                //
                // socket.on('event', event => {
                //     console.log('event', event);
                // });
                //
                // socket.on('disconnect', () => {
                //     console.log('Disconnected')
                //     connected = false;
                //     socket = null;
                //
                //     // If bad disconnect, retry connection
                //     reconnectOnAbnormalDisconnection();
                // });
                //
                // socket.on('connect_error', () => {
                //     allowReconnects = false;
                //     resolve(false);
                // });
                //
                // socket.on('rejected', reason => {
                //     console.error('reason', reason);
                //     reject(reason);
                // });
            })
        ])
    }

    static isConnected(){
        return connected;
    }

    static disconnect(){
        socket.disconnect();
        return true;
    }

    static sendApiRequest(request){
        return new Promise((resolve, reject) => {
            if(request.type === 'identityFromPermissions' && !paired) return resolve(false);

            pair().then(() => {
                if(!paired) return reject({code:'not_paired', message:'The user did not allow this app to connect to their Scatter'});

                // Request ID used for resolving promises
                request.id = random();

                // Set Application Key
                request.appkey = appkey;

                // Nonce used to authenticate this request
                request.nonce = StorageService.getNonce() || 0;
                // Next nonce used to authenticate the next request
                const nextNonce = random();
                request.nextNonce = ecc.sha256(nextNonce);
                StorageService.setNonce(nextNonce);

                if(request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin'))
                    request.payload.origin = getOrigin();


                openRequests.push(Object.assign(request, {resolve, reject}));
                send('api', {data:request, plugin})
            })
        });
    }

}