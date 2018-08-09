import SocketService from './services/SocketService';
import PluginRepository from './plugins/PluginRepository'
import "isomorphic-fetch"

let origin;

const throwNoAuth = () => {
    if(!holder.scatter.isExtension && !SocketService.isConnected())
        throw new Error('Connect and Authenticate first ( scatter.connect(pluginName, keyGetter, keySetter )');
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
            ])



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
if(typeof window !== 'undefined') window.scatter = holder.scatter;

// Catching extension instead of Desktop
if(typeof document !== 'undefined'){
    document.addEventListener('scatterLoaded', scatterExtension => {
        holder.scatter = window.scatter;
        holder.scatter.isExtension = true;
        holder.scatter.connect = () => new Promise(resolve => resolve(true));
    });
}

export default holder;


