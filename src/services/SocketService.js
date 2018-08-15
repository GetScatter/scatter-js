import io from 'socket.io-client';
import StorageService from '../services/StorageService'
import getRandomValues from 'get-random-values';
import Eos from 'eosjs';
const {ecc} = Eos.modules;

const host = 'http://127.0.0.1:50005';

let socket = null;
let connected = false;

let plugin;
let openRequests = [];

let allowReconnects = true;
let reconnectionTimeout = null;

const reconnectOnAbnormalDisconnection = async () => {
    if(!allowReconnects) return;

	clearTimeout(reconnectionTimeout);
	reconnectionTimeout = setTimeout(() => {
		SocketService.link();
	}, 1000);
};



export default class SocketService {

    static init(_plugin, timeout = 60000){
        plugin = _plugin;

        this.timeout = timeout;
    }

    static async link(){
        return Promise.race([
            new Promise((resolve, reject) => setTimeout(async () => {
                if(connected) return;
                resolve(false);

                if(socket) {
                    socket.disconnect();
                    socket = null;
                }

                reconnectOnAbnormalDisconnection();
            }, this.timeout)),
            new Promise(async (resolve, reject) => {
                socket = io.connect(`${host}/scatter`, { secure:true, reconnection: false, rejectUnauthorized : false });

                socket.on('connected', async () => {
                    clearTimeout(reconnectionTimeout);
                    connected = true;
                    resolve(true);
                });

                socket.on('event', event => {
                    console.log('event', event);
                });

                socket.on('api', result => {
                    const openRequest = openRequests.find(x => x.id === result.id);
                    if(!openRequest) return;
                    if(typeof result.result === 'object'
                        && result.result !== null
                        && result.result.hasOwnProperty('isError')) openRequest.reject(result.result);
                    else openRequest.resolve(result.result);
                });

                socket.on('disconnect', async () => {
                    console.log('Disconnected')
                    connected = false;
                    socket = null;

                    // If bad disconnect, retry connection
                    reconnectOnAbnormalDisconnection();
                });

                socket.on('connect_error', async () => {
                    allowReconnects = false;
                    resolve(false);
                });

                socket.on('rejected', async reason => {
                    console.error('reason', reason);
                    reject(reason);
                });
            })
        ])
    }

    static isConnected(){
        return connected;
    }

    static async disconnect(){
        socket.disconnect();
        return true;
    }

    static async sendApiRequest(request){
        return new Promise(async (resolve, reject) => {

            StorageService.removeAppKey();
            StorageService.removeNonce();

            const random = () => {
                const array = new Uint8Array(24);
                getRandomValues(array);
                return array.join('');
            };

            // Request ID used for resolving promises
            request.id = random();


            // App key used to backwards authenticate this browser
            let appkey = StorageService.getAppKey();
            if(!appkey){
                appkey = random();
                StorageService.setAppKey(ecc.sha256(appkey));
            }
            request.appkey = appkey;

            // Nonce used to authenticate this request
            request.nonce = StorageService.getNonce() || 0;

            // Next nonce used to authenticate the next request
            const nextNonce = random();
            request.nextNonce = ecc.sha256(nextNonce);
            StorageService.setNonce(nextNonce);




            console.log(request);


            if(request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin')) {
                let origin;
                if(typeof location !== 'undefined')
                    if(location.hasOwnProperty('hostname') && location.hostname.length && location.hostname !== 'localhost')
                        origin = location.hostname;
                    else origin = plugin;
                else origin = plugin;

                request.payload.origin = origin;
            }

            openRequests.push(Object.assign(request, {resolve, reject}));
            socket.emit('api', {data:request, plugin});
        });
    }

}