import SocketService from './services/SocketService';
import PluginRepository from './plugins/PluginRepository'

let origin;

const throwNoAuth = () => {
    if(!SocketService.isAuthenticated())
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

    async connect(pluginName, keyGetter, keySetter, origin = ''){
        if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
        if(!keyGetter || typeof keySetter !== 'function') throw new Error("You must inject a Key Getter to be able to provide RSA keys");
        if(!keySetter || typeof keySetter !== 'function') throw new Error("You must inject a Key Setter to be able to be given RSA keys");

        // origin = typeof location !== undefined && location.host && location.host !== 'localhost' ? location.host : origin;
        // console.log('origin', origin);

        SocketService.init(pluginName, keyGetter, keySetter);
        return SocketService.link().then(async authenticated => {
           if(!authenticated) return false;
           this.identity = await this.getIdentityFromPermissions();
           return true;
        });
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

const scatter = new Scatter();
if(typeof window !== 'undefined') window.scatter = scatter;
export default scatter;
