import * as PluginTypes from "../plugins/PluginTypes";
import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import WalletInterface, {WALLET_METHODS} from "../models/WalletInterface";
import SocketService from "../services/SocketService";


let isAvailable = false;
if(typeof window !== 'undefined' && typeof document !== 'undefined') {
	document.addEventListener('scatterLoaded', () => isAvailable = true);
}

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
			if(found) resolve(true);
		})
	}

	async runBeforeInterfacing(){
		const network = this.context.network;

		if(network){
			const getId = window.scatter.getIdentity.bind(window.scatter);
			const useIdentity = window.scatter.useIdentity.bind(window.scatter);
			window.scatter.getIdentity = fields => getId(fields ? fields : {accounts:[network]}).then(id => {
				this.holderFns.get().identity = id;
				useIdentity(id);
				return id;
			});


			const suggest = window.scatter.suggestNetwork.bind(window.scatter);
			window.scatter.suggestNetwork = net => suggest(net ? net : network);
		}

		this.holderFns.set(window.scatter);
		this.context = this.holderFns.get();
		this.context.useIdentity = () => {};
		return true;
	}

	async runAfterInterfacing(){
		this.context.isExtension = true;
		this.context.connect = () => new Promise(resolve => resolve(true));
		return true;
	}

	methods(){ return {
		[WALLET_METHODS.getIdentity]:(requiredFields) => {
			console.log('getid')
		},
	}; }

}