import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from 'scatterjs-core';

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

    hookProvider(network, fieldsFetcher = null, beta3 = false){
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
                        if(!beta3) return resolve(x.signatures);
	                    resolve({signatures:x.signatures, serializedTransaction:Buffer.from(signargs.serializedTransaction, 'hex')})
                    })
                      .catch(x => reject(x))
                })
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
            const signatureProvider = this.hookProvider(network, fieldsFetcher, _options.beta3 || false);

            // The proxy stands between the eosjs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            return proxy(new _api(Object.assign(_options, network, {signatureProvider})), {
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
