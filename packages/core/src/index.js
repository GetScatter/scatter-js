import PluginRepository from './plugins/PluginRepository';
import SocketService from './services/SocketService';
import Plugin from './plugins/Plugin';
import * as PluginTypes from './plugins/PluginTypes';
import { Blockchains } from './models/Blockchains';
import Network from './models/Network';
import WalletInterface, {WALLET_METHODS} from './models/WalletInterface';

let origin;

const checkForExtension = (resolve, tries = 0) => {
    if(tries > 5) return;
    if(holder.scatter.isExtension) return resolve(true);
    setTimeout(() => checkForExtension(resolve, tries + 1), 100);
};

const EVENTS = {
	Disconnected:'dced',
	LoggedOut:'logout',
};

class Index {

	constructor(){
		this.isExtension = false;
		this.identity = null;
		this.network = null;

		const setAndReturnId = (id, forget) => {
			if(id || forget) this.identity = id;
			return forget || id;
		};

		new WalletInterface('ScatterSockets', {
			[WALLET_METHODS.disconnect]:() => SocketService.disconnect(),
			[WALLET_METHODS.isConnected]:() => SocketService.isConnected(),
			[WALLET_METHODS.isPaired]:() => SocketService.isPaired(),
			[WALLET_METHODS.addEventHandler]:(handler, key = null) => SocketService.addEventHandler(handler, key),
			[WALLET_METHODS.removeEventHandler]:(key = null) => SocketService.removeEventHandler(key),
			[WALLET_METHODS.listen]:(handler) => SocketService.addEventHandler(handler),
			[WALLET_METHODS.getVersion]:() => SocketService.sendApiRequest({ type:'getVersion', payload:{} }),
			[WALLET_METHODS.getIdentity]:(requiredFields) => SocketService.sendApiRequest({
				type:'getOrRequestIdentity',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[this.network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getIdentityFromPermissions]:() => SocketService.sendApiRequest({
				type:'identityFromPermissions',
				payload:{}
			}).then(setAndReturnId),
			[WALLET_METHODS.forgetIdentity]:() => SocketService.sendApiRequest({
				type:'forgetIdentity',
				payload:{}
			}).then(res => setAndReturnId(null, res)),
			[WALLET_METHODS.authenticate]:(nonce, data = null, publicKey = null) => SocketService.sendApiRequest({
				type:'authenticate',
				payload:{ nonce, data, publicKey }
			}),
			[WALLET_METHODS.getArbitrarySignature]:(publicKey, data) => SocketService.sendApiRequest({
				type:'requestArbitrarySignature',
				payload:{ publicKey, data }
			}),
			[WALLET_METHODS.getPublicKey]:(blockchain) => SocketService.sendApiRequest({
				type:'getPublicKey',
				payload:{ blockchain }
			}),
			[WALLET_METHODS.linkAccount]:(account, network) => SocketService.sendApiRequest({
				type:'linkAccount',
				payload:{ account, network:network || this.network }
			}),
			[WALLET_METHODS.hasAccountFor]:(network) => SocketService.sendApiRequest({
				type:'hasAccountFor',
				payload:{ network:network || this.network }
			}),
			[WALLET_METHODS.suggestNetwork]:(network) => SocketService.sendApiRequest({
				type:'requestAddNetwork',
				payload:{ network:network || this.network }
			}),
			[WALLET_METHODS.requestTransfer]:(network, to, amount, options = {}) => SocketService.sendApiRequest({
				type:'requestTransfer',
				payload:{network:network || this.network, to, amount, options}
			}),
			[WALLET_METHODS.requestSignature]:(payload) => SocketService.sendApiRequest({
				type:'requestSignature',
				payload
			}),
			[WALLET_METHODS.createTransaction]:(blockchain, actions, account, network) => SocketService.sendApiRequest({
				type:'createTransaction',
				payload:{ blockchain, actions, account, network:network || this.network }
			}),

		}, this);
	}

	loadPlugin(plugin){
		const noIdFunc = () => { if(!this.identity) throw new Error('No Identity') };
		if(!plugin.isValid()) throw new Error(`${plugin.name} doesn't seem to be a valid ScatterJS plugin.`);

		PluginRepository.loadPlugin(plugin);

		if(plugin.isSignatureProvider()){
			this[plugin.name] = plugin.signatureProvider(noIdFunc, () => this.identity);
			this[plugin.name+'Hook'] = plugin.hookProvider;
		}
	}

	async connect(pluginName, options){
		this.network = options.hasOwnProperty('network') ? options.network : null;

		return new Promise(resolve => {
			if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
			options = Object.assign({initTimeout:10000, linkTimeout:30000}, options);
			setTimeout(() => resolve(false), options.initTimeout);

			// Tries to set up Desktop Connection
			SocketService.init(pluginName, options.linkTimeout);
			SocketService.link().then(async authenticated => {
				if(!authenticated) return false;
				this.addEventHandler((t,x) => this.eventHandler(t,x), 'internal');
				this.identity = await this.getIdentityFromPermissions();
				return resolve(true);
			});

			// Defaults to scatter extension if exists
			checkForExtension(resolve);
		})
	}

	async eventHandler(event, payload){
		switch(event){
			case EVENTS.Disconnected:
				this.identity = null;
				break;
			case EVENTS.LoggedOut:
				this.identity = await this.getIdentityFromPermissions();
				break;
		}
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

	connect(...params){
    	return this.scatter.connect(...params);
	}
}


let holder = new Holder(new Index());
if(typeof window !== 'undefined') {

    // Catching extension instead of Desktop
    if(typeof document !== 'undefined'){
        const bindScatterClassic = () => {
            holder.scatter = window.scatter;
	        new WalletInterface('Extension', window.scatter, holder.scatter);
            holder.scatter.isExtension = true;
            holder.scatter.connect = () => new Promise(resolve => resolve(true));
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
holder.SocketService = SocketService;
holder.EVENTS = EVENTS;
export {Plugin, PluginTypes, Blockchains, Network, SocketService, EVENTS};
export default holder;


