import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
    WALLET_METHODS
} from 'scatterjs-core';


let isAvailable = false;
window.addEventListener("lynxMobileLoaded", () => isAvailable = true);


const pollExistence = async (tries = 0) => {
	if(tries > 5) return false;
	if(isAvailable) return true;
	setTimeout(() => pollExistence(tries + 1), 100);
};

export default class ScatterLynx extends Plugin {

    constructor(){
        super(Blockchains.EOS, PluginTypes.WALLET_SUPPORT);
	    this.name = 'Lynx';
    }

    async connect(){
        const found = await pollExistence();
	    if(found) return true;
    }

    methods(){
        return {
	        [WALLET_METHODS.getIdentity]:async () => {
		        const accountName = await window.lynxMobile.requestSetAccountName();
		        const accountState = await window.lynxMobile.requestSetAccount(accountName);
	        },

	        [WALLET_METHODS.requestSignature]:async (transaction) => {
		        if(!transaction.hasOwnProperty('serializedTransaction')) throw new Error('Lynx only supports eosjs2(20.0.0+) syntax');

		        // let transaction = {
		        //     actions: [{
		        //         account: "eosio",
		        //         name: "delegatebw",
		        //         data: {
		        //             from: "funstuffgogo",
		        //             receiver: "funstuffgogo",
		        //             transfer: false,
		        //             stake_cpu_quantity: "0.0005 EOS",
		        //             stake_net_quantity: "0.0000 EOS"
		        //         },
		        //         authorization: [
		        //             {
		        // 	            actor: "funstuffgogo",
		        // 	            permission: "active"
		        //             }
		        //         ]
		        //     },
		        //         {
		        //             account: "eosio",
		        //             name: "undelegatebw",
		        //             data: {
		        // 	            from: "funstuffgogo",
		        // 	            receiver: "funstuffgogo",
		        // 	            unstake_cpu_quantity: "0.0000 EOS",
		        // 	            unstake_net_quantity: "0.0003 EOS"
		        //             },
		        //             authorization: [
		        // 	            {
		        // 		            actor: "funstuffgogo",
		        // 		            permission: "active"
		        // 	            }
		        //             ]
		        //         }]
		        // }

		        // (async () => {
		        //
		        //     let result;
		        //
		        //     try {
		        //         result = await window.lynxMobile.transact(transaction);
		        //     } catch (err) {
		        //         console.log(err);
		        //     }
		        //
		        //     console.log(result); // {transaction_id: "3a50d9a4bda0a8e2a4c23526da15369345bd61c72d37d844365f4bfee5c18fcb", processed: Object}
		        //
		        // })();
	        }
        }
    }


}

if(typeof window !== 'undefined') {
	window.ScatterLynx = ScatterLynx;
}
