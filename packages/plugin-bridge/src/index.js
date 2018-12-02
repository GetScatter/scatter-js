import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
} from 'scatterjs-core';

import DOM from './dom';

let context;
let authenticated = false;

export default class ScatterBridge extends Plugin {

    constructor(){
        super('oauth', PluginTypes.OAUTH_FALLBACK);
    }

    bindContext(c){
    	context = c;
	    DOM.injectCss();
    }

	async sendApiRequest(data){
    	if(!authenticated) {
    		console.log('data', data, context);
    		if(typeof this[data.type] !== 'function') return false;
    		return this[data.type](data);
	    }
		console.log('sendApiRequest', data);
	}

	disconnect(){
		console.log('isPaired');
	}

	isConnected(){
		console.log('isPaired');
		return true;
	}

	isPaired(){
    	console.log('isPaired');
	}

	async getOrRequestIdentity(data){
    	if(context.identity) return context.identity;

    	DOM.loginPopup();

		console.log('getOrRequestIdentity', data)
	}
}

if(typeof window !== 'undefined') {
	window.ScatterBridge = ScatterBridge;
}

