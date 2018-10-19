import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from 'scatterjs-core';

const proxy = (dummy, handler) => new Proxy(dummy, handler);

export default class ScatterTron extends Plugin {

    constructor(){
        super(Blockchains.TRX, PluginTypes.BLOCKCHAIN_SUPPORT)
    }

    hookProvider(network){
        throw new Error('Tron hook provider not enabled yet.');
    }

    signatureProvider(...args){
        const throwIfNoIdentity = args[0];

        return (network, _tron, _options = {}) => {

            network = Network.fromJson(network);
            if(!network.isValid()) throw Error.noNetwork();

            const getSigner = (abi = null) => {
                return signargs => {
                    return new Promise(resolve => {
                        const transaction = {
                            transaction:signargs,
                            participants:[_tron.defaultAddress.base58],
                        };
                        const payload = { transaction, blockchain:Blockchains.TRX, network, requiredFields:{}, abi };
                        SocketService.sendApiRequest({
                            type:'requestSignature',
                            payload
                        }).then(x => resolve(x.signatures))
                    })
                };
            }

            _tron.trx.sign = getSigner();

            return proxy(_tron, {
                get(instance, method) {
                    console.log('method', method);

                    if(typeof instance[method] === 'function') return (...args) => {
                        if(method === 'contract') {
                            return proxy(instance[method](...args), {
                                get(a,b){
                                    instance.trx.sign = getSigner({abi: args[0], address: args[1], method:b});
                                    return a[b];
                                }
                            });
                        }

                        return instance[method](...args)

                    };
                    else return instance[method];

                }
            });
        }
    }
}

if(typeof window !== 'undefined') {
    window.ScatterTron = ScatterTron;
}