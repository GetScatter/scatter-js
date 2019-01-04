import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService,
	StorageService
} from 'scatterjs-core';

import DOM from './dom';

let context, plugin;
let authenticated = false;

const setToken = token => window.localStorage.setItem('token', token);
const getToken = () => window.localStorage.getItem('token');
const removeToken = () => window.localStorage.removeItem('token');
const getOrigin = () => SocketService.getOrigin() || plugin;

const formatRequest = (request) => {
	request.id = SocketService.random();
	request.origin = getOrigin();

	request.appkey = 'bridge';

	// Nonce used to authenticate this request
	request.nonce = StorageService.getNonce() || 0;
	// Next nonce used to authenticate the next request
	const nextNonce = SocketService.random();
	request.nextNonce = SocketService.sha256(nextNonce);
	StorageService.setNonce(nextNonce);

	return request;
}

const baseUrl = 'http://localhost:6546/';
const POST = (route, data) => {
	return fetch(`${baseUrl}${route}`, {
		method:'POST',
		headers: {
			'Access-Control-Allow-Origin':location.host,
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization':getToken()
		},
		body: JSON.stringify(formatRequest(data)),
	}).then(x => x.json())
};

const setIdentity = identity => {
	context.identity = identity;
}

const fromPermissions = async () => {
	const identity = await POST('identityFromPermissions', {}).catch(err => null);
	console.log('ide', identity);
	if(identity && !identity.hasOwnProperty('isError')) {
		setIdentity(identity);
		return true;
	}
	return false;
};

export default class ScatterBridge extends Plugin {

    constructor(){
        super('oauth', PluginTypes.OAUTH_FALLBACK);
    }

    init(c, p){
    	context = c;
	    plugin = p;
	    // DOM.injectCss();
	    fromPermissions();
    }

	async sendApiRequest(data){
    	if(!authenticated) {
    		console.log('data', data, context);

    		if(data.type === 'getOrRequestIdentity') return this.getOrRequestIdentity(data);
    		else {
			    if(!context.identity) return null;

			    return POST(data.type, data).then(res => {
				    console.log('res', res);
				    return res;
			    }).catch(err => console.log('err', err));
		    }

	    }
	}

	disconnect(){
		// console.log('isPaired');
		return true;
	}

	isConnected(){
		// console.log('isPaired');
		return true;
	}

	isPaired(){
    	// console.log('isPaired');
		return true;
	}

	async getOrRequestIdentity(data){
    	return new Promise(async (resolve, reject) => {
		    // if(context.identity) return resolve(context.identity);
		    if(getToken() && await fromPermissions()) return resolve(context.identity);

		    console.log('data.payload.fields', data.payload.fields);
		    DOM.loginPopup(getOrigin(), data.payload.fields).then(async ({identity, token}) => {
			    if(!identity || !token) return removeToken();
			    setToken(token);
			    resolve(identity);
		    })
	    })
	}

}

if(typeof window !== 'undefined') {
	window.ScatterBridge = ScatterBridge;
}

