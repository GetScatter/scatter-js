'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlockchainsArray = exports.Blockchains = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Blockchains = exports.Blockchains = {
    EOS: 'eos',
    ETH: 'eth'
};

const BlockchainsArray = exports.BlockchainsArray = (0, _keys2.default)(Blockchains).map(key => ({ key, value: Blockchains[key] }));