import PluginRepository from './plugins/PluginRepository';
import SocketService from './services/SocketService';
import StorageService from "./services/StorageService";
import Plugin from './plugins/Plugin';
import * as PluginTypes from './plugins/PluginTypes';
import { Blockchains } from './models/Blockchains';
import Network from './models/Network';

let socketService = SocketService;
let socketSetters = [];

let origin, foundScatter = false;

const throwNoAuth = () => {
    if(!holder.scatter.isExtension && !socketService.isConnected())
        throw new Error('Connect and Authenticate first - scatter.connect( pluginName )');
};

let extension;
const fallback = (resolve) => {
	const pollExtension = (callback, tries = 0) => {
		if(tries > 4) return callback(false);
		if(extension) return callback(true);
		setTimeout(() => {
			if(foundScatter) return;
			pollExtension(callback, tries + 1)
		}, 250);
	};

	pollExtension(foundExtension => {
		console.log('checked for extension', foundExtension);
		if(foundExtension && !foundScatter){
			holder.scatter = extension;
			holder.scatter.isExtension = true;
			// holder.scatter.connect = () => new Promise(resolve => resolve(true));
			foundScatter = true;
			return resolve(true);
		}
	});
};

let allowOAuth = false;
const OAuthFallback = (resolve, context, pluginName) => {
	const plugin = PluginRepository.plugin('oauth');
	if(!plugin) return resolve(false);


	context.isBridge = true;
	plugin.init(context, pluginName);
	socketService = plugin;

	socketSetters.map(x => x(socketService))


	resolve(true);
}

class Index {

    constructor(){
        this.isExtension = false;
        this.isBridge = false;
        this.identity = null;
    }

	loadPlugin(plugin){
		const noIdFunc = () => { if(!this.identity) throw new Error('No Identity') };
    	if(!plugin.isValid()) throw new Error(`${plugin.name} doesn't seem to be a valid ScatterJS plugin.`);


		PluginRepository.loadPlugin(plugin);


		if(plugin.isSignatureProvider()){
			socketSetters.push(plugin.setSocketService);
            this[plugin.name] = plugin.signatureProvider(noIdFunc, () => this.identity);
            this[plugin.name+'Hook'] = plugin.hookProvider;
        }

        else if (plugin.type === PluginTypes.OAUTH_FALLBACK){
			allowOAuth = true;
		}
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



            // Tries to set up Desktop Connection
            socketService.init(pluginName, options.linkTimeout);
            socketService.link().then(async authenticated => {

	            // Fallback to Extension
                if(!authenticated) {
	                OAuthFallback(resolve, this, pluginName);
                	return false;
                }

	            foundScatter = true;
                this.identity = await this.getIdentityFromPermissions();
                return resolve(true);
            });

	        fallback(resolve);
        })
    }

    disconnect(){
        return socketService.disconnect();
    }

    isConnected(){
        return socketService.isConnected();
    }

    isPaired(){
        return socketService.isPaired();
    }

    getVersion(){
        return socketService.sendApiRequest({
            type:'getVersion',
            payload:{}
        });
    }

	/***
     * Logs a user into your application
	 * @param requiredFields
	 * @returns {Promise<any>}
	 */
	login(requiredFields){
	    throwNoAuth();
	    return socketService.sendApiRequest({
		    type:'getOrRequestIdentity',
		    payload:{
			    fields:requiredFields
		    }
	    }).then(id => {
		    if(id) this.identity = id;
		    return id;
	    });
    }

	/***
     * Check is a user is logged in by tapping
     * their Scatter, but does not issue a popup
	 * @returns {Promise<any>}
	 */
	checkLogin(){
	    throwNoAuth();
	    return socketService.sendApiRequest({
		    type:'identityFromPermissions',
		    payload:{}
	    }).then(id => {
		    if(id) this.identity = id;
		    return id;
	    });
    }

	/***
     * Logs a user out of your application.
	 * @returns {Promise<any>}
	 */
	logout(){
	    throwNoAuth();
	    return socketService.sendApiRequest({
		    type:'forgetIdentity',
		    payload:{}
	    }).then(res => {
		    this.identity = null;
		    return res;
	    });
    }

	/***
     * Authenticates a user's login using
     * asymmetric encryption.
	 * @param nonce
	 */
	authenticate(nonce){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'authenticate',
            payload:{ nonce }
        });
    }




    getArbitrarySignature(publicKey, data){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'requestArbitrarySignature',
            payload:{
                publicKey,
                data
            }
        });
    }


    getPublicKey(blockchain){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'getPublicKey',
            payload:{ blockchain }
        });
    }

    linkAccount(account, network){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'linkAccount',
            payload:{ account, network }
        });
    }

    hasAccountFor(network){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'hasAccountFor',
            payload:{
                network
            }
        });
    }

    suggestNetwork(network){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'requestAddNetwork',
            payload:{
                network
            }
        });
    }

    requestTransfer(network, to, amount, options = {}){
        const payload = {network, to, amount, options};
        return socketService.sendApiRequest({
            type:'requestTransfer',
            payload
        });
    }

    requestSignature(payload){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'requestSignature',
            payload
        });
    }

    createTransaction(blockchain, actions, account, network){
        throwNoAuth();
        return socketService.sendApiRequest({
            type:'createTransaction',
            payload:{
                blockchain,
                actions,
                account,
                network
            }
        });
    }



    /******************************/
    /******** DEPRECATED **********/
    /******************************/

    // @deprecated - Use `login(requiredFields)`
	getIdentity(requiredFields){
		return this.login(requiredFields);
	}

	// @deprecated - Use `checkLogin()`
	getIdentityFromPermissions(){
		return this.checkLogin();
	}

	// @deprecated - Use `logout()`
	forgetIdentity(){
		return this.logout();
	}

}


class Holder {
    constructor(_scatter){
        this.scatter = _scatter;
    }

	plugins(...plugins) {
		if (!this.scatter.isExtension) {
			plugins.map(plugin => this.scatter.loadPlugin(plugin));
		}
	}
}


let holder = new Holder(new Index());
if(typeof window !== 'undefined') {

    // Catching extension instead of Desktop
    if(typeof document !== 'undefined'){
        const bindScatterClassic = () => {
	        extension = window.scatter;
            // holder.scatter = window.scatter;
            // holder.scatter.isExtension = true;
            // holder.scatter.connect = () => new Promise(resolve => resolve(true));
        };

        if(typeof window.scatter !== 'undefined') bindScatterClassic();
        else document.addEventListener('scatterLoaded', () => bindScatterClassic());
    }

    window.ScatterJS = holder;
}

holder.Plugin = Plugin;
holder.PluginTypes = PluginTypes;
holder.Blockchains = Blockchains;
holder.Network = Network;
holder.SocketService = socketService;
holder.StorageService = StorageService;
export {Plugin, PluginTypes, Blockchains, Network, SocketService, StorageService};
export default holder;


