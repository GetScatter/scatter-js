import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
    WALLET_METHODS
} from 'scatterjs-core';

import {JsonRpc, Api} from 'eosjs'

let network;

let isAvailable = false;
if(typeof window !== 'undefined') {
	window.addEventListener('lynxMobileLoaded', () => isAvailable = true);
}

const pollExistence = async (resolver = null, tries = 0) => {
	return new Promise(r => {
		if(!resolver) resolver = r;
		if(isAvailable) return resolver(true);
		if(tries > 5) return resolver(false);
		setTimeout(() => pollExistence(resolver, tries + 1), 100);
	})
};

export default class ScatterLynx extends Plugin {

    constructor(){
        super(Blockchains.EOS, PluginTypes.WALLET_SUPPORT);
	    this.name = 'Lynx';
    }

    init(context, holderFns, socketSetters){
	    this.context = context;
	    this.holderFns = holderFns;
	    this.socketSetters = socketSetters;
    }

	async connect(){
		return new Promise(async resolve => {
			const found = await pollExistence();
			if(found) {
			    resolve(true);
			}
		})
	}

	async runAfterInterfacing(){
		this.methods()[WALLET_METHODS.getIdentity]();
		const selfSocket = { sendApiRequest:x => this.methods()[x.type](x.payload) };
		this.socketSetters.map(x => x(selfSocket));
		return true;
	}

    methods(){
        return {

        	// TODO: Align to active
	        [WALLET_METHODS.getIdentity]:async (requiredFields) => {
		        const accountName = await window.lynxMobile.requestSetAccountName();
		        if(!accountName) return null;
		        const accountState = await window.lynxMobile.requestSetAccount(accountName);
		        if(!accountState) return null;
		        const perm = accountState.account.permissions.find(x => x.perm_name === 'active');
		        const accounts = [{
			        name:accountState.account.account_name,
			        authority:perm.perm_name,
			        publicKey:perm.required_auth.keys[0].key,
			        blockchain:Blockchains.EOS,
			        isHardware:false,
			        chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
		        }];

		        const identity = {
		            name:accounts[0].name,
                    accounts
                };

		        this.context.identity = identity;
		        return identity;
	        },
	        [WALLET_METHODS.forgetIdentity]:async () => {
		        this.context.identity = null;
		        return true;
	        },
	        ['identityFromPermissions']:async () => this.context.identity,
	        [WALLET_METHODS.getIdentityFromPermissions]:async () => this.context.identity,

	        [WALLET_METHODS.requestSignature]:async ({abis, transaction, network}) => {
	        	console.log('transaction', transaction);
		        if(!transaction.hasOwnProperty('serializedTransaction')) throw new Error('Lynx only supports eosjs2(20.0.0+) syntax');
		        if(transaction.chainId !== 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906') throw new Error('Lynx only supports mainnet.');
		        const rpc = new JsonRpc(Network.fromJson(network).fullhost());
		        const api = new Api({rpc});

		        transaction.abis.map(({account_name, abi:rawAbi}) => api.cachedAbis.set(account_name, { rawAbi, abi:api.rawAbiToJson(rawAbi) }));
		        const parsed = await api.deserializeTransactionWithActions(transaction.serializedTransaction);

		        console.log('parsed', parsed);

		        return window.lynxMobile.requestSignature(parsed);
	        }
        }
    }


}

if(typeof window !== 'undefined') {
	window.ScatterLynx = ScatterLynx;
}
