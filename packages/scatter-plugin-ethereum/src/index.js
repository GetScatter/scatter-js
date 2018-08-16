import {
    Plugin,
    PluginTypes,
    Blockchains,
    Network,
    SocketService
} from 'scatter-core';

import ProviderEngine from 'web3-provider-engine';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc';
import WebsocketSubprovider from 'web3-provider-engine/subproviders/websocket';
import HookedWalletSubprovider from "web3-provider-engine/subproviders/hooked-wallet";
import ethUtil from 'ethereumjs-util';



let ethNetwork;

export default class ETH extends Plugin {

    constructor() {
        super(Blockchains.ETH, PluginTypes.BLOCKCHAIN_SUPPORT)
    }

    signatureProvider(...args) {

        return (_network, _web3) => {
            ethNetwork = Network.fromJson(_network);
            if (!ethNetwork.isValid()) throw Error.noNetwork();

            const rpcUrl = `${ethNetwork.protocol}://${ethNetwork.hostport()}`;

            const engine = new ProviderEngine();
            const web3 = new _web3(engine);

            const walletSubprovider = new HookedWalletSubprovider(new ScatterEthereumWallet());
            engine.addProvider(walletSubprovider);

            if (ethNetwork.protocol.indexOf('http') > -1) engine.addProvider(new RpcSubprovider({ rpcUrl }));
            else engine.addProvider(new WebsocketSubprovider({ rpcUrl }));

            engine.start();

            return web3;
        }
    }
}



class ScatterEthereumWallet {
    constructor() {
        this.getAccounts = this.getAccounts.bind(this);
        this.signTransaction = this.signTransaction.bind(this);
    }

    async getAccounts(callback) {
        const result = await SocketService.sendApiRequest({
            type: 'identityFromPermissions',
            payload: {}
        });
        const accounts = !result ? [] : result.accounts
            .filter(account => account.blockchain === Blockchains.ETH)
            .map(account => account.address);

        callback(null, accounts);
        return accounts;
    }

    async signTransaction(transaction) {
        if (!ethNetwork) throw Error.noNetwork();

        // Basic settings
        if (transaction.gas !== undefined) transaction.gasLimit = transaction.gas;
        transaction.value = transaction.value || '0x00';
        if (transaction.hasOwnProperty('data')) transaction.data = ethUtil.addHexPrefix(transaction.data);

        // Required Fields
        const requiredFields = transaction.hasOwnProperty('requiredFields') ? transaction.requiredFields : {};

        // Contract ABI
        const abi = transaction.hasOwnProperty('abi') ? transaction.abi : null;
        if (!abi && transaction.hasOwnProperty('data'))
            throw Error.signatureError('no_abi', 'You must provide a JSON ABI along with your transaction so that users can read the contract');

        const payload = Object.assign(transaction, { blockchain: Blockchains.ETH, network: ethNetwork, requiredFields });
        const { signatures, returnedFields } = await SocketService.sendApiRequest({
            type: 'requestSignature',
            payload
        });

        if (transaction.hasOwnProperty('fieldsCallback'))
            transaction.fieldsCallback(returnedFields);

        return signatures[0];
    }
}

module.exports = ETH;