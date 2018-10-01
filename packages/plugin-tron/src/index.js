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
            const httpEndpoint = `${network.protocol}://${network.hostport()}`;

            const chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : _options.chainId;

            _tron.trx.sign = signargs => {
                return new Promise(resolve => {
                    const transaction = {
                        transaction:signargs,
                        participants:[_tron.defaultAddress.base58],
                    };
                    const payload = { transaction, blockchain:Blockchains.TRX, network, requiredFields:{} };
                    SocketService.sendApiRequest({
                        type:'requestSignature',
                        payload
                    }).then(x => resolve(x.signatures))
                })
            };

            return _tron;

        }
    }
}

if(typeof window !== 'undefined') {
    window.ScatterTron = ScatterTron;
}