import {WALLET_METHODS} from "../models/WalletInterface";

export default class WalletAPI {
	static getMethods(context, wallet){
		const setAndReturnId = (id, forget) => {
			if(id || forget) context.holderFns.get().identity = id;
			return forget || id;
		};

		return {
			[WALLET_METHODS.disconnect]:() => wallet.disconnect(),
			[WALLET_METHODS.isConnected]:() => wallet.isConnected(),
			[WALLET_METHODS.isPaired]:() => wallet.isPaired(),
			[WALLET_METHODS.addEventHandler]:(handler, key = null) => wallet.addEventHandler(handler, key),
			[WALLET_METHODS.removeEventHandler]:(key = null) => wallet.removeEventHandler(key),
			[WALLET_METHODS.listen]:(handler) => wallet.addEventHandler(handler),
			[WALLET_METHODS.getVersion]:() => wallet.sendApiRequest({ type:'getVersion', payload:{} }),
			[WALLET_METHODS.getIdentity]:(requiredFields) => wallet.sendApiRequest({
				type:'getOrRequestIdentity',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[context.holderFns.get().network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getAllAccountsFor]:(requiredFields) => wallet.sendApiRequest({
				type:'getAllAccountsFor',
				payload:{ fields:requiredFields ? requiredFields : {accounts:[context.holderFns.get().network]} }
			}).then(setAndReturnId),
			[WALLET_METHODS.getIdentityFromPermissions]:() => wallet.sendApiRequest({
				type:'identityFromPermissions',
				payload:{}
			}).then(setAndReturnId),
			[WALLET_METHODS.forgetIdentity]:() => wallet.sendApiRequest({
				type:'forgetIdentity',
				payload:{}
			}).then(res => setAndReturnId(null, res)),
			[WALLET_METHODS.updateIdentity]:({name, kyc}) => wallet.sendApiRequest({
				type:'updateIdentity',
				payload:{name, kyc}
			}).then(id => id ? setAndReturnId(id) : null),
			[WALLET_METHODS.authenticate]:(nonce, data = null, publicKey = null) => wallet.sendApiRequest({
				type:'authenticate',
				payload:{ nonce, data, publicKey }
			}),
			[WALLET_METHODS.getArbitrarySignature]:(publicKey, data) => wallet.sendApiRequest({
				type:'requestArbitrarySignature',
				payload:{ publicKey, data }
			}),
			[WALLET_METHODS.getPublicKey]:(blockchain) => wallet.sendApiRequest({
				type:'getPublicKey',
				payload:{ blockchain }
			}),
			[WALLET_METHODS.linkAccount]:(account, network) => wallet.sendApiRequest({
				type:'linkAccount',
				payload:{ account, network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.hasAccountFor]:(network) => wallet.sendApiRequest({
				type:'hasAccountFor',
				payload:{ network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.suggestNetwork]:(network) => wallet.sendApiRequest({
				type:'requestAddNetwork',
				payload:{ network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.requestTransfer]:(network, to, amount, options = {}) => wallet.sendApiRequest({
				type:'requestTransfer',
				payload:{network:network || context.holderFns.get().network, to, amount, options}
			}),
			[WALLET_METHODS.getAvatar]:() => wallet.sendApiRequest({
				type:'getAvatar',
				payload:{}
			}),
			[WALLET_METHODS.requestSignature]:(payload) => wallet.sendApiRequest({
				type:'requestSignature',
				payload
			}),
			[WALLET_METHODS.createTransaction]:(blockchain, actions, account, network) => wallet.sendApiRequest({
				type:'createTransaction',
				payload:{ blockchain, actions, account, network:network || context.holderFns.get().network }
			}),
			[WALLET_METHODS.addToken]:(token, network) => wallet.sendApiRequest({
				type:'addToken',
				payload:{ token, network:network || context.holderFns.get().network }
			}),
		}
	}
}
