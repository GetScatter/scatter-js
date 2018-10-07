import {
	Plugin,
	PluginTypes,
	Blockchains,
	Network,
	SocketService
} from 'scatterjs-core';

const proxy = (dummy, handler) => new Proxy(dummy, handler);
let cache = {};

import eosjs from 'eosjs';

export default class ScatterEOS extends Plugin {

    constructor(){
        super(Blockchains.EOS, PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    hookProvider(network, fieldsFetcher = null){
        network = Network.fromJson(network);

        return {
            requiredFields:{},
            getAvailableKeys:async () => {
                return await SocketService.sendApiRequest({
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

                return new Promise(async resolve => {
                    const payload = { transaction:signargs, blockchain:Blockchains.EOS, network, requiredFields };
                    SocketService.sendApiRequest({
                        type:'requestSignature',
                        payload
                    }).then(x => resolve(x.signatures))
                })
            }
        }
    }

    signatureProvider(...args){

        const throwIfNoIdentity = args[0];

        // Protocol will be deprecated.
        return (network, _api, _options = {}) => {

            network = Network.fromJson(network);
            if(!network.isValid()) throw Error.noNetwork();

            let requiredFields = {};
            const fieldsFetcher = () => requiredFields;
            const signatureProvider = this.hookProvider(network, fieldsFetcher);

            // The proxy stands between the eosjs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            return proxy(new _api(Object.assign(_options, {signatureProvider})), {
                get(eosInstance, method) {

                    let returnedFields = null;

                    return (...args) => {
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
