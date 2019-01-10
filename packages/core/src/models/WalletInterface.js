export const METHODS = {
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
	[METHODS.getIdentity]:'login',
	[METHODS.forgetIdentity]:'logout',
	[METHODS.getIdentityFromPermissions]:'checkLogin'
};


export default class WalletInterface {

	constructor(identifier, methods, context){
		const unavailable = method => () => {
			throw new Error(`${identifier} does not support the ${method} method.`);
		};

		const bindToContext = (method, key) => {
			console.log('key', key, method);
			if(method){
				context[key] = method;
				if(ALTERNATES[key]) context[ALTERNATES[key]] = method;
			} else {
				context[key] = unavailable(method);
				if(ALTERNATES[key]) context[ALTERNATES[key]] = unavailable(method);
			}
		}

		Object.keys(METHODS).map(key => bindToContext(methods[key], key));
	}

}