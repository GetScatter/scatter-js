'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _Blockchains = require('./Blockchains');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Network {
    constructor(_name = '', _protocol = 'https', _host = '', _port = 0, blockchain = _Blockchains.Blockchains.EOS, chainId = '') {
        this.name = _name;
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;
        this.blockchain = blockchain;
        this.chainId = chainId.toString();
    }

    static placeholder() {
        return new Network();
    }

    static fromJson(json) {
        const p = (0, _assign2.default)(Network.placeholder(), json);
        p.chainId = p.chainId ? p.chainId.toString() : '';
        return p;
    }

    static fromUnique(netString) {
        const blockchain = netString.split(':')[0];
        if (netString.indexOf(':chain:') > -1) return new Network('', '', '', '', blockchain, netString.replace(`${blockchain}:chain:`, ''));

        const splits = netString.replace(`${blockchain}:`, '').split(':');
        return new Network('', '', splits[0], parseInt(splits[1] || 80), blockchain);
    }

    unique() {
        return (`${this.blockchain}:` + (this.chainId.length ? `chain:${this.chainId}` : `${this.host}:${this.port}`)).toLowerCase();
    }
    hostport() {
        return `${this.host}${this.port ? ':' : ''}${this.port}`;
    }
    fullhost() {
        return `${this.protocol}://${this.host}${this.port ? ':' : ''}${this.port}`;
    }
    clone() {
        return Network.fromJson(JSON.parse((0, _stringify2.default)(this)));
    }
    isEmpty() {
        return !this.host.length;
    }
    isValid() {
        return this.protocol.length && this.host.length && this.port || this.chainId.length;
    }
}
exports.default = Network;