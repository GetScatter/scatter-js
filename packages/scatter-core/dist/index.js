'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _PluginRepository = require('./plugins/PluginRepository');

var _PluginRepository2 = _interopRequireDefault(_PluginRepository);

var _SocketService = require('./services/SocketService');

var _SocketService2 = _interopRequireDefault(_SocketService);

var _Plugin = require('./Plugins/Plugin');

var _Plugin2 = _interopRequireDefault(_Plugin);

var _PluginTypes = require('./Plugins/PluginTypes');

var PluginTypes = _interopRequireWildcard(_PluginTypes);

var _Blockchains = require('./models/Blockchains');

var _Network = require('./models/Network');

var _Network2 = _interopRequireDefault(_Network);

require('isomorphic-fetch');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let origin;

const throwNoAuth = () => {
    if (!holder.scatter.isExtension && !_SocketService2.default.isConnected()) throw new Error('Connect and Authenticate first - scatter.connect( pluginName )');
};

const checkForExtension = (resolve, tries = 0) => {
    if (tries > 20) return;
    if (holder.scatter.isExtension) return resolve(true);
    setTimeout(() => checkForExtension(resolve, tries + 1), 100);
};

class Scatter {

    constructor() {
        this.isExtension = false;
        this.identity = null;
    }

    loadPlugin(plugin) {
        const noIdFunc = () => {
            if (!this.identity) throw new Error('No Identity');
        };
        _PluginRepository2.default.loadPlugin(plugin);
        _PluginRepository2.default.signatureProviders().map(sigProvider => {
            this[sigProvider.name] = sigProvider.signatureProvider(noIdFunc);
        });
    }

    isInstalled() {
        return (0, _asyncToGenerator3.default)(function* () {
            return new _promise2.default(function (resolve) {
                setTimeout(function () {
                    resolve(false);
                }, 3000);

                _promise2.default.race([checkForExtension(resolve), _SocketService2.default.ping().then(function (found) {
                    console.log('found', found);
                    if (found) resolve(true);
                })]);

                // Tries to set up Desktop Connection
            });
        })();
    }

    connect(pluginName, options) {
        var _this = this;

        return (0, _asyncToGenerator3.default)(function* () {
            return new _promise2.default(function (resolve) {
                if (!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");

                // Setting options defaults
                options = (0, _assign2.default)({ initTimeout: 10000, linkTimeout: 30000 }, options);

                // Auto failer
                setTimeout(function () {
                    resolve(false);
                }, options.initTimeout);

                // Defaults to scatter extension if exists
                checkForExtension(resolve);

                // Tries to set up Desktop Connection
                _SocketService2.default.init(pluginName, options.linkTimeout);
                _SocketService2.default.link().then((() => {
                    var _ref = (0, _asyncToGenerator3.default)(function* (authenticated) {
                        if (!authenticated) return false;
                        _this.identity = yield _this.getIdentityFromPermissions();
                        return resolve(true);
                    });

                    return function (_x) {
                        return _ref.apply(this, arguments);
                    };
                })());
            });
        })();
    }

    disconnect() {
        return _SocketService2.default.disconnect();
    }

    isConnected() {
        return _SocketService2.default.isConnected();
    }

    getVersion() {
        return _SocketService2.default.sendApiRequest({
            type: 'getVersion',
            payload: {}
        });
    }

    getIdentity(requiredFields) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'getOrRequestIdentity',
            payload: {
                fields: requiredFields
            }
        }).then(id => {
            if (id) this.identity = id;
            return id;
        });
    }

    getIdentityFromPermissions() {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'identityFromPermissions',
            payload: {}
        }).then(id => {
            if (id) this.identity = id;
            return id;
        });
    }

    forgetIdentity() {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'forgetIdentity',
            payload: {}
        }).then(res => {
            this.identity = null;
            return res;
        });
    }

    authenticate() {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'authenticate',
            payload: {}
        });
    }

    getArbitrarySignature(publicKey, data, whatfor = '', isHash = false) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'requestArbitrarySignature',
            payload: {
                publicKey,
                data,
                whatfor,
                isHash
            }
        });
    }

    getPublicKey(blockchain) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'getPublicKey',
            payload: { blockchain }
        });
    }

    linkAccount(publicKey, account, network) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'linkAccount',
            payload: { publicKey, account, network }
        });
    }

    suggestNetwork(network) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'requestAddNetwork',
            payload: {
                network
            }
        });
    }

    requestSignature(payload) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'requestSignature',
            payload
        });
    }

    createTransaction(blockchain, actions, account, network) {
        throwNoAuth();
        return _SocketService2.default.sendApiRequest({
            type: 'createTransaction',
            payload: {
                blockchain,
                actions,
                account,
                network
            }
        });
    }
}

class Holder {
    constructor(_scatter) {
        this.scatter = _scatter;
    }

    plugins(...plugins) {
        if (!this.scatter.isExtension) {
            plugins.forEach(plugin => this.scatter.loadPlugin(plugin));
        }
    }
}

let holder = new Holder(new Scatter());
if (typeof window !== 'undefined') {

    // Catching extension instead of Desktop
    if (typeof document !== 'undefined') {
        const bindScatterClassic = () => {
            holder.scatter = window.scatter;
            holder.scatter.isExtension = true;
            holder.scatter.connect = () => new _promise2.default(resolve => resolve(true));
        };

        if (typeof window.scatter !== 'undefined') bindScatterClassic();else document.addEventListener('scatterLoaded', () => bindScatterClassic());
    }

    if (!holder.scatter.isExtension) window.scatter = holder.scatter;
}

holder.Plugin = _Plugin2.default;
holder.PluginTypes = PluginTypes;
holder.Blockchains = _Blockchains.Blockchains;
holder.Network = _Network2.default;
holder.SocketService = _SocketService2.default;

module.exports = holder;
exports.default = holder;