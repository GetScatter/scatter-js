import io from 'socket.io-client';
import getRandomValues from 'get-random-values';
import Eos from 'eosjs';
import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc';
import WebsocketSubprovider from 'web3-provider-engine/subproviders/websocket';
import HookedWalletSubprovider from 'web3-provider-engine/subproviders/hooked-wallet';
import ethUtil from 'ethereumjs-util';
import 'isomorphic-fetch';

class StorageService {

    constructor(){}

    static setNonce(nonce){
        window.localStorage.setItem('nonce', nonce);
    };

    static getNonce() {
        return window.localStorage.getItem('nonce');
    }

    static removeNonce() {
        return window.localStorage.removeItem('nonce');
    }

    static setAppKey(nonce){
        window.localStorage.setItem('appkey', nonce);
    };

    static getAppKey() {
        return window.localStorage.getItem('appkey');
    }

    static removeAppKey() {
        return window.localStorage.removeItem('appkey');
    }
}

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



class SocketService {

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
                    console.log('Disconnected');
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

let ethNetwork;

class ETH extends Plugin {

    constructor(){
        super(Blockchains.ETH, BLOCKCHAIN_SUPPORT);
    }

    signatureProvider(...args){

        return (_network, _web3) => {
            ethNetwork = Network.fromJson(_network);
            if(!ethNetwork.isValid()) throw Error.noNetwork();

            const rpcUrl = `${ethNetwork.protocol}://${ethNetwork.hostport()}`;

            const engine = new ProviderEngine();
            const web3 = new _web3(engine);

            const walletSubprovider = new HookedWalletSubprovider(new ScatterEthereumWallet());
            engine.addProvider(walletSubprovider);

            if(ethNetwork.protocol.indexOf('http') > -1) engine.addProvider(new RpcSubprovider({rpcUrl}));
            else engine.addProvider(new WebsocketSubprovider({rpcUrl}));

            engine.start();

            return web3;
        }
    }
}



class ScatterEthereumWallet {
    constructor(){
        this.getAccounts = this.getAccounts.bind(this);
        this.signTransaction = this.signTransaction.bind(this);
    }

    async getAccounts(callback) {
        const result = await SocketService.sendApiRequest({
            type:'identityFromPermissions',
            payload:{}
        });
        const accounts = !result ? [] : result.accounts
            .filter(account => account.blockchain === Blockchains.ETH)
            .map(account => account.address);

        callback(null, accounts);
        return accounts;
    }

    async signTransaction(transaction){
        if(!ethNetwork) throw Error.noNetwork();

        // Basic settings
        if (transaction.gas !== undefined) transaction.gasLimit = transaction.gas;
        transaction.value = transaction.value || '0x00';
        if(transaction.hasOwnProperty('data')) transaction.data = ethUtil.addHexPrefix(transaction.data);

        // Required Fields
        const requiredFields = transaction.hasOwnProperty('requiredFields') ? transaction.requiredFields : {};

        // Contract ABI
        const abi = transaction.hasOwnProperty('abi') ? transaction.abi : null;
        if(!abi && transaction.hasOwnProperty('data'))
            throw Error.signatureError('no_abi', 'You must provide a JSON ABI along with your transaction so that users can read the contract');

        const payload = Object.assign(transaction, { blockchain:Blockchains.ETH, network:ethNetwork, requiredFields });
        const {signatures, returnedFields} = await SocketService.sendApiRequest({
            type:'requestSignature',
            payload
        });

        if(transaction.hasOwnProperty('fieldsCallback'))
            transaction.fieldsCallback(returnedFields);

        return signatures[0];
    }
}

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
        this.plugins.push(new ETH());
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
    // Check if extension has already been loaded
    if(typeof window.scatter !== 'undefined') {
        holder.scatter = window.scatter;
        holder.scatter.isExtension = true;
        holder.scatter.connect = () => new Promise(resolve => resolve(true));
    }
    window.scatter = holder.scatter;
}

// Catching extension instead of Desktop
if(typeof document !== 'undefined'){
    document.addEventListener('scatterLoaded', scatterExtension => {
        holder.scatter = window.scatter;
        holder.scatter.isExtension = true;
        holder.scatter.connect = () => new Promise(resolve => resolve(true));
    });
}

export default holder;
