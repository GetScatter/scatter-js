'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _PluginTypes = require('./PluginTypes');

var PluginTypes = _interopRequireWildcard(_PluginTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Plugin {

    constructor(_name = '', _type = '') {
        this.name = _name;
        this.type = _type;
    }

    static placeholder() {
        return new Plugin();
    }
    static fromJson(json) {
        return (0, _assign2.default)(Plugin.placeholder(), json);
    }

    isSignatureProvider() {
        return this.type === PluginTypes.BLOCKCHAIN_SUPPORT;
    }

    isValid() {
        return (0, _keys2.default)(PluginTypes).map(x => PluginTypes[x]).includes(this.type);
    }

}
exports.default = Plugin;