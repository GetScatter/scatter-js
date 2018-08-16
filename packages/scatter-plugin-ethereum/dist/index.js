'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _scatterCore = require('scatter-core');

var _web3ProviderEngine = require('web3-provider-engine');

var _web3ProviderEngine2 = _interopRequireDefault(_web3ProviderEngine);

var _rpc = require('web3-provider-engine/subproviders/rpc');

var _rpc2 = _interopRequireDefault(_rpc);

var _websocket = require('web3-provider-engine/subproviders/websocket');

var _websocket2 = _interopRequireDefault(_websocket);

var _hookedWallet = require('web3-provider-engine/subproviders/hooked-wallet');

var _hookedWallet2 = _interopRequireDefault(_hookedWallet);

var _ethereumjsUtil = require('ethereumjs-util');

var _ethereumjsUtil2 = _interopRequireDefault(_ethereumjsUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ethNetwork;

class ETH extends _scatterCore.Plugin {

    constructor() {
        super(_scatterCore.Blockchains.ETH, _scatterCore.PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    signatureProvider(...args) {

        return (_network, _web3) => {
            ethNetwork = _scatterCore.Network.fromJson(_network);
            if (!ethNetwork.isValid()) throw Error.noNetwork();

            const rpcUrl = `${ethNetwork.protocol}://${ethNetwork.hostport()}`;

            const engine = new _web3ProviderEngine2.default();
            const web3 = new _web3(engine);

            const walletSubprovider = new _hookedWallet2.default(new ScatterEthereumWallet());
            engine.addProvider(walletSubprovider);

            if (ethNetwork.protocol.indexOf('http') > -1) engine.addProvider(new _rpc2.default({ rpcUrl }));else engine.addProvider(new _websocket2.default({ rpcUrl }));

            engine.start();

            return web3;
        };
    }
}

exports.default = ETH;
class ScatterEthereumWallet {
    constructor() {
        this.getAccounts = this.getAccounts.bind(this);
        this.signTransaction = this.signTransaction.bind(this);
    }

    getAccounts(callback) {
        return (0, _asyncToGenerator3.default)(function* () {
            const result = yield _scatterCore.SocketService.sendApiRequest({
                type: 'identityFromPermissions',
                payload: {}
            });
            const accounts = !result ? [] : result.accounts.filter(function (account) {
                return account.blockchain === _scatterCore.Blockchains.ETH;
            }).map(function (account) {
                return account.address;
            });

            callback(null, accounts);
            return accounts;
        })();
    }

    signTransaction(transaction) {
        return (0, _asyncToGenerator3.default)(function* () {
            if (!ethNetwork) throw Error.noNetwork();

            // Basic settings
            if (transaction.gas !== undefined) transaction.gasLimit = transaction.gas;
            transaction.value = transaction.value || '0x00';
            if (transaction.hasOwnProperty('data')) transaction.data = _ethereumjsUtil2.default.addHexPrefix(transaction.data);

            // Required Fields
            const requiredFields = transaction.hasOwnProperty('requiredFields') ? transaction.requiredFields : {};

            // Contract ABI
            const abi = transaction.hasOwnProperty('abi') ? transaction.abi : null;
            if (!abi && transaction.hasOwnProperty('data')) throw Error.signatureError('no_abi', 'You must provide a JSON ABI along with your transaction so that users can read the contract');

            const payload = (0, _assign2.default)(transaction, { blockchain: _scatterCore.Blockchains.ETH, network: ethNetwork, requiredFields });
            const { signatures, returnedFields } = yield _scatterCore.SocketService.sendApiRequest({
                type: 'requestSignature',
                payload
            });

            if (transaction.hasOwnProperty('fieldsCallback')) transaction.fieldsCallback(returnedFields);

            return signatures[0];
        })();
    }
}

module.exports = ETH;