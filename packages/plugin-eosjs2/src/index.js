import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from '@scatterjs/core';

let socketService = SocketService;
const proxy = (dummy, handler) => new Proxy(dummy, handler);
let cache = {};

export default class ScatterEOS extends Plugin {

    constructor(){
        super(Blockchains.EOS, PluginTypes.BLOCKCHAIN_SUPPORT);
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
                    return id.accounts.filter(x => x.blockchain === Blockchains.EOS).map(x => x.publicKey)
                });
            },

            sign:async (signargs) => {
                const requiredFields = fieldsFetcher ? fieldsFetcher() : {};
                signargs.serializedTransaction = Buffer.from(signargs.serializedTransaction).toString('hex');

                return new Promise(async (resolve, reject) => {
	                socketService.sendApiRequest({
                        type:'requestSignature',
                        payload:{ transaction:signargs, blockchain:Blockchains.EOS, network, requiredFields }
                    }).then(x => {
	                    resolve({signatures:x.signatures, serializedTransaction:Buffer.from(signargs.serializedTransaction, 'hex')})
                    })
                      .catch(x => reject(x))
                })
            }
        }
    }

    multiHook(network, signers){
        const scatterSigner = this.eosHook(network);

        if(!Array.isArray(signers)) signers = [signers];

        return {
            getAvailableKeys:async () => {
	            try {
		            const scatterKeys = await scatterSigner.getAvailableKeys();

		            let otherKeys = [];
		            await Promise.all(signers.map(async signer => {
			            await signer.getAvailableKeys().then(keys => {
				            keys.map(key => otherKeys.push(key));
			            });
		            	return true;
		            }));

		            return scatterKeys.concat(otherKeys)
	            } catch(e){
		            throw new Error(e);
	            }
            },

            sign:async (signargs) => {
	            try {
		            const serializedTransaction = Buffer.from(signargs.serializedTransaction, 'hex');

		            const individualSignArgs = async provider => ({
			            abis:signargs.abis,
			            chainId: network.chainId,
			            requiredKeys: await provider.getAvailableKeys(),
			            serializedTransaction
		            });

		            const pullOutSignatures = result => {
			            if(typeof result === 'object' && result.hasOwnProperty('signatures')) return result.signatures;
			            return result;
		            };

		            const scatterSigs = await scatterSigner
			            .sign(await individualSignArgs(scatterSigner))
			            .then(x => pullOutSignatures(x));

		            let otherSigs = [];
		            await Promise.all(signers.map(async signer => {
			            await signer.sign(await individualSignArgs(signer)).then(result => {
				            pullOutSignatures(result).map(sig => otherSigs.push(sig));
			            });
			            return true;
		            }));

		            return {
			            signatures: scatterSigs.concat(otherSigs),
			            serializedTransaction
		            }
	            } catch(e){
	            	throw new Error(e);
	            }
            }
        }
    }

    signatureProvider(...args){

        const throwIfNoIdentity = args[0];

        // Protocol will be deprecated.
        return (network, _api, _options = {}) => {

            network = Network.fromJson(network);

            let requiredFields = {};
            const fieldsFetcher = () => requiredFields;
            const signatureProvider = this.hookProvider(network, fieldsFetcher);

            // The proxy stands between the eosjs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            return proxy(new _api(Object.assign(_options, {signatureProvider})), {
                get(eosInstance, method) {

                    return (...args) => {
                    	if(typeof eosInstance[method] === 'undefined'){
                    		throw new Error(`${method} does not exist on the eosjs.Api() object.`)
						}

                        const rqf = args.find(arg => arg.hasOwnProperty('requiredFields'));
                        requiredFields = rqf ? rqf.requiredFields : {};
                        return eosInstance[method](...args)
                    }
                }
            }); // Proxy

        }
    }
}

if(typeof window !== 'undefined') {
	window.ScatterEOS = ScatterEOS;
}
