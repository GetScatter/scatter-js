import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from '@scatterjs/core';

let fiojsUtil = null;
let Numeric = null;

let socketService = SocketService;
const proxy = (dummy, handler) => new Proxy(dummy, handler);

const fetchPostParams = (params) => ({ method:"POST", body:JSON.stringify(params) });
const getChainData = (network, route, params = {}) => fetch(`${network.fullhost()}/v1/chain/${route}`, fetchPostParams(params)).then(x => x.json())

export default class ScatterFIO extends Plugin {

    constructor(){
        super(Blockchains.FIO || 'fio', PluginTypes.BLOCKCHAIN_SUPPORT);
    }

	setSocketService(_s){
		socketService = _s;
	}

    hookProvider(network, fieldsFetcher = null){
        network = Network.fromJson(network);

        return {
            requiredFields:{},
            getAvailableKeys:async () => {
                return await socketService.sendApiRequest({
                    type:'identityFromPermissions',
                    payload:{}
                }).then(id => {
                    if(!id) return [];
                    return id.accounts.filter(x => x.blockchain === Blockchains.FIO).map(x => x.publicKey)
                });
            },

            sign:async (signargs) => {
                const requiredFields = fieldsFetcher ? fieldsFetcher() : {};
                signargs.serializedTransaction = Buffer.from(signargs.serializedTransaction).toString('hex');

                return new Promise(async (resolve, reject) => {
	                socketService.sendApiRequest({
                        type:'requestSignature',
                        payload:{ transaction:signargs, blockchain:'fio', network, requiredFields }
                    }).then(x => {

		                resolve({
			                signatures:x.signatures,
			                compression: 0,
			                packed_context_free_data: Numeric.arrayToHex(signargs.serializedContextFreeData || new Uint8Array(0)),
			                packed_trx: Numeric.arrayToHex(Buffer.from(signargs.serializedTransaction, 'hex'))
		                });
	                    // resolve({signatures:x.signatures, serializedTransaction:Buffer.from(signargs.serializedTransaction, 'hex')})
                    })
                      .catch(x => reject(x))
                })
            }
        }
    }

	async fetchAbis(network, contracts){
		try {
			return await Promise.all(contracts.map(async account => {
				const chainAbi = await getChainData(network, `get_raw_abi`, {account_name:account}).catch(err => console.error(err)).then(x => x.abi);
				if(!chainAbi) return console.error(`Could not fetch ABIs for ${account}`);
				const rawAbi = Numeric.base64ToBinary(chainAbi);
				const abi = fiojsUtil.rawAbiToJson(rawAbi);
				return { account, rawAbi, abi};
			}));
		} catch(e){
			console.error(e);
			return null;
		}
	}

	abiProvider(){
    	return {
		    getRawAbi: async (accountName) => {
			    const {abi} = (await this.fetchAbis(network, [accountName]))[0];
			    return { accountName, abi };
		    },
	    }
	}

    signatureProvider(...args){

        const throwIfNoIdentity = args[0];

        // Protocol will be deprecated.
        return (network, _fiojs, _options = {}) => {

	        Numeric = _fiojs.Numeric;

            network = Network.fromJson(network);

            let requiredFields = {};
            const fieldsFetcher = () => requiredFields;
            const signatureProvider = this.hookProvider(network, fieldsFetcher);
            const authorityProvider = { getRequiredKeys: signatureProvider.getAvailableKeys };

	        // Setting up a bare bones utility Api for deserialization
	        if(!fiojsUtil) fiojsUtil = new _fiojs.Api({ textEncoder:_options.textEncoder, textDecoder:_options.textDecoder, abiProvider:this.abiProvider() });
	        fiojsUtil.getCachedAbi = async accountName => (await this.fetchAbis(network, [accountName]))[0];

            // The proxy stands between the fiojs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            const proxied = proxy(new _fiojs.Api(Object.assign(_options, {
	            abiProvider:this.abiProvider(),
	            authorityProvider,
	            signatureProvider,
	            chainId:network.chainId,
            })), {
                get(fiojsInstance, method) {
                    return (...args) => {
                    	if(typeof fiojsInstance[method] === 'undefined'){
                    		throw new Error(`${method} does not exist on the fiojs.Api() object.`)
						}

                        const rqf = args.find(arg => arg.hasOwnProperty('requiredFields'));
                        requiredFields = rqf ? rqf.requiredFields : {};
                        return fiojsInstance[method](...args)
                    }
                }
            }); // Proxy

	        proxied.getCachedAbi = async accountName => (await this.fetchAbis(network, [accountName]))[0];
	        proxied.getTransactionOptions = async () => {
		        const info = await getChainData(network, 'get_info');
		        const blockInfo = await getChainData(network, 'get_block', {
			        block_num_or_id:info.last_irreversible_block_num
		        });
		        const currentDate = new Date();
		        const timePlusTen = currentDate.getTime() + 10000;
		        const timeInISOString = (new Date(timePlusTen)).toISOString();
		        const expiration = timeInISOString.substr(0, timeInISOString.length - 1);
		        return {
			        expiration,
			        ref_block_num: blockInfo.block_num & 0xffff,
			        ref_block_prefix: blockInfo.ref_block_prefix,
		        }
	        };

	        return proxied;

        }
    }
}

if(typeof window !== 'undefined') {
	window.ScatterFIO = ScatterFIO;
}
