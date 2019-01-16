export const WALLET_METHODS = {
	disconnect:'disconnect',
	isConnected:'isConnected',
	isPaired:'isPaired',
	addEventHandler:'addEventHandler',
	removeEventHandler:'removeEventHandler',
	listen:'listen',

	getVersion:'getVersion',
	getIdentity:'getIdentity',
	getIdentityFromPermissions:'getIdentityFromPermissions',
	forgetIdentity:'forgetIdentity',
	updateIdentity:'updateIdentity',
	authenticate:'authenticate',
	getArbitrarySignature:'getArbitrarySignature',
	getPublicKey:'getPublicKey',
	linkAccount:'linkAccount',
	hasAccountFor:'hasAccountFor',
	suggestNetwork:'suggestNetwork',
	requestTransfer:'requestTransfer',
	requestSignature:'requestSignature',
	createTransaction:'createTransaction',
	addToken:'addToken',
};

const ALTERNATES = {
	[WALLET_METHODS.getIdentity]:'login',
	[WALLET_METHODS.forgetIdentity]:'logout',
	[WALLET_METHODS.getIdentityFromPermissions]:'checkLogin'
};


export default class WalletInterface {

	constructor(identifier, methods, context){
		const unavailable = method => () => { throw new Error(`${identifier} does not support the ${method} method.`); };

		const bindToContext = (method, key) => {
			if(typeof context[key] === 'undefined'){
				context[key] = method ? method : unavailable(key);
			}
			if(ALTERNATES[key] && typeof context[ALTERNATES[key]] === 'undefined'){
				context[ALTERNATES[key]] = context[key] ? context[key] : unavailable(key);
			}
		};

		Object.keys(WALLET_METHODS).map(key => bindToContext(methods[key], key));
	}

	static bindBasics(context){

		context.account = (blockchain) => {
			if(!context.identity) return;
			if(!context.identity.accounts) return;
			return context.identity.accounts.find(x => x.blockchain === blockchain);
		}

	}

}