'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _PluginTypes = require('./PluginTypes');

var PluginTypes = _interopRequireWildcard(_PluginTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor() {
        this.plugins = [];
    }

    loadPlugin(plugin) {
        if (!this.plugin(plugin.name)) this.plugins.push(plugin);
    }

    signatureProviders() {
        return this.plugins.filter(plugin => plugin.type === PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    supportedBlockchains() {
        return this.signatureProviders().map(plugin => name);
    }

    plugin(name) {
        return this.plugins.find(plugin => plugin.name === name);
    }

    endorsedNetworks() {
        var _this = this;

        return (0, _asyncToGenerator3.default)(function* () {
            return yield _promise2.default.all(_this.signatureProviders().map((() => {
                var _ref = (0, _asyncToGenerator3.default)(function* (plugin) {
                    return yield plugin.getEndorsedNetwork();
                });

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            })()));
        })();
    }
}

const PluginRepository = new PluginRepositorySingleton();
exports.default = PluginRepository;