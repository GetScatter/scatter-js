import * as PluginTypes from "../plugins/PluginTypes";
import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import WalletInterface, {WALLET_METHODS} from "../models/WalletInterface";


let isAvailable = false;
if(typeof window !== 'undefined' && typeof document !== 'undefined') {
	document.addEventListener('scatterLoaded', () => isAvailable = true);
}

/*
holder.scatter = window.scatter;
new WalletInterface('Extension', window.scatter, holder.scatter);
holder.scatter.isExtension = true;
holder.scatter.connect = () => new Promise(resolve => resolve(true));
 */

const pollExistence = async (resolver = null, tries = 0) => {
	return new Promise(r => {
		if(!resolver) resolver = r;
		if(isAvailable) return resolver(true);
		if(tries > 5) return resolver(false);
		setTimeout(() => pollExistence(resolver, tries + 1), 100);
	})
};

export default class Extension extends Plugin {

	constructor(context, holderFns){
		super(Blockchains.EOS, PluginTypes.WALLET_SUPPORT);
		this.name = 'ScatterExtension';
		this.context = context;
		this.holderFns = holderFns;
	}

	async connect(){
		return new Promise(async resolve => {
			const found = await pollExistence();
			console.log('found', found);
			if(found) resolve(true);
		})
	}

	async runBeforeInterfacing(){
		this.holderFns.set(window.scatter);
		this.context = this.holderFns.get();
		console.log('runBeforeInterfacing', this.context, this.context.getIdentity);
		return true;
	}

	async runAfterInterfacing(){
		this.context.isExtension = true;
		return true;
	}

	methods(){
		console.log('methods', window.scatter);

		return {};
	}

}