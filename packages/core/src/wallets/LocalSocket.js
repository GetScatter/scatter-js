import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import * as PluginTypes from "../plugins/PluginTypes";
import SocketService from "../services/SocketService";
import {EVENTS, WALLET_METHODS} from "../index";


export default class LocalSocket extends Plugin {
	constructor(context, holderFns){
		super('LocalSocket', PluginTypes.WALLET_SUPPORT);
		this.name = 'LocalSocket';
		this.context = context;
		this.holderFns = holderFns;
	}

	connect(pluginName, options = {}){
		return new Promise(resolve => {
			if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
			options = Object.assign({linkTimeout:3000, allowHttp:true}, options);

			// Tries to set up LocalSocket Connection
			this.socketService = new SocketService(pluginName, options.linkTimeout);
			this.socketService.link(options.allowHttp).then(async authenticated => {
				if(!authenticated) return resolve(false);
				this.holderFns.get().isExtension = false;
				if(!this.holderFns.get().wallet) this.holderFns.get().wallet = this.name;
				return resolve(this.socketService);
			});
		})
	}

	async runAfterInterfacing(){
		this.holderFns.get().addEventHandler((t,x) => this.eventHandler(t,x), 'internal');
		this.holderFns.get().identity = await this.holderFns.get().getIdentityFromPermissions();
		return true;
	}

	static getMethods(context){
		const setAndReturnId = (id, forget) => {
			if(id || forget) context.holderFns.get().identity = id;
			return forget || id;
		};

		return {
			[WALLET_METHODS.disconnect]:() => context.socketService.disconnect(),
			[WALLET_METHODS.isConnected]:() => context.socketService.isConnected(),
			[WALLET_METHODS.isPaired]:() => context.socketService.isPaired(),
			[WALLET_METHODS.addEventHandler]:(handler, key = null) => context.socketService.addEventHandler(handler, key),
			[WALLET_METHODS.removeEventHandler]:(key = null) => context.socketService.removeEventHandler(key),
			[WALLET_METHODS.listen]:(handler) => context.socketService.addEventHandler(handler),
			[WALLET_METHODS.getVersion]:() => context.socketService.sendApiRequest({ type:'getVersion', payload:{} }),
			[WALLET_METHODS.getIdentity]:(requiredFields) => context.socketService.sendApiRequest({
				type:'getOrRequestIdentity',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[context.holderFns.get().network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getAllAccountsFor]:(requiredFields) => context.socketService.sendApiRequest({
				type:'getAllAccountsFor',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[context.holderFns.get().network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getIdentityFromPermissions]:() => context.socketService.sendApiRequest({
				type:'identityFromPermissions',
				payload:{}
			}).then(setAndReturnId),
			[WALLET_METHODS.forgetIdentity]:() => context.socketService.sendApiRequest({
				type:'forgetIdentity',
				payload:{}
			}).then(res => setAndReturnId(null, res)),
			[WALLET_METHODS.updateIdentity]:({name, kyc}) => context.socketService.sendApiRequest({
				type:'updateIdentity',
				payload:{name, kyc}
			}).then(id => id ? setAndReturnId(id) : null),
			[WALLET_METHODS.authenticate]:(nonce, data = null, publicKey = null) => context.socketService.sendApiRequest({
				type:'authenticate',
				payload:{ nonce, data, publicKey }
			}),
			[WALLET_METHODS.getArbitrarySignature]:(publicKey, data) => context.socketService.sendApiRequest({
				type:'requestArbitrarySignature',
				payload:{ publicKey, data }
			}),
			[WALLET_METHODS.getPublicKey]:(blockchain) => context.socketService.sendApiRequest({
				type:'getPublicKey',
				payload:{ blockchain }
			}),
			[WALLET_METHODS.linkAccount]:(account, network) => context.socketService.sendApiRequest({
				type:'linkAccount',
				payload:{ account, network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.hasAccountFor]:(network) => context.socketService.sendApiRequest({
				type:'hasAccountFor',
				payload:{ network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.suggestNetwork]:(network) => context.socketService.sendApiRequest({
				type:'requestAddNetwork',
				payload:{ network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.requestTransfer]:(network, to, amount, options = {}) => context.socketService.sendApiRequest({
				type:'requestTransfer',
				payload:{network:network || context.holderFns.get().network, to, amount, options}
			}),
			[WALLET_METHODS.getAvatar]:() => context.socketService.sendApiRequest({
				type:'getAvatar',
				payload:{}
			}),
			[WALLET_METHODS.requestSignature]:(payload) => context.socketService.sendApiRequest({
				type:'requestSignature',
				payload
			}),
			[WALLET_METHODS.createTransaction]:(blockchain, actions, account, network) => context.socketService.sendApiRequest({
				type:'createTransaction',
				payload:{ blockchain, actions, account, network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.addToken]:(token, network) => context.socketService.sendApiRequest({
				type:'addToken',
				payload:{ token, network:network || context.holderFns.get().network }
			}),
		}
	}

	methods(){
		return LocalSocket.getMethods(this);
	}

	async eventHandler(event, payload){
		switch(event){
			case EVENTS.Disconnected:
				this.holderFns.get().identity = null;
				break;
			case EVENTS.LoggedOut:
				this.holderFns.get().identity = await this.holderFns.get().getIdentityFromPermissions();
				break;
		}
	}
}