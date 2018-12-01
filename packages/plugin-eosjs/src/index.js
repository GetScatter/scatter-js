import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from 'scatterjs-core';

const proxy = (dummy, handler) => new Proxy(dummy, handler);

export default class ScatterEOS extends Plugin {

    constructor(){
        super(Blockchains.EOS, PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    hookProvider(network){
        return signargs => {
            return new Promise((resolve, reject) => {
                const payload = Object.assign(signargs, { blockchain:Blockchains.EOS, network, requiredFields:{} });
                SocketService.sendApiRequest({
                    type:'requestSignature',
                    payload
                }).then(x => resolve(x.signatures))
                  .catch(x => reject(x));
            })
        }
    }

    signatureProvider(...args){

        const throwIfNoIdentity = args[0];

        return (network, _eos, _options = {}) => {

            network = Network.fromJson(network);

            const chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : _options.chainId;

            let prov, proxyProvider = async (args) => prov(args);
            return proxy(_eos({httpEndpoint:network.fullhost(), chainId, signProvider:proxyProvider}), {
                get(instance, method) {

                    if(typeof instance[method] !== 'function') return instance[method];

                    let returnedFields = null;
                    return (...args) => {

                        if(args.find(arg => arg.hasOwnProperty('keyProvider'))) throw Error.usedKeyProvider();

                        prov = async signargs => {
	                        throwIfNoIdentity();

	                        const requiredFields = args.find(arg => arg.hasOwnProperty('requiredFields')) || {requiredFields:{}};
	                        const payload = Object.assign(signargs, { blockchain:Blockchains.EOS, network, requiredFields:requiredFields.requiredFields });
	                        const result = await SocketService.sendApiRequest({ type:'requestSignature', payload });

	                        // No signature
	                        if(!result) return null;

	                        if(result.hasOwnProperty('signatures')){
		                        returnedFields = result.returnedFields;
		                        let multiSigKeyProvider = args.find(arg => arg.hasOwnProperty('signProvider'));
		                        if(multiSigKeyProvider) result.signatures.push(multiSigKeyProvider.signProvider(signargs.buf, signargs.sign));
		                        return result.signatures;
	                        }

	                        return result;
                        };;

                        return new Promise((resolve, reject) => {
                            instance[method](...args).then(result => {
                                if(!result.hasOwnProperty('fc')) return resolve(Object.assign(result, {returnedFields}));

                                // This is a contract
                                resolve(proxy(result, {
                                    get(instance,method){
                                        if(method === 'then') return instance[method];
                                        return (...args) => {
                                            return new Promise(async (res, rej) => {
                                                instance[method](...args).then(actionResult => {
                                                    res(Object.assign(actionResult, {returnedFields}));
                                                }).catch(rej);
                                            })
                                        }
                                    }
                                }));
                            }).catch(reject);
                        })
                    }
                }
            }); // Proxy

        }
    }
}

if(typeof window !== 'undefined') {
	window.ScatterEOS = ScatterEOS;
}
