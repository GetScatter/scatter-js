import SocketService from './services/SocketService';
import PluginRepository from './plugins/PluginRepository'

let origin;

const throwNoAuth = () => {
    if(!scatter.hasOwnProperty('isExtension') && !SocketService.isAuthenticated())
        throw new Error('Connect and Authenticate first ( scatter.connect(pluginName, keyGetter, keySetter )');
};

class Scatter {

    constructor(){
        const noIdFunc = () => { if(!this.identity) throw new Error('No Identity') };

        PluginRepository.signatureProviders().map(sigProvider => {
            this[sigProvider.name] = sigProvider.signatureProvider(noIdFunc);
        });

        this.identity = null;


    }

    async connect(pluginName, keyGetter = null, keySetter = null){
        return new Promise(resolve => {
            if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");

            // Auto failer
            setTimeout(() => {
                resolve(false);
            }, 5000);

            // Defaults to scatter extension if exists
            const checkForPlugin = (tries) => {
                if(tries > 20) return;
                if(scatter.hasOwnProperty('isExtension')) return resolve(true);
                setTimeout(() => checkForPlugin(tries + 1), 100);
            };

            checkForPlugin();

            // Tries to set up Desktop Connection
            SocketService.init(pluginName, keyGetter, keySetter);
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
        });
    }

    getIdentityFromPermissions(){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'identityFromPermissions',
            payload:{}
        });
    }

    forgetIdentity(){
        throwNoAuth();
        return SocketService.sendApiRequest({
            type:'forgetIdentity',
            payload:{}
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



let scatter = new Scatter();

// For nodejs
export default scatter;

// For browsers
if(typeof window !== 'undefined') window.scatter = scatter;

// Catching extension instead of Desktop
if(typeof document !== 'undefined'){
    document.addEventListener('scatterLoaded', scatterExtension => {
        scatter = window.scatter;
        scatter.isExtension = true;
    });
}


