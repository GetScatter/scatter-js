import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import * as PluginTypes from "../plugins/PluginTypes";
import SocketService from "../services/SocketService";
import {EVENTS, WALLET_METHODS} from "../index";


export default class Desktop extends Plugin {
	constructor(context){
		super(Blockchains.EOS, PluginTypes.WALLET_SUPPORT);
		this.name = 'ScatterSockets';
		this.context = context;
	}

	connect(pluginName, options = {}){
		return new Promise(resolve => {
			if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
			options = Object.assign({initTimeout:10000, linkTimeout:30000}, options);


			// Tries to set up Desktop Connection
			SocketService.init(pluginName, options.linkTimeout);
			SocketService.link().then(async authenticated => {
				if(!authenticated) return false;
				this.context.isExtension = false;
				return resolve(true);
			});
		})
	}

	async runAfterInterfacing(){
		this.context.addEventHandler((t,x) => this.eventHandler(t,x), 'internal');
		this.context.identity = await this.context.getIdentityFromPermissions();
		return true;
	}

	methods(){
		const setAndReturnId = (id, forget) => {
			if(id || forget) this.context.identity = id;
			return forget || id;
		};

		return {
			[WALLET_METHODS.disconnect]:() => SocketService.disconnect(),
			[WALLET_METHODS.isConnected]:() => SocketService.isConnected(),
			[WALLET_METHODS.isPaired]:() => SocketService.isPaired(),
			[WALLET_METHODS.addEventHandler]:(handler, key = null) => SocketService.addEventHandler(handler, key),
			[WALLET_METHODS.removeEventHandler]:(key = null) => SocketService.removeEventHandler(key),
			[WALLET_METHODS.listen]:(handler) => SocketService.addEventHandler(handler),
			[WALLET_METHODS.getVersion]:() => SocketService.sendApiRequest({ type:'getVersion', payload:{} }),
			[WALLET_METHODS.getIdentity]:(requiredFields) => SocketService.sendApiRequest({
				type:'getOrRequestIdentity',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[this.context.network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getIdentityFromPermissions]:() => SocketService.sendApiRequest({
				type:'identityFromPermissions',
				payload:{}
			}).then(setAndReturnId),
			[WALLET_METHODS.forgetIdentity]:() => SocketService.sendApiRequest({
				type:'forgetIdentity',
				payload:{}
			}).then(res => setAndReturnId(null, res)),
			[WALLET_METHODS.changeIdentity]:({name, kyc}) => SocketService.sendApiRequest({
				type:'changeIdentity',
				payload:{name, kyc}
			}).then(setAndReturnId),
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
				payload:{ account, network:network || this.context.network }
			}),
			[WALLET_METHODS.hasAccountFor]:(network) => SocketService.sendApiRequest({
				type:'hasAccountFor',
				payload:{ network:network || this.context.network }
			}),
			[WALLET_METHODS.suggestNetwork]:(network) => SocketService.sendApiRequest({
				type:'requestAddNetwork',
				payload:{ network:network || this.context.network }
			}),
			[WALLET_METHODS.requestTransfer]:(network, to, amount, options = {}) => SocketService.sendApiRequest({
				type:'requestTransfer',
				payload:{network:network || this.context.network, to, amount, options}
			}),
			[WALLET_METHODS.requestSignature]:(payload) => SocketService.sendApiRequest({
				type:'requestSignature',
				payload
			}),
			[WALLET_METHODS.createTransaction]:(blockchain, actions, account, network) => SocketService.sendApiRequest({
				type:'createTransaction',
				payload:{ blockchain, actions, account, network:network || this.context.network }
			}),
			[WALLET_METHODS.addToken]:(token, network) => SocketService.sendApiRequest({
				type:'addToken',
				payload:{ token, network:network || this.context.network }
			}),
		}
	}

	async eventHandler(event, payload){
		switch(event){
			case EVENTS.Disconnected:
				this.context.identity = null;
				break;
			case EVENTS.LoggedOut:
				this.context.identity = await this.context.getIdentityFromPermissions();
				break;
		}
	}
}