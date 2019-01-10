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
	authenticate:'authenticate',
	getArbitrarySignature:'getArbitrarySignature',
	getPublicKey:'getPublicKey',
	linkAccount:'linkAccount',
	hasAccountFor:'hasAccountFor',
	suggestNetwork:'suggestNetwork',
	requestTransfer:'requestTransfer',
	requestSignature:'requestSignature',
	createTransaction:'createTransaction',
};

const ALTERNATES = {
	[WALLET_METHODS.getIdentity]:'login',
	[WALLET_METHODS.forgetIdentity]:'logout',
	[WALLET_METHODS.getIdentityFromPermissions]:'checkLogin'
};


export default class WalletInterface {

	constructor(identifier, methods, context){
		const unavailable = method => () => {
			throw new Error(`${identifier} does not support the ${method} method.`);
		};

		const bindToContext = (method, key) => {
			if(typeof context[key] === 'undefined'){
				context[key] = method ? method : unavailable(key);
			}
			if(ALTERNATES[key] && typeof context[ALTERNATES[key]] === 'undefined'){
				context[ALTERNATES[key]] = method ? context[key] : unavailable(key);
			}
		};

		Object.keys(WALLET_METHODS).map(key => bindToContext(methods[key], key));
	}

}