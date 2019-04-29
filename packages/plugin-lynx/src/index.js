import {Blockchains, Network, Plugin, PluginTypes, SocketService, WALLET_METHODS} from 'scatterjs-core';

let network;

let isAvailable = false;
if(typeof window !== 'undefined') {
	if(typeof window.lynxMobile !== 'undefined') isAvailable = true;
	else window.addEventListener('lynxMobileLoaded', () => isAvailable = true);
}

const pollExistence = async (resolver = null, tries = 0) => {
	return new Promise(r => {
		if(!resolver) resolver = r;
		if(isAvailable) return resolver(true);
		if(tries > 5) return resolver(false);
		setTimeout(() => pollExistence(resolver, tries + 1), 100);
	})
};


const hashHex = buffer => {
	let digest = '';
	let view = new DataView(buffer);
	for(let i = 0; i < view.byteLength; i += 4) {
		const PADDING = '00000000';
		digest += (PADDING + view.getUint32(i).toString(16)).slice(-PADDING.length)
	}

	return digest;
};

const sha256 = async data => {
	const buffer = new TextEncoder("utf-8").encode(data);
	return hashHex(await crypto.subtle.digest('SHA-256', buffer));
}


export default class ScatterLynx extends Plugin {

    constructor(eosjs){
	    super(Blockchains.EOS, PluginTypes.WALLET_SUPPORT);

    	if(!eosjs) {
    		console.error('Lynx Plugin: You must pass in an eosjs version. Either ({Api, JsonRpc}) for eosjs2 or (Eos) for eosjs1');
    		return;
	    }
	    this.name = 'Lynx';
	    this.isEosjs2 = false;

	    // eosjs2
	    if(eosjs.hasOwnProperty('JsonRpc')){
	    	this.eosjs = {Api:eosjs.Api, JsonRpc:eosjs.JsonRpc};
	    	this.eosjs.TextEncoder = eosjs.hasOwnProperty('TextEncoder') ? eosjs.TextEncoder : null;
	    	this.eosjs.TextDecoder = eosjs.hasOwnProperty('TextDecoder') ? eosjs.TextDecoder : null;
		    this.isEosjs2 = true;
	    }
	    else {
	    	if(typeof eosjs !== 'function') throw new Error('Lynx Plugin: Invalid eosjs. Please use 16.0.9 or 20+');
		    this.eosjs = eosjs;
	    }
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
				if(!this.holderFns.get().wallet) this.holderFns.get().wallet = this.name;
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
	        [WALLET_METHODS.isConnected]:async () => true,
	        [WALLET_METHODS.disconnect]:async () => true,
	        [WALLET_METHODS.isPaired]:async () => true,

	        [WALLET_METHODS.getIdentity]:async (requiredFields) => {
		        const accountName = await window.lynxMobile.requestSetAccountName();
		        if(!accountName) return null;
		        const accountState = await window.lynxMobile.requestSetAccount(accountName);
		        if(!accountState) return null;
		        const perm = accountState.account.permissions.find(x => x.perm_name === 'active');
		        const publicKey = perm.required_auth.keys[0].key;
		        const accounts = [{
			        name:accountState.account.account_name,
			        authority:perm.perm_name,
			        publicKey,
			        blockchain:Blockchains.EOS,
			        isHardware:false,
			        chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
		        }];

		        const identity = {
		            name:accounts[0].name,
                    accounts,
			        publicKey
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

	        [WALLET_METHODS.getArbitrarySignature]:(publicKey, data) => {
		        const origin = SocketService.getOrigin();
		        return window.lynxMobile.requestArbitrarySignature({data, whatFor:`${origin} is requesting an arbitrary signature`});
	        },
	        [WALLET_METHODS.authenticate]:async (nonce, data = null, publicKey = null) => {
		        const origin = SocketService.getOrigin();
		        data = data ? data : origin;
		        const toSign = await sha256(await sha256(data)+await sha256(nonce))
		        return window.lynxMobile.requestArbitrarySignature({data:toSign, whatFor:`${origin} wants to authenticate your public key`});
	        },

	        [WALLET_METHODS.requestSignature]:async ({abis, transaction, network}) => {
		        let parsed;

		        if(network.chainId !== 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906') throw new Error('Lynx only supports mainnet.');

		        if(this.isEosjs2){
			        const rpc = new this.eosjs.JsonRpc(Network.fromJson(network).fullhost());
			        const OPTIONS = {rpc};
			        if(this.eosjs.TextEncoder) OPTIONS.textEncoder = new this.eosjs.TextEncoder();
			        if(this.eosjs.TextDecoder) OPTIONS.textDecoder = new this.eosjs.TextDecoder();
			        const api = new this.eosjs.Api(OPTIONS);

			        transaction.abis.map(({account_name, abi:rawAbi}) => api.cachedAbis.set(account_name, { rawAbi, abi:api.rawAbiToJson(rawAbi) }));
			        parsed = await api.deserializeTransactionWithActions(transaction.serializedTransaction);
		        }
		        else {
		        	const eos = new this.eosjs({httpEndpoint:Network.fromJson(network).fullhost(), chainId:network.chainId});
		        	let abis = {};
			        const contracts = transaction.actions.map(action => action.account).reduce((acc,x) => {
			        	if(!acc.includes(x)) acc.push(x);
			        	return acc;
			        }, []);
			        await Promise.all(contracts.map(async contractAccount => {
				        abis[contractAccount] = (await eos.contract(contractAccount)).fc;
			        }));

			        parsed = {actions:await Promise.all(transaction.actions.map(async (action, index) => {
				        const contractAccountName = action.account;
				        let abi = abis[contractAccountName];

				        const typeName = abi.abi.actions.find(x => x.name === action.name).type;
				        const data = abi.fromBuffer(typeName, action.data);
				        const actionAbi = abi.abi.actions.find(fcAction => fcAction.name === action.name);
				        eos.fc.abiCache.abi(contractAccountName, abi.abi);

				        return {
					        data,
					        account:action.account,
					        name:action.name,
					        authorization:action.authorization,
				        };
			        }))};

			        const clone = Object.assign({}, transaction);
			        delete clone.actions;
			        parsed = Object.assign(parsed, clone);

		        }

		        return window.lynxMobile.requestSignature(parsed);
	        },

	        [WALLET_METHODS.requestTransfer]:(network, to, amount, options = {}) => {
	        	let {contract, symbol, memo, decimals} = options;
	        	if(!contract) contract = 'eosio.token';
	        	if(!symbol) symbol = 'EOS';

		        return window.lynxMobile.transfer({ contract, symbol, toAccount:to, amount, memo });
	        },
        }
    }


}

if(typeof window !== 'undefined') {
	window.ScatterLynx = ScatterLynx;
}
