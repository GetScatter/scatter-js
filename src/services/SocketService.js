import io from 'socket.io-client';
import RSAService from './RSAService';
import StorageService from './StorageService';

const host = 'http://localhost:50005';

let socket = null;
let connected = false;
let authenticated = false;

let plugin, keyGetter, keySetter;
let rsaKey = null;

let openRequests = [];

let allowReconnects = true;
let reconnectionTimeout = null;
const reconnectOnAbnormalDisconnection = async () => {
    if(!allowReconnects) return;

    if(await keyGetter()) {
        clearTimeout(reconnectionTimeout);
        reconnectionTimeout = setTimeout(() => {
            SocketService.link();
        }, 1000);
    }

};



export default class SocketService {

    static init(_plugin, _keyGetter = null, _keySetter = null, timeout = 60000){
        plugin = _plugin;

        if (typeof window === "undefined" && (!_keyGetter || !_keySetter))
            throw new Error("This website doesn't have local storage enabled, please use key setters and getters");

        if(_keyGetter === null) _keyGetter = StorageService.get;
        if(_keySetter === null) _keySetter = StorageService.set;

        keyGetter = _keyGetter;
        keySetter = _keySetter;

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

                socket = io.connect(`${host}/scatter`, { reconnection: false });

                socket.on('connected', async () => {
                    clearTimeout(reconnectionTimeout);
                    connected = true;
                    await SocketService.identify();
                });

                socket.on('auth', _authed => {
                    if(!_authed) console.log('Denied, blacklisted.')
                    authenticated = _authed;
                    resolve(_authed);
                });

                socket.on('event', event => {
                    console.log('event', event);
                });

                socket.on('api', result => {
                    const openRequest = openRequests.find(x => x.id === result.id);
                    if(!openRequest) return;
                    openRequest.resolve(result.result);
                });

                socket.on('disconnect', async () => {
                    console.log('Disconnected')
                    connected = false;
                    authenticated = false;
                    socket = null;

                    // If bad disconnect, retry connection
                    reconnectOnAbnormalDisconnection();
                });

                socket.on('connect_error', async () => {
                    allowReconnects = false;
                });
            })
        ])
    }

    static async identify(){
        let privatePin = await keyGetter();
        console.log('privatePin', privatePin);
        let publicPin = '';
        if(!privatePin){
            const [key, publicKey, privateKey] = RSAService.generateKeypair();
            publicPin = publicKey;
            rsaKey = key;
            keySetter(privateKey);
        } else {
            rsaKey = RSAService.privateToKey(privatePin);
            publicPin = RSAService.keyToPublicKey(rsaKey);
        }
        socket.emit('identify', {pin:publicPin, plugin});
        return true;
    }

    static isConnected(){
        return connected;
    }

    static isAuthenticated(){
        return authenticated;
    }

    static async disconnect(){
        await keySetter(null);
        socket.disconnect();
        return true;
    }

    static async sendApiRequest(request){
        return new Promise(async (resolve, reject) => {
            request.id = Math.round(Math.random() * 100000000 + 1);

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
            const data = RSAService.encrypt(request, rsaKey);
            socket.emit('api', {data, plugin});
        });
    }

}