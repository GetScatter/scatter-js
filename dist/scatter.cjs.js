'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var io = _interopDefault(require('socket.io-client'));
var getRandomValues = _interopDefault(require('get-random-values'));
var Eos = _interopDefault(require('eosjs'));
require('isomorphic-fetch');

let storage = {};
const getWindow = () => {
    if(typeof window !== 'undefined') return window;
    return {
        localStorage:{
            setItem:(key, val) => storage[key] = val,
            getItem:(key) => storage[key] || null,
            removeItem:(key) => delete storage[key]
        }
    }
};

class StorageService {

    constructor(){}

    static setAppKey(appkey){
        getWindow().localStorage.setItem('appkey', appkey);
    };

    static getAppKey() {
        return getWindow().localStorage.getItem('appkey');
    }

    static removeAppKey() {
        return getWindow().localStorage.removeItem('appkey');
    }

    static setNonce(nonce){
        getWindow().localStorage.setItem('nonce', nonce);
    };

    static getNonce() {
        return getWindow().localStorage.getItem('nonce');
    }

    static removeNonce() {
        return getWindow().localStorage.removeItem('nonce');
    }
}

const {ecc} = Eos.modules;

const host = 'ws://127.0.0.1:50005/socket.io/?EIO=3&transport=websocket';

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
};


// StorageService.removeAppKey();
// StorageService.removeNonce();

let appkey = StorageService.getAppKey();
if(!appkey) appkey = 'appkey:'+random();

let pairingPromise = null;
const pair = (passthrough = false) => {
    return new Promise((resolve, reject) => {
        pairingPromise = {resolve, reject};
        socket.emit('pair', {data:{ appkey, origin:getOrigin(), passthrough }, plugin});
    })
};

class SocketService {

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
                socket = io.connect(`${host}/scatter`, { secure:true, reconnection: false, rejectUnauthorized : false });

                socket.on('connected', () => {
                    clearTimeout(reconnectionTimeout);
                    connected = true;
                    pair(true).then(() => {
                        resolve(true);
                    });
                });

                socket.on('paired', result => {
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
                });

                socket.on('rekey', () => {
                    appkey = 'appkey:'+random();
                    socket.emit('rekeyed', {data:{ appkey, origin:getOrigin() }, plugin});
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

                socket.on('disconnect', () => {
                    console.log('Disconnected');
                    connected = false;
                    socket = null;

                    // If bad disconnect, retry connection
                    reconnectOnAbnormalDisconnection();
                });

                socket.on('connect_error', () => {
                    allowReconnects = false;
                    resolve(false);
                });

                socket.on('rejected', reason => {
                    console.error('reason', reason);
                    reject(reason);
                });
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
                socket.emit('api', {data:request, plugin});
            });
        });
    }

}

const BLOCKCHAIN_SUPPORT = 'blockchain_support';

class Plugin {

    constructor(_name = '', _type = ''){
        this.name = _name;
        this.type = _type;
    }

}

const Blockchains = {
    EOS:'eos',
    ETH:'eth'
};

const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));

class Network {
    constructor(_name = '', _protocol = 'https', _host = '', _port = 0, blockchain = Blockchains.EOS, chainId = ''){
        this.name = _name;
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;
        this.blockchain = blockchain;
        this.chainId = chainId.toString();
    }

    static placeholder(){ return new Network(); }

    static fromJson(json){
        const p = Object.assign(Network.placeholder(), json);
        p.chainId = p.chainId ? p.chainId.toString() : '';
        return p;
    }

    static fromUnique(netString){
        const blockchain = netString.split(':')[0];
        if(netString.indexOf(':chain:') > -1)
            return new Network('', '', '','',blockchain, netString.replace(`${blockchain}:chain:`,''));

        const splits = netString.replace(`${blockchain}:`, '').split(':');
        return new Network('', '', splits[0], parseInt(splits[1] || 80), blockchain)
    }

    unique(){ return (`${this.blockchain}:` + (this.chainId.length ? `chain:${this.chainId}` : `${this.host}:${this.port}`)).toLowerCase(); }
    hostport(){ return `${this.host}${this.port ? ':' : ''}${this.port}` }
    fullhost(){ return `${this.protocol}://${this.host}${this.port ? ':' : ''}${this.port}` }
    clone(){ return Network.fromJson(JSON.parse(JSON.stringify(this))) }
    isEmpty(){ return !this.host.length; }
    isValid(){ return (this.protocol.length && this.host.length && this.port) || this.chainId.length }
}

const proxy = (dummy, handler) => new Proxy(dummy, handler);

class EOS extends Plugin {

    constructor(){
        super(Blockchains.EOS, BLOCKCHAIN_SUPPORT);
    }


    signatureProvider(...args){

        const throwIfNoIdentity = args[0];

        // Protocol will be deprecated.
        return (network, _eos, _options = {}) => {

            network = Network.fromJson(network);
            if(!network.isValid()) throw Error.noNetwork();
            const httpEndpoint = `${network.protocol}://${network.hostport()}`;

            const chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : options.chainId;

            // The proxy stands between the eosjs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            return proxy(_eos({httpEndpoint, chainId}), {
                get(eosInstance, method) {

                    let returnedFields = null;

                    return (...args) => {

                        if(args.find(arg => arg.hasOwnProperty('keyProvider'))) throw Error.usedKeyProvider();

                        // The signature provider which gets elevated into the user's Scatter
                        const signProvider = async signargs => {
                            throwIfNoIdentity();

                            const requiredFields = args.find(arg => arg.hasOwnProperty('requiredFields')) || {requiredFields:{}};
                            const payload = Object.assign(signargs, { blockchain:Blockchains.EOS, network, requiredFields:requiredFields.requiredFields });
                            const result = await SocketService.sendApiRequest({
                                type:'requestSignature',
                                payload
                            });

                            // No signature
                            if(!result) return null;

                            if(result.hasOwnProperty('signatures')){
                                // Holding onto the returned fields for the final result
                                returnedFields = result.returnedFields;

                                // Grabbing buf signatures from local multi sig sign provider
                                let multiSigKeyProvider = args.find(arg => arg.hasOwnProperty('signProvider'));
                                if(multiSigKeyProvider){
                                    result.signatures.push(multiSigKeyProvider.signProvider(signargs.buf, signargs.sign));
                                }

                                // Returning only the signatures to eosjs
                                return result.signatures;
                            }

                            return result;
                        };

                        // TODO: We need to check about the implications of multiple eosjs instances
                        return new Promise((resolve, reject) => {
                            _eos(Object.assign(_options, {httpEndpoint, signProvider, chainId}))[method](...args)
                                .then(result => {

                                    // Standard method ( ie. not contract )
                                    if(!result.hasOwnProperty('fc')){
                                        result = Object.assign(result, {returnedFields});
                                        resolve(result);
                                        return;
                                    }

                                    // Catching chained promise methods ( contract .then action )
                                    const contractProxy = proxy(result, {
                                        get(instance,method){
                                            if(method === 'then') return instance[method];
                                            return (...args) => {
                                                return new Promise(async (res, rej) => {
                                                    instance[method](...args).then(actionResult => {
                                                        res(Object.assign(actionResult, {returnedFields}));
                                                    }).catch(rej);
                                                })

                                            }
                                        }
                                    });

                                    resolve(contractProxy);
                                }).catch(error => reject(error));
                        })
                    }
                }
            }); // Proxy

        }
    }
}

// import ETH from './defaults/eth';

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor(){
        this.plugins = [];
        this.loadPlugins();
    }

    loadPlugins(){
        this.plugins.push(new EOS());
        // this.plugins.push(new ETH());
    }

    signatureProviders(){
        return this.plugins.filter(plugin => plugin.type === BLOCKCHAIN_SUPPORT);
    }

    supportedBlockchains(){
        return this.signatureProviders().map(plugin => name)
    }

    plugin(name){
        return this.plugins.find(plugin => plugin.name === name);
    }

    async endorsedNetworks(){
        return await Promise.all(this.signatureProviders().map(async plugin => await plugin.getEndorsedNetwork()));
    }
}

const PluginRepository = new PluginRepositorySingleton();

const throwNoAuth = () => {
    if(!holder.scatter.isExtension && !SocketService.isConnected())
        throw new Error('Connect and Authenticate first - scatter.connect( pluginName )');
};

const checkForPlugin = (resolve, tries = 0) => {
    if(tries > 20) return;
    if(holder.scatter.isExtension) return resolve(true);
    setTimeout(() => checkForPlugin(resolve, tries + 1), 100);
};

class Scatter {

    constructor(){
        const noIdFunc = () => { if(!this.identity) throw new Error('No Identity') };

        PluginRepository.signatureProviders().map(sigProvider => {
            this[sigProvider.name] = sigProvider.signatureProvider(noIdFunc);
        });

        this.isExtension = false;
        this.identity = null;
    }

    async isInstalled(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(false);
            }, 3000);

            Promise.race([
                checkForPlugin(resolve),
                SocketService.ping().then(found => {
                    console.log('found', found);
                    if(found) resolve(true);
                })
            ]);



            // Tries to set up Desktop Connection

        })
    }

    async connect(pluginName, options){
        return new Promise(resolve => {
            if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");

            // Setting options defaults
            options = Object.assign({initTimeout:10000, linkTimeout:30000}, options);

            // Auto failer
            setTimeout(() => {
                resolve(false);
            }, options.initTimeout);

            // Defaults to scatter extension if exists
            checkForPlugin(resolve);

            // Tries to set up Desktop Connection
            SocketService.init(pluginName, options.linkTimeout);
            SocketService.link().then(async authenticated => {
                if(!authenticated) return false;
                this.identity = await this.getIdentityFromPermissions();
                return resolve(true);
            });
        })
    }

    disconnect(){
        return SocketService.disconnect();
    }

    isConnected(){
        return SocketService.isConnected();
    }

    getVersion(){
        return SocketService.sendApiRequest({
            type:'getVersion',
            payload:{}
        });
    }

    getIdentity(requiredFields){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'getOrRequestIdentity',
            payload:{
                fields:requiredFields
            }
        }).then(id => {
            if(id) this.identity = id;
            return id;
        });
    }

    getIdentityFromPermissions(){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'identityFromPermissions',
            payload:{}
        }).then(id => {
            if(id) this.identity = id;
            return id;
        });
    }

    forgetIdentity(){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'forgetIdentity',
            payload:{}
        }).then(res => {
            this.identity = null;
            return res;
        });
    }

    authenticate(){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'authenticate',
            payload:{}
        });
    }

    getArbitrarySignature(publicKey, data, whatfor = '', isHash = false){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'requestArbitrarySignature',
            payload:{
                publicKey,
                data,
                whatfor,
                isHash
            }
        });
    }

    getPublicKey(blockchain){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'getPublicKey',
            payload:{ blockchain }
        });
    }

    linkAccount(publicKey, account, network){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'linkAccount',
            payload:{ publicKey, account, network }
        });
    }

    suggestNetwork(network){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'requestAddNetwork',
            payload:{
                network
            }
        });
    }

    requestSignature(payload){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'requestSignature',
            payload
        });
    }

    createTransaction(blockchain, actions, account, network){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'createTransaction',
            payload:{
                blockchain,
                actions,
                account,
                network
            }
        });
    }
}


class Holder {
    constructor(_scatter){
        this.scatter = _scatter;
    }
}


let holder = new Holder(new Scatter());
if(typeof window !== 'undefined') {

    // Catching extension instead of Desktop
    if(typeof document !== 'undefined'){
        const bindScatterClassic = () => {
            holder.scatter = window.scatter;
            holder.scatter.isExtension = true;
            holder.scatter.connect = () => new Promise(resolve => resolve(true));
        };

        if(typeof window.scatter !== 'undefined') bindScatterClassic();
        else document.addEventListener('scatterLoaded', () => bindScatterClassic());
    }

    if(!holder.scatter.isExtension)
        window.scatter = holder.scatter;
}

module.exports = holder;
