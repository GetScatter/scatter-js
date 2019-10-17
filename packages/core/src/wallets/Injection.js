import * as PluginTypes from "../plugins/PluginTypes";
import Plugin from "../plugins/Plugin";
import WalletAPI from "./WalletAPI";


let isAvailable = false;
if(typeof document !== 'undefined'){
	document.addEventListener('walletLoaded', () => isAvailable = true);
}

const checkForWallet = () => {
	if(typeof window !== 'undefined' && typeof window.wallet !== 'undefined') {
		isAvailable = true;
		return true;
	}
	return false;
};


const pollExistence = async (resolver = null, tries = 0) => {
	return new Promise(r => {
		if(!resolver) resolver = r;
		if(isAvailable || checkForWallet()) return resolver(true);
		if(tries > 5) return resolver(false);
		setTimeout(() => pollExistence(resolver, tries + 1), 100);
	})
};

export default class Injection extends Plugin {

	constructor(context, holderFns){
		super('InjectedWalletV2', PluginTypes.WALLET_SUPPORT);
		this.name = 'InjectedWalletV2';
		this.context = context;
		this.holderFns = holderFns;
	}

	async connect(){
		return new Promise(async resolve => {
			const found = await pollExistence();
			if(found) {
				if(this.holderFns && !this.holderFns.get().wallet) this.holderFns.get().wallet = this.name;
				resolve({
					disconnect:() => {},
					sendApiRequest:window.wallet.sendApiRequest
				});
			}
		})
	}

	async runAfterInterfacing(){
		this.holderFns.get().identity = await this.holderFns.get().getIdentityFromPermissions();
		return true;
	}

	methods(){
		return WalletAPI.getMethods(this, window.wallet);
	}

}
