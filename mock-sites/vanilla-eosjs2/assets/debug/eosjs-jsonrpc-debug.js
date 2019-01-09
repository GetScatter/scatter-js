var eosjs_jsonrpc =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rpc-web.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/eosjs-jsonrpc.ts":
/*!******************************!*\
  !*** ./src/eosjs-jsonrpc.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @module JSON-RPC
 */
// copyright defined in eosjs/LICENSE.txt
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
function arrayToHex(data) {
    var e_1, _a;
    var result = "";
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var x = data_1_1.value;
            result += ("00" + x.toString(16)).slice(-2);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/** Make RPC calls */
var JsonRpc = /** @class */ (function () {
    /**
     * @param args
     *    * `fetch`:
     *      * browsers: leave `null` or `undefined`
     *      * node: provide an implementation
     */
    function JsonRpc(endpoint, args) {
        if (args === void 0) { args = {}; }
        this.endpoint = endpoint;
        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        }
        else {
            this.fetchBuiltin = global.fetch;
        }
    }
    /** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
    JsonRpc.prototype.fetch = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, f, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(this.endpoint + path, {
                                body: JSON.stringify(body),
                                method: "POST",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        e_2.isFetchError = true;
                        throw e_2;
                    case 4:
                        if (!response.ok) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_account` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_account = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_account", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block_header_state` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block_header_state = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block_header_state", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_code` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_code = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_code", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_balance` */
    JsonRpc.prototype.get_currency_balance = function (code, account, symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_balance", { code: code, account: account, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_stats` */
    JsonRpc.prototype.get_currency_stats = function (code, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_stats", { code: code, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_info` */
    JsonRpc.prototype.get_info = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_info", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producer_schedule` */
    JsonRpc.prototype.get_producer_schedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producer_schedule", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producers` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_producers = function (json, lower_bound, limit) {
        if (json === void 0) { json = true; }
        if (lower_bound === void 0) { lower_bound = ""; }
        if (limit === void 0) { limit = 50; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producers", { json: json, lower_bound: lower_bound, limit: limit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_raw_code_and_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_raw_code_and_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_raw_code_and_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** calls `/v1/chain/get_raw_code_and_abi` and pulls out unneeded raw wasm code */
    // TODO: use `/v1/chain/get_raw_abi` directly when it becomes available
    JsonRpc.prototype.getRawAbi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var rawCodeAndAbi, abi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get_raw_code_and_abi(accountName)];
                    case 1:
                        rawCodeAndAbi = _a.sent();
                        abi = eosjs_numeric_1.base64ToBinary(rawCodeAndAbi.abi);
                        return [2 /*return*/, { accountName: rawCodeAndAbi.account_name, abi: abi }];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_table_rows` */
    JsonRpc.prototype.get_table_rows = function (_a) {
        var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, scope = _a.scope, table = _a.table, _c = _a.table_key, table_key = _c === void 0 ? "" : _c, _d = _a.lower_bound, lower_bound = _d === void 0 ? "" : _d, _e = _a.upper_bound, upper_bound = _e === void 0 ? "" : _e, _f = _a.index_position, index_position = _f === void 0 ? 1 : _f, _g = _a.key_type, key_type = _g === void 0 ? "" : _g, _h = _a.limit, limit = _h === void 0 ? 10 : _h, _j = _a.reverse, reverse = _j === void 0 ? false : _j, _k = _a.show_payer, show_payer = _k === void 0 ? false : _k;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_table_rows", {
                            json: json,
                            code: code,
                            scope: scope,
                            table: table,
                            table_key: table_key,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            index_position: index_position,
                            key_type: key_type,
                            limit: limit,
                            reverse: reverse,
                            show_payer: show_payer,
                        })];
                    case 1: return [2 /*return*/, _l.sent()];
                }
            });
        });
    };
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    JsonRpc.prototype.getRequiredKeys = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = eosjs_numeric_1.convertLegacyPublicKeys;
                        return [4 /*yield*/, this.fetch("/v1/chain/get_required_keys", {
                                transaction: args.transaction,
                                available_keys: args.availableKeys,
                            })];
                    case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).required_keys])];
                }
            });
        });
    };
    /** Push a serialized transaction */
    JsonRpc.prototype.push_transaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/push_transaction", {
                            signatures: signatures,
                            compression: 0,
                            packed_context_free_data: "",
                            packed_trx: arrayToHex(serializedTransaction),
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/db_size/get` */
    JsonRpc.prototype.db_size_get = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.fetch("/v1/db_size/get", {})];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    /** Raw call to `/v1/history/get_actions` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_actions = function (account_name, pos, offset) {
        if (pos === void 0) { pos = null; }
        if (offset === void 0) { offset = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_actions", { account_name: account_name, pos: pos, offset: offset })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_transaction` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_transaction = function (id, block_num_hint) {
        if (block_num_hint === void 0) { block_num_hint = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_transaction", { id: id, block_num_hint: block_num_hint })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_key_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_key_accounts = function (public_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_key_accounts", { public_key: public_key })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_controlled_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_controlled_accounts = function (controlling_account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_controlled_accounts", { controlling_account: controlling_account })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JsonRpc;
}()); // JsonRpc
exports.default = JsonRpc;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/eosjs-numeric.ts":
/*!******************************!*\
  !*** ./src/eosjs-numeric.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Numeric
 */
// copyright defined in eosjs/LICENSE.txt
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
var base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function create_base58_map() {
    var base58M = Array(256).fill(-1);
    for (var i = 0; i < base58Chars.length; ++i) {
        base58M[base58Chars.charCodeAt(i)] = i;
    }
    return base58M;
}
var base58Map = create_base58_map();
function create_base64_map() {
    var base64M = Array(256).fill(-1);
    for (var i = 0; i < base64Chars.length; ++i) {
        base64M[base64Chars.charCodeAt(i)] = i;
    }
    base64M["=".charCodeAt(0)] = 0;
    return base64M;
}
var base64Map = create_base64_map();
/** Is `bignum` a negative number? */
function isNegative(bignum) {
    return (bignum[bignum.length - 1] & 0x80) !== 0;
}
exports.isNegative = isNegative;
/** Negate `bignum` */
function negate(bignum) {
    var carry = 1;
    for (var i = 0; i < bignum.length; ++i) {
        var x = (~bignum[i] & 0xff) + carry;
        bignum[i] = x;
        carry = x >> 8;
    }
}
exports.negate = negate;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function decimalToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var srcDigit = s.charCodeAt(i);
        if (srcDigit < "0".charCodeAt(0) || srcDigit > "9".charCodeAt(0)) {
            throw new Error("invalid number");
        }
        var carry = srcDigit - "0".charCodeAt(0);
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 10 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("number is out of range");
        }
    }
    return result;
}
exports.decimalToBinary = decimalToBinary;
/**
 * Convert a signed decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function signedDecimalToBinary(size, s) {
    var negative = s[0] === "-";
    if (negative) {
        s = s.substr(1);
    }
    var result = decimalToBinary(size, s);
    if (negative) {
        negate(result);
        if (!isNegative(result)) {
            throw new Error("number is out of range");
        }
    }
    else if (isNegative(result)) {
        throw new Error("number is out of range");
    }
    return result;
}
exports.signedDecimalToBinary = signedDecimalToBinary;
/**
 * Convert `bignum` to an unsigned decimal number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var result = Array(minDigits).fill("0".charCodeAt(0));
    for (var i = bignum.length - 1; i >= 0; --i) {
        var carry = bignum[i];
        for (var j = 0; j < result.length; ++j) {
            var x = ((result[j] - "0".charCodeAt(0)) << 8) + carry;
            result[j] = "0".charCodeAt(0) + x % 10;
            carry = (x / 10) | 0;
        }
        while (carry) {
            result.push("0".charCodeAt(0) + carry % 10);
            carry = (carry / 10) | 0;
        }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToDecimal = binaryToDecimal;
/**
 * Convert `bignum` to a signed decimal number
 * @param minDigits 0-pad result to this many digits
 */
function signedBinaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    if (isNegative(bignum)) {
        var x = bignum.slice();
        negate(x);
        return "-" + binaryToDecimal(x, minDigits);
    }
    return binaryToDecimal(bignum, minDigits);
}
exports.signedBinaryToDecimal = signedBinaryToDecimal;
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function base58ToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error("invalid base-58 value");
        }
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("base-58 value is out of range");
        }
    }
    result.reverse();
    return result;
}
exports.base58ToBinary = base58ToBinary;
/**
 * Convert `bignum` to a base-58 number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToBase58(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var e_1, _a, e_2, _b;
    var result = [];
    try {
        for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
            var byte = bignum_1_1.value;
            var carry = byte;
            for (var j = 0; j < result.length; ++j) {
                var x = (base58Map[result[j]] << 8) + carry;
                result[j] = base58Chars.charCodeAt(x % 58);
                carry = (x / 58) | 0;
            }
            while (carry) {
                result.push(base58Chars.charCodeAt(carry % 58));
                carry = (carry / 58) | 0;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
            var byte = bignum_2_1.value;
            if (byte) {
                break;
            }
            else {
                result.push("1".charCodeAt(0));
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToBase58 = binaryToBase58;
/** Convert an unsigned base-64 number in `s` to a bignum */
function base64ToBinary(s) {
    var len = s.length;
    if ((len & 3) === 1 && s[len - 1] === "=") {
        len -= 1;
    } // fc appends an extra '='
    if ((len & 3) !== 0) {
        throw new Error("base-64 value is not padded correctly");
    }
    var groups = len >> 2;
    var bytes = groups * 3;
    if (len > 0 && s[len - 1] === "=") {
        if (s[len - 2] === "=") {
            bytes -= 2;
        }
        else {
            bytes -= 1;
        }
    }
    var result = new Uint8Array(bytes);
    for (var group = 0; group < groups; ++group) {
        var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
        var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
        var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
        var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
        result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
        if (group * 3 + 1 < bytes) {
            result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
        }
        if (group * 3 + 2 < bytes) {
            result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
        }
    }
    return result;
}
exports.base64ToBinary = base64ToBinary;
/** Public key data size, excluding type field */
exports.publicKeyDataSize = 33;
/** Private key data size, excluding type field */
exports.privateKeyDataSize = 32;
/** Signature data size, excluding type field */
exports.signatureDataSize = 65;
function digestSuffixRipemd160(data, suffix) {
    var d = new Uint8Array(data.length + suffix.length);
    for (var i = 0; i < data.length; ++i) {
        d[i] = data[i];
    }
    for (var i = 0; i < suffix.length; ++i) {
        d[data.length + i] = suffix.charCodeAt(i);
    }
    return ripemd160(d);
}
function stringToKey(s, type, size, suffix) {
    var whole = base58ToBinary(size + 4, s);
    var result = { type: type, data: new Uint8Array(whole.buffer, 0, size) };
    var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
    if (digest[0] !== whole[size + 0] || digest[1] !== whole[size + 1]
        || digest[2] !== whole[size + 2] || digest[3] !== whole[size + 3]) {
        throw new Error("checksum doesn't match");
    }
    return result;
}
function keyToString(key, suffix, prefix) {
    var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
    var whole = new Uint8Array(key.data.length + 4);
    for (var i = 0; i < key.data.length; ++i) {
        whole[i] = key.data[i];
    }
    for (var i = 0; i < 4; ++i) {
        whole[i + key.data.length] = digest[i];
    }
    return prefix + binaryToBase58(whole);
}
/** Convert key in `s` to binary form */
function stringToPublicKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing public key");
    }
    if (s.substr(0, 3) === "EOS") {
        var whole = base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
        var key = { type: 0 /* k1 */, data: new Uint8Array(exports.publicKeyDataSize) };
        for (var i = 0; i < exports.publicKeyDataSize; ++i) {
            key.data[i] = whole[i];
        }
        var digest = new Uint8Array(ripemd160(key.data));
        if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
            || digest[2] !== whole[35] || digest[3] !== whole[36]) {
            throw new Error("checksum doesn't match");
        }
        return key;
    }
    else if (s.substr(0, 7) === "PUB_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.publicKeyDataSize, "K1");
    }
    else if (s.substr(0, 7) === "PUB_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.publicKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.stringToPublicKey = stringToPublicKey;
/** Convert `key` to string (base-58) form */
function publicKeyToString(key) {
    if (key.type === 0 /* k1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "K1", "PUB_K1_");
    }
    else if (key.type === 1 /* r1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "R1", "PUB_R1_");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.publicKeyToString = publicKeyToString;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKey(s) {
    if (s.substr(0, 3) === "EOS") {
        return publicKeyToString(stringToPublicKey(s));
    }
    return s;
}
exports.convertLegacyPublicKey = convertLegacyPublicKey;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKeys(keys) {
    return keys.map(convertLegacyPublicKey);
}
exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
/** Convert key in `s` to binary form */
function stringToPrivateKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing private key");
    }
    if (s.substr(0, 7) === "PVT_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.privateKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.stringToPrivateKey = stringToPrivateKey;
/** Convert `key` to string (base-58) form */
function privateKeyToString(key) {
    if (key.type === 1 /* r1 */) {
        return keyToString(key, "R1", "PVT_R1_");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.privateKeyToString = privateKeyToString;
/** Convert key in `s` to binary form */
function stringToSignature(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing signature");
    }
    if (s.substr(0, 7) === "SIG_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.signatureDataSize, "K1");
    }
    else if (s.substr(0, 7) === "SIG_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.signatureDataSize, "R1");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.stringToSignature = stringToSignature;
/** Convert `signature` to string (base-58) form */
function signatureToString(signature) {
    if (signature.type === 0 /* k1 */) {
        return keyToString(signature, "K1", "SIG_K1_");
    }
    else if (signature.type === 1 /* r1 */) {
        return keyToString(signature, "R1", "SIG_R1_");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.signatureToString = signatureToString;


/***/ }),

/***/ "./src/eosjs-rpcerror.ts":
/*!*******************************!*\
  !*** ./src/eosjs-rpcerror.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module RPC-Error
 */
// copyright defined in eosjs/LICENSE.txt
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Holds detailed error information */
var RpcError = /** @class */ (function (_super) {
    __extends(RpcError, _super);
    function RpcError(json) {
        var _this = this;
        if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
            _this = _super.call(this, json.error.details[0].message) || this;
        }
        else if (json.processed && json.processed.except && json.processed.except.message) {
            _this = _super.call(this, json.processed.except.message) || this;
        }
        else {
            _this = _super.call(this, json.message) || this;
        }
        Object.setPrototypeOf(_this, RpcError.prototype);
        _this.json = json;
        return _this;
    }
    return RpcError;
}(Error));
exports.default = RpcError;


/***/ }),

/***/ "./src/ripemd.js":
/*!***********************!*\
  !*** ./src/ripemd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

/*
	RIPEMD-160.js

		developed
			by K. (https://github.com/wlzla000)
			on December 27-29, 2017,

		licensed under


		the MIT license

		Copyright (c) 2017 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/



class RIPEMD160
{
	constructor()
	{
		// https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
		// http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
	}

	static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
	{
		//  Obtain the number of bytes needed to pad the message.
		// It does not contain the size of the message size information.
		/*
			https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

			The Cryptographic Hash Function RIPEMD-160

			written by
				Bart Preneel,
				Hans Dobbertin,
				Antoon Bosselaers
			in
				1997.

			--------------------------------------------------

			§5     Description of RIPEMD-160

			......

			 In order to guarantee that the total input size is a
			multiple of 512 bits, the input is padded in the same
			way as for all the members of the MD4-family: one
			appends a single 1 followed by a string of 0s (the
			number of 0s lies between 0 and 511); the last 64 bits
			of the extended input contain the binary representation
			of the input size in bits, least significant byte first.
		*/
		/*
			https://tools.ietf.org/rfc/rfc1186.txt

			RFC 1186: MD4 Message Digest Algorithm.

			written by
				Ronald Linn Rivest
			in
				October 1990.

			--------------------------------------------------

			§3     MD4 Algorithm Description

			......

			Step 1. Append padding bits

			 The message is "padded" (extended) so that its length
			(in bits) is congruent to 448, modulo 512. That is, the
			message is extended so that it is just 64 bits shy of
			being a multiple of 512 bits long. Padding is always
			performed, even if the length of the message is already
			congruent to 448, modulo 512 (in which case 512 bits of
			padding are added).

			 Padding is performed as follows: a single "1" bit is
			appended to the message, and then enough zero bits are
			appended so that the length in bits of the padded
			message becomes congruent to 448, modulo 512.

			Step 2. Append length

			 A 64-bit representation of b (the length of the message
			before the padding bits were added) is appended to the
			result of the previous step. In the unlikely event that
			b is greater than 2^64, then only the low-order 64 bits
			of b are used. (These bits are appended as two 32-bit
			words and appended low-order word first in accordance
			with the previous conventions.)

			 At this point the resulting message (after padding with
			bits and with b) has a length that is an exact multiple
			of 512 bits. Equivalently, this message has a length
			that is an exact multiple of 16 (32-bit) words. Let
			M[0 ... N-1] denote the words of the resulting message,
			where N is a multiple of 16.
		*/
		// https://crypto.stackexchange.com/a/32407/54568
		/*
			Example case  # 1
				[0 bit: message.]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 2
				[512-bits: message]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 3
				[(512 - 64 = 448) bits: message.]
				[1 bit: 1.]
				[511 bits: 0.]
				[64 bits: message size information.]

			Example case  # 4
				[(512 - 65 = 447) bits: message.]
				[1 bit: 1.]
				[0 bit: 0.]
				[64 bits: message size information.]
		*/
		// The number of padding zero bits:
		//      511 - [{(message size in bits) + 64} (mod 512)]
		return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
	}
	static pad(message /* An ArrayBuffer. */)
	{
		const message_size = message.byteLength;
		const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

		//  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
		// bitwise operation in Javascript is done on 32-bits operands.
		const divmod = (dividend, divisor) => [
			Math.floor(dividend / divisor),
			dividend % divisor
		];
		/*
To shift

   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
                                     t o
   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

--------------------------------------------------------------------------------

Method #1

    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
                         (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                     (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
		const [
			msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
			msg_byte_size_least // Value range [0, (2 ** 32) - 1].
		] = divmod(message_size, uint32_max_plus_1);
		const [
			carry, // Value range [0, 7].
			msg_bit_size_least // Value range [0, (2 ** 32) - 8].
		] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
		const message_bit_size_most = message_byte_size_most * 8
			+ carry; // Value range [0, (2 ** 24) - 1].

--------------------------------------------------------------------------------

Method #2
    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
      [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
                         (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                          (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		*/
		const [
			msg_bit_size_most,
			msg_bit_size_least
		] = divmod(message_size, 536870912 /* (2 ** 29) */)
			.map((x, index) => (index ? (x * 8) : x));

		// `ArrayBuffer.transfer()` is not supported.
		const padded = new Uint8Array(message_size + n_pad + 8);
		padded.set(new Uint8Array(message), 0);
		const data_view = new DataView(padded.buffer);
		data_view.setUint8(message_size, 0b10000000);
		data_view.setUint32(
			message_size + n_pad,
			msg_bit_size_least,
			true // Little-endian
		);
		data_view.setUint32(
			message_size + n_pad + 4,
			msg_bit_size_most,
			true // Little-endian
		);

		return padded.buffer;
	}

	static f(j, x, y, z)
	{
		if(0 <= j && j <= 15)
		{ // Exclusive-OR
			return x ^ y ^ z;
		}
		if(16 <= j && j <= 31)
		{ // Multiplexing (muxing)
			return (x & y) | (~x & z);
		}
		if(32 <= j && j <= 47)
		{
			return (x | ~y) ^ z;
		}
		if(48 <= j && j <= 63)
		{ // Multiplexing (muxing)
			return (x & z) | (y & ~z);
		}
		if(64 <= j && j <= 79)
		{
			return x ^ (y | ~z);
		}
	}
	static K(j)
	{
		if(0 <= j && j <= 15)
		{
			return 0x00000000;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.SQRT2)
			return 0x5A827999;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.sqrt(3))
			return 0x6ED9EBA1;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.sqrt(5))
			return 0x8F1BBCDC;
		}
		if(64 <= j && j <= 79)
		{
			// Math.floor((2 ** 30) * Math.sqrt(7))
			return 0xA953FD4E;
		}
	}
	static KP(j) // K'
	{
		if(0 <= j && j <= 15)
		{
			// Math.floor((2 ** 30) * Math.cbrt(2))
			return 0x50A28BE6;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.cbrt(3))
			return 0x5C4DD124;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.cbrt(5))
			return 0x6D703EF3;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.cbrt(7))
			return 0x7A6D76E9;
		}
		if(64 <= j && j <= 79)
		{
			return 0x00000000;
		}
	}
	static add_modulo32(/* ...... */)
	{
		// 1.  Modulo addition (addition modulo) is associative.
		//    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
 		// 2.  Bitwise operation in Javascript
		//    is done on 32-bits operands
		//    and results in a 32-bits value.
		return Array
			.from(arguments)
			.reduce((a, b) => (a + b), 0) | 0;
	}
	static rol32(value, count)
	{ // Cyclic left shift (rotate) on 32-bits value.
		return (value << count) | (value >>> (32 - count));
	}
	static hash(message /* An ArrayBuffer. */)
	{
		//////////       Padding       //////////

		// The padded message.
		const padded = RIPEMD160.pad(message);

		//////////     Compression     //////////

		// Message word selectors.
		const r = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
		];
		const rP = [ // r'
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
		];

		// Amounts for 'rotate left' operation.
		const s = [
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
		];
		const sP = [ // s'
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
		];

		// The size, in bytes, of a word.
		const word_size = 4;

		// The size, in bytes, of a 16-words block.
		const block_size = 64;

		// The number of the 16-words blocks.
		const t = padded.byteLength / block_size;

		//  The message after padding consists of t 16-word blocks that
		// are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
		const X = (new Array(t))
			.fill(undefined)
			.map((_, i) => j => (
				new DataView(
					padded, i * block_size, block_size
				).getUint32(
					j * word_size,
					true // Little-endian
				)
			));

		//  The result of RIPEMD-160 is contained in five 32-bit words,
		// which form the internal state of the algorithm. The final
		// content of these five 32-bit words is converted to a 160-bit
		// string, again using the little-endian convention.
		let h = [
			0x67452301, // h_0
			0xEFCDAB89, // h_1
			0x98BADCFE, // h_2
			0x10325476, // h_3
			0xC3D2E1F0  // h_4
		];

		for(let i = 0; i < t; ++i)
		{
			let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4];
			let AP = A, BP = B, CP = C, DP = D, EP = E;
			for(let j = 0; j < 80; ++j)
			{
				// Left rounds
				let T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							A,
							RIPEMD160.f(j, B, C, D),
							X[i](r[j]),
							RIPEMD160.K(j)
						),
						s[j]
					),
					E
				);
				A = E;
				E = D;
				D = RIPEMD160.rol32(C, 10);
				C = B;
				B = T;

				// Right rounds
				T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							AP,
							RIPEMD160.f(
								79 - j,
								BP,
								CP,
								DP
							),
							X[i](rP[j]),
							RIPEMD160.KP(j)
						),
						sP[j]
					),
					EP
				);
				AP = EP;
				EP = DP;
				DP = RIPEMD160.rol32(CP, 10);
				CP = BP;
				BP = T;
			}
			let T = RIPEMD160.add_modulo32(h[1], C, DP);
			h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
			h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
			h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
			h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
			h[0] = T;
		}

		//  The final output string then consists of the concatenatation
		// of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
		// 4-byte string using the little-endian convention.
		const result = new ArrayBuffer(20);
		const data_view = new DataView(result);
		h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
		return result;
	}
}

module.exports = {
	RIPEMD160
}


/***/ }),

/***/ "./src/rpc-web.ts":
/*!************************!*\
  !*** ./src/rpc-web.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var eosjs_jsonrpc_1 = __webpack_require__(/*! ./eosjs-jsonrpc */ "./src/eosjs-jsonrpc.ts");
exports.default = eosjs_jsonrpc_1.default;
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
exports.RpcError = eosjs_rpcerror_1.default;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtanNvbnJwYy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtbnVtZXJpYy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZW9zanMtcnBjZXJyb3IudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3JpcGVtZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvcnBjLXdlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdmRhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsK0NBQWlCO0FBQy9DO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsaURBQWtCO0FBQ2pEIiwiZmlsZSI6ImVvc2pzLWpzb25ycGMtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ycGMtd2ViLnRzXCIpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBtb2R1bGUgSlNPTi1SUENcclxuICovXHJcbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24gKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW9zanNfbnVtZXJpY18xID0gcmVxdWlyZShcIi4vZW9zanMtbnVtZXJpY1wiKTtcclxudmFyIGVvc2pzX3JwY2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lb3Nqcy1ycGNlcnJvclwiKTtcclxuZnVuY3Rpb24gYXJyYXlUb0hleChkYXRhKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBkYXRhXzEgPSBfX3ZhbHVlcyhkYXRhKSwgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpOyAhZGF0YV8xXzEuZG9uZTsgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZGF0YV8xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAoXCIwMFwiICsgeC50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFfMV8xICYmICFkYXRhXzFfMS5kb25lICYmIChfYSA9IGRhdGFfMS5yZXR1cm4pKSBfYS5jYWxsKGRhdGFfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuLyoqIE1ha2UgUlBDIGNhbGxzICovXHJcbnZhciBKc29uUnBjID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICogICAgKiBgZmV0Y2hgOlxyXG4gICAgICogICAgICAqIGJyb3dzZXJzOiBsZWF2ZSBgbnVsbGAgb3IgYHVuZGVmaW5lZGBcclxuICAgICAqICAgICAgKiBub2RlOiBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEpzb25ScGMoZW5kcG9pbnQsIGFyZ3MpIHtcclxuICAgICAgICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7IGFyZ3MgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludDtcclxuICAgICAgICBpZiAoYXJncy5mZXRjaCkge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQnVpbHRpbiA9IGFyZ3MuZmV0Y2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoQnVpbHRpbiA9IGdsb2JhbC5mZXRjaDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogUG9zdCBgYm9keWAgdG8gYGVuZHBvaW50ICsgcGF0aGAuIFRocm93cyBkZXRhaWxlZCBlcnJvciBpbmZvcm1hdGlvbiBpbiBgUnBjRXJyb3JgIHdoZW4gYXZhaWxhYmxlLiAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAocGF0aCwgYm9keSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqc29uLCBmLCBlXzI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB0aGlzLmZldGNoQnVpbHRpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZih0aGlzLmVuZHBvaW50ICsgcGF0aCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uLnByb2Nlc3NlZCAmJiBqc29uLnByb2Nlc3NlZC5leGNlcHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlb3Nqc19ycGNlcnJvcl8xLmRlZmF1bHQoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMi5pc0ZldGNoRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZW9zanNfcnBjZXJyb3JfMS5kZWZhdWx0KGpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBqc29uXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2FiaWAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfYWJpID0gZnVuY3Rpb24gKGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYWJpXCIsIHsgYWNjb3VudF9uYW1lOiBhY2NvdW50X25hbWUgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9hY2NvdW50YCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9hY2NvdW50ID0gZnVuY3Rpb24gKGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYWNjb3VudFwiLCB7IGFjY291bnRfbmFtZTogYWNjb3VudF9uYW1lIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYmxvY2tfaGVhZGVyX3N0YXRlYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9ibG9ja19oZWFkZXJfc3RhdGUgPSBmdW5jdGlvbiAoYmxvY2tfbnVtX29yX2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9ibG9ja19oZWFkZXJfc3RhdGVcIiwgeyBibG9ja19udW1fb3JfaWQ6IGJsb2NrX251bV9vcl9pZCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9ibG9jayA9IGZ1bmN0aW9uIChibG9ja19udW1fb3JfaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2Jsb2NrXCIsIHsgYmxvY2tfbnVtX29yX2lkOiBibG9ja19udW1fb3JfaWQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jb2RlYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9jb2RlID0gZnVuY3Rpb24gKGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfY29kZVwiLCB7IGFjY291bnRfbmFtZTogYWNjb3VudF9uYW1lIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfY3VycmVuY3lfYmFsYW5jZWAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9jdXJyZW5jeV9iYWxhbmNlID0gZnVuY3Rpb24gKGNvZGUsIGFjY291bnQsIHN5bWJvbCkge1xyXG4gICAgICAgIGlmIChzeW1ib2wgPT09IHZvaWQgMCkgeyBzeW1ib2wgPSBudWxsOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9jdXJyZW5jeV9iYWxhbmNlXCIsIHsgY29kZTogY29kZSwgYWNjb3VudDogYWNjb3VudCwgc3ltYm9sOiBzeW1ib2wgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jdXJyZW5jeV9zdGF0c2AgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9jdXJyZW5jeV9zdGF0cyA9IGZ1bmN0aW9uIChjb2RlLCBzeW1ib2wpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X3N0YXRzXCIsIHsgY29kZTogY29kZSwgc3ltYm9sOiBzeW1ib2wgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9pbmZvYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X2luZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9pbmZvXCIsIHt9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3Byb2R1Y2VyX3NjaGVkdWxlYCAqL1xyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuZ2V0X3Byb2R1Y2VyX3NjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcHJvZHVjZXJfc2NoZWR1bGVcIiwge30pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcHJvZHVjZXJzYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldF9wcm9kdWNlcnMgPSBmdW5jdGlvbiAoanNvbiwgbG93ZXJfYm91bmQsIGxpbWl0KSB7XHJcbiAgICAgICAgaWYgKGpzb24gPT09IHZvaWQgMCkgeyBqc29uID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChsb3dlcl9ib3VuZCA9PT0gdm9pZCAwKSB7IGxvd2VyX2JvdW5kID0gXCJcIjsgfVxyXG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gNTA7IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Byb2R1Y2Vyc1wiLCB7IGpzb246IGpzb24sIGxvd2VyX2JvdW5kOiBsb3dlcl9ib3VuZCwgbGltaXQ6IGxpbWl0IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaWAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfcmF3X2NvZGVfYW5kX2FiaSA9IGZ1bmN0aW9uIChhY2NvdW50X25hbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlcIiwgeyBhY2NvdW50X25hbWU6IGFjY291bnRfbmFtZSB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIGNhbGxzIGAvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlgIGFuZCBwdWxscyBvdXQgdW5uZWVkZWQgcmF3IHdhc20gY29kZSAqL1xyXG4gICAgLy8gVE9ETzogdXNlIGAvdjEvY2hhaW4vZ2V0X3Jhd19hYmlgIGRpcmVjdGx5IHdoZW4gaXQgYmVjb21lcyBhdmFpbGFibGVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmdldFJhd0FiaSA9IGZ1bmN0aW9uIChhY2NvdW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJhd0NvZGVBbmRBYmksIGFiaTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRfcmF3X2NvZGVfYW5kX2FiaShhY2NvdW50TmFtZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3Q29kZUFuZEFiaSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJpID0gZW9zanNfbnVtZXJpY18xLmJhc2U2NFRvQmluYXJ5KHJhd0NvZGVBbmRBYmkuYWJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgYWNjb3VudE5hbWU6IHJhd0NvZGVBbmRBYmkuYWNjb3VudF9uYW1lLCBhYmk6IGFiaSB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3RhYmxlX3Jvd3NgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRfdGFibGVfcm93cyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLmpzb24sIGpzb24gPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBjb2RlID0gX2EuY29kZSwgc2NvcGUgPSBfYS5zY29wZSwgdGFibGUgPSBfYS50YWJsZSwgX2MgPSBfYS50YWJsZV9rZXksIHRhYmxlX2tleSA9IF9jID09PSB2b2lkIDAgPyBcIlwiIDogX2MsIF9kID0gX2EubG93ZXJfYm91bmQsIGxvd2VyX2JvdW5kID0gX2QgPT09IHZvaWQgMCA/IFwiXCIgOiBfZCwgX2UgPSBfYS51cHBlcl9ib3VuZCwgdXBwZXJfYm91bmQgPSBfZSA9PT0gdm9pZCAwID8gXCJcIiA6IF9lLCBfZiA9IF9hLmluZGV4X3Bvc2l0aW9uLCBpbmRleF9wb3NpdGlvbiA9IF9mID09PSB2b2lkIDAgPyAxIDogX2YsIF9nID0gX2Eua2V5X3R5cGUsIGtleV90eXBlID0gX2cgPT09IHZvaWQgMCA/IFwiXCIgOiBfZywgX2ggPSBfYS5saW1pdCwgbGltaXQgPSBfaCA9PT0gdm9pZCAwID8gMTAgOiBfaCwgX2ogPSBfYS5yZXZlcnNlLCByZXZlcnNlID0gX2ogPT09IHZvaWQgMCA/IGZhbHNlIDogX2osIF9rID0gX2Euc2hvd19wYXllciwgc2hvd19wYXllciA9IF9rID09PSB2b2lkIDAgPyBmYWxzZSA6IF9rO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfbCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfbC5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfdGFibGVfcm93c1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uOiBqc29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiB0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlX2tleTogdGFibGVfa2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJfYm91bmQ6IGxvd2VyX2JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJfYm91bmQ6IHVwcGVyX2JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhfcG9zaXRpb246IGluZGV4X3Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5X3R5cGU6IGtleV90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfcGF5ZXI6IHNob3dfcGF5ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfbC5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogR2V0IHN1YnNldCBvZiBgYXZhaWxhYmxlS2V5c2AgbmVlZGVkIHRvIG1lZXQgYXV0aG9yaXRpZXMgaW4gYHRyYW5zYWN0aW9uYC4gSW1wbGVtZW50cyBgQXV0aG9yaXR5UHJvdmlkZXJgICovXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5nZXRSZXF1aXJlZEtleXMgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGVvc2pzX251bWVyaWNfMS5jb252ZXJ0TGVnYWN5UHVibGljS2V5cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcmVxdWlyZWRfa2V5c1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb246IGFyZ3MudHJhbnNhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlX2tleXM6IGFyZ3MuYXZhaWxhYmxlS2V5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5hcHBseSh2b2lkIDAsIFsoX2Iuc2VudCgpKS5yZXF1aXJlZF9rZXlzXSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUHVzaCBhIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb24gKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLnB1c2hfdHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgc2lnbmF0dXJlcyA9IF9hLnNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IF9hLnNlcmlhbGl6ZWRUcmFuc2FjdGlvbjtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vcHVzaF90cmFuc2FjdGlvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzOiBzaWduYXR1cmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3Npb246IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrZWRfY29udGV4dF9mcmVlX2RhdGE6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWNrZWRfdHJ4OiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYi5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9kYl9zaXplL2dldGAgKi9cclxuICAgIEpzb25ScGMucHJvdG90eXBlLmRiX3NpemVfZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvZGJfc2l6ZS9nZXRcIiwge30pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfYWN0aW9uc2AgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5oaXN0b3J5X2dldF9hY3Rpb25zID0gZnVuY3Rpb24gKGFjY291bnRfbmFtZSwgcG9zLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAocG9zID09PSB2b2lkIDApIHsgcG9zID0gbnVsbDsgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgeyBvZmZzZXQgPSBudWxsOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2FjdGlvbnNcIiwgeyBhY2NvdW50X25hbWU6IGFjY291bnRfbmFtZSwgcG9zOiBwb3MsIG9mZnNldDogb2Zmc2V0IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF90cmFuc2FjdGlvbmAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbiAgICBKc29uUnBjLnByb3RvdHlwZS5oaXN0b3J5X2dldF90cmFuc2FjdGlvbiA9IGZ1bmN0aW9uIChpZCwgYmxvY2tfbnVtX2hpbnQpIHtcclxuICAgICAgICBpZiAoYmxvY2tfbnVtX2hpbnQgPT09IHZvaWQgMCkgeyBibG9ja19udW1faGludCA9IG51bGw7IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZmV0Y2goXCIvdjEvaGlzdG9yeS9nZXRfdHJhbnNhY3Rpb25cIiwgeyBpZDogaWQsIGJsb2NrX251bV9oaW50OiBibG9ja19udW1faGludCB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfa2V5X2FjY291bnRzYCAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgIEpzb25ScGMucHJvdG90eXBlLmhpc3RvcnlfZ2V0X2tleV9hY2NvdW50cyA9IGZ1bmN0aW9uIChwdWJsaWNfa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2tleV9hY2NvdW50c1wiLCB7IHB1YmxpY19rZXk6IHB1YmxpY19rZXkgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHNgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgSnNvblJwYy5wcm90b3R5cGUuaGlzdG9yeV9nZXRfY29udHJvbGxlZF9hY2NvdW50cyA9IGZ1bmN0aW9uIChjb250cm9sbGluZ19hY2NvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHNcIiwgeyBjb250cm9sbGluZ19hY2NvdW50OiBjb250cm9sbGluZ19hY2NvdW50IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSnNvblJwYztcclxufSgpKTsgLy8gSnNvblJwY1xyXG5leHBvcnRzLmRlZmF1bHQgPSBKc29uUnBjO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBtb2R1bGUgTnVtZXJpY1xyXG4gKi9cclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbiAobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby12YXItcmVxdWlyZXNcclxudmFyIHJpcGVtZDE2MCA9IHJlcXVpcmUoXCIuL3JpcGVtZFwiKS5SSVBFTUQxNjAuaGFzaDtcclxudmFyIGJhc2U1OENoYXJzID0gXCIxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6XCI7XHJcbnZhciBiYXNlNjRDaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG5mdW5jdGlvbiBjcmVhdGVfYmFzZTU4X21hcCgpIHtcclxuICAgIHZhciBiYXNlNThNID0gQXJyYXkoMjU2KS5maWxsKC0xKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTU4Q2hhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBiYXNlNThNW2Jhc2U1OENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlNThNO1xyXG59XHJcbnZhciBiYXNlNThNYXAgPSBjcmVhdGVfYmFzZTU4X21hcCgpO1xyXG5mdW5jdGlvbiBjcmVhdGVfYmFzZTY0X21hcCgpIHtcclxuICAgIHZhciBiYXNlNjRNID0gQXJyYXkoMjU2KS5maWxsKC0xKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0Q2hhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBiYXNlNjRNW2Jhc2U2NENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcclxuICAgIH1cclxuICAgIGJhc2U2NE1bXCI9XCIuY2hhckNvZGVBdCgwKV0gPSAwO1xyXG4gICAgcmV0dXJuIGJhc2U2NE07XHJcbn1cclxudmFyIGJhc2U2NE1hcCA9IGNyZWF0ZV9iYXNlNjRfbWFwKCk7XHJcbi8qKiBJcyBgYmlnbnVtYCBhIG5lZ2F0aXZlIG51bWJlcj8gKi9cclxuZnVuY3Rpb24gaXNOZWdhdGl2ZShiaWdudW0pIHtcclxuICAgIHJldHVybiAoYmlnbnVtW2JpZ251bS5sZW5ndGggLSAxXSAmIDB4ODApICE9PSAwO1xyXG59XHJcbmV4cG9ydHMuaXNOZWdhdGl2ZSA9IGlzTmVnYXRpdmU7XHJcbi8qKiBOZWdhdGUgYGJpZ251bWAgKi9cclxuZnVuY3Rpb24gbmVnYXRlKGJpZ251bSkge1xyXG4gICAgdmFyIGNhcnJ5ID0gMTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmlnbnVtLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgdmFyIHggPSAofmJpZ251bVtpXSAmIDB4ZmYpICsgY2Fycnk7XHJcbiAgICAgICAgYmlnbnVtW2ldID0geDtcclxuICAgICAgICBjYXJyeSA9IHggPj4gODtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLm5lZ2F0ZSA9IG5lZ2F0ZTtcclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbmZ1bmN0aW9uIGRlY2ltYWxUb0JpbmFyeShzaXplLCBzKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgc3JjRGlnaXQgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKHNyY0RpZ2l0IDwgXCIwXCIuY2hhckNvZGVBdCgwKSB8fCBzcmNEaWdpdCA+IFwiOVwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjYXJyeSA9IHNyY0RpZ2l0IC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7ICsraikge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHJlc3VsdFtqXSAqIDEwICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuZGVjaW1hbFRvQmluYXJ5ID0gZGVjaW1hbFRvQmluYXJ5O1xyXG4vKipcclxuICogQ29udmVydCBhIHNpZ25lZCBkZWNpbWFsIG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cclxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxyXG4gKi9cclxuZnVuY3Rpb24gc2lnbmVkRGVjaW1hbFRvQmluYXJ5KHNpemUsIHMpIHtcclxuICAgIHZhciBuZWdhdGl2ZSA9IHNbMF0gPT09IFwiLVwiO1xyXG4gICAgaWYgKG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgcyA9IHMuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IGRlY2ltYWxUb0JpbmFyeShzaXplLCBzKTtcclxuICAgIGlmIChuZWdhdGl2ZSkge1xyXG4gICAgICAgIG5lZ2F0ZShyZXN1bHQpO1xyXG4gICAgICAgIGlmICghaXNOZWdhdGl2ZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNOZWdhdGl2ZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5zaWduZWREZWNpbWFsVG9CaW5hcnkgPSBzaWduZWREZWNpbWFsVG9CaW5hcnk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyXHJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcclxuICovXHJcbmZ1bmN0aW9uIGJpbmFyeVRvRGVjaW1hbChiaWdudW0sIG1pbkRpZ2l0cykge1xyXG4gICAgaWYgKG1pbkRpZ2l0cyA9PT0gdm9pZCAwKSB7IG1pbkRpZ2l0cyA9IDE7IH1cclxuICAgIHZhciByZXN1bHQgPSBBcnJheShtaW5EaWdpdHMpLmZpbGwoXCIwXCIuY2hhckNvZGVBdCgwKSk7XHJcbiAgICBmb3IgKHZhciBpID0gYmlnbnVtLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGNhcnJ5ID0gYmlnbnVtW2ldO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gKChyZXN1bHRbal0gLSBcIjBcIi5jaGFyQ29kZUF0KDApKSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSBcIjBcIi5jaGFyQ29kZUF0KDApICsgeCAlIDEwO1xyXG4gICAgICAgICAgICBjYXJyeSA9ICh4IC8gMTApIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiMFwiLmNoYXJDb2RlQXQoMCkgKyBjYXJyeSAlIDEwKTtcclxuICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyAxMCkgfCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIF9fc3ByZWFkKHJlc3VsdCkpO1xyXG59XHJcbmV4cG9ydHMuYmluYXJ5VG9EZWNpbWFsID0gYmluYXJ5VG9EZWNpbWFsO1xyXG4vKipcclxuICogQ29udmVydCBgYmlnbnVtYCB0byBhIHNpZ25lZCBkZWNpbWFsIG51bWJlclxyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXHJcbiAqL1xyXG5mdW5jdGlvbiBzaWduZWRCaW5hcnlUb0RlY2ltYWwoYmlnbnVtLCBtaW5EaWdpdHMpIHtcclxuICAgIGlmIChtaW5EaWdpdHMgPT09IHZvaWQgMCkgeyBtaW5EaWdpdHMgPSAxOyB9XHJcbiAgICBpZiAoaXNOZWdhdGl2ZShiaWdudW0pKSB7XHJcbiAgICAgICAgdmFyIHggPSBiaWdudW0uc2xpY2UoKTtcclxuICAgICAgICBuZWdhdGUoeCk7XHJcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgYmluYXJ5VG9EZWNpbWFsKHgsIG1pbkRpZ2l0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmluYXJ5VG9EZWNpbWFsKGJpZ251bSwgbWluRGlnaXRzKTtcclxufVxyXG5leHBvcnRzLnNpZ25lZEJpbmFyeVRvRGVjaW1hbCA9IHNpZ25lZEJpbmFyeVRvRGVjaW1hbDtcclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS01OCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbmZ1bmN0aW9uIGJhc2U1OFRvQmluYXJ5KHNpemUsIHMpIHtcclxuICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBjYXJyeSA9IGJhc2U1OE1hcFtzLmNoYXJDb2RlQXQoaSldO1xyXG4gICAgICAgIGlmIChjYXJyeSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBiYXNlLTU4IHZhbHVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7ICsraikge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHJlc3VsdFtqXSAqIDU4ICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS01OCB2YWx1ZSBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5iYXNlNThUb0JpbmFyeSA9IGJhc2U1OFRvQmluYXJ5O1xyXG4vKipcclxuICogQ29udmVydCBgYmlnbnVtYCB0byBhIGJhc2UtNTggbnVtYmVyXHJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcclxuICovXHJcbmZ1bmN0aW9uIGJpbmFyeVRvQmFzZTU4KGJpZ251bSwgbWluRGlnaXRzKSB7XHJcbiAgICBpZiAobWluRGlnaXRzID09PSB2b2lkIDApIHsgbWluRGlnaXRzID0gMTsgfVxyXG4gICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGJpZ251bV8xID0gX192YWx1ZXMoYmlnbnVtKSwgYmlnbnVtXzFfMSA9IGJpZ251bV8xLm5leHQoKTsgIWJpZ251bV8xXzEuZG9uZTsgYmlnbnVtXzFfMSA9IGJpZ251bV8xLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZSA9IGJpZ251bV8xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBjYXJyeSA9IGJ5dGU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IChiYXNlNThNYXBbcmVzdWx0W2pdXSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2pdID0gYmFzZTU4Q2hhcnMuY2hhckNvZGVBdCh4ICUgNTgpO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSAoeCAvIDU4KSB8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChiYXNlNThDaGFycy5jaGFyQ29kZUF0KGNhcnJ5ICUgNTgpKTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoYmlnbnVtXzFfMSAmJiAhYmlnbnVtXzFfMS5kb25lICYmIChfYSA9IGJpZ251bV8xLnJldHVybikpIF9hLmNhbGwoYmlnbnVtXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAodmFyIGJpZ251bV8yID0gX192YWx1ZXMoYmlnbnVtKSwgYmlnbnVtXzJfMSA9IGJpZ251bV8yLm5leHQoKTsgIWJpZ251bV8yXzEuZG9uZTsgYmlnbnVtXzJfMSA9IGJpZ251bV8yLm5leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZSA9IGJpZ251bV8yXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChieXRlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiMVwiLmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChiaWdudW1fMl8xICYmICFiaWdudW1fMl8xLmRvbmUgJiYgKF9iID0gYmlnbnVtXzIucmV0dXJuKSkgX2IuY2FsbChiaWdudW1fMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIF9fc3ByZWFkKHJlc3VsdCkpO1xyXG59XHJcbmV4cG9ydHMuYmluYXJ5VG9CYXNlNTggPSBiaW5hcnlUb0Jhc2U1ODtcclxuLyoqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS02NCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtICovXHJcbmZ1bmN0aW9uIGJhc2U2NFRvQmluYXJ5KHMpIHtcclxuICAgIHZhciBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmICgobGVuICYgMykgPT09IDEgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcclxuICAgICAgICBsZW4gLT0gMTtcclxuICAgIH0gLy8gZmMgYXBwZW5kcyBhbiBleHRyYSAnPSdcclxuICAgIGlmICgobGVuICYgMykgIT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYXNlLTY0IHZhbHVlIGlzIG5vdCBwYWRkZWQgY29ycmVjdGx5XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGdyb3VwcyA9IGxlbiA+PiAyO1xyXG4gICAgdmFyIGJ5dGVzID0gZ3JvdXBzICogMztcclxuICAgIGlmIChsZW4gPiAwICYmIHNbbGVuIC0gMV0gPT09IFwiPVwiKSB7XHJcbiAgICAgICAgaWYgKHNbbGVuIC0gMl0gPT09IFwiPVwiKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBieXRlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShieXRlcyk7XHJcbiAgICBmb3IgKHZhciBncm91cCA9IDA7IGdyb3VwIDwgZ3JvdXBzOyArK2dyb3VwKSB7XHJcbiAgICAgICAgdmFyIGRpZ2l0MCA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMCldO1xyXG4gICAgICAgIHZhciBkaWdpdDEgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDEpXTtcclxuICAgICAgICB2YXIgZGlnaXQyID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAyKV07XHJcbiAgICAgICAgdmFyIGRpZ2l0MyA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMyldO1xyXG4gICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAwXSA9IChkaWdpdDAgPDwgMikgfCAoZGlnaXQxID4+IDQpO1xyXG4gICAgICAgIGlmIChncm91cCAqIDMgKyAxIDwgYnl0ZXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDFdID0gKChkaWdpdDEgJiAxNSkgPDwgNCkgfCAoZGlnaXQyID4+IDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JvdXAgKiAzICsgMiA8IGJ5dGVzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAyXSA9ICgoZGlnaXQyICYgMykgPDwgNikgfCBkaWdpdDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmJhc2U2NFRvQmluYXJ5ID0gYmFzZTY0VG9CaW5hcnk7XHJcbi8qKiBQdWJsaWMga2V5IGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSA9IDMzO1xyXG4vKiogUHJpdmF0ZSBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSA9IDMyO1xyXG4vKiogU2lnbmF0dXJlIGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cclxuZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSA9IDY1O1xyXG5mdW5jdGlvbiBkaWdlc3RTdWZmaXhSaXBlbWQxNjAoZGF0YSwgc3VmZml4KSB7XHJcbiAgICB2YXIgZCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgc3VmZml4Lmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBkW2ldID0gZGF0YVtpXTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VmZml4Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZFtkYXRhLmxlbmd0aCArIGldID0gc3VmZml4LmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmlwZW1kMTYwKGQpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ1RvS2V5KHMsIHR5cGUsIHNpemUsIHN1ZmZpeCkge1xyXG4gICAgdmFyIHdob2xlID0gYmFzZTU4VG9CaW5hcnkoc2l6ZSArIDQsIHMpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHsgdHlwZTogdHlwZSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkod2hvbGUuYnVmZmVyLCAwLCBzaXplKSB9O1xyXG4gICAgdmFyIGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChyZXN1bHQuZGF0YSwgc3VmZml4KSk7XHJcbiAgICBpZiAoZGlnZXN0WzBdICE9PSB3aG9sZVtzaXplICsgMF0gfHwgZGlnZXN0WzFdICE9PSB3aG9sZVtzaXplICsgMV1cclxuICAgICAgICB8fCBkaWdlc3RbMl0gIT09IHdob2xlW3NpemUgKyAyXSB8fCBkaWdlc3RbM10gIT09IHdob2xlW3NpemUgKyAzXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGtleVRvU3RyaW5nKGtleSwgc3VmZml4LCBwcmVmaXgpIHtcclxuICAgIHZhciBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAoa2V5LmRhdGEsIHN1ZmZpeCkpO1xyXG4gICAgdmFyIHdob2xlID0gbmV3IFVpbnQ4QXJyYXkoa2V5LmRhdGEubGVuZ3RoICsgNCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleS5kYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgd2hvbGVbaV0gPSBrZXkuZGF0YVtpXTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgd2hvbGVbaSArIGtleS5kYXRhLmxlbmd0aF0gPSBkaWdlc3RbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlZml4ICsgYmluYXJ5VG9CYXNlNTgod2hvbGUpO1xyXG59XHJcbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cclxuZnVuY3Rpb24gc3RyaW5nVG9QdWJsaWNLZXkocykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHVibGljIGtleVwiKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xyXG4gICAgICAgIHZhciB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUgKyA0LCBzLnN1YnN0cigzKSk7XHJcbiAgICAgICAgdmFyIGtleSA9IHsgdHlwZTogMCAvKiBrMSAqLywgZGF0YTogbmV3IFVpbnQ4QXJyYXkoZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSkgfTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemU7ICsraSkge1xyXG4gICAgICAgICAgICBrZXkuZGF0YVtpXSA9IHdob2xlW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkocmlwZW1kMTYwKGtleS5kYXRhKSk7XHJcbiAgICAgICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZV0gfHwgZGlnZXN0WzFdICE9PSB3aG9sZVszNF1cclxuICAgICAgICAgICAgfHwgZGlnZXN0WzJdICE9PSB3aG9sZVszNV0gfHwgZGlnZXN0WzNdICE9PSB3aG9sZVszNl0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2tzdW0gZG9lc24ndCBtYXRjaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9LMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgMCAvKiBrMSAqLywgZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSwgXCJLMVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9SMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgMSAvKiByMSAqLywgZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSwgXCJSMVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnN0cmluZ1RvUHVibGljS2V5ID0gc3RyaW5nVG9QdWJsaWNLZXk7XHJcbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG5mdW5jdGlvbiBwdWJsaWNLZXlUb1N0cmluZyhrZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gMCAvKiBrMSAqLyAmJiBrZXkuZGF0YS5sZW5ndGggPT09IGV4cG9ydHMucHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIksxXCIsIFwiUFVCX0sxX1wiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS50eXBlID09PSAxIC8qIHIxICovICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gZXhwb3J0cy5wdWJsaWNLZXlEYXRhU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksIFwiUjFcIiwgXCJQVUJfUjFfXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucHVibGljS2V5VG9TdHJpbmcgPSBwdWJsaWNLZXlUb1N0cmluZztcclxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXHJcbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxyXG4gKi9cclxuZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleShzKSB7XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09IFwiRU9TXCIpIHtcclxuICAgICAgICByZXR1cm4gcHVibGljS2V5VG9TdHJpbmcoc3RyaW5nVG9QdWJsaWNLZXkocykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHVibGljS2V5ID0gY29udmVydExlZ2FjeVB1YmxpY0tleTtcclxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXHJcbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxyXG4gKi9cclxuZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleXMoa2V5cykge1xyXG4gICAgcmV0dXJuIGtleXMubWFwKGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkpO1xyXG59XHJcbmV4cG9ydHMuY29udmVydExlZ2FjeVB1YmxpY0tleXMgPSBjb252ZXJ0TGVnYWN5UHVibGljS2V5cztcclxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xyXG5mdW5jdGlvbiBzdHJpbmdUb1ByaXZhdGVLZXkocykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHJpdmF0ZSBrZXlcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFZUX1IxX1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCAxIC8qIHIxICovLCBleHBvcnRzLnByaXZhdGVLZXlEYXRhU2l6ZSwgXCJSMVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zdHJpbmdUb1ByaXZhdGVLZXkgPSBzdHJpbmdUb1ByaXZhdGVLZXk7XHJcbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xyXG5mdW5jdGlvbiBwcml2YXRlS2V5VG9TdHJpbmcoa2V5KSB7XHJcbiAgICBpZiAoa2V5LnR5cGUgPT09IDEgLyogcjEgKi8pIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIlIxXCIsIFwiUFZUX1IxX1wiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcml2YXRlS2V5VG9TdHJpbmcgPSBwcml2YXRlS2V5VG9TdHJpbmc7XHJcbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cclxuZnVuY3Rpb24gc3RyaW5nVG9TaWduYXR1cmUocykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgc2lnbmF0dXJlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19LMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgMCAvKiBrMSAqLywgZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSwgXCJLMVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19SMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgMSAvKiByMSAqLywgZXhwb3J0cy5zaWduYXR1cmVEYXRhU2l6ZSwgXCJSMVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3RyaW5nVG9TaWduYXR1cmUgPSBzdHJpbmdUb1NpZ25hdHVyZTtcclxuLyoqIENvbnZlcnQgYHNpZ25hdHVyZWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbmZ1bmN0aW9uIHNpZ25hdHVyZVRvU3RyaW5nKHNpZ25hdHVyZSkge1xyXG4gICAgaWYgKHNpZ25hdHVyZS50eXBlID09PSAwIC8qIGsxICovKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgXCJLMVwiLCBcIlNJR19LMV9cIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaWduYXR1cmUudHlwZSA9PT0gMSAvKiByMSAqLykge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsIFwiUjFcIiwgXCJTSUdfUjFfXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zaWduYXR1cmVUb1N0cmluZyA9IHNpZ25hdHVyZVRvU3RyaW5nO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBtb2R1bGUgUlBDLUVycm9yXHJcbiAqL1xyXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKiogSG9sZHMgZGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb24gKi9cclxudmFyIFJwY0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJwY0Vycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUnBjRXJyb3IoanNvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGpzb24uZXJyb3IgJiYganNvbi5lcnJvci5kZXRhaWxzICYmIGpzb24uZXJyb3IuZGV0YWlscy5sZW5ndGggJiYganNvbi5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBqc29uLmVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoanNvbi5wcm9jZXNzZWQgJiYganNvbi5wcm9jZXNzZWQuZXhjZXB0ICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdC5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywganNvbi5wcm9jZXNzZWQuZXhjZXB0Lm1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGpzb24ubWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBScGNFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIF90aGlzLmpzb24gPSBqc29uO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBScGNFcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBScGNFcnJvcjtcclxuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS93bHpsYTAwMC9iYWM4M2RmNmQzYzUxOTE2YzRkZDBiYzk0N2U0Njk0Ny9yYXcvN2VlMzQ2MmIwOTVhYjIyNTgwZGRhZjE5MWY0NGE1OTBkYTZmZTMzYi9SSVBFTUQtMTYwLmpzXHJcblxyXG4vKlxyXG5cdFJJUEVNRC0xNjAuanNcclxuXHJcblx0XHRkZXZlbG9wZWRcclxuXHRcdFx0YnkgSy4gKGh0dHBzOi8vZ2l0aHViLmNvbS93bHpsYTAwMClcclxuXHRcdFx0b24gRGVjZW1iZXIgMjctMjksIDIwMTcsXHJcblxyXG5cdFx0bGljZW5zZWQgdW5kZXJcclxuXHJcblxyXG5cdFx0dGhlIE1JVCBsaWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChjKSAyMDE3IEsuXHJcblxyXG5cdFx0IFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcblx0XHRvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxyXG5cdFx0ZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcblx0XHRyZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuXHRcdGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG5cdFx0c2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuXHRcdFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcblx0XHRjb25kaXRpb25zOlxyXG5cclxuXHRcdCBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxyXG5cdFx0aW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0IFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcblx0XHRFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuXHRcdE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcblx0XHROT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG5cdFx0SE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcblx0XHRXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuXHRcdEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuXHRcdE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgUklQRU1EMTYwXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0Ly8gaHR0cHM6Ly93ZWJjYWNoZS5nb29nbGV1c2VyY29udGVudC5jb20vc2VhcmNoP3E9Y2FjaGU6Q25MT2dvbFRIWUVKOmh0dHBzOi8vd3d3LmNvc2ljLmVzYXQua3VsZXV2ZW4uYmUvcHVibGljYXRpb25zL2FydGljbGUtMzE3LnBkZlxyXG5cdFx0Ly8gaHR0cDovL3Nob2RoZ2FuZ2EuaW5mbGlibmV0LmFjLmluL2JpdHN0cmVhbS8xMDYwMy8yMjk3OC8xMy8xM19hcHBlbmRpeC5wZGZcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRfbl9wYWRfYnl0ZXMobWVzc2FnZV9zaXplIC8qIGluIGJ5dGVzLCAxIGJ5dGUgaXMgOCBiaXRzLiAqLylcclxuXHR7XHJcblx0XHQvLyAgT2J0YWluIHRoZSBudW1iZXIgb2YgYnl0ZXMgbmVlZGVkIHRvIHBhZCB0aGUgbWVzc2FnZS5cclxuXHRcdC8vIEl0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNpemUgb2YgdGhlIG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5cclxuXHRcdC8qXHJcblx0XHRcdGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcclxuXHJcblx0XHRcdFRoZSBDcnlwdG9ncmFwaGljIEhhc2ggRnVuY3Rpb24gUklQRU1ELTE2MFxyXG5cclxuXHRcdFx0d3JpdHRlbiBieVxyXG5cdFx0XHRcdEJhcnQgUHJlbmVlbCxcclxuXHRcdFx0XHRIYW5zIERvYmJlcnRpbixcclxuXHRcdFx0XHRBbnRvb24gQm9zc2VsYWVyc1xyXG5cdFx0XHRpblxyXG5cdFx0XHRcdDE5OTcuXHJcblxyXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0wqc1ICAgICBEZXNjcmlwdGlvbiBvZiBSSVBFTUQtMTYwXHJcblxyXG5cdFx0XHQuLi4uLi5cclxuXHJcblx0XHRcdCBJbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB0aGUgdG90YWwgaW5wdXQgc2l6ZSBpcyBhXHJcblx0XHRcdG11bHRpcGxlIG9mIDUxMiBiaXRzLCB0aGUgaW5wdXQgaXMgcGFkZGVkIGluIHRoZSBzYW1lXHJcblx0XHRcdHdheSBhcyBmb3IgYWxsIHRoZSBtZW1iZXJzIG9mIHRoZSBNRDQtZmFtaWx5OiBvbmVcclxuXHRcdFx0YXBwZW5kcyBhIHNpbmdsZSAxIGZvbGxvd2VkIGJ5IGEgc3RyaW5nIG9mIDBzICh0aGVcclxuXHRcdFx0bnVtYmVyIG9mIDBzIGxpZXMgYmV0d2VlbiAwIGFuZCA1MTEpOyB0aGUgbGFzdCA2NCBiaXRzXHJcblx0XHRcdG9mIHRoZSBleHRlbmRlZCBpbnB1dCBjb250YWluIHRoZSBiaW5hcnkgcmVwcmVzZW50YXRpb25cclxuXHRcdFx0b2YgdGhlIGlucHV0IHNpemUgaW4gYml0cywgbGVhc3Qgc2lnbmlmaWNhbnQgYnl0ZSBmaXJzdC5cclxuXHRcdCovXHJcblx0XHQvKlxyXG5cdFx0XHRodHRwczovL3Rvb2xzLmlldGYub3JnL3JmYy9yZmMxMTg2LnR4dFxyXG5cclxuXHRcdFx0UkZDIDExODY6IE1ENCBNZXNzYWdlIERpZ2VzdCBBbGdvcml0aG0uXHJcblxyXG5cdFx0XHR3cml0dGVuIGJ5XHJcblx0XHRcdFx0Um9uYWxkIExpbm4gUml2ZXN0XHJcblx0XHRcdGluXHJcblx0XHRcdFx0T2N0b2JlciAxOTkwLlxyXG5cclxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdMKnMyAgICAgTUQ0IEFsZ29yaXRobSBEZXNjcmlwdGlvblxyXG5cclxuXHRcdFx0Li4uLi4uXHJcblxyXG5cdFx0XHRTdGVwIDEuIEFwcGVuZCBwYWRkaW5nIGJpdHNcclxuXHJcblx0XHRcdCBUaGUgbWVzc2FnZSBpcyBcInBhZGRlZFwiIChleHRlbmRlZCkgc28gdGhhdCBpdHMgbGVuZ3RoXHJcblx0XHRcdChpbiBiaXRzKSBpcyBjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyLiBUaGF0IGlzLCB0aGVcclxuXHRcdFx0bWVzc2FnZSBpcyBleHRlbmRlZCBzbyB0aGF0IGl0IGlzIGp1c3QgNjQgYml0cyBzaHkgb2ZcclxuXHRcdFx0YmVpbmcgYSBtdWx0aXBsZSBvZiA1MTIgYml0cyBsb25nLiBQYWRkaW5nIGlzIGFsd2F5c1xyXG5cdFx0XHRwZXJmb3JtZWQsIGV2ZW4gaWYgdGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZSBpcyBhbHJlYWR5XHJcblx0XHRcdGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIgKGluIHdoaWNoIGNhc2UgNTEyIGJpdHMgb2ZcclxuXHRcdFx0cGFkZGluZyBhcmUgYWRkZWQpLlxyXG5cclxuXHRcdFx0IFBhZGRpbmcgaXMgcGVyZm9ybWVkIGFzIGZvbGxvd3M6IGEgc2luZ2xlIFwiMVwiIGJpdCBpc1xyXG5cdFx0XHRhcHBlbmRlZCB0byB0aGUgbWVzc2FnZSwgYW5kIHRoZW4gZW5vdWdoIHplcm8gYml0cyBhcmVcclxuXHRcdFx0YXBwZW5kZWQgc28gdGhhdCB0aGUgbGVuZ3RoIGluIGJpdHMgb2YgdGhlIHBhZGRlZFxyXG5cdFx0XHRtZXNzYWdlIGJlY29tZXMgY29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMi5cclxuXHJcblx0XHRcdFN0ZXAgMi4gQXBwZW5kIGxlbmd0aFxyXG5cclxuXHRcdFx0IEEgNjQtYml0IHJlcHJlc2VudGF0aW9uIG9mIGIgKHRoZSBsZW5ndGggb2YgdGhlIG1lc3NhZ2VcclxuXHRcdFx0YmVmb3JlIHRoZSBwYWRkaW5nIGJpdHMgd2VyZSBhZGRlZCkgaXMgYXBwZW5kZWQgdG8gdGhlXHJcblx0XHRcdHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgc3RlcC4gSW4gdGhlIHVubGlrZWx5IGV2ZW50IHRoYXRcclxuXHRcdFx0YiBpcyBncmVhdGVyIHRoYW4gMl42NCwgdGhlbiBvbmx5IHRoZSBsb3ctb3JkZXIgNjQgYml0c1xyXG5cdFx0XHRvZiBiIGFyZSB1c2VkLiAoVGhlc2UgYml0cyBhcmUgYXBwZW5kZWQgYXMgdHdvIDMyLWJpdFxyXG5cdFx0XHR3b3JkcyBhbmQgYXBwZW5kZWQgbG93LW9yZGVyIHdvcmQgZmlyc3QgaW4gYWNjb3JkYW5jZVxyXG5cdFx0XHR3aXRoIHRoZSBwcmV2aW91cyBjb252ZW50aW9ucy4pXHJcblxyXG5cdFx0XHQgQXQgdGhpcyBwb2ludCB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UgKGFmdGVyIHBhZGRpbmcgd2l0aFxyXG5cdFx0XHRiaXRzIGFuZCB3aXRoIGIpIGhhcyBhIGxlbmd0aCB0aGF0IGlzIGFuIGV4YWN0IG11bHRpcGxlXHJcblx0XHRcdG9mIDUxMiBiaXRzLiBFcXVpdmFsZW50bHksIHRoaXMgbWVzc2FnZSBoYXMgYSBsZW5ndGhcclxuXHRcdFx0dGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZSBvZiAxNiAoMzItYml0KSB3b3Jkcy4gTGV0XHJcblx0XHRcdE1bMCAuLi4gTi0xXSBkZW5vdGUgdGhlIHdvcmRzIG9mIHRoZSByZXN1bHRpbmcgbWVzc2FnZSxcclxuXHRcdFx0d2hlcmUgTiBpcyBhIG11bHRpcGxlIG9mIDE2LlxyXG5cdFx0Ki9cclxuXHRcdC8vIGh0dHBzOi8vY3J5cHRvLnN0YWNrZXhjaGFuZ2UuY29tL2EvMzI0MDcvNTQ1NjhcclxuXHRcdC8qXHJcblx0XHRcdEV4YW1wbGUgY2FzZSAgIyAxXHJcblx0XHRcdFx0WzAgYml0OiBtZXNzYWdlLl1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMlxyXG5cdFx0XHRcdFs1MTItYml0czogbWVzc2FnZV1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgM1xyXG5cdFx0XHRcdFsoNTEyIC0gNjQgPSA0NDgpIGJpdHM6IG1lc3NhZ2UuXVxyXG5cdFx0XHRcdFsxIGJpdDogMS5dXHJcblx0XHRcdFx0WzUxMSBiaXRzOiAwLl1cclxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cclxuXHJcblx0XHRcdEV4YW1wbGUgY2FzZSAgIyA0XHJcblx0XHRcdFx0Wyg1MTIgLSA2NSA9IDQ0NykgYml0czogbWVzc2FnZS5dXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbMCBiaXQ6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cdFx0Ki9cclxuXHRcdC8vIFRoZSBudW1iZXIgb2YgcGFkZGluZyB6ZXJvIGJpdHM6XHJcblx0XHQvLyAgICAgIDUxMSAtIFt7KG1lc3NhZ2Ugc2l6ZSBpbiBiaXRzKSArIDY0fSAobW9kIDUxMildXHJcblx0XHRyZXR1cm4gNjQgLSAoKG1lc3NhZ2Vfc2l6ZSArIDgpICYgMGIwMDExMTExMSAvKiA2MyAqLyk7XHJcblx0fVxyXG5cdHN0YXRpYyBwYWQobWVzc2FnZSAvKiBBbiBBcnJheUJ1ZmZlci4gKi8pXHJcblx0e1xyXG5cdFx0Y29uc3QgbWVzc2FnZV9zaXplID0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xyXG5cdFx0Y29uc3Qgbl9wYWQgPSBSSVBFTUQxNjAuZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSk7XHJcblxyXG5cdFx0Ly8gIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgKCgyICoqIDUzKSAtIDEpIGFuZFxyXG5cdFx0Ly8gYml0d2lzZSBvcGVyYXRpb24gaW4gSmF2YXNjcmlwdCBpcyBkb25lIG9uIDMyLWJpdHMgb3BlcmFuZHMuXHJcblx0XHRjb25zdCBkaXZtb2QgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IFtcclxuXHRcdFx0TWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpLFxyXG5cdFx0XHRkaXZpZGVuZCAlIGRpdmlzb3JcclxuXHRcdF07XHJcblx0XHQvKlxyXG5UbyBzaGlmdFxyXG5cclxuICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgb1xyXG4gICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbk1ldGhvZCAjMVxyXG5cclxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xyXG4gICBbMDAwMDAwMDAgMDAwQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdICg8QT4gY2FwdHVyZWQpXHJcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQTAwMF0gKDxBPiBzaGlmdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxyXG4gICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFCQkJdICg8QT4gJiA8Ql8yPiBtZXJnZWQpXHJcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXHJcbiAgICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcclxuXHJcblx0XHRjb25zdCB1aW50MzJfbWF4X3BsdXNfMSA9IDB4MTAwMDAwMDAwOyAvLyAoMiAqKiAzMilcclxuXHRcdGNvbnN0IFtcclxuXHRcdFx0bXNnX2J5dGVfc2l6ZV9tb3N0LCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMjEpIC0gMV0uXHJcblx0XHRcdG1zZ19ieXRlX3NpemVfbGVhc3QgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDMyKSAtIDFdLlxyXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIHVpbnQzMl9tYXhfcGx1c18xKTtcclxuXHRcdGNvbnN0IFtcclxuXHRcdFx0Y2FycnksIC8vIFZhbHVlIHJhbmdlIFswLCA3XS5cclxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAzMikgLSA4XS5cclxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9ieXRlX3NpemVfbGVhc3QgKiA4LCB1aW50MzJfbWF4X3BsdXNfMSk7XHJcblx0XHRjb25zdCBtZXNzYWdlX2JpdF9zaXplX21vc3QgPSBtZXNzYWdlX2J5dGVfc2l6ZV9tb3N0ICogOFxyXG5cdFx0XHQrIGNhcnJ5OyAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMjQpIC0gMV0uXHJcblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuTWV0aG9kICMyXHJcbiAgICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cclxuICAgICAgWzAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBICBBQUFdICg8QT4gY2FwdHVyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IGNhcHR1cmVkKSBbMDAwQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXHJcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQV1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXHJcbiAgICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcclxuXHJcblx0XHQqL1xyXG5cdFx0Y29uc3QgW1xyXG5cdFx0XHRtc2dfYml0X3NpemVfbW9zdCxcclxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0XHJcblx0XHRdID0gZGl2bW9kKG1lc3NhZ2Vfc2l6ZSwgNTM2ODcwOTEyIC8qICgyICoqIDI5KSAqLylcclxuXHRcdFx0Lm1hcCgoeCwgaW5kZXgpID0+IChpbmRleCA/ICh4ICogOCkgOiB4KSk7XHJcblxyXG5cdFx0Ly8gYEFycmF5QnVmZmVyLnRyYW5zZmVyKClgIGlzIG5vdCBzdXBwb3J0ZWQuXHJcblx0XHRjb25zdCBwYWRkZWQgPSBuZXcgVWludDhBcnJheShtZXNzYWdlX3NpemUgKyBuX3BhZCArIDgpO1xyXG5cdFx0cGFkZGVkLnNldChuZXcgVWludDhBcnJheShtZXNzYWdlKSwgMCk7XHJcblx0XHRjb25zdCBkYXRhX3ZpZXcgPSBuZXcgRGF0YVZpZXcocGFkZGVkLmJ1ZmZlcik7XHJcblx0XHRkYXRhX3ZpZXcuc2V0VWludDgobWVzc2FnZV9zaXplLCAwYjEwMDAwMDAwKTtcclxuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXHJcblx0XHRcdG1lc3NhZ2Vfc2l6ZSArIG5fcGFkLFxyXG5cdFx0XHRtc2dfYml0X3NpemVfbGVhc3QsXHJcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxyXG5cdFx0KTtcclxuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXHJcblx0XHRcdG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgNCxcclxuXHRcdFx0bXNnX2JpdF9zaXplX21vc3QsXHJcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gcGFkZGVkLmJ1ZmZlcjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmKGosIHgsIHksIHopXHJcblx0e1xyXG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXHJcblx0XHR7IC8vIEV4Y2x1c2l2ZS1PUlxyXG5cdFx0XHRyZXR1cm4geCBeIHkgXiB6O1xyXG5cdFx0fVxyXG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG5cdFx0eyAvLyBNdWx0aXBsZXhpbmcgKG11eGluZylcclxuXHRcdFx0cmV0dXJuICh4ICYgeSkgfCAofnggJiB6KTtcclxuXHRcdH1cclxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0NylcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuICh4IHwgfnkpIF4gejtcclxuXHRcdH1cclxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXHJcblx0XHRcdHJldHVybiAoeCAmIHopIHwgKHkgJiB+eik7XHJcblx0XHR9XHJcblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB4IF4gKHkgfCB+eik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyBLKGopXHJcblx0e1xyXG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAweDAwMDAwMDAwO1xyXG5cdFx0fVxyXG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguU1FSVDIpXHJcblx0XHRcdHJldHVybiAweDVBODI3OTk5O1xyXG5cdFx0fVxyXG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCgzKSlcclxuXHRcdFx0cmV0dXJuIDB4NkVEOUVCQTE7XHJcblx0XHR9XHJcblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDUpKVxyXG5cdFx0XHRyZXR1cm4gMHg4RjFCQkNEQztcclxuXHRcdH1cclxuXHRcdGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoNykpXHJcblx0XHRcdHJldHVybiAweEE5NTNGRDRFO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0aWMgS1AoaikgLy8gSydcclxuXHR7XHJcblx0XHRpZigwIDw9IGogJiYgaiA8PSAxNSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMikpXHJcblx0XHRcdHJldHVybiAweDUwQTI4QkU2O1xyXG5cdFx0fVxyXG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCgzKSlcclxuXHRcdFx0cmV0dXJuIDB4NUM0REQxMjQ7XHJcblx0XHR9XHJcblx0XHRpZigzMiA8PSBqICYmIGogPD0gNDcpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDUpKVxyXG5cdFx0XHRyZXR1cm4gMHg2RDcwM0VGMztcclxuXHRcdH1cclxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2MylcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoNykpXHJcblx0XHRcdHJldHVybiAweDdBNkQ3NkU5O1xyXG5cdFx0fVxyXG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gMHgwMDAwMDAwMDtcclxuXHRcdH1cclxuXHR9XHJcblx0c3RhdGljIGFkZF9tb2R1bG8zMigvKiAuLi4uLi4gKi8pXHJcblx0e1xyXG5cdFx0Ly8gMS4gIE1vZHVsbyBhZGRpdGlvbiAoYWRkaXRpb24gbW9kdWxvKSBpcyBhc3NvY2lhdGl2ZS5cclxuXHRcdC8vICAgIGh0dHBzOi8vcHJvb2Z3aWtpLm9yZy93aWtpL01vZHVsb19BZGRpdGlvbl9pc19Bc3NvY2lhdGl2ZVxyXG4gXHRcdC8vIDIuICBCaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0XHJcblx0XHQvLyAgICBpcyBkb25lIG9uIDMyLWJpdHMgb3BlcmFuZHNcclxuXHRcdC8vICAgIGFuZCByZXN1bHRzIGluIGEgMzItYml0cyB2YWx1ZS5cclxuXHRcdHJldHVybiBBcnJheVxyXG5cdFx0XHQuZnJvbShhcmd1bWVudHMpXHJcblx0XHRcdC5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApIHwgMDtcclxuXHR9XHJcblx0c3RhdGljIHJvbDMyKHZhbHVlLCBjb3VudClcclxuXHR7IC8vIEN5Y2xpYyBsZWZ0IHNoaWZ0IChyb3RhdGUpIG9uIDMyLWJpdHMgdmFsdWUuXHJcblx0XHRyZXR1cm4gKHZhbHVlIDw8IGNvdW50KSB8ICh2YWx1ZSA+Pj4gKDMyIC0gY291bnQpKTtcclxuXHR9XHJcblx0c3RhdGljIGhhc2gobWVzc2FnZSAvKiBBbiBBcnJheUJ1ZmZlci4gKi8pXHJcblx0e1xyXG5cdFx0Ly8vLy8vLy8vLyAgICAgICBQYWRkaW5nICAgICAgIC8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBUaGUgcGFkZGVkIG1lc3NhZ2UuXHJcblx0XHRjb25zdCBwYWRkZWQgPSBSSVBFTUQxNjAucGFkKG1lc3NhZ2UpO1xyXG5cclxuXHRcdC8vLy8vLy8vLy8gICAgIENvbXByZXNzaW9uICAgICAvLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gTWVzc2FnZSB3b3JkIHNlbGVjdG9ycy5cclxuXHRcdGNvbnN0IHIgPSBbXHJcblx0XHRcdDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXHJcblx0XHRcdDcsIDQsIDEzLCAxLCAxMCwgNiwgMTUsIDMsIDEyLCAwLCA5LCA1LCAyLCAxNCwgMTEsIDgsXHJcblx0XHRcdDMsIDEwLCAxNCwgNCwgOSwgMTUsIDgsIDEsIDIsIDcsIDAsIDYsIDEzLCAxMSwgNSwgMTIsXHJcblx0XHRcdDEsIDksIDExLCAxMCwgMCwgOCwgMTIsIDQsIDEzLCAzLCA3LCAxNSwgMTQsIDUsIDYsIDIsXHJcblx0XHRcdDQsIDAsIDUsIDksIDcsIDEyLCAyLCAxMCwgMTQsIDEsIDMsIDgsIDExLCA2LCAxNSwgMTNcclxuXHRcdF07XHJcblx0XHRjb25zdCByUCA9IFsgLy8gcidcclxuXHRcdFx0NSwgMTQsIDcsIDAsIDksIDIsIDExLCA0LCAxMywgNiwgMTUsIDgsIDEsIDEwLCAzLCAxMixcclxuXHRcdFx0NiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcclxuXHRcdFx0MTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcclxuXHRcdFx0OCwgNiwgNCwgMSwgMywgMTEsIDE1LCAwLCA1LCAxMiwgMiwgMTMsIDksIDcsIDEwLCAxNCxcclxuXHRcdFx0MTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMVxyXG5cdFx0XTtcclxuXHJcblx0XHQvLyBBbW91bnRzIGZvciAncm90YXRlIGxlZnQnIG9wZXJhdGlvbi5cclxuXHRcdGNvbnN0IHMgPSBbXHJcblx0XHRcdDExLCAxNCwgMTUsIDEyLCA1LCA4LCA3LCA5LCAxMSwgMTMsIDE0LCAxNSwgNiwgNywgOSwgOCxcclxuXHRcdFx0NywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxyXG5cdFx0XHQxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXHJcblx0XHRcdDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsIDksIDgsIDksIDE0LCA1LCA2LCA4LCA2LCA1LCAxMixcclxuXHRcdFx0OSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XHJcblx0XHRdO1xyXG5cdFx0Y29uc3Qgc1AgPSBbIC8vIHMnXHJcblx0XHRcdDgsIDksIDksIDExLCAxMywgMTUsIDE1LCA1LCA3LCA3LCA4LCAxMSwgMTQsIDE0LCAxMiwgNixcclxuXHRcdFx0OSwgMTMsIDE1LCA3LCAxMiwgOCwgOSwgMTEsIDcsIDcsIDEyLCA3LCA2LCAxNSwgMTMsIDExLFxyXG5cdFx0XHQ5LCA3LCAxNSwgMTEsIDgsIDYsIDYsIDE0LCAxMiwgMTMsIDUsIDE0LCAxMywgMTMsIDcsIDUsXHJcblx0XHRcdDE1LCA1LCA4LCAxMSwgMTQsIDE0LCA2LCAxNCwgNiwgOSwgMTIsIDksIDEyLCA1LCAxNSwgOCxcclxuXHRcdFx0OCwgNSwgMTIsIDksIDEyLCA1LCAxNCwgNiwgOCwgMTMsIDYsIDUsIDE1LCAxMywgMTEsIDExXHJcblx0XHRdO1xyXG5cclxuXHRcdC8vIFRoZSBzaXplLCBpbiBieXRlcywgb2YgYSB3b3JkLlxyXG5cdFx0Y29uc3Qgd29yZF9zaXplID0gNDtcclxuXHJcblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgMTYtd29yZHMgYmxvY2suXHJcblx0XHRjb25zdCBibG9ja19zaXplID0gNjQ7XHJcblxyXG5cdFx0Ly8gVGhlIG51bWJlciBvZiB0aGUgMTYtd29yZHMgYmxvY2tzLlxyXG5cdFx0Y29uc3QgdCA9IHBhZGRlZC5ieXRlTGVuZ3RoIC8gYmxvY2tfc2l6ZTtcclxuXHJcblx0XHQvLyAgVGhlIG1lc3NhZ2UgYWZ0ZXIgcGFkZGluZyBjb25zaXN0cyBvZiB0IDE2LXdvcmQgYmxvY2tzIHRoYXRcclxuXHRcdC8vIGFyZSBkZW5vdGVkIHdpdGggWF9pW2pdLCB3aXRoIDDiiaRp4omkKHQg4oiSIDEpIGFuZCAw4omkauKJpDE1LlxyXG5cdFx0Y29uc3QgWCA9IChuZXcgQXJyYXkodCkpXHJcblx0XHRcdC5maWxsKHVuZGVmaW5lZClcclxuXHRcdFx0Lm1hcCgoXywgaSkgPT4gaiA9PiAoXHJcblx0XHRcdFx0bmV3IERhdGFWaWV3KFxyXG5cdFx0XHRcdFx0cGFkZGVkLCBpICogYmxvY2tfc2l6ZSwgYmxvY2tfc2l6ZVxyXG5cdFx0XHRcdCkuZ2V0VWludDMyKFxyXG5cdFx0XHRcdFx0aiAqIHdvcmRfc2l6ZSxcclxuXHRcdFx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSk7XHJcblxyXG5cdFx0Ly8gIFRoZSByZXN1bHQgb2YgUklQRU1ELTE2MCBpcyBjb250YWluZWQgaW4gZml2ZSAzMi1iaXQgd29yZHMsXHJcblx0XHQvLyB3aGljaCBmb3JtIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgYWxnb3JpdGhtLiBUaGUgZmluYWxcclxuXHRcdC8vIGNvbnRlbnQgb2YgdGhlc2UgZml2ZSAzMi1iaXQgd29yZHMgaXMgY29udmVydGVkIHRvIGEgMTYwLWJpdFxyXG5cdFx0Ly8gc3RyaW5nLCBhZ2FpbiB1c2luZyB0aGUgbGl0dGxlLWVuZGlhbiBjb252ZW50aW9uLlxyXG5cdFx0bGV0IGggPSBbXHJcblx0XHRcdDB4Njc0NTIzMDEsIC8vIGhfMFxyXG5cdFx0XHQweEVGQ0RBQjg5LCAvLyBoXzFcclxuXHRcdFx0MHg5OEJBRENGRSwgLy8gaF8yXHJcblx0XHRcdDB4MTAzMjU0NzYsIC8vIGhfM1xyXG5cdFx0XHQweEMzRDJFMUYwICAvLyBoXzRcclxuXHRcdF07XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHQ7ICsraSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IEEgPSBoWzBdLCBCID0gaFsxXSwgQyA9IGhbMl0sIEQgPSBoWzNdLCBFID0gaFs0XTtcclxuXHRcdFx0bGV0IEFQID0gQSwgQlAgPSBCLCBDUCA9IEMsIERQID0gRCwgRVAgPSBFO1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgODA7ICsrailcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIExlZnQgcm91bmRzXHJcblx0XHRcdFx0bGV0IFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxyXG5cdFx0XHRcdFx0UklQRU1EMTYwLnJvbDMyKFxyXG5cdFx0XHRcdFx0XHRSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxyXG5cdFx0XHRcdFx0XHRcdEEsXHJcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLmYoaiwgQiwgQywgRCksXHJcblx0XHRcdFx0XHRcdFx0WFtpXShyW2pdKSxcclxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuSyhqKVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRzW2pdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0RVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0QSA9IEU7XHJcblx0XHRcdFx0RSA9IEQ7XHJcblx0XHRcdFx0RCA9IFJJUEVNRDE2MC5yb2wzMihDLCAxMCk7XHJcblx0XHRcdFx0QyA9IEI7XHJcblx0XHRcdFx0QiA9IFQ7XHJcblxyXG5cdFx0XHRcdC8vIFJpZ2h0IHJvdW5kc1xyXG5cdFx0XHRcdFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxyXG5cdFx0XHRcdFx0UklQRU1EMTYwLnJvbDMyKFxyXG5cdFx0XHRcdFx0XHRSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxyXG5cdFx0XHRcdFx0XHRcdEFQLFxyXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5mKFxyXG5cdFx0XHRcdFx0XHRcdFx0NzkgLSBqLFxyXG5cdFx0XHRcdFx0XHRcdFx0QlAsXHJcblx0XHRcdFx0XHRcdFx0XHRDUCxcclxuXHRcdFx0XHRcdFx0XHRcdERQXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRYW2ldKHJQW2pdKSxcclxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuS1AoailcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0c1Bbal1cclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRFUFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0QVAgPSBFUDtcclxuXHRcdFx0XHRFUCA9IERQO1xyXG5cdFx0XHRcdERQID0gUklQRU1EMTYwLnJvbDMyKENQLCAxMCk7XHJcblx0XHRcdFx0Q1AgPSBCUDtcclxuXHRcdFx0XHRCUCA9IFQ7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMV0sIEMsIERQKTtcclxuXHRcdFx0aFsxXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsyXSwgRCwgRVApO1xyXG5cdFx0XHRoWzJdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzNdLCBFLCBBUCk7XHJcblx0XHRcdGhbM10gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbNF0sIEEsIEJQKTtcclxuXHRcdFx0aFs0XSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFswXSwgQiwgQ1ApO1xyXG5cdFx0XHRoWzBdID0gVDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyAgVGhlIGZpbmFsIG91dHB1dCBzdHJpbmcgdGhlbiBjb25zaXN0cyBvZiB0aGUgY29uY2F0ZW5hdGF0aW9uXHJcblx0XHQvLyBvZiBoXzAsIGhfMSwgaF8yLCBoXzMsIGFuZCBoXzQgYWZ0ZXIgY29udmVydGluZyBlYWNoIGhfaSB0byBhXHJcblx0XHQvLyA0LWJ5dGUgc3RyaW5nIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXHJcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoMjApO1xyXG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHJlc3VsdCk7XHJcblx0XHRoLmZvckVhY2goKGhfaSwgaSkgPT4gZGF0YV92aWV3LnNldFVpbnQzMihpICogNCwgaF9pLCB0cnVlKSk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0UklQRU1EMTYwXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVvc2pzX2pzb25ycGNfMSA9IHJlcXVpcmUoXCIuL2Vvc2pzLWpzb25ycGNcIik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGVvc2pzX2pzb25ycGNfMS5kZWZhdWx0O1xyXG52YXIgZW9zanNfcnBjZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vvc2pzLXJwY2Vycm9yXCIpO1xyXG5leHBvcnRzLlJwY0Vycm9yID0gZW9zanNfcnBjZXJyb3JfMS5kZWZhdWx0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9