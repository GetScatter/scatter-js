var eosjs =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abi.abi.json":
/*!**************************!*\
  !*** ./src/abi.abi.json ***!
  \**************************/
/*! exports provided: version, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]};

/***/ }),

/***/ "./src/eosjs-api.ts":
/*!**************************!*\
  !*** ./src/eosjs-api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module API
 */
// copyright defined in eosjs/LICENSE.txt

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
var ser = __webpack_require__(/*! ./eosjs-serialize */ "./src/eosjs-serialize.ts");
// tslint:disable-next-line
var abiAbi = __webpack_require__(/*! ../src/abi.abi.json */ "./src/abi.abi.json");
// tslint:disable-next-line
var transactionAbi = __webpack_require__(/*! ../src/transaction.abi.json */ "./src/transaction.abi.json");
/** Reexport `eosjs-serialize` */
exports.serialize = ser;
var Api = /** @class */ (function () {
    /**
     * @param args
     *    * `rpc`: Issues RPC calls
     *    * `authorityProvider`: Get public keys needed to meet authorities in a transaction
     *    * `signatureProvider`: Signs transactions
     *    * `chainId`: Identifies chain
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function Api(args) {
        /** Holds information needed to serialize contract actions */
        this.contracts = new Map();
        /** Fetched abis */
        this.cachedAbis = new Map();
        this.rpc = args.rpc;
        this.authorityProvider = args.authorityProvider || args.rpc;
        this.signatureProvider = args.signatureProvider;
        this.chainId = args.chainId;
        this.textEncoder = args.textEncoder;
        this.textDecoder = args.textDecoder;
        this.abiTypes = ser.getTypesFromAbi(ser.createInitialTypes(), abiAbi);
        this.transactionTypes = ser.getTypesFromAbi(ser.createInitialTypes(), transactionAbi);
    }
    /** Decodes an abi as Uint8Array into json. */
    Api.prototype.rawAbiToJson = function (rawAbi) {
        var buffer = new ser.SerialBuffer({
            textEncoder: this.textEncoder,
            textDecoder: this.textDecoder,
            array: rawAbi,
        });
        if (!ser.supportedAbiVersion(buffer.getString())) {
            throw new Error("Unsupported abi version");
        }
        buffer.restartRead();
        return this.abiTypes.get("abi_def").deserialize(buffer);
    };
    /** Get abi in both binary and structured forms. Fetch when needed. */
    Api.prototype.getCachedAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cachedAbi, rawAbi, _a, abi, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!reload && this.cachedAbis.get(accountName)) {
                            return [2 /*return*/, this.cachedAbis.get(accountName)];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = eosjs_numeric_1.base64ToBinary;
                        return [4 /*yield*/, this.rpc.get_raw_code_and_abi(accountName)];
                    case 2:
                        rawAbi = _a.apply(void 0, [(_b.sent()).abi]);
                        abi = this.rawAbiToJson(rawAbi);
                        cachedAbi = { rawAbi: rawAbi, abi: abi };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        e_1.message = "fetching abi for " + accountName + ": " + e_1.message;
                        throw e_1;
                    case 4:
                        if (!cachedAbi) {
                            throw new Error("Missing abi for " + accountName);
                        }
                        this.cachedAbis.set(accountName, cachedAbi);
                        return [2 /*return*/, cachedAbi];
                }
            });
        });
    };
    /** Get abi in structured form. Fetch when needed. */
    Api.prototype.getAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCachedAbi(accountName, reload)];
                    case 1: return [2 /*return*/, (_a.sent()).abi];
                }
            });
        });
    };
    /** Get abis needed by a transaction */
    Api.prototype.getTransactionAbis = function (transaction, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var accounts, uniqueAccounts, actionPromises;
            var _this = this;
            return __generator(this, function (_a) {
                accounts = transaction.actions.map(function (action) { return action.account; });
                uniqueAccounts = new Set(accounts);
                actionPromises = __spread(uniqueAccounts).map(function (account) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {
                                    account_name: account
                                };
                                return [4 /*yield*/, this.getCachedAbi(account, reload)];
                            case 1: return [2 /*return*/, (_a.abi = (_b.sent()).rawAbi,
                                    _a)];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(actionPromises)];
            });
        });
    };
    /** Get data needed to serialize actions in a contract */
    Api.prototype.getContract = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _a, abi, types, actions, _b, _c, _d, name_1, type, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!reload && this.contracts.get(accountName)) {
                            return [2 /*return*/, this.contracts.get(accountName)];
                        }
                        return [4 /*yield*/, this.getAbi(accountName, reload)];
                    case 1:
                        abi = _e.sent();
                        types = ser.getTypesFromAbi(ser.createInitialTypes(), abi);
                        actions = new Map();
                        try {
                            for (_b = __values(abi.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = _c.value, name_1 = _d.name, type = _d.type;
                                actions.set(name_1, ser.getType(types, type));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        result = { types: types, actions: actions };
                        this.contracts.set(accountName, result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** Convert `value` to binary form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.serialize = function (buffer, type, value) {
        this.transactionTypes.get(type).serialize(buffer, value);
    };
    /** Convert data in `buffer` to structured form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.deserialize = function (buffer, type) {
        return this.transactionTypes.get(type).deserialize(buffer);
    };
    /** Convert a transaction to binary */
    Api.prototype.serializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        this.serialize(buffer, "transaction", __assign({ max_net_usage_words: 0, max_cpu_usage_ms: 0, delay_sec: 0, context_free_actions: [], actions: [], transaction_extensions: [] }, transaction));
        return buffer.asUint8Array();
    };
    /** Convert a transaction from binary. Leaves actions in hex. */
    Api.prototype.deserializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        buffer.pushArray(transaction);
        return this.deserialize(buffer, "transaction");
    };
    /** Convert actions to hex */
    Api.prototype.serializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.serializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert actions from hex */
    Api.prototype.deserializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.deserializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert a transaction from binary. Also deserializes actions. */
    Api.prototype.deserializeTransactionWithActions = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var deserializedTransaction, deserializedActions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof transaction === "string") {
                            transaction = ser.hexToUint8Array(transaction);
                        }
                        deserializedTransaction = this.deserializeTransaction(transaction);
                        return [4 /*yield*/, this.deserializeActions(deserializedTransaction.actions)];
                    case 1:
                        deserializedActions = _a.sent();
                        return [2 /*return*/, __assign({}, deserializedTransaction, { actions: deserializedActions })];
                }
            });
        });
    };
    /**
     * Create and optionally broadcast a transaction.
     *
     * Named Parameters:
     *    * `broadcast`: broadcast this transaction?
     *    * If both `blocksBehind` and `expireSeconds` are present,
     *      then fetch the block which is `blocksBehind` behind head block,
     *      use it as a reference for TAPoS, and expire the transaction `expireSeconds` after that block's time.
     * @returns node response if `broadcast`, `{signatures, serializedTransaction}` if `!broadcast`
     */
    Api.prototype.transact = function (transaction, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.broadcast, broadcast = _c === void 0 ? true : _c, blocksBehind = _b.blocksBehind, expireSeconds = _b.expireSeconds;
        return __awaiter(this, void 0, void 0, function () {
            var info, refBlock, abis, _d, _e, serializedTransaction, availableKeys, requiredKeys, signatures, pushTransactionArgs;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!!this.chainId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _f.sent();
                        this.chainId = info.chain_id;
                        _f.label = 2;
                    case 2:
                        if (!(typeof blocksBehind === "number" && expireSeconds)) return [3 /*break*/, 6];
                        if (!!info) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 3:
                        info = _f.sent();
                        _f.label = 4;
                    case 4: return [4 /*yield*/, this.rpc.get_block(info.head_block_num - blocksBehind)];
                    case 5:
                        refBlock = _f.sent();
                        transaction = __assign({}, ser.transactionHeader(refBlock, expireSeconds), transaction);
                        _f.label = 6;
                    case 6:
                        if (!this.hasRequiredTaposFields(transaction)) {
                            throw new Error("Required configuration or TAPOS fields are not present");
                        }
                        return [4 /*yield*/, this.getTransactionAbis(transaction)];
                    case 7:
                        abis = _f.sent();
                        _d = [{}, transaction];
                        _e = {};
                        return [4 /*yield*/, this.serializeActions(transaction.actions)];
                    case 8:
                        transaction = __assign.apply(void 0, _d.concat([(_e.actions = _f.sent(), _e)]));
                        serializedTransaction = this.serializeTransaction(transaction);
                        return [4 /*yield*/, this.signatureProvider.getAvailableKeys()];
                    case 9:
                        availableKeys = _f.sent();
                        return [4 /*yield*/, this.authorityProvider.getRequiredKeys({ transaction: transaction, availableKeys: availableKeys })];
                    case 10:
                        requiredKeys = _f.sent();
                        return [4 /*yield*/, this.signatureProvider.sign({
                                chainId: this.chainId,
                                requiredKeys: requiredKeys,
                                serializedTransaction: serializedTransaction,
                                abis: abis,
                            })];
                    case 11:
                        signatures = _f.sent();
                        pushTransactionArgs = { signatures: signatures, serializedTransaction: serializedTransaction };
                        if (broadcast) {
                            return [2 /*return*/, this.pushSignedTransaction(pushTransactionArgs)];
                        }
                        return [2 /*return*/, pushTransactionArgs];
                }
            });
        });
    };
    /** Broadcast a signed transaction */
    Api.prototype.pushSignedTransaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.rpc.push_transaction({
                        signatures: signatures,
                        serializedTransaction: serializedTransaction,
                    })];
            });
        });
    };
    // eventually break out into TransactionValidator class
    Api.prototype.hasRequiredTaposFields = function (_a) {
        var expiration = _a.expiration, ref_block_num = _a.ref_block_num, ref_block_prefix = _a.ref_block_prefix, transaction = __rest(_a, ["expiration", "ref_block_num", "ref_block_prefix"]);
        return !!(expiration && ref_block_num && ref_block_prefix);
    };
    return Api;
}()); // Api
exports.Api = Api;


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

/***/ "./src/eosjs-serialize.ts":
/*!********************************!*\
  !*** ./src/eosjs-serialize.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module Serialize
 */
// copyright defined in eosjs/LICENSE.txt

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var numeric = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
/** State for serialize() and deserialize() */
var SerializerState = /** @class */ (function () {
    function SerializerState() {
        /** Have any binary extensions been skipped? */
        this.skippedBinaryExtension = false;
    }
    return SerializerState;
}());
exports.SerializerState = SerializerState;
/** Serialize and deserialize data */
var SerialBuffer = /** @class */ (function () {
    /**
     * @param __namedParameters
     *    * `array`: `null` if serializing, or binary data to deserialize
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function SerialBuffer(_a) {
        var _b = _a === void 0 ? {} : _a, textEncoder = _b.textEncoder, textDecoder = _b.textDecoder, array = _b.array;
        /** Current position while reading (deserializing) */
        this.readPos = 0;
        this.array = array || new Uint8Array(1024);
        this.length = array ? array.length : 0;
        this.textEncoder = textEncoder || new TextEncoder();
        this.textDecoder = textDecoder || new TextDecoder("utf-8", { fatal: true });
    }
    /** Resize `array` if needed to have at least `size` bytes free */
    SerialBuffer.prototype.reserve = function (size) {
        if (this.length + size <= this.array.length) {
            return;
        }
        var l = this.array.length;
        while (this.length + size > l) {
            l = Math.ceil(l * 1.5);
        }
        var newArray = new Uint8Array(l);
        newArray.set(this.array);
        this.array = newArray;
    };
    /** Is there data available to read? */
    SerialBuffer.prototype.haveReadData = function () {
        return this.readPos < this.length;
    };
    /** Restart reading from the beginning */
    SerialBuffer.prototype.restartRead = function () {
        this.readPos = 0;
    };
    /** Return data with excess storage trimmed away */
    SerialBuffer.prototype.asUint8Array = function () {
        return new Uint8Array(this.array.buffer, 0, this.length);
    };
    /** Append bytes */
    SerialBuffer.prototype.pushArray = function (v) {
        this.reserve(v.length);
        this.array.set(v, this.length);
        this.length += v.length;
    };
    /** Append bytes */
    SerialBuffer.prototype.push = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        this.pushArray(v);
    };
    /** Get a single byte */
    SerialBuffer.prototype.get = function () {
        if (this.readPos < this.length) {
            return this.array[this.readPos++];
        }
        throw new Error("Read past end of buffer");
    };
    /** Append bytes in `v`. Throws if `len` doesn't match `v.length` */
    SerialBuffer.prototype.pushUint8ArrayChecked = function (v, len) {
        if (v.length !== len) {
            throw new Error("Binary data has incorrect size");
        }
        this.pushArray(v);
    };
    /** Get `len` bytes */
    SerialBuffer.prototype.getUint8Array = function (len) {
        if (this.readPos + len > this.length) {
            throw new Error("Read past end of buffer");
        }
        var result = new Uint8Array(this.array.buffer, this.readPos, len);
        this.readPos += len;
        return result;
    };
    /** Append a `uint16` */
    SerialBuffer.prototype.pushUint16 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff);
    };
    /** Get a `uint16` */
    SerialBuffer.prototype.getUint16 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        return v;
    };
    /** Append a `uint32` */
    SerialBuffer.prototype.pushUint32 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >> 24) & 0xff);
    };
    /** Get a `uint32` */
    SerialBuffer.prototype.getUint32 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        v |= this.get() << 16;
        v |= this.get() << 24;
        return v >>> 0;
    };
    /** Append a `uint64`. *Caution*: `number` only has 53 bits of precision */
    SerialBuffer.prototype.pushNumberAsUint64 = function (v) {
        this.pushUint32(v >>> 0);
        this.pushUint32(Math.floor(v / 4294967296) >>> 0);
    };
    /**
     * Get a `uint64` as a `number`. *Caution*: `number` only has 53 bits of precision; some values will change.
     * `numeric.binaryToDecimal(serialBuffer.getUint8Array(8))` recommended instead
     */
    SerialBuffer.prototype.getUint64AsNumber = function () {
        var low = this.getUint32();
        var high = this.getUint32();
        return (high >>> 0) * 4294967296 + (low >>> 0);
    };
    /** Append a `varuint32` */
    SerialBuffer.prototype.pushVaruint32 = function (v) {
        while (true) {
            if (v >>> 7) {
                this.push(0x80 | (v & 0x7f));
                v = v >>> 7;
            }
            else {
                this.push(v);
                break;
            }
        }
    };
    /** Get a `varuint32` */
    SerialBuffer.prototype.getVaruint32 = function () {
        var v = 0;
        var bit = 0;
        while (true) {
            var b = this.get();
            v |= (b & 0x7f) << bit;
            bit += 7;
            if (!(b & 0x80)) {
                break;
            }
        }
        return v >>> 0;
    };
    /** Append a `varint32` */
    SerialBuffer.prototype.pushVarint32 = function (v) {
        this.pushVaruint32((v << 1) ^ (v >> 31));
    };
    /** Get a `varint32` */
    SerialBuffer.prototype.getVarint32 = function () {
        var v = this.getVaruint32();
        if (v & 1) {
            return ((~v) >> 1) | 2147483648;
        }
        else {
            return v >>> 1;
        }
    };
    /** Append a `float32` */
    SerialBuffer.prototype.pushFloat32 = function (v) {
        this.pushArray(new Uint8Array((new Float32Array([v])).buffer));
    };
    /** Get a `float32` */
    SerialBuffer.prototype.getFloat32 = function () {
        return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
    };
    /** Append a `float64` */
    SerialBuffer.prototype.pushFloat64 = function (v) {
        this.pushArray(new Uint8Array((new Float64Array([v])).buffer));
    };
    /** Get a `float64` */
    SerialBuffer.prototype.getFloat64 = function () {
        return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
    };
    /** Append a `name` */
    SerialBuffer.prototype.pushName = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing name");
        }
        function charToSymbol(c) {
            if (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) {
                return (c - "a".charCodeAt(0)) + 6;
            }
            if (c >= "1".charCodeAt(0) && c <= "5".charCodeAt(0)) {
                return (c - "1".charCodeAt(0)) + 1;
            }
            return 0;
        }
        var a = new Uint8Array(8);
        var bit = 63;
        for (var i = 0; i < s.length; ++i) {
            var c = charToSymbol(s.charCodeAt(i));
            if (bit < 5) {
                c = c << 1;
            }
            for (var j = 4; j >= 0; --j) {
                if (bit >= 0) {
                    a[Math.floor(bit / 8)] |= ((c >> j) & 1) << (bit % 8);
                    --bit;
                }
            }
        }
        this.pushArray(a);
    };
    /** Get a `name` */
    SerialBuffer.prototype.getName = function () {
        var a = this.getUint8Array(8);
        var result = "";
        for (var bit = 63; bit >= 0;) {
            var c = 0;
            for (var i = 0; i < 5; ++i) {
                if (bit >= 0) {
                    c = (c << 1) | ((a[Math.floor(bit / 8)] >> (bit % 8)) & 1);
                    --bit;
                }
            }
            if (c >= 6) {
                result += String.fromCharCode(c + "a".charCodeAt(0) - 6);
            }
            else if (c >= 1) {
                result += String.fromCharCode(c + "1".charCodeAt(0) - 1);
            }
            else {
                result += ".";
            }
        }
        if (result === ".............") {
            return result;
        }
        while (result.endsWith(".")) {
            result = result.substr(0, result.length - 1);
        }
        return result;
    };
    /** Append length-prefixed binary data */
    SerialBuffer.prototype.pushBytes = function (v) {
        this.pushVaruint32(v.length);
        this.pushArray(v);
    };
    /** Get length-prefixed binary data */
    SerialBuffer.prototype.getBytes = function () {
        return this.getUint8Array(this.getVaruint32());
    };
    /** Append a string */
    SerialBuffer.prototype.pushString = function (v) {
        this.pushBytes(this.textEncoder.encode(v));
    };
    /** Get a string */
    SerialBuffer.prototype.getString = function () {
        return this.textDecoder.decode(this.getBytes());
    };
    /** Append a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.pushSymbolCode = function (name) {
        if (typeof name !== "string") {
            throw new Error("Expected string containing symbol_code");
        }
        var a = [];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.getSymbolCode = function () {
        var a = this.getUint8Array(8);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return name;
    };
    /** Append a `symbol` */
    SerialBuffer.prototype.pushSymbol = function (_a) {
        var name = _a.name, precision = _a.precision;
        var a = [precision & 0xff];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol` */
    SerialBuffer.prototype.getSymbol = function () {
        var precision = this.get();
        var a = this.getUint8Array(7);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return { name: name, precision: precision };
    };
    /** Append an asset */
    SerialBuffer.prototype.pushAsset = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing asset");
        }
        s = s.trim();
        var pos = 0;
        var amount = "";
        var precision = 0;
        if (s[pos] === "-") {
            amount += "-";
            ++pos;
        }
        var foundDigit = false;
        while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
            foundDigit = true;
            amount += s[pos];
            ++pos;
        }
        if (!foundDigit) {
            throw new Error("Asset must begin with a number");
        }
        if (s[pos] === ".") {
            ++pos;
            while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
                amount += s[pos];
                ++precision;
                ++pos;
            }
        }
        var name = s.substr(pos).trim();
        this.pushArray(numeric.signedDecimalToBinary(8, amount));
        this.pushSymbol({ name: name, precision: precision });
    };
    /** Get an asset */
    SerialBuffer.prototype.getAsset = function () {
        var amount = this.getUint8Array(8);
        var _a = this.getSymbol(), name = _a.name, precision = _a.precision;
        var s = numeric.signedBinaryToDecimal(amount, precision + 1);
        if (precision) {
            s = s.substr(0, s.length - precision) + "." + s.substr(s.length - precision);
        }
        return s + " " + name;
    };
    /** Append a public key */
    SerialBuffer.prototype.pushPublicKey = function (s) {
        var key = numeric.stringToPublicKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a public key */
    SerialBuffer.prototype.getPublicKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.publicKeyDataSize);
        return numeric.publicKeyToString({ type: type, data: data });
    };
    /** Append a private key */
    SerialBuffer.prototype.pushPrivateKey = function (s) {
        var key = numeric.stringToPrivateKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a private key */
    SerialBuffer.prototype.getPrivateKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.privateKeyDataSize);
        return numeric.privateKeyToString({ type: type, data: data });
    };
    /** Append a signature */
    SerialBuffer.prototype.pushSignature = function (s) {
        var key = numeric.stringToSignature(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a signature */
    SerialBuffer.prototype.getSignature = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.signatureDataSize);
        return numeric.signatureToString({ type: type, data: data });
    };
    return SerialBuffer;
}()); // SerialBuffer
exports.SerialBuffer = SerialBuffer;
/** Is this a supported ABI version? */
function supportedAbiVersion(version) {
    return version.startsWith("eosio::abi/1.");
}
exports.supportedAbiVersion = supportedAbiVersion;
function checkDateParse(date) {
    var result = Date.parse(date);
    if (Number.isNaN(result)) {
        throw new Error("Invalid time format");
    }
    return result;
}
/** Convert date in ISO format to `time_point` (miliseconds since epoch) */
function dateToTimePoint(date) {
    return Math.round(checkDateParse(date + "Z") * 1000);
}
exports.dateToTimePoint = dateToTimePoint;
/** Convert `time_point` (miliseconds since epoch) to date in ISO format */
function timePointToDate(us) {
    var s = (new Date(us / 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointToDate = timePointToDate;
/** Convert date in ISO format to `time_point_sec` (seconds since epoch) */
function dateToTimePointSec(date) {
    return Math.round(checkDateParse(date + "Z") / 1000);
}
exports.dateToTimePointSec = dateToTimePointSec;
/** Convert `time_point_sec` (seconds since epoch) to to date in ISO format */
function timePointSecToDate(sec) {
    var s = (new Date(sec * 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointSecToDate = timePointSecToDate;
/** Convert date in ISO format to `block_timestamp_type` (half-seconds since a different epoch) */
function dateToBlockTimestamp(date) {
    return Math.round((checkDateParse(date + "Z") - 946684800000) / 500);
}
exports.dateToBlockTimestamp = dateToBlockTimestamp;
/** Convert `block_timestamp_type` (half-seconds since a different epoch) to to date in ISO format */
function blockTimestampToDate(slot) {
    var s = (new Date(slot * 500 + 946684800000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.blockTimestampToDate = blockTimestampToDate;
/** Convert `string` to `Symbol`. format: `precision,NAME`. */
function stringToSymbol(s) {
    if (typeof s !== "string") {
        throw new Error("Expected string containing symbol");
    }
    var m = s.match(/^([0-9]+),([A-Z]+)$/);
    if (!m) {
        throw new Error("Invalid symbol");
    }
    return { name: m[2], precision: +m[1] };
}
exports.stringToSymbol = stringToSymbol;
/** Convert `Symbol` to `string`. format: `precision,NAME`. */
function symbolToString(_a) {
    var name = _a.name, precision = _a.precision;
    return precision + "," + name;
}
exports.symbolToString = symbolToString;
/** Convert binary data to hex */
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
    return result.toUpperCase();
}
exports.arrayToHex = arrayToHex;
/** Convert hex to binary data */
function hexToUint8Array(hex) {
    if (typeof hex !== "string") {
        throw new Error("Expected string containing hex digits");
    }
    if (hex.length % 2) {
        throw new Error("Odd number of hex digits");
    }
    var l = hex.length / 2;
    var result = new Uint8Array(l);
    for (var i = 0; i < l; ++i) {
        var x = parseInt(hex.substr(i * 2, 2), 16);
        if (Number.isNaN(x)) {
            throw new Error("Expected hex string");
        }
        result[i] = x;
    }
    return result;
}
exports.hexToUint8Array = hexToUint8Array;
function serializeUnknown(buffer, data) {
    throw new Error("Don't know how to serialize " + this.name);
}
function deserializeUnknown(buffer) {
    throw new Error("Don't know how to deserialize " + this.name);
}
function serializeStruct(buffer, data, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_2, _a;
    if (this.base) {
        this.base.serialize(buffer, data, state, allowExtensions);
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (field.name in data) {
                if (state.skippedBinaryExtension) {
                    throw new Error("unexpected " + this.name + "." + field.name);
                }
                field.type.serialize(buffer, data[field.name], state, allowExtensions && field === this.fields[this.fields.length - 1]);
            }
            else {
                if (allowExtensions && field.type.extensionOf) {
                    state.skippedBinaryExtension = true;
                }
                else {
                    throw new Error("missing " + this.name + "." + field.name + " (type=" + field.type.name + ")");
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function deserializeStruct(buffer, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_3, _a;
    var result;
    if (this.base) {
        result = this.base.deserialize(buffer, state, allowExtensions);
    }
    else {
        result = {};
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (allowExtensions && field.type.extensionOf && !buffer.haveReadData()) {
                state.skippedBinaryExtension = true;
            }
            else {
                result[field.name] = field.type.deserialize(buffer, state, allowExtensions);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
function serializeVariant(buffer, data, state, allowExtensions) {
    if (!Array.isArray(data) || data.length !== 2 || typeof data[0] !== "string") {
        throw new Error('expected variant: ["type", value]');
    }
    var i = this.fields.findIndex(function (field) { return field.name === data[0]; });
    if (i < 0) {
        throw new Error("type \"" + data[0] + "\" is not valid for variant");
    }
    buffer.pushVaruint32(i);
    this.fields[i].type.serialize(buffer, data[1], state, allowExtensions);
}
function deserializeVariant(buffer, state, allowExtensions) {
    var i = buffer.getVaruint32();
    if (i >= this.fields.length) {
        throw new Error("type index " + i + " is not valid for variant");
    }
    var field = this.fields[i];
    return [field.name, field.type.deserialize(buffer, state, allowExtensions)];
}
function serializeArray(buffer, data, state, allowExtensions) {
    var e_4, _a;
    buffer.pushVaruint32(data.length);
    try {
        for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
            var item = data_2_1.value;
            this.arrayOf.serialize(buffer, item, state, false);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
function deserializeArray(buffer, state, allowExtensions) {
    var len = buffer.getVaruint32();
    var result = [];
    for (var i = 0; i < len; ++i) {
        result.push(this.arrayOf.deserialize(buffer, state, false));
    }
    return result;
}
function serializeOptional(buffer, data, state, allowExtensions) {
    if (data === null || data === undefined) {
        buffer.push(0);
    }
    else {
        buffer.push(1);
        this.optionalOf.serialize(buffer, data, state, allowExtensions);
    }
}
function deserializeOptional(buffer, state, allowExtensions) {
    if (buffer.get()) {
        return this.optionalOf.deserialize(buffer, state, allowExtensions);
    }
    else {
        return null;
    }
}
function serializeExtension(buffer, data, state, allowExtensions) {
    this.extensionOf.serialize(buffer, data, state, allowExtensions);
}
function deserializeExtension(buffer, state, allowExtensions) {
    return this.extensionOf.deserialize(buffer, state, allowExtensions);
}
function createType(attrs) {
    return __assign({ name: "<missing name>", aliasOfName: "", arrayOf: null, optionalOf: null, extensionOf: null, baseName: "", base: null, fields: [], serialize: serializeUnknown, deserialize: deserializeUnknown }, attrs);
}
function checkRange(orig, converted) {
    if (Number.isNaN(+orig) || Number.isNaN(+converted) || (typeof orig !== "number" && typeof orig !== "string")) {
        throw new Error("Expected number");
    }
    if (+orig !== +converted) {
        throw new Error("Number is out of range");
    }
    return +orig;
}
/** Create the set of types built-in to the abi format */
function createInitialTypes() {
    var result = new Map(Object.entries({
        bool: createType({
            name: "bool",
            serialize: function (buffer, data) {
                if (typeof data !== "boolean") {
                    throw new Error("Expected true or false");
                }
                buffer.push(data ? 1 : 0);
            },
            deserialize: function (buffer) { return !!buffer.get(); },
        }),
        uint8: createType({
            name: "uint8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data & 0xff)); },
            deserialize: function (buffer) { return buffer.get(); },
        }),
        int8: createType({
            name: "int8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data << 24 >> 24)); },
            deserialize: function (buffer) { return buffer.get() << 24 >> 24; },
        }),
        uint16: createType({
            name: "uint16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data & 0xffff)); },
            deserialize: function (buffer) { return buffer.getUint16(); },
        }),
        int16: createType({
            name: "int16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data << 16 >> 16)); },
            deserialize: function (buffer) { return buffer.getUint16() << 16 >> 16; },
        }),
        uint32: createType({
            name: "uint32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getUint32(); },
        }),
        uint64: createType({
            name: "uint64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.decimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int64: createType({
            name: "int64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int32: createType({
            name: "int32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getUint32() | 0; },
        }),
        varuint32: createType({
            name: "varuint32",
            serialize: function (buffer, data) { buffer.pushVaruint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getVaruint32(); },
        }),
        varint32: createType({
            name: "varint32",
            serialize: function (buffer, data) { buffer.pushVarint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getVarint32(); },
        }),
        uint128: createType({
            name: "uint128",
            serialize: function (buffer, data) { buffer.pushArray(numeric.decimalToBinary(16, "" + data)); },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(16)); },
        }),
        int128: createType({
            name: "int128",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(16, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(16)); },
        }),
        float32: createType({
            name: "float32",
            serialize: function (buffer, data) { buffer.pushFloat32(data); },
            deserialize: function (buffer) { return buffer.getFloat32(); },
        }),
        float64: createType({
            name: "float64",
            serialize: function (buffer, data) { buffer.pushFloat64(data); },
            deserialize: function (buffer) { return buffer.getFloat64(); },
        }),
        float128: createType({
            name: "float128",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 16); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(16)); },
        }),
        bytes: createType({
            name: "bytes",
            serialize: function (buffer, data) { buffer.pushBytes(hexToUint8Array(data)); },
            deserialize: function (buffer) { return arrayToHex(buffer.getBytes()); },
        }),
        string: createType({
            name: "string",
            serialize: function (buffer, data) { buffer.pushString(data); },
            deserialize: function (buffer) { return buffer.getString(); },
        }),
        name: createType({
            name: "name",
            serialize: function (buffer, data) { buffer.pushName(data); },
            deserialize: function (buffer) { return buffer.getName(); },
        }),
        time_point: createType({
            name: "time_point",
            serialize: function (buffer, data) { buffer.pushNumberAsUint64(dateToTimePoint(data)); },
            deserialize: function (buffer) { return timePointToDate(buffer.getUint64AsNumber()); },
        }),
        time_point_sec: createType({
            name: "time_point_sec",
            serialize: function (buffer, data) { buffer.pushUint32(dateToTimePointSec(data)); },
            deserialize: function (buffer) { return timePointSecToDate(buffer.getUint32()); },
        }),
        block_timestamp_type: createType({
            name: "block_timestamp_type",
            serialize: function (buffer, data) { buffer.pushUint32(dateToBlockTimestamp(data)); },
            deserialize: function (buffer) { return blockTimestampToDate(buffer.getUint32()); },
        }),
        symbol_code: createType({
            name: "symbol_code",
            serialize: function (buffer, data) { buffer.pushSymbolCode(data); },
            deserialize: function (buffer) { return buffer.getSymbolCode(); },
        }),
        symbol: createType({
            name: "symbol",
            serialize: function (buffer, data) { buffer.pushSymbol(stringToSymbol(data)); },
            deserialize: function (buffer) { return symbolToString(buffer.getSymbol()); },
        }),
        asset: createType({
            name: "asset",
            serialize: function (buffer, data) { buffer.pushAsset(data); },
            deserialize: function (buffer) { return buffer.getAsset(); },
        }),
        checksum160: createType({
            name: "checksum160",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 20); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(20)); },
        }),
        checksum256: createType({
            name: "checksum256",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 32); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(32)); },
        }),
        checksum512: createType({
            name: "checksum512",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 64); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(64)); },
        }),
        public_key: createType({
            name: "public_key",
            serialize: function (buffer, data) { buffer.pushPublicKey(data); },
            deserialize: function (buffer) { return buffer.getPublicKey(); },
        }),
        private_key: createType({
            name: "private_key",
            serialize: function (buffer, data) { buffer.pushPrivateKey(data); },
            deserialize: function (buffer) { return buffer.getPrivateKey(); },
        }),
        signature: createType({
            name: "signature",
            serialize: function (buffer, data) { buffer.pushSignature(data); },
            deserialize: function (buffer) { return buffer.getSignature(); },
        }),
    }));
    result.set("extended_asset", createType({
        name: "extended_asset",
        baseName: "",
        fields: [
            { name: "quantity", typeName: "asset", type: result.get("asset") },
            { name: "contract", typeName: "name", type: result.get("name") },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return result;
} // createInitialTypes()
exports.createInitialTypes = createInitialTypes;
/** Get type from `types` */
function getType(types, name) {
    var type = types.get(name);
    if (type && type.aliasOfName) {
        return getType(types, type.aliasOfName);
    }
    if (type) {
        return type;
    }
    if (name.endsWith("[]")) {
        return createType({
            name: name,
            arrayOf: getType(types, name.substr(0, name.length - 2)),
            serialize: serializeArray,
            deserialize: deserializeArray,
        });
    }
    if (name.endsWith("?")) {
        return createType({
            name: name,
            optionalOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeOptional,
            deserialize: deserializeOptional,
        });
    }
    if (name.endsWith("$")) {
        return createType({
            name: name,
            extensionOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeExtension,
            deserialize: deserializeExtension,
        });
    }
    throw new Error("Unknown type: " + name);
}
exports.getType = getType;
/**
 * Get types from abi
 * @param initialTypes Set of types to build on.
 *     In most cases, it's best to fill this from a fresh call to `getTypesFromAbi()`.
 */
function getTypesFromAbi(initialTypes, abi) {
    var e_5, _a, e_6, _b, e_7, _c, e_8, _d, e_9, _e;
    var types = new Map(initialTypes);
    if (abi.types) {
        try {
            for (var _f = __values(abi.types), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = _g.value, new_type_name = _h.new_type_name, type = _h.type;
                types.set(new_type_name, createType({ name: new_type_name, aliasOfName: type }));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
    }
    if (abi.structs) {
        try {
            for (var _j = __values(abi.structs), _k = _j.next(); !_k.done; _k = _j.next()) {
                var _l = _k.value, name_1 = _l.name, base = _l.base, fields = _l.fields;
                types.set(name_1, createType({
                    name: name_1,
                    baseName: base,
                    fields: fields.map(function (_a) {
                        var n = _a.name, type = _a.type;
                        return ({ name: n, typeName: type, type: null });
                    }),
                    serialize: serializeStruct,
                    deserialize: deserializeStruct,
                }));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    if (abi.variants) {
        try {
            for (var _m = __values(abi.variants), _o = _m.next(); !_o.done; _o = _m.next()) {
                var _p = _o.value, name_2 = _p.name, t = _p.types;
                types.set(name_2, createType({
                    name: name_2,
                    fields: t.map(function (s) { return ({ name: s, typeName: s, type: null }); }),
                    serialize: serializeVariant,
                    deserialize: deserializeVariant,
                }));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_c = _m.return)) _c.call(_m);
            }
            finally { if (e_7) throw e_7.error; }
        }
    }
    try {
        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
            var _q = __read(types_1_1.value, 2), name_3 = _q[0], type = _q[1];
            if (type.baseName) {
                type.base = getType(types, type.baseName);
            }
            try {
                for (var _r = __values(type.fields), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var field = _s.value;
                    field.type = getType(types, field.typeName);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_s && !_s.done && (_e = _r.return)) _e.call(_r);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (types_1_1 && !types_1_1.done && (_d = types_1.return)) _d.call(types_1);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return types;
} // getTypesFromAbi
exports.getTypesFromAbi = getTypesFromAbi;
/** TAPoS: Return transaction fields which reference `refBlock` and expire `expireSeconds` after `refBlock.timestamp` */
function transactionHeader(refBlock, expireSeconds) {
    return {
        expiration: timePointSecToDate(dateToTimePointSec(refBlock.timestamp) + expireSeconds),
        ref_block_num: refBlock.block_num & 0xffff,
        ref_block_prefix: refBlock.ref_block_prefix,
    };
}
exports.transactionHeader = transactionHeader;
/** Convert action data to serialized form (hex) */
function serializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textEncoder: textEncoder, textDecoder: textDecoder });
    action.serialize(buffer, data);
    return arrayToHex(buffer.asUint8Array());
}
exports.serializeActionData = serializeActionData;
/** Return action in serialized form */
function serializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: serializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.serializeAction = serializeAction;
/** Deserialize action data. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (typeof data === "string") {
        data = hexToUint8Array(data);
    }
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textDecoder: textDecoder, textEncoder: textEncoder });
    buffer.pushArray(data);
    return action.deserialize(buffer);
}
exports.deserializeActionData = deserializeActionData;
/** Deserialize action. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: deserializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.deserializeAction = deserializeAction;


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
			.map((_, i) => new Proxy(
				new DataView(
					padded, i * block_size, block_size
				), {
				get(block_view, j)
				{
					return block_view.getUint32(
						j * word_size,
						true // Little-endian
					);
				}
			}));

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
							X[i][r[j]],
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
							X[i][rP[j]],
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

/***/ "./src/transaction.abi.json":
/*!**********************************!*\
  !*** ./src/transaction.abi.json ***!
  \**********************************/
/*! exports provided: version, types, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtYXBpLnRzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtbnVtZXJpYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLXNlcmlhbGl6ZS50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztHQUVHO0FBRUgseUNBQXlDO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHYiwyRkFBaUQ7QUFDakQsbUZBQXlDO0FBRXpDLDJCQUEyQjtBQUMzQixJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLCtDQUFxQixDQUFDLENBQUM7QUFDOUMsMkJBQTJCO0FBQzNCLElBQU0sY0FBYyxHQUFHLG1CQUFPLENBQUMsK0RBQTZCLENBQUMsQ0FBQztBQUU5RCxpQ0FBaUM7QUFDcEIsaUJBQVMsR0FBRyxHQUFHLENBQUM7QUF1RDdCO0lBNEJJOzs7Ozs7OztPQVFHO0lBQ0gsYUFBWSxJQU9YO1FBdEJELDZEQUE2RDtRQUN0RCxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7UUFFbkQsbUJBQW1CO1FBQ1osZUFBVSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO1FBbUI3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCw4Q0FBOEM7SUFDdkMsMEJBQVksR0FBbkIsVUFBb0IsTUFBa0I7UUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsS0FBSyxFQUFFLE1BQU07U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRTtZQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDOUM7UUFDRCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHNFQUFzRTtJQUN6RCwwQkFBWSxHQUF6QixVQUEwQixXQUFtQixFQUFFLE1BQWM7UUFBZCx1Q0FBYzs7Ozs7O3dCQUN6RCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFOzRCQUM3QyxzQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBQzt5QkFDM0M7Ozs7d0JBSWtCLG1DQUFjO3dCQUFFLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDOzt3QkFBekUsTUFBTSxHQUFHLGtCQUFlLENBQUMsU0FBZ0QsQ0FBQyxDQUFDLEdBQUcsRUFBQzt3QkFDL0UsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3RDLFNBQVMsR0FBRyxFQUFFLE1BQU0sVUFBRSxHQUFHLE9BQUUsQ0FBQzs7Ozt3QkFFNUIsR0FBQyxDQUFDLE9BQU8sR0FBRyxzQkFBb0IsV0FBVyxVQUFLLEdBQUMsQ0FBQyxPQUFTLENBQUM7d0JBQzVELE1BQU0sR0FBQyxDQUFDOzt3QkFFWixJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQW1CLFdBQWEsQ0FBQyxDQUFDO3lCQUNyRDt3QkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQzVDLHNCQUFPLFNBQVMsRUFBQzs7OztLQUNwQjtJQUVELHFEQUFxRDtJQUN4QyxvQkFBTSxHQUFuQixVQUFvQixXQUFtQixFQUFFLE1BQWM7UUFBZCx1Q0FBYzs7Ozs0QkFDM0MscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDOzRCQUFwRCxzQkFBTyxDQUFDLFNBQTRDLENBQUMsQ0FBQyxHQUFHLEVBQUM7Ozs7S0FDN0Q7SUFFRCx1Q0FBdUM7SUFDMUIsZ0NBQWtCLEdBQS9CLFVBQWdDLFdBQWdCLEVBQUUsTUFBYztRQUFkLHVDQUFjOzs7OztnQkFDdEQsUUFBUSxHQUFhLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBa0IsSUFBYSxhQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUFDO2dCQUM3RixjQUFjLEdBQWdCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxjQUFjLEdBQThCLFNBQUksY0FBYyxFQUFFLEdBQUcsQ0FDckUsVUFBTyxPQUFlOzs7Ozs7b0NBQ2xCLFlBQVksRUFBRSxPQUFPOztnQ0FBUSxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7b0NBRDFCLHVCQUNwQixNQUFHLEdBQUUsQ0FBQyxTQUF3QyxDQUFDLENBQUMsTUFBTTt1Q0FDL0U7OztxQkFBQSxDQUFDLENBQUM7Z0JBQ1Isc0JBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBQzs7O0tBQ3RDO0lBRUQseURBQXlEO0lBQzVDLHlCQUFXLEdBQXhCLFVBQXlCLFdBQW1CLEVBQUUsTUFBYztRQUFkLHVDQUFjOzs7Ozs7d0JBQ3hELElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBQzVDLHNCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFDO3lCQUMxQzt3QkFDVyxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7O3dCQUE1QyxHQUFHLEdBQUcsU0FBc0M7d0JBQzVDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUMzRCxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7OzRCQUM1QyxLQUE2QixpQkFBRyxDQUFDLE9BQU8sNkNBQUU7Z0NBQS9CLGFBQWMsRUFBWixnQkFBSSxFQUFFLElBQUk7Z0NBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7NkJBQy9DOzs7Ozs7Ozs7d0JBQ0ssTUFBTSxHQUFHLEVBQUUsS0FBSyxTQUFFLE9BQU8sV0FBRSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNqQjtJQUVELHVHQUF1RztJQUNoRyx1QkFBUyxHQUFoQixVQUFpQixNQUF3QixFQUFFLElBQVksRUFBRSxLQUFVO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsb0hBQW9IO0lBQzdHLHlCQUFXLEdBQWxCLFVBQW1CLE1BQXdCLEVBQUUsSUFBWTtRQUNyRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxzQ0FBc0M7SUFDL0Isa0NBQW9CLEdBQTNCLFVBQTRCLFdBQWdCO1FBQ3hDLElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxhQUFhLGFBQ2hDLG1CQUFtQixFQUFFLENBQUMsRUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxFQUNuQixTQUFTLEVBQUUsQ0FBQyxFQUNaLG9CQUFvQixFQUFFLEVBQUUsRUFDeEIsT0FBTyxFQUFFLEVBQUUsRUFDWCxzQkFBc0IsRUFBRSxFQUFFLElBQ3ZCLFdBQVcsRUFDaEIsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsb0NBQXNCLEdBQTdCLFVBQThCLFdBQXVCO1FBQ2pELElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUE2QjtJQUNoQiw4QkFBZ0IsR0FBN0IsVUFBOEIsT0FBcUI7Ozs7OzRCQUN4QyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBTyxFQUFzQztnQ0FBcEMsb0JBQU8sRUFBRSxjQUFJLEVBQUUsZ0NBQWEsRUFBRSxjQUFJOzs7OztnREFDM0QscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7OzRDQUExQyxRQUFRLEdBQUcsU0FBK0I7NENBQ2hELHNCQUFPLEdBQUcsQ0FBQyxlQUFlLENBQ3RCLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUM7Ozs7eUJBQ3pGLENBQUMsQ0FBQzs0QkFKSCxzQkFBTyxTQUlKLEVBQUM7Ozs7S0FDUDtJQUVELCtCQUErQjtJQUNsQixnQ0FBa0IsR0FBL0IsVUFBZ0MsT0FBcUI7Ozs7OzRCQUMxQyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBTyxFQUFzQztnQ0FBcEMsb0JBQU8sRUFBRSxjQUFJLEVBQUUsZ0NBQWEsRUFBRSxjQUFJOzs7OztnREFDM0QscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7OzRDQUExQyxRQUFRLEdBQUcsU0FBK0I7NENBQ2hELHNCQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FDeEIsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQzs7Ozt5QkFDekYsQ0FBQyxDQUFDOzRCQUpILHNCQUFPLFNBSUosRUFBQzs7OztLQUNQO0lBRUQsb0VBQW9FO0lBQ3ZELCtDQUFpQyxHQUE5QyxVQUErQyxXQUFnQzs7Ozs7O3dCQUMzRSxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTs0QkFDakMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQ2xEO3dCQUNLLHVCQUF1QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDN0MscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQzs7d0JBQXBGLG1CQUFtQixHQUFHLFNBQThEO3dCQUMxRixtQ0FBWSx1QkFBdUIsSUFBRSxPQUFPLEVBQUUsbUJBQW1CLEtBQUc7Ozs7S0FDdkU7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDVSxzQkFBUSxHQUFyQixVQUFzQixXQUFnQixFQUFFLEVBQ3dDO1lBRHhDLDRCQUN3QyxFQUR0QyxpQkFBZ0IsRUFBaEIscUNBQWdCLEVBQUUsOEJBQVksRUFBRSxnQ0FBYTs7Ozs7OzZCQUkvRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQWIsd0JBQWE7d0JBQ04scUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7O3dCQUFoQyxJQUFJLEdBQUcsU0FBeUIsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7NkJBRzdCLFFBQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxhQUFhLEdBQWpELHdCQUFpRDs2QkFDN0MsQ0FBQyxJQUFJLEVBQUwsd0JBQUs7d0JBQ0UscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7O3dCQUFoQyxJQUFJLEdBQUcsU0FBeUIsQ0FBQzs7NEJBRXBCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDOzt3QkFBdkUsUUFBUSxHQUFHLFNBQTREO3dCQUM3RSxXQUFXLGdCQUFRLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUssV0FBVyxDQUFFLENBQUM7Ozt3QkFHeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsRUFBRTs0QkFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO3lCQUM3RTt3QkFFeUIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7d0JBQTlELElBQUksR0FBZ0IsU0FBMEM7a0NBQ2pELFdBQVc7O3dCQUFXLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDOzt3QkFBekYsV0FBVyxzQ0FBcUIsVUFBTyxHQUFFLFNBQWdELFFBQUUsQ0FBQzt3QkFDdEYscUJBQXFCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMvQyxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7O3dCQUEvRCxhQUFhLEdBQUcsU0FBK0M7d0JBQ2hELHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsRUFBRSxXQUFXLGVBQUUsYUFBYSxpQkFBRSxDQUFDOzt3QkFBM0YsWUFBWSxHQUFHLFNBQTRFO3dCQUM5RSxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2dDQUNqRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0NBQ3JCLFlBQVk7Z0NBQ1oscUJBQXFCO2dDQUNyQixJQUFJOzZCQUNQLENBQUM7O3dCQUxJLFVBQVUsR0FBRyxTQUtqQjt3QkFDSSxtQkFBbUIsR0FBRyxFQUFFLFVBQVUsY0FBRSxxQkFBcUIseUJBQUUsQ0FBQzt3QkFDbEUsSUFBSSxTQUFTLEVBQUU7NEJBQ1gsc0JBQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQUM7eUJBQzFEO3dCQUNELHNCQUFPLG1CQUFtQixFQUFDOzs7O0tBQzlCO0lBRUQscUNBQXFDO0lBQ3hCLG1DQUFxQixHQUFsQyxVQUFtQyxFQUEwRDtZQUF4RCwwQkFBVSxFQUFFLGdEQUFxQjs7O2dCQUNsRSxzQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO3dCQUM3QixVQUFVO3dCQUNWLHFCQUFxQjtxQkFDeEIsQ0FBQyxFQUFDOzs7S0FDTjtJQUVELHVEQUF1RDtJQUMvQyxvQ0FBc0IsR0FBOUIsVUFBK0IsRUFBb0U7UUFBbEUsOEJBQVUsRUFBRSxnQ0FBYSxFQUFFLHNDQUFnQixFQUFFLDZFQUFjO1FBQ3hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLGFBQWEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTCxVQUFDO0FBQUQsQ0FBQyxLQUFDLE1BQU07QUF0UEssa0JBQUc7Ozs7Ozs7Ozs7Ozs7QUN6RWhCOztHQUVHO0FBQ0gseUNBQXlDO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLDJDQUEyQztBQUMzQyxJQUFNLFNBQVMsR0FBRyxtQkFBTyxDQUFDLGlDQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBc0MsQ0FBQztBQUV2RixJQUFNLFdBQVcsR0FBRyw0REFBNEQsQ0FBQztBQUNqRixJQUFNLFdBQVcsR0FBRyxrRUFBa0UsQ0FBQztBQUV2RjtJQUNJLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQWEsQ0FBQztJQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN6QyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFNLFNBQVMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0FBRXRDO0lBQ0ksSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBYSxDQUFDO0lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3pDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELElBQU0sU0FBUyxHQUFHLGlCQUFpQixFQUFFLENBQUM7QUFFdEMscUNBQXFDO0FBQ3JDLG9CQUEyQixNQUFrQjtJQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxnQ0FFQztBQUVELHNCQUFzQjtBQUN0QixnQkFBdUIsTUFBa0I7SUFDckMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDcEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0wsQ0FBQztBQVBELHdCQU9DO0FBRUQ7OztHQUdHO0FBQ0gseUJBQWdDLElBQVksRUFBRSxDQUFTO0lBQ25ELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9CLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5RCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdDO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBbEJELDBDQWtCQztBQUVEOzs7R0FHRztBQUNILCtCQUFzQyxJQUFZLEVBQUUsQ0FBUztJQUN6RCxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQzlCLElBQUksUUFBUSxFQUFFO1FBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFDRCxJQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLElBQUksUUFBUSxFQUFFO1FBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDN0M7S0FDSjtTQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFmRCxzREFlQztBQUVEOzs7R0FHRztBQUNILHlCQUFnQyxNQUFrQixFQUFFLFNBQWE7SUFBYix5Q0FBYTtJQUM3RCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQWEsQ0FBQztJQUNwRSxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDekMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3BDLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN6RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtLQUNKO0lBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLE9BQU8sTUFBTSxDQUFDLFlBQVksT0FBbkIsTUFBTSxXQUFpQixNQUFNLEdBQUU7QUFDMUMsQ0FBQztBQWhCRCwwQ0FnQkM7QUFFRDs7O0dBR0c7QUFDSCwrQkFBc0MsTUFBa0IsRUFBRSxTQUFhO0lBQWIseUNBQWE7SUFDbkUsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLE9BQU8sR0FBRyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDOUM7SUFDRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQVBELHNEQU9DO0FBRUQ7OztHQUdHO0FBQ0gsd0JBQStCLElBQVksRUFBRSxDQUFTO0lBQ2xELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9CLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNwRDtLQUNKO0lBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFsQkQsd0NBa0JDO0FBRUQ7OztHQUdHO0FBQ0gsd0JBQStCLE1BQWtCLEVBQUUsU0FBYTtJQUFiLHlDQUFhOztJQUM1RCxJQUFNLE1BQU0sR0FBRyxFQUFjLENBQUM7O1FBQzlCLEtBQW1CLDhCQUFNLGlGQUFFO1lBQXRCLElBQU0sSUFBSTtZQUNYLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDcEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEI7WUFDRCxPQUFPLEtBQUssRUFBRTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7U0FDSjs7Ozs7Ozs7OztRQUNELEtBQW1CLDhCQUFNLGlGQUFFO1lBQXRCLElBQU0sSUFBSTtZQUNYLElBQUksSUFBSSxFQUFFO2dCQUNOLE1BQU07YUFDVDtpQkFBTTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNKOzs7Ozs7Ozs7SUFDRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsT0FBTyxNQUFNLENBQUMsWUFBWSxPQUFuQixNQUFNLFdBQWlCLE1BQU0sR0FBRTtBQUMxQyxDQUFDO0FBdkJELHdDQXVCQztBQUVELDREQUE0RDtBQUM1RCx3QkFBK0IsQ0FBUztJQUNwQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3ZDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDWixDQUFDLDBCQUEwQjtJQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7S0FDNUQ7SUFDRCxJQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDcEIsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNkO2FBQU07WUFDSCxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7S0FDSjtJQUNELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDekMsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN4RDtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWpDRCx3Q0FpQ0M7QUFRRCxpREFBaUQ7QUFDcEMseUJBQWlCLEdBQUcsRUFBRSxDQUFDO0FBRXBDLGtEQUFrRDtBQUNyQywwQkFBa0IsR0FBRyxFQUFFLENBQUM7QUFFckMsZ0RBQWdEO0FBQ25DLHlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQVFwQywrQkFBK0IsSUFBZ0IsRUFBRSxNQUFjO0lBQzNELElBQU0sQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBQ0QsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELHFCQUFxQixDQUFTLEVBQUUsSUFBYSxFQUFFLElBQVksRUFBRSxNQUFjO0lBQ3ZFLElBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxRQUFFLElBQUksRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JFLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztXQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtRQUNuRSxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQscUJBQXFCLEdBQVEsRUFBRSxNQUFjLEVBQUUsTUFBYztJQUN6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkUsSUFBTSxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3RDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN4QixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxNQUFNLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCx3Q0FBd0M7QUFDeEMsMkJBQWtDLENBQVM7SUFDdkMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzVEO0lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDMUIsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLHlCQUFpQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMseUJBQWlCLENBQUMsRUFBRSxDQUFDO1FBQzFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx5QkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMseUJBQWlCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztlQUM5RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDZDtTQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ3JDLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMseUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEU7U0FBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNyQyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLHlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3hFO1NBQU07UUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7S0FDckQ7QUFDTCxDQUFDO0FBdkJELDhDQXVCQztBQUVELDZDQUE2QztBQUM3QywyQkFBa0MsR0FBUTtJQUN0QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLGVBQWUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyx5QkFBaUIsRUFBRTtRQUNsRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzVDO1NBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxlQUFlLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUsseUJBQWlCLEVBQUU7UUFDekUsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM1QztTQUFNO1FBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQVJELDhDQVFDO0FBRUQ7O0dBRUc7QUFDSCxnQ0FBdUMsQ0FBUztJQUM1QyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUMxQixPQUFPLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFMRCx3REFLQztBQUVEOztHQUVHO0FBQ0gsaUNBQXdDLElBQWM7SUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUZELDBEQUVDO0FBRUQsd0NBQXdDO0FBQ3hDLDRCQUFtQyxDQUFTO0lBQ3hDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztLQUM3RDtJQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQzlCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsMEJBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekU7U0FBTTtRQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUN0RDtBQUNMLENBQUM7QUFURCxnREFTQztBQUVELDZDQUE2QztBQUM3Qyw0QkFBbUMsR0FBUTtJQUN2QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLGVBQWUsRUFBRTtRQUN6QixPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzVDO1NBQU07UUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7S0FDdEQ7QUFDTCxDQUFDO0FBTkQsZ0RBTUM7QUFFRCx3Q0FBd0M7QUFDeEMsMkJBQWtDLENBQVM7SUFDdkMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDOUIsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyx5QkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4RTtTQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ3JDLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMseUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEU7U0FBTTtRQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztLQUNwRDtBQUNMLENBQUM7QUFYRCw4Q0FXQztBQUVELG1EQUFtRDtBQUNuRCwyQkFBa0MsU0FBYztJQUM1QyxJQUFJLFNBQVMsQ0FBQyxJQUFJLGVBQWUsRUFBRTtRQUMvQixPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2xEO1NBQU0sSUFBSSxTQUFTLENBQUMsSUFBSSxlQUFlLEVBQUU7UUFDdEMsT0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNsRDtTQUFNO1FBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQVJELDhDQVFDOzs7Ozs7Ozs7Ozs7O0FDblhEOztHQUVHO0FBRUgseUNBQXlDO0FBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2IsbUZBQTJDO0FBYzNDLDhDQUE4QztBQUM5QztJQUFBO1FBQ0ksK0NBQStDO1FBQ3hDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDO0FBSFksMENBQWU7QUF5RTVCLHFDQUFxQztBQUNyQztJQWFJOzs7OztPQUtHO0lBQ0gsc0JBQVksRUFDb0U7WUFEcEUsNEJBQ29FLEVBRGxFLDRCQUFXLEVBQUUsNEJBQVcsRUFBRSxnQkFBSztRQVo3QyxxREFBcUQ7UUFDOUMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQWFmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsa0VBQWtFO0lBQzNELDhCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUF1QztJQUNoQyxtQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsa0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsbURBQW1EO0lBQzVDLG1DQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxtQkFBbUI7SUFDWixnQ0FBUyxHQUFoQixVQUFpQixDQUF3QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO0lBQ1osMkJBQUksR0FBWDtRQUFZLFdBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsc0JBQWM7O1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHdCQUF3QjtJQUNqQiwwQkFBRyxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvRUFBb0U7SUFDN0QsNENBQXFCLEdBQTVCLFVBQTZCLENBQWEsRUFBRSxHQUFXO1FBQ25ELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQXNCO0lBQ2Ysb0NBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsd0JBQXdCO0lBQ2pCLGlDQUFVLEdBQWpCLFVBQWtCLENBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFCQUFxQjtJQUNkLGdDQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsd0JBQXdCO0lBQ2pCLGlDQUFVLEdBQWpCLFVBQWtCLENBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQscUJBQXFCO0lBQ2QsZ0NBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDJFQUEyRTtJQUNwRSx5Q0FBa0IsR0FBekIsVUFBMEIsQ0FBUztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSSx3Q0FBaUIsR0FBeEI7UUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBWSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwyQkFBMkI7SUFDcEIsb0NBQWEsR0FBcEIsVUFBcUIsQ0FBUztRQUMxQixPQUFPLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBQ2pCLG1DQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLEVBQUU7WUFDVCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUN2QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNiLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCwwQkFBMEI7SUFDbkIsbUNBQVksR0FBbkIsVUFBb0IsQ0FBUztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHVCQUF1QjtJQUNoQixrQ0FBVyxHQUFsQjtRQUNJLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVcsQ0FBQztTQUNwQzthQUFNO1lBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUVELHlCQUF5QjtJQUNsQixrQ0FBVyxHQUFsQixVQUFtQixDQUFTO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxzQkFBc0I7SUFDZixpQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQseUJBQXlCO0lBQ2xCLGtDQUFXLEdBQWxCLFVBQW1CLENBQVM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHNCQUFzQjtJQUNmLGlDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxzQkFBc0I7SUFDZiwrQkFBUSxHQUFmLFVBQWdCLENBQVM7UUFDckIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0Qsc0JBQXNCLENBQVM7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0QsSUFBTSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZDtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDVixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxFQUFFLEdBQUcsQ0FBQztpQkFDVDthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQkFBbUI7SUFDWiw4QkFBTyxHQUFkO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7b0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLEdBQUcsQ0FBQztpQkFDVDthQUNKO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNSLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVEO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZixNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDSCxNQUFNLElBQUksR0FBRyxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxJQUFJLE1BQU0sS0FBSyxlQUFlLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQseUNBQXlDO0lBQ2xDLGdDQUFTLEdBQWhCLFVBQWlCLENBQXdCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFzQztJQUMvQiwrQkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBc0I7SUFDZixpQ0FBVSxHQUFqQixVQUFrQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsbUJBQW1CO0lBQ1osZ0NBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwwRkFBMEY7SUFDbkYscUNBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsSUFBSSxPQUFOLENBQUMsV0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRTtRQUN6QyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUZBQXVGO0lBQ2hGLG9DQUFhLEdBQXBCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLEdBQUcsQ0FBQztRQUNSLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdCQUF3QjtJQUNqQixpQ0FBVSxHQUFqQixVQUFrQixFQUF3RDtZQUF0RCxjQUFJLEVBQUUsd0JBQVM7UUFDL0IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLElBQUksT0FBTixDQUFDLFdBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUU7UUFDekMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFCQUFxQjtJQUNkLGdDQUFTLEdBQWhCO1FBQ0ksSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUM7UUFDUixLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sRUFBRSxJQUFJLFFBQUUsU0FBUyxhQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFzQjtJQUNmLGdDQUFTLEdBQWhCLFVBQWlCLENBQVM7UUFDdEIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxFQUFFLEdBQUcsQ0FBQztTQUNUO1FBQ0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsRUFBRSxHQUFHLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDaEIsRUFBRSxHQUFHLENBQUM7WUFDTixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZHLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEVBQUUsU0FBUyxDQUFDO2dCQUNaLEVBQUUsR0FBRyxDQUFDO2FBQ1Q7U0FDSjtRQUNELElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBRSxTQUFTLGFBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQkFBbUI7SUFDWiwrQkFBUSxHQUFmO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQix5QkFBc0MsRUFBcEMsY0FBSSxFQUFFLHdCQUFTLENBQXNCO1FBQzdDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksU0FBUyxFQUFFO1lBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELDBCQUEwQjtJQUNuQixvQ0FBYSxHQUFwQixVQUFxQixDQUFTO1FBQzFCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUJBQXVCO0lBQ2hCLG1DQUFZLEdBQW5CO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsT0FBTyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFFBQUUsSUFBSSxRQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLHFDQUFjLEdBQXJCLFVBQXNCLENBQVM7UUFDM0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3QkFBd0I7SUFDakIsb0NBQWEsR0FBcEI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxPQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksUUFBRSxJQUFJLFFBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx5QkFBeUI7SUFDbEIsb0NBQWEsR0FBcEIsVUFBcUIsQ0FBUztRQUMxQixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFzQjtJQUNmLG1DQUFZLEdBQW5CO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsT0FBTyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFFBQUUsSUFBSSxRQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEtBQUMsZUFBZTtBQW5hSixvQ0FBWTtBQXFhekIsdUNBQXVDO0FBQ3ZDLDZCQUFvQyxPQUFlO0lBQy9DLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsa0RBRUM7QUFFRCx3QkFBd0IsSUFBWTtJQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDMUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLHlCQUFnQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFGRCwwQ0FFQztBQUVELDJFQUEyRTtBQUMzRSx5QkFBZ0MsRUFBVTtJQUN0QyxJQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsMENBR0M7QUFFRCwyRUFBMkU7QUFDM0UsNEJBQW1DLElBQVk7SUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUZELGdEQUVDO0FBRUQsOEVBQThFO0FBQzlFLDRCQUFtQyxHQUFXO0lBQzFDLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFIRCxnREFHQztBQUVELGtHQUFrRztBQUNsRyw4QkFBcUMsSUFBWTtJQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGRCxvREFFQztBQUVELHFHQUFxRztBQUNyRyw4QkFBcUMsSUFBWTtJQUM3QyxJQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELG9EQUdDO0FBRUQsOERBQThEO0FBQzlELHdCQUErQixDQUFTO0lBQ3BDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztLQUN4RDtJQUNELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUMsQ0FBQztBQVRELHdDQVNDO0FBRUQsOERBQThEO0FBQzlELHdCQUErQixFQUF3RDtRQUF0RCxjQUFJLEVBQUUsd0JBQVM7SUFDNUMsT0FBTyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNsQyxDQUFDO0FBRkQsd0NBRUM7QUFFRCxpQ0FBaUM7QUFDakMsb0JBQTJCLElBQWdCOztJQUN2QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBQ2hCLEtBQWdCLDBCQUFJLHVFQUFFO1lBQWpCLElBQU0sQ0FBQztZQUNSLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7Ozs7Ozs7OztJQUNELE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFORCxnQ0FNQztBQUVELGlDQUFpQztBQUNqQyx5QkFBZ0MsR0FBVztJQUN2QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7S0FDNUQ7SUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztLQUMvQztJQUNELElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDeEIsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFqQkQsMENBaUJDO0FBRUQsMEJBQTBCLE1BQW9CLEVBQUUsSUFBUztJQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsNEJBQTRCLE1BQW9CO0lBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFFRCx5QkFBcUMsTUFBb0IsRUFBRSxJQUFTLEVBQzNDLEtBQTZCLEVBQUUsZUFBc0I7SUFBckQsb0NBQVksZUFBZSxFQUFFO0lBQUUsd0RBQXNCOztJQUMxRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztLQUM3RDs7UUFDRCxLQUFvQixzQkFBSSxDQUFDLE1BQU0sNkNBQUU7WUFBNUIsSUFBTSxLQUFLO1lBQ1osSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRztpQkFBTTtnQkFDSCxJQUFJLGVBQWUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDM0MsS0FBSyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ2xHO2FBQ0o7U0FDSjs7Ozs7Ozs7O0FBQ0wsQ0FBQztBQUVELDJCQUF1QyxNQUFvQixFQUFFLEtBQTZCLEVBQUUsZUFBc0I7SUFBckQsb0NBQVksZUFBZSxFQUFFO0lBQUUsd0RBQXNCOztJQUM5RyxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ2xFO1NBQU07UUFDSCxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ2Y7O1FBQ0QsS0FBb0Isc0JBQUksQ0FBQyxNQUFNLDZDQUFFO1lBQTVCLElBQU0sS0FBSztZQUNaLElBQUksZUFBZSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUNyRSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQzthQUMvRTtTQUNKOzs7Ozs7Ozs7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsMEJBQXNDLE1BQW9CLEVBQUUsSUFBUyxFQUMzQyxLQUF1QixFQUFFLGVBQXlCO0lBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMxRSxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVksSUFBSyxZQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdDQUE0QixDQUFDLENBQUM7S0FDakU7SUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQsNEJBQXdDLE1BQW9CLEVBQUUsS0FBdUIsRUFBRSxlQUF5QjtJQUM1RyxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBYyxDQUFDLDhCQUEyQixDQUFDLENBQUM7S0FDL0Q7SUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBRUQsd0JBQW9DLE1BQW9CLEVBQUUsSUFBVyxFQUM3QyxLQUF1QixFQUFFLGVBQXlCOztJQUN0RSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFDbEMsS0FBbUIsMEJBQUksdUVBQUU7WUFBcEIsSUFBTSxJQUFJO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEQ7Ozs7Ozs7OztBQUNMLENBQUM7QUFFRCwwQkFBc0MsTUFBb0IsRUFBRSxLQUF1QixFQUFFLGVBQXlCO0lBQzFHLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCwyQkFBdUMsTUFBb0IsRUFBRSxJQUFTLEVBQzNDLEtBQXVCLEVBQUUsZUFBeUI7SUFDekUsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjtTQUFNO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ25FO0FBQ0wsQ0FBQztBQUVELDZCQUF5QyxNQUFvQixFQUFFLEtBQXVCLEVBQUUsZUFBeUI7SUFDN0csSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDdEU7U0FBTTtRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBRUQsNEJBQXdDLE1BQW9CLEVBQUUsSUFBUyxFQUMzQyxLQUF1QixFQUFFLGVBQXlCO0lBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRCw4QkFBMEMsTUFBb0IsRUFBRSxLQUF1QixFQUFFLGVBQXlCO0lBQzlHLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBZUQsb0JBQW9CLEtBQXFCO0lBQ3JDLGtCQUNJLElBQUksRUFBRSxnQkFBZ0IsRUFDdEIsV0FBVyxFQUFFLEVBQUUsRUFDZixPQUFPLEVBQUUsSUFBSSxFQUNiLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLFdBQVcsRUFBRSxJQUFJLEVBQ2pCLFFBQVEsRUFBRSxFQUFFLEVBQ1osSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsRUFBRSxFQUNWLFNBQVMsRUFBRSxnQkFBZ0IsRUFDM0IsV0FBVyxFQUFFLGtCQUFrQixJQUM1QixLQUFLLEVBQ1Y7QUFDTixDQUFDO0FBRUQsb0JBQW9CLElBQVksRUFBRSxTQUFpQjtJQUMvQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDM0csTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2pCLENBQUM7QUFFRCx5REFBeUQ7QUFDekQ7SUFDSSxJQUFNLE1BQU0sR0FBc0IsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFhO2dCQUN6QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvRCxDQUFDO1FBQ0YsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdELENBQUM7UUFDRixJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEcsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekUsQ0FBQztRQUNGLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRSxDQUFDO1FBQ0YsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9FLENBQUM7UUFDRixNQUFNLEVBQUUsVUFBVSxDQUFDO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkUsQ0FBQztRQUNGLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQXFCO2dCQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRyxDQUFDO1FBQ0YsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBcUI7Z0JBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RyxDQUFDO1FBQ0YsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEcsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RSxDQUFDO1FBQ0YsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNsQixJQUFJLEVBQUUsV0FBVztZQUNqQixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEUsQ0FBQztRQUNGLFFBQVEsRUFBRSxVQUFVLENBQUM7WUFDakIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEcsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JFLENBQUM7UUFDRixPQUFPLEVBQUUsVUFBVSxDQUFDO1lBQ2hCLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNHLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xHLENBQUM7UUFDRixNQUFNLEVBQUUsVUFBVSxDQUFDO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZO2dCQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUNELFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEcsQ0FBQztRQUNGLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDaEIsSUFBSSxFQUFFLFNBQVM7WUFDZixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BFLENBQUM7UUFDRixPQUFPLEVBQUUsVUFBVSxDQUFDO1lBQ2hCLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwRSxDQUFDO1FBQ0YsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUNqQixJQUFJLEVBQUUsVUFBVTtZQUNoQixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUcsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyRixDQUFDO1FBRUYsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RSxDQUFDO1FBQ0YsTUFBTSxFQUFFLFVBQVUsQ0FBQztZQUNmLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRSxDQUFDO1FBQ0YsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsWUFBWTtZQUNsQixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RixDQUFDO1FBQ0YsY0FBYyxFQUFFLFVBQVUsQ0FBQztZQUN2QixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlGLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGLENBQUM7UUFDRixvQkFBb0IsRUFBRSxVQUFVLENBQUM7WUFDN0IsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RixDQUFDO1FBQ0YsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUNwQixJQUFJLEVBQUUsYUFBYTtZQUNuQixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFLENBQUM7UUFDRixNQUFNLEVBQUUsVUFBVSxDQUFDO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25GLENBQUM7UUFDRixLQUFLLEVBQUUsVUFBVSxDQUFDO1lBQ2QsSUFBSSxFQUFFLE9BQU87WUFDYixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xFLENBQUM7UUFDRixXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQ3BCLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JGLENBQUM7UUFDRixXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQ3BCLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JGLENBQUM7UUFDRixXQUFXLEVBQUUsVUFBVSxDQUFDO1lBQ3BCLElBQUksRUFBRSxhQUFhO1lBQ25CLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRyxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JGLENBQUM7UUFDRixVQUFVLEVBQUUsVUFBVSxDQUFDO1lBQ25CLElBQUksRUFBRSxZQUFZO1lBQ2xCLFNBQVMsWUFBQyxNQUFvQixFQUFFLElBQVksSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RSxXQUFXLFlBQUMsTUFBb0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEUsQ0FBQztRQUNGLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDcEIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsU0FBUyxZQUFDLE1BQW9CLEVBQUUsSUFBWSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLFdBQVcsWUFBQyxNQUFvQixJQUFJLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RSxDQUFDO1FBQ0YsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNsQixJQUFJLEVBQUUsV0FBVztZQUNqQixTQUFTLFlBQUMsTUFBb0IsRUFBRSxJQUFZLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsV0FBVyxZQUFDLE1BQW9CLElBQUksT0FBTyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RFLENBQUM7S0FDTCxDQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDO1FBQ3BDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUU7WUFDSixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNuRTtRQUNELFNBQVMsRUFBRSxlQUFlO1FBQzFCLFdBQVcsRUFBRSxpQkFBaUI7S0FDakMsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMsdUJBQXVCO0FBdkx6QixnREF1TEM7QUFFRCw0QkFBNEI7QUFDNUIsaUJBQXdCLEtBQXdCLEVBQUUsSUFBWTtJQUMxRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDMUIsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMzQztJQUNELElBQUksSUFBSSxFQUFFO1FBQ04sT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLFVBQVUsQ0FBQztZQUNkLElBQUk7WUFDSixPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hELFNBQVMsRUFBRSxjQUFjO1lBQ3pCLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEMsQ0FBQyxDQUFDO0tBQ047SUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxVQUFVLENBQUM7WUFDZCxJQUFJO1lBQ0osVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRCxTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLFdBQVcsRUFBRSxtQkFBbUI7U0FDbkMsQ0FBQyxDQUFDO0tBQ047SUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxVQUFVLENBQUM7WUFDZCxJQUFJO1lBQ0osV0FBVyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxTQUFTLEVBQUUsa0JBQWtCO1lBQzdCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQyxDQUFDO0tBQ047SUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFqQ0QsMEJBaUNDO0FBRUQ7Ozs7R0FJRztBQUNILHlCQUFnQyxZQUErQixFQUFFLEdBQVE7O0lBQ3JFLElBQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTs7WUFDWCxLQUFzQyxxQkFBRyxDQUFDLEtBQUssNkNBQUU7Z0JBQXRDLGlCQUF1QixFQUFyQixnQ0FBYSxFQUFFLGNBQUk7Z0JBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUNuQixVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7Ozs7Ozs7OztLQUNKO0lBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFOztZQUNiLEtBQXFDLHFCQUFHLENBQUMsT0FBTyw2Q0FBRTtnQkFBdkMsaUJBQXNCLEVBQXBCLGdCQUFJLEVBQUUsY0FBSSxFQUFFLGtCQUFNO2dCQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQUksRUFBRSxVQUFVLENBQUM7b0JBQ3ZCLElBQUk7b0JBQ0osUUFBUSxFQUFFLElBQUk7b0JBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFpQjs0QkFBZixXQUFPLEVBQUUsY0FBSTt3QkFBTyxRQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFBekMsQ0FBeUMsQ0FBQztvQkFDcEYsU0FBUyxFQUFFLGVBQWU7b0JBQzFCLFdBQVcsRUFBRSxpQkFBaUI7aUJBQ2pDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7Ozs7Ozs7OztLQUNKO0lBQ0QsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFOztZQUNkLEtBQWlDLHFCQUFHLENBQUMsUUFBUSw2Q0FBRTtnQkFBcEMsaUJBQWtCLEVBQWhCLGdCQUFJLEVBQUUsWUFBUTtnQkFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEVBQUUsVUFBVSxDQUFDO29CQUN2QixJQUFJO29CQUNKLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQXRDLENBQXNDLENBQUM7b0JBQzVELFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLFdBQVcsRUFBRSxrQkFBa0I7aUJBQ2xDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7Ozs7Ozs7OztLQUNKOztRQUNELEtBQTJCLDRCQUFLLDRFQUFFO1lBQXZCLG1DQUFZLEVBQVgsY0FBSSxFQUFFLFlBQUk7WUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0M7O2dCQUNELEtBQW9CLHNCQUFJLENBQUMsTUFBTSw2Q0FBRTtvQkFBNUIsSUFBTSxLQUFLO29CQUNaLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQy9DOzs7Ozs7Ozs7U0FDSjs7Ozs7Ozs7O0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDLGtCQUFrQjtBQXRDcEIsMENBc0NDO0FBRUQsd0hBQXdIO0FBQ3hILDJCQUFrQyxRQUF3QixFQUFFLGFBQXFCO0lBQzdFLE9BQU87UUFDSCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUN0RixhQUFhLEVBQUUsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNO1FBQzFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxnQkFBZ0I7S0FDOUMsQ0FBQztBQUNOLENBQUM7QUFORCw4Q0FNQztBQUVELG1EQUFtRDtBQUNuRCw2QkFBb0MsUUFBa0IsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLElBQVMsRUFDNUQsV0FBd0IsRUFBRSxXQUF3QjtJQUNsRixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBa0IsSUFBSSxxQkFBZ0IsT0FBUyxDQUFDLENBQUM7S0FDcEU7SUFDRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLFdBQVcsZUFBRSxXQUFXLGVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFURCxrREFTQztBQUVELHVDQUF1QztBQUN2Qyx5QkFBZ0MsUUFBa0IsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUNqRCxhQUE4QixFQUFFLElBQVMsRUFBRSxXQUF3QixFQUNuRSxXQUF3QjtJQUNwRCxPQUFPO1FBQ0gsT0FBTztRQUNQLElBQUk7UUFDSixhQUFhO1FBQ2IsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO0tBQ3JGLENBQUM7QUFDTixDQUFDO0FBVEQsMENBU0M7QUFFRCx3RkFBd0Y7QUFDeEYsK0JBQXNDLFFBQWtCLEVBQUUsT0FBZSxFQUFFLElBQVksRUFDakQsSUFBb0MsRUFBRSxXQUF3QixFQUM5RCxXQUF3QjtJQUMxRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUMxQixJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWtCLElBQUkscUJBQWdCLE9BQVMsQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxXQUFXLGVBQUUsV0FBVyxlQUFFLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBYkQsc0RBYUM7QUFFRCxtRkFBbUY7QUFDbkYsMkJBQWtDLFFBQWtCLEVBQUUsT0FBZSxFQUFFLElBQVksRUFBRSxhQUE4QixFQUNqRixJQUFvQyxFQUFFLFdBQXdCLEVBQzlELFdBQXdCO0lBQ3RELE9BQU87UUFDSCxPQUFPO1FBQ1AsSUFBSTtRQUNKLGFBQWE7UUFDYixJQUFJLEVBQUUscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7S0FDdkYsQ0FBQztBQUNOLENBQUM7QUFURCw4Q0FTQzs7Ozs7Ozs7Ozs7OztBQ2prQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlb3Nqcy1kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Vvc2pzLWFwaS50c1wiKTtcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIEFQSVxyXG4gKi9cclxuXHJcbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IEFiaSwgR2V0SW5mb1Jlc3VsdCwgSnNvblJwYywgUHVzaFRyYW5zYWN0aW9uQXJncyB9IGZyb20gXCIuL2Vvc2pzLWpzb25ycGNcIjtcclxuaW1wb3J0IHsgYmFzZTY0VG9CaW5hcnkgfSBmcm9tIFwiLi9lb3Nqcy1udW1lcmljXCI7XHJcbmltcG9ydCAqIGFzIHNlciBmcm9tIFwiLi9lb3Nqcy1zZXJpYWxpemVcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCBhYmlBYmkgPSByZXF1aXJlKCcuLi9zcmMvYWJpLmFiaS5qc29uJyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCB0cmFuc2FjdGlvbkFiaSA9IHJlcXVpcmUoJy4uL3NyYy90cmFuc2FjdGlvbi5hYmkuanNvbicpO1xyXG5cclxuLyoqIFJlZXhwb3J0IGBlb3Nqcy1zZXJpYWxpemVgICovXHJcbmV4cG9ydCBjb25zdCBzZXJpYWxpemUgPSBzZXI7XHJcblxyXG4vKiogQXJndW1lbnRzIHRvIGBnZXRSZXF1aXJlZEtleXNgICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXR5UHJvdmlkZXJBcmdzIHtcclxuICAgIC8qKiBUcmFuc2FjdGlvbiB0aGF0IG5lZWRzIHRvIGJlIHNpZ25lZCAqL1xyXG4gICAgdHJhbnNhY3Rpb246IGFueTtcclxuXHJcbiAgICAvKiogUHVibGljIGtleXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcml2YXRlIGtleXMgdGhhdCB0aGUgYFNpZ25hdHVyZVByb3ZpZGVyYCBob2xkcyAqL1xyXG4gICAgYXZhaWxhYmxlS2V5czogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBHZXQgc3Vic2V0IG9mIGBhdmFpbGFibGVLZXlzYCBuZWVkZWQgdG8gbWVldCBhdXRob3JpdGllcyBpbiBgdHJhbnNhY3Rpb25gICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXR5UHJvdmlkZXIge1xyXG4gICAgLyoqIEdldCBzdWJzZXQgb2YgYGF2YWlsYWJsZUtleXNgIG5lZWRlZCB0byBtZWV0IGF1dGhvcml0aWVzIGluIGB0cmFuc2FjdGlvbmAgKi9cclxuICAgIGdldFJlcXVpcmVkS2V5czogKGFyZ3M6IEF1dGhvcml0eVByb3ZpZGVyQXJncykgPT4gUHJvbWlzZTxzdHJpbmdbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmluYXJ5QWJpIHtcclxuICAgIGFjY291bnRfbmFtZTogc3RyaW5nO1xyXG4gICAgYWJpOiBVaW50OEFycmF5O1xyXG59XHJcblxyXG4vKiogQXJndW1lbnRzIHRvIGBzaWduYCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hdHVyZVByb3ZpZGVyQXJncyB7XHJcbiAgICAvKiogQ2hhaW4gdHJhbnNhY3Rpb24gaXMgZm9yICovXHJcbiAgICBjaGFpbklkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFB1YmxpYyBrZXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpdmF0ZSBrZXlzIG5lZWRlZCB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgcmVxdWlyZWRLZXlzOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKiogVHJhbnNhY3Rpb24gdG8gc2lnbiAqL1xyXG4gICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uOiBVaW50OEFycmF5O1xyXG5cclxuICAgIC8qKiBBQklzIGZvciBhbGwgY29udHJhY3RzIHdpdGggYWN0aW9ucyBpbmNsdWRlZCBpbiBgc2VyaWFsaXplZFRyYW5zYWN0aW9uYCAqL1xyXG4gICAgYWJpczogQmluYXJ5QWJpW107XHJcbn1cclxuXHJcbi8qKiBTaWducyB0cmFuc2FjdGlvbnMgKi9cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVQcm92aWRlciB7XHJcbiAgICAvKiogUHVibGljIGtleXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcml2YXRlIGtleXMgdGhhdCB0aGUgYFNpZ25hdHVyZVByb3ZpZGVyYCBob2xkcyAqL1xyXG4gICAgZ2V0QXZhaWxhYmxlS2V5czogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XHJcblxyXG4gICAgLyoqIFNpZ24gYSB0cmFuc2FjdGlvbiAqL1xyXG4gICAgc2lnbjogKGFyZ3M6IFNpZ25hdHVyZVByb3ZpZGVyQXJncykgPT4gUHJvbWlzZTxzdHJpbmdbXT47XHJcbn1cclxuXHJcbi8qKiBIb2xkcyBhIGZldGNoZWQgYWJpICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVkQWJpIHtcclxuICAgIC8qKiBhYmkgaW4gYmluYXJ5IGZvcm0gKi9cclxuICAgIHJhd0FiaTogVWludDhBcnJheTtcclxuXHJcbiAgICAvKiogYWJpIGluIHN0cnVjdHVyZWQgZm9ybSAqL1xyXG4gICAgYWJpOiBBYmk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcGkge1xyXG4gICAgLyoqIElzc3VlcyBSUEMgY2FsbHMgKi9cclxuICAgIHB1YmxpYyBycGM6IEpzb25ScGM7XHJcblxyXG4gICAgLyoqIEdldCBzdWJzZXQgb2YgYGF2YWlsYWJsZUtleXNgIG5lZWRlZCB0byBtZWV0IGF1dGhvcml0aWVzIGluIGEgYHRyYW5zYWN0aW9uYCAqL1xyXG4gICAgcHVibGljIGF1dGhvcml0eVByb3ZpZGVyOiBBdXRob3JpdHlQcm92aWRlcjtcclxuXHJcbiAgICAvKiogU2lnbnMgdHJhbnNhY3Rpb25zICovXHJcbiAgICBwdWJsaWMgc2lnbmF0dXJlUHJvdmlkZXI6IFNpZ25hdHVyZVByb3ZpZGVyO1xyXG5cclxuICAgIC8qKiBJZGVudGlmaWVzIGNoYWluICovXHJcbiAgICBwdWJsaWMgY2hhaW5JZDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXI7XHJcbiAgICBwdWJsaWMgdGV4dERlY29kZXI6IFRleHREZWNvZGVyO1xyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBhYmkgZmlsZXMgYmV0d2VlbiBiaW5hcnkgYW5kIHN0cnVjdHVyZWQgZm9ybSAoYGFiaS5hYmkuanNvbmApICovXHJcbiAgICBwdWJsaWMgYWJpVHlwZXM6IE1hcDxzdHJpbmcsIHNlci5UeXBlPjtcclxuXHJcbiAgICAvKiogQ29udmVydHMgdHJhbnNhY3Rpb25zIGJldHdlZW4gYmluYXJ5IGFuZCBzdHJ1Y3R1cmVkIGZvcm0gKGB0cmFuc2FjdGlvbi5hYmkuanNvbmApICovXHJcbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25UeXBlczogTWFwPHN0cmluZywgc2VyLlR5cGU+O1xyXG5cclxuICAgIC8qKiBIb2xkcyBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gc2VyaWFsaXplIGNvbnRyYWN0IGFjdGlvbnMgKi9cclxuICAgIHB1YmxpYyBjb250cmFjdHMgPSBuZXcgTWFwPHN0cmluZywgc2VyLkNvbnRyYWN0PigpO1xyXG5cclxuICAgIC8qKiBGZXRjaGVkIGFiaXMgKi9cclxuICAgIHB1YmxpYyBjYWNoZWRBYmlzID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlZEFiaT4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBhcmdzXHJcbiAgICAgKiAgICAqIGBycGNgOiBJc3N1ZXMgUlBDIGNhbGxzXHJcbiAgICAgKiAgICAqIGBhdXRob3JpdHlQcm92aWRlcmA6IEdldCBwdWJsaWMga2V5cyBuZWVkZWQgdG8gbWVldCBhdXRob3JpdGllcyBpbiBhIHRyYW5zYWN0aW9uXHJcbiAgICAgKiAgICAqIGBzaWduYXR1cmVQcm92aWRlcmA6IFNpZ25zIHRyYW5zYWN0aW9uc1xyXG4gICAgICogICAgKiBgY2hhaW5JZGA6IElkZW50aWZpZXMgY2hhaW5cclxuICAgICAqICAgICogYHRleHRFbmNvZGVyYDogYFRleHRFbmNvZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXHJcbiAgICAgKiAgICAqIGB0ZXh0RGVjb2RlcmA6IGBUZXh0RGVjaWRlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzOiB7XHJcbiAgICAgICAgcnBjOiBKc29uUnBjLFxyXG4gICAgICAgIGF1dGhvcml0eVByb3ZpZGVyPzogQXV0aG9yaXR5UHJvdmlkZXIsXHJcbiAgICAgICAgc2lnbmF0dXJlUHJvdmlkZXI6IFNpZ25hdHVyZVByb3ZpZGVyLFxyXG4gICAgICAgIGNoYWluSWQ6IHN0cmluZyxcclxuICAgICAgICB0ZXh0RW5jb2Rlcj86IFRleHRFbmNvZGVyLFxyXG4gICAgICAgIHRleHREZWNvZGVyPzogVGV4dERlY29kZXIsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5ycGMgPSBhcmdzLnJwYztcclxuICAgICAgICB0aGlzLmF1dGhvcml0eVByb3ZpZGVyID0gYXJncy5hdXRob3JpdHlQcm92aWRlciB8fCBhcmdzLnJwYztcclxuICAgICAgICB0aGlzLnNpZ25hdHVyZVByb3ZpZGVyID0gYXJncy5zaWduYXR1cmVQcm92aWRlcjtcclxuICAgICAgICB0aGlzLmNoYWluSWQgPSBhcmdzLmNoYWluSWQ7XHJcbiAgICAgICAgdGhpcy50ZXh0RW5jb2RlciA9IGFyZ3MudGV4dEVuY29kZXI7XHJcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IGFyZ3MudGV4dERlY29kZXI7XHJcblxyXG4gICAgICAgIHRoaXMuYWJpVHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgYWJpQWJpKTtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgdHJhbnNhY3Rpb25BYmkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBEZWNvZGVzIGFuIGFiaSBhcyBVaW50OEFycmF5IGludG8ganNvbi4gKi9cclxuICAgIHB1YmxpYyByYXdBYmlUb0pzb24ocmF3QWJpOiBVaW50OEFycmF5KTogQWJpIHtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7XHJcbiAgICAgICAgICAgIHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlcixcclxuICAgICAgICAgICAgYXJyYXk6IHJhd0FiaSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXNlci5zdXBwb3J0ZWRBYmlWZXJzaW9uKGJ1ZmZlci5nZXRTdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWJpIHZlcnNpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1ZmZlci5yZXN0YXJ0UmVhZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFiaVR5cGVzLmdldChcImFiaV9kZWZcIikuZGVzZXJpYWxpemUoYnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGFiaSBpbiBib3RoIGJpbmFyeSBhbmQgc3RydWN0dXJlZCBmb3Jtcy4gRmV0Y2ggd2hlbiBuZWVkZWQuICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q2FjaGVkQWJpKGFjY291bnROYW1lOiBzdHJpbmcsIHJlbG9hZCA9IGZhbHNlKTogUHJvbWlzZTxDYWNoZWRBYmk+IHtcclxuICAgICAgICBpZiAoIXJlbG9hZCAmJiB0aGlzLmNhY2hlZEFiaXMuZ2V0KGFjY291bnROYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRBYmlzLmdldChhY2NvdW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYWNoZWRBYmk6IENhY2hlZEFiaTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0b2RvOiB1c2UgZ2V0X3Jhd19hYmkgd2hlbiBpdCBiZWNvbWVzIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICBjb25zdCByYXdBYmkgPSBiYXNlNjRUb0JpbmFyeSgoYXdhaXQgdGhpcy5ycGMuZ2V0X3Jhd19jb2RlX2FuZF9hYmkoYWNjb3VudE5hbWUpKS5hYmkpO1xyXG4gICAgICAgICAgICBjb25zdCBhYmkgPSB0aGlzLnJhd0FiaVRvSnNvbihyYXdBYmkpO1xyXG4gICAgICAgICAgICBjYWNoZWRBYmkgPSB7IHJhd0FiaSwgYWJpIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlLm1lc3NhZ2UgPSBgZmV0Y2hpbmcgYWJpIGZvciAke2FjY291bnROYW1lfTogJHtlLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjYWNoZWRBYmkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGFiaSBmb3IgJHthY2NvdW50TmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWNoZWRBYmlzLnNldChhY2NvdW50TmFtZSwgY2FjaGVkQWJpKTtcclxuICAgICAgICByZXR1cm4gY2FjaGVkQWJpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYWJpIGluIHN0cnVjdHVyZWQgZm9ybS4gRmV0Y2ggd2hlbiBuZWVkZWQuICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWJpKGFjY291bnROYW1lOiBzdHJpbmcsIHJlbG9hZCA9IGZhbHNlKTogUHJvbWlzZTxBYmk+IHtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0Q2FjaGVkQWJpKGFjY291bnROYW1lLCByZWxvYWQpKS5hYmk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhYmlzIG5lZWRlZCBieSBhIHRyYW5zYWN0aW9uICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VHJhbnNhY3Rpb25BYmlzKHRyYW5zYWN0aW9uOiBhbnksIHJlbG9hZCA9IGZhbHNlKTogUHJvbWlzZTxCaW5hcnlBYmlbXT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBzdHJpbmdbXSA9IHRyYW5zYWN0aW9uLmFjdGlvbnMubWFwKChhY3Rpb246IHNlci5BY3Rpb24pOiBzdHJpbmcgPT4gYWN0aW9uLmFjY291bnQpO1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUFjY291bnRzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoYWNjb3VudHMpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvblByb21pc2VzOiBBcnJheTxQcm9taXNlPEJpbmFyeUFiaT4+ID0gWy4uLnVuaXF1ZUFjY291bnRzXS5tYXAoXHJcbiAgICAgICAgICAgIGFzeW5jIChhY2NvdW50OiBzdHJpbmcpOiBQcm9taXNlPEJpbmFyeUFiaT4gPT4gKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZTogYWNjb3VudCwgYWJpOiAoYXdhaXQgdGhpcy5nZXRDYWNoZWRBYmkoYWNjb3VudCwgcmVsb2FkKSkucmF3QWJpLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFjdGlvblByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGRhdGEgbmVlZGVkIHRvIHNlcmlhbGl6ZSBhY3Rpb25zIGluIGEgY29udHJhY3QgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb250cmFjdChhY2NvdW50TmFtZTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IFByb21pc2U8c2VyLkNvbnRyYWN0PiB7XHJcbiAgICAgICAgaWYgKCFyZWxvYWQgJiYgdGhpcy5jb250cmFjdHMuZ2V0KGFjY291bnROYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdHMuZ2V0KGFjY291bnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWJpID0gYXdhaXQgdGhpcy5nZXRBYmkoYWNjb3VudE5hbWUsIHJlbG9hZCk7XHJcbiAgICAgICAgY29uc3QgdHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgYWJpKTtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gbmV3IE1hcDxzdHJpbmcsIHNlci5UeXBlPigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCB0eXBlIH0gb2YgYWJpLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zZXQobmFtZSwgc2VyLmdldFR5cGUodHlwZXMsIHR5cGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0eXBlcywgYWN0aW9ucyB9O1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RzLnNldChhY2NvdW50TmFtZSwgcmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0IGB2YWx1ZWAgdG8gYmluYXJ5IGZvcm0uIGB0eXBlYCBtdXN0IGJlIGEgYnVpbHQtaW4gYWJpIHR5cGUgb3IgaW4gYHRyYW5zYWN0aW9uLmFiaS5qc29uYC4gKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoYnVmZmVyOiBzZXIuU2VyaWFsQnVmZmVyLCB0eXBlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZXMuZ2V0KHR5cGUpLnNlcmlhbGl6ZShidWZmZXIsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydCBkYXRhIGluIGBidWZmZXJgIHRvIHN0cnVjdHVyZWQgZm9ybS4gYHR5cGVgIG11c3QgYmUgYSBidWlsdC1pbiBhYmkgdHlwZSBvciBpbiBgdHJhbnNhY3Rpb24uYWJpLmpzb25gLiAqL1xyXG4gICAgcHVibGljIGRlc2VyaWFsaXplKGJ1ZmZlcjogc2VyLlNlcmlhbEJ1ZmZlciwgdHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvblR5cGVzLmdldCh0eXBlKS5kZXNlcmlhbGl6ZShidWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNhY3Rpb24gdG8gYmluYXJ5ICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IGFueSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyIH0pO1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplKGJ1ZmZlciwgXCJ0cmFuc2FjdGlvblwiLCB7XHJcbiAgICAgICAgICAgIG1heF9uZXRfdXNhZ2Vfd29yZHM6IDAsXHJcbiAgICAgICAgICAgIG1heF9jcHVfdXNhZ2VfbXM6IDAsXHJcbiAgICAgICAgICAgIGRlbGF5X3NlYzogMCxcclxuICAgICAgICAgICAgY29udGV4dF9mcmVlX2FjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXSxcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fZXh0ZW5zaW9uczogW10sXHJcbiAgICAgICAgICAgIC4uLnRyYW5zYWN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBidWZmZXIuYXNVaW50OEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnQgYSB0cmFuc2FjdGlvbiBmcm9tIGJpbmFyeS4gTGVhdmVzIGFjdGlvbnMgaW4gaGV4LiAqL1xyXG4gICAgcHVibGljIGRlc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFVpbnQ4QXJyYXkpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyIH0pO1xyXG4gICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkodHJhbnNhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplKGJ1ZmZlciwgXCJ0cmFuc2FjdGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydCBhY3Rpb25zIHRvIGhleCAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbGl6ZUFjdGlvbnMoYWN0aW9uczogc2VyLkFjdGlvbltdKTogUHJvbWlzZTxzZXIuU2VyaWFsaXplZEFjdGlvbltdPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGFzeW5jICh7IGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXIuc2VyaWFsaXplQWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEsIHRoaXMudGV4dEVuY29kZXIsIHRoaXMudGV4dERlY29kZXIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydCBhY3Rpb25zIGZyb20gaGV4ICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVzZXJpYWxpemVBY3Rpb25zKGFjdGlvbnM6IHNlci5BY3Rpb25bXSk6IFByb21pc2U8c2VyLkFjdGlvbltdPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGFzeW5jICh7IGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXIuZGVzZXJpYWxpemVBY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdCwgYWNjb3VudCwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSwgdGhpcy50ZXh0RW5jb2RlciwgdGhpcy50ZXh0RGVjb2Rlcik7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNhY3Rpb24gZnJvbSBiaW5hcnkuIEFsc28gZGVzZXJpYWxpemVzIGFjdGlvbnMuICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVzZXJpYWxpemVUcmFuc2FjdGlvbldpdGhBY3Rpb25zKHRyYW5zYWN0aW9uOiBVaW50OEFycmF5IHwgc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zYWN0aW9uID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gc2VyLmhleFRvVWludDhBcnJheSh0cmFuc2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdGhpcy5kZXNlcmlhbGl6ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRBY3Rpb25zID0gYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZUFjdGlvbnMoZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24uYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24sIGFjdGlvbnM6IGRlc2VyaWFsaXplZEFjdGlvbnMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbmQgb3B0aW9uYWxseSBicm9hZGNhc3QgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBOYW1lZCBQYXJhbWV0ZXJzOlxyXG4gICAgICogICAgKiBgYnJvYWRjYXN0YDogYnJvYWRjYXN0IHRoaXMgdHJhbnNhY3Rpb24/XHJcbiAgICAgKiAgICAqIElmIGJvdGggYGJsb2Nrc0JlaGluZGAgYW5kIGBleHBpcmVTZWNvbmRzYCBhcmUgcHJlc2VudCxcclxuICAgICAqICAgICAgdGhlbiBmZXRjaCB0aGUgYmxvY2sgd2hpY2ggaXMgYGJsb2Nrc0JlaGluZGAgYmVoaW5kIGhlYWQgYmxvY2ssXHJcbiAgICAgKiAgICAgIHVzZSBpdCBhcyBhIHJlZmVyZW5jZSBmb3IgVEFQb1MsIGFuZCBleHBpcmUgdGhlIHRyYW5zYWN0aW9uIGBleHBpcmVTZWNvbmRzYCBhZnRlciB0aGF0IGJsb2NrJ3MgdGltZS5cclxuICAgICAqIEByZXR1cm5zIG5vZGUgcmVzcG9uc2UgaWYgYGJyb2FkY2FzdGAsIGB7c2lnbmF0dXJlcywgc2VyaWFsaXplZFRyYW5zYWN0aW9ufWAgaWYgYCFicm9hZGNhc3RgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyB0cmFuc2FjdCh0cmFuc2FjdGlvbjogYW55LCB7IGJyb2FkY2FzdCA9IHRydWUsIGJsb2Nrc0JlaGluZCwgZXhwaXJlU2Vjb25kcyB9OlxyXG4gICAgICAgIHsgYnJvYWRjYXN0PzogYm9vbGVhbjsgYmxvY2tzQmVoaW5kPzogbnVtYmVyOyBleHBpcmVTZWNvbmRzPzogbnVtYmVyOyB9ID0ge30pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBpbmZvOiBHZXRJbmZvUmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hhaW5JZCkge1xyXG4gICAgICAgICAgICBpbmZvID0gYXdhaXQgdGhpcy5ycGMuZ2V0X2luZm8oKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFpbklkID0gaW5mby5jaGFpbl9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2tzQmVoaW5kID09PSBcIm51bWJlclwiICYmIGV4cGlyZVNlY29uZHMpIHsgLy8gdXNlIGNvbmZpZyBmaWVsZHMgdG8gZ2VuZXJhdGUgVEFQT1MgaWYgdGhleSBleGlzdFxyXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgICAgIGluZm8gPSBhd2FpdCB0aGlzLnJwYy5nZXRfaW5mbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZkJsb2NrID0gYXdhaXQgdGhpcy5ycGMuZ2V0X2Jsb2NrKGluZm8uaGVhZF9ibG9ja19udW0gLSBibG9ja3NCZWhpbmQpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHsgLi4uc2VyLnRyYW5zYWN0aW9uSGVhZGVyKHJlZkJsb2NrLCBleHBpcmVTZWNvbmRzKSwgLi4udHJhbnNhY3Rpb24gfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5oYXNSZXF1aXJlZFRhcG9zRmllbGRzKHRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBjb25maWd1cmF0aW9uIG9yIFRBUE9TIGZpZWxkcyBhcmUgbm90IHByZXNlbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhYmlzOiBCaW5hcnlBYmlbXSA9IGF3YWl0IHRoaXMuZ2V0VHJhbnNhY3Rpb25BYmlzKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICB0cmFuc2FjdGlvbiA9IHsgLi4udHJhbnNhY3Rpb24sIGFjdGlvbnM6IGF3YWl0IHRoaXMuc2VyaWFsaXplQWN0aW9ucyh0cmFuc2FjdGlvbi5hY3Rpb25zKSB9O1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IHRoaXMuc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUtleXMgPSBhd2FpdCB0aGlzLnNpZ25hdHVyZVByb3ZpZGVyLmdldEF2YWlsYWJsZUtleXMoKTtcclxuICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSBhd2FpdCB0aGlzLmF1dGhvcml0eVByb3ZpZGVyLmdldFJlcXVpcmVkS2V5cyh7IHRyYW5zYWN0aW9uLCBhdmFpbGFibGVLZXlzIH0pO1xyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZXMgPSBhd2FpdCB0aGlzLnNpZ25hdHVyZVByb3ZpZGVyLnNpZ24oe1xyXG4gICAgICAgICAgICBjaGFpbklkOiB0aGlzLmNoYWluSWQsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkS2V5cyxcclxuICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uLFxyXG4gICAgICAgICAgICBhYmlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHB1c2hUcmFuc2FjdGlvbkFyZ3MgPSB7IHNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiB9O1xyXG4gICAgICAgIGlmIChicm9hZGNhc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFNpZ25lZFRyYW5zYWN0aW9uKHB1c2hUcmFuc2FjdGlvbkFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHVzaFRyYW5zYWN0aW9uQXJncztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQnJvYWRjYXN0IGEgc2lnbmVkIHRyYW5zYWN0aW9uICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcHVzaFNpZ25lZFRyYW5zYWN0aW9uKHsgc2lnbmF0dXJlcywgc2VyaWFsaXplZFRyYW5zYWN0aW9uIH06IFB1c2hUcmFuc2FjdGlvbkFyZ3MpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJwYy5wdXNoX3RyYW5zYWN0aW9uKHtcclxuICAgICAgICAgICAgc2lnbmF0dXJlcyxcclxuICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV2ZW50dWFsbHkgYnJlYWsgb3V0IGludG8gVHJhbnNhY3Rpb25WYWxpZGF0b3IgY2xhc3NcclxuICAgIHByaXZhdGUgaGFzUmVxdWlyZWRUYXBvc0ZpZWxkcyh7IGV4cGlyYXRpb24sIHJlZl9ibG9ja19udW0sIHJlZl9ibG9ja19wcmVmaXgsIC4uLnRyYW5zYWN0aW9uIH06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIShleHBpcmF0aW9uICYmIHJlZl9ibG9ja19udW0gJiYgcmVmX2Jsb2NrX3ByZWZpeCk7XHJcbiAgICB9XHJcblxyXG59IC8vIEFwaVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBOdW1lcmljXHJcbiAqL1xyXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXHJcbmNvbnN0IHJpcGVtZDE2MCA9IHJlcXVpcmUoXCIuL3JpcGVtZFwiKS5SSVBFTUQxNjAuaGFzaCBhcyAoYTogVWludDhBcnJheSkgPT4gQXJyYXlCdWZmZXI7XHJcblxyXG5jb25zdCBiYXNlNThDaGFycyA9IFwiMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5elwiO1xyXG5jb25zdCBiYXNlNjRDaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U1OF9tYXAoKSB7XHJcbiAgICBjb25zdCBiYXNlNThNID0gQXJyYXkoMjU2KS5maWxsKC0xKSBhcyBudW1iZXJbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZTU4Q2hhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBiYXNlNThNW2Jhc2U1OENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlNThNO1xyXG59XHJcblxyXG5jb25zdCBiYXNlNThNYXAgPSBjcmVhdGVfYmFzZTU4X21hcCgpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U2NF9tYXAoKSB7XHJcbiAgICBjb25zdCBiYXNlNjRNID0gQXJyYXkoMjU2KS5maWxsKC0xKSBhcyBudW1iZXJbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZTY0Q2hhcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBiYXNlNjRNW2Jhc2U2NENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcclxuICAgIH1cclxuICAgIGJhc2U2NE1bXCI9XCIuY2hhckNvZGVBdCgwKV0gPSAwO1xyXG4gICAgcmV0dXJuIGJhc2U2NE07XHJcbn1cclxuXHJcbmNvbnN0IGJhc2U2NE1hcCA9IGNyZWF0ZV9iYXNlNjRfbWFwKCk7XHJcblxyXG4vKiogSXMgYGJpZ251bWAgYSBuZWdhdGl2ZSBudW1iZXI/ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05lZ2F0aXZlKGJpZ251bTogVWludDhBcnJheSkge1xyXG4gICAgcmV0dXJuIChiaWdudW1bYmlnbnVtLmxlbmd0aCAtIDFdICYgMHg4MCkgIT09IDA7XHJcbn1cclxuXHJcbi8qKiBOZWdhdGUgYGJpZ251bWAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcclxuICAgIGxldCBjYXJyeSA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpZ251bS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IHggPSAofmJpZ251bVtpXSAmIDB4ZmYpICsgY2Fycnk7XHJcbiAgICAgICAgYmlnbnVtW2ldID0geDtcclxuICAgICAgICBjYXJyeSA9IHggPj4gODtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsVG9CaW5hcnkoc2l6ZTogbnVtYmVyLCBzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgY29uc3Qgc3JjRGlnaXQgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKHNyY0RpZ2l0IDwgXCIwXCIuY2hhckNvZGVBdCgwKSB8fCBzcmNEaWdpdCA+IFwiOVwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYXJyeSA9IHNyY0RpZ2l0IC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7ICsraikge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gcmVzdWx0W2pdICogMTAgKyBjYXJyeTtcclxuICAgICAgICAgICAgcmVzdWx0W2pdID0geDtcclxuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxyXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkRGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBuZWdhdGl2ZSA9IHNbMF0gPT09IFwiLVwiO1xyXG4gICAgaWYgKG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgcyA9IHMuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gZGVjaW1hbFRvQmluYXJ5KHNpemUsIHMpO1xyXG4gICAgaWYgKG5lZ2F0aXZlKSB7XHJcbiAgICAgICAgbmVnYXRlKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKCFpc05lZ2F0aXZlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUocmVzdWx0KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBgYmlnbnVtYCB0byBhbiB1bnNpZ25lZCBkZWNpbWFsIG51bWJlclxyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9EZWNpbWFsKGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkobWluRGlnaXRzKS5maWxsKFwiMFwiLmNoYXJDb2RlQXQoMCkpIGFzIG51bWJlcltdO1xyXG4gICAgZm9yIChsZXQgaSA9IGJpZ251bS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIGxldCBjYXJyeSA9IGJpZ251bVtpXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gKChyZXN1bHRbal0gLSBcIjBcIi5jaGFyQ29kZUF0KDApKSA8PCA4KSArIGNhcnJ5O1xyXG4gICAgICAgICAgICByZXN1bHRbal0gPSBcIjBcIi5jaGFyQ29kZUF0KDApICsgeCAlIDEwO1xyXG4gICAgICAgICAgICBjYXJyeSA9ICh4IC8gMTApIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiMFwiLmNoYXJDb2RlQXQoMCkgKyBjYXJyeSAlIDEwKTtcclxuICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyAxMCkgfCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5yZXN1bHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBgYmlnbnVtYCB0byBhIHNpZ25lZCBkZWNpbWFsIG51bWJlclxyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkQmluYXJ5VG9EZWNpbWFsKGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xyXG4gICAgaWYgKGlzTmVnYXRpdmUoYmlnbnVtKSkge1xyXG4gICAgICAgIGNvbnN0IHggPSBiaWdudW0uc2xpY2UoKTtcclxuICAgICAgICBuZWdhdGUoeCk7XHJcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgYmluYXJ5VG9EZWNpbWFsKHgsIG1pbkRpZ2l0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmluYXJ5VG9EZWNpbWFsKGJpZ251bSwgbWluRGlnaXRzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS01OCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXHJcbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNThUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgY2FycnkgPSBiYXNlNThNYXBbcy5jaGFyQ29kZUF0KGkpXTtcclxuICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYmFzZS01OCB2YWx1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyArK2opIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHJlc3VsdFtqXSAqIDU4ICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS01OCB2YWx1ZSBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgYmFzZS01OCBudW1iZXJcclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvQmFzZTU4KGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW10gYXMgbnVtYmVyW107XHJcbiAgICBmb3IgKGNvbnN0IGJ5dGUgb2YgYmlnbnVtKSB7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gYnl0ZTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gKGJhc2U1OE1hcFtyZXN1bHRbal1dIDw8IDgpICsgY2Fycnk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IGJhc2U1OENoYXJzLmNoYXJDb2RlQXQoeCAlIDU4KTtcclxuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDU4KSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChiYXNlNThDaGFycy5jaGFyQ29kZUF0KGNhcnJ5ICUgNTgpKTtcclxuICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyA1OCkgfCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgYnl0ZSBvZiBiaWdudW0pIHtcclxuICAgICAgICBpZiAoYnl0ZSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjFcIi5jaGFyQ29kZUF0KDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS02NCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRUb0JpbmFyeShzOiBzdHJpbmcpIHtcclxuICAgIGxldCBsZW4gPSBzLmxlbmd0aDtcclxuICAgIGlmICgobGVuICYgMykgPT09IDEgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcclxuICAgICAgICBsZW4gLT0gMTtcclxuICAgIH0gLy8gZmMgYXBwZW5kcyBhbiBleHRyYSAnPSdcclxuICAgIGlmICgobGVuICYgMykgIT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYXNlLTY0IHZhbHVlIGlzIG5vdCBwYWRkZWQgY29ycmVjdGx5XCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ3JvdXBzID0gbGVuID4+IDI7XHJcbiAgICBsZXQgYnl0ZXMgPSBncm91cHMgKiAzO1xyXG4gICAgaWYgKGxlbiA+IDAgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcclxuICAgICAgICBpZiAoc1tsZW4gLSAyXSA9PT0gXCI9XCIpIHtcclxuICAgICAgICAgICAgYnl0ZXMgLT0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBieXRlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcclxuXHJcbiAgICBmb3IgKGxldCBncm91cCA9IDA7IGdyb3VwIDwgZ3JvdXBzOyArK2dyb3VwKSB7XHJcbiAgICAgICAgY29uc3QgZGlnaXQwID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAwKV07XHJcbiAgICAgICAgY29uc3QgZGlnaXQxID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAxKV07XHJcbiAgICAgICAgY29uc3QgZGlnaXQyID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAyKV07XHJcbiAgICAgICAgY29uc3QgZGlnaXQzID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAzKV07XHJcbiAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDBdID0gKGRpZ2l0MCA8PCAyKSB8IChkaWdpdDEgPj4gNCk7XHJcbiAgICAgICAgaWYgKGdyb3VwICogMyArIDEgPCBieXRlcykge1xyXG4gICAgICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMV0gPSAoKGRpZ2l0MSAmIDE1KSA8PCA0KSB8IChkaWdpdDIgPj4gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncm91cCAqIDMgKyAyIDwgYnl0ZXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDJdID0gKChkaWdpdDIgJiAzKSA8PCA2KSB8IGRpZ2l0MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKiogS2V5IHR5cGVzIHRoaXMgbGlicmFyeSBzdXBwb3J0cyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBLZXlUeXBlIHtcclxuICAgIGsxID0gMCxcclxuICAgIHIxID0gMSxcclxufVxyXG5cclxuLyoqIFB1YmxpYyBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnQgY29uc3QgcHVibGljS2V5RGF0YVNpemUgPSAzMztcclxuXHJcbi8qKiBQcml2YXRlIGtleSBkYXRhIHNpemUsIGV4Y2x1ZGluZyB0eXBlIGZpZWxkICovXHJcbmV4cG9ydCBjb25zdCBwcml2YXRlS2V5RGF0YVNpemUgPSAzMjtcclxuXHJcbi8qKiBTaWduYXR1cmUgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xyXG5leHBvcnQgY29uc3Qgc2lnbmF0dXJlRGF0YVNpemUgPSA2NTtcclxuXHJcbi8qKiBQdWJsaWMga2V5LCBwcml2YXRlIGtleSwgb3Igc2lnbmF0dXJlIGluIGJpbmFyeSBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5IHtcclxuICAgIHR5cGU6IEtleVR5cGU7XHJcbiAgICBkYXRhOiBVaW50OEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaWdlc3RTdWZmaXhSaXBlbWQxNjAoZGF0YTogVWludDhBcnJheSwgc3VmZml4OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCArIHN1ZmZpeC5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgZFtpXSA9IGRhdGFbaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1ZmZpeC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGRbZGF0YS5sZW5ndGggKyBpXSA9IHN1ZmZpeC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJpcGVtZDE2MChkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9LZXkoczogc3RyaW5nLCB0eXBlOiBLZXlUeXBlLCBzaXplOiBudW1iZXIsIHN1ZmZpeDogc3RyaW5nKTogS2V5IHtcclxuICAgIGNvbnN0IHdob2xlID0gYmFzZTU4VG9CaW5hcnkoc2l6ZSArIDQsIHMpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geyB0eXBlLCBkYXRhOiBuZXcgVWludDhBcnJheSh3aG9sZS5idWZmZXIsIDAsIHNpemUpIH07XHJcbiAgICBjb25zdCBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAocmVzdWx0LmRhdGEsIHN1ZmZpeCkpO1xyXG4gICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbc2l6ZSArIDBdIHx8IGRpZ2VzdFsxXSAhPT0gd2hvbGVbc2l6ZSArIDFdXHJcbiAgICAgICAgfHwgZGlnZXN0WzJdICE9PSB3aG9sZVtzaXplICsgMl0gfHwgZGlnZXN0WzNdICE9PSB3aG9sZVtzaXplICsgM10pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24ga2V5VG9TdHJpbmcoa2V5OiBLZXksIHN1ZmZpeDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZykge1xyXG4gICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0U3VmZml4UmlwZW1kMTYwKGtleS5kYXRhLCBzdWZmaXgpKTtcclxuICAgIGNvbnN0IHdob2xlID0gbmV3IFVpbnQ4QXJyYXkoa2V5LmRhdGEubGVuZ3RoICsgNCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5kYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgd2hvbGVbaV0gPSBrZXkuZGF0YVtpXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgd2hvbGVbaSArIGtleS5kYXRhLmxlbmd0aF0gPSBkaWdlc3RbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlZml4ICsgYmluYXJ5VG9CYXNlNTgod2hvbGUpO1xyXG59XHJcblxyXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1B1YmxpY0tleShzOiBzdHJpbmcpOiBLZXkge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHVibGljIGtleVwiKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xyXG4gICAgICAgIGNvbnN0IHdob2xlID0gYmFzZTU4VG9CaW5hcnkocHVibGljS2V5RGF0YVNpemUgKyA0LCBzLnN1YnN0cigzKSk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0geyB0eXBlOiBLZXlUeXBlLmsxLCBkYXRhOiBuZXcgVWludDhBcnJheShwdWJsaWNLZXlEYXRhU2l6ZSkgfTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB1YmxpY0tleURhdGFTaXplOyArK2kpIHtcclxuICAgICAgICAgICAga2V5LmRhdGFbaV0gPSB3aG9sZVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkocmlwZW1kMTYwKGtleS5kYXRhKSk7XHJcbiAgICAgICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbcHVibGljS2V5RGF0YVNpemVdIHx8IGRpZ2VzdFsxXSAhPT0gd2hvbGVbMzRdXHJcbiAgICAgICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbMzVdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbMzZdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9LMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5rMSwgcHVibGljS2V5RGF0YVNpemUsIFwiSzFcIik7XHJcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9SMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgcHVibGljS2V5RGF0YVNpemUsIFwiUjFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwdWJsaWNLZXlUb1N0cmluZyhrZXk6IEtleSkge1xyXG4gICAgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLmsxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIksxXCIsIFwiUFVCX0sxX1wiKTtcclxuICAgIH0gZWxzZSBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEgJiYga2V5LmRhdGEubGVuZ3RoID09PSBwdWJsaWNLZXlEYXRhU2l6ZSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksIFwiUjFcIiwgXCJQVUJfUjFfXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgcHVibGljIGtleSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBJZiBhIGtleSBpcyBpbiB0aGUgbGVnYWN5IGZvcm1hdCAoYEVPU2AgcHJlZml4KSwgdGhlbiBjb252ZXJ0IGl0IHRvIHRoZSBuZXcgZm9ybWF0IChgUFVCX0sxX2ApLlxyXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVnYWN5UHVibGljS2V5KHM6IHN0cmluZykge1xyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDMpID09PSBcIkVPU1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1YmxpY0tleVRvU3RyaW5nKHN0cmluZ1RvUHVibGljS2V5KHMpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG4vKiogSWYgYSBrZXkgaXMgaW4gdGhlIGxlZ2FjeSBmb3JtYXQgKGBFT1NgIHByZWZpeCksIHRoZW4gY29udmVydCBpdCB0byB0aGUgbmV3IGZvcm1hdCAoYFBVQl9LMV9gKS5cclxuICogTGVhdmVzIG90aGVyIGZvcm1hdHMgdW50b3VjaGVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleXMoa2V5czogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiBrZXlzLm1hcChjb252ZXJ0TGVnYWN5UHVibGljS2V5KTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Qcml2YXRlS2V5KHM6IHN0cmluZyk6IEtleSB7XHJcbiAgICBpZiAodHlwZW9mIHMgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBwcml2YXRlIGtleVwiKTtcclxuICAgIH1cclxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVlRfUjFfXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHByaXZhdGVLZXlEYXRhU2l6ZSwgXCJSMVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcml2YXRlS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcclxuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xyXG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksIFwiUjFcIiwgXCJQVlRfUjFfXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgcHJpdmF0ZSBrZXkgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1NpZ25hdHVyZShzOiBzdHJpbmcpOiBLZXkge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgc2lnbmF0dXJlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19LMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5rMSwgc2lnbmF0dXJlRGF0YVNpemUsIFwiSzFcIik7XHJcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19SMV9cIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgc2lnbmF0dXJlRGF0YVNpemUsIFwiUjFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQ29udmVydCBgc2lnbmF0dXJlYCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZVRvU3RyaW5nKHNpZ25hdHVyZTogS2V5KSB7XHJcbiAgICBpZiAoc2lnbmF0dXJlLnR5cGUgPT09IEtleVR5cGUuazEpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIksxXCIsIFwiU0lHX0sxX1wiKTtcclxuICAgIH0gZWxzZSBpZiAoc2lnbmF0dXJlLnR5cGUgPT09IEtleVR5cGUucjEpIHtcclxuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIlIxXCIsIFwiU0lHX1IxX1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgU2VyaWFsaXplXHJcbiAqL1xyXG5cclxuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQWJpLCBCbG9ja1RhcG9zSW5mbyB9IGZyb20gXCIuL2Vvc2pzLWpzb25ycGNcIjtcclxuaW1wb3J0ICogYXMgbnVtZXJpYyBmcm9tIFwiLi9lb3Nqcy1udW1lcmljXCI7XHJcblxyXG4vKiogQSBmaWVsZCBpbiBhbiBhYmkgKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZCB7XHJcbiAgICAvKiogRmllbGQgbmFtZSAqL1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBUeXBlIG5hbWUgaW4gc3RyaW5nIGZvcm0gKi9cclxuICAgIHR5cGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFR5cGUgb2YgdGhlIGZpZWxkICovXHJcbiAgICB0eXBlOiBUeXBlO1xyXG59XHJcblxyXG4vKiogU3RhdGUgZm9yIHNlcmlhbGl6ZSgpIGFuZCBkZXNlcmlhbGl6ZSgpICovXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyU3RhdGUge1xyXG4gICAgLyoqIEhhdmUgYW55IGJpbmFyeSBleHRlbnNpb25zIGJlZW4gc2tpcHBlZD8gKi9cclxuICAgIHB1YmxpYyBza2lwcGVkQmluYXJ5RXh0ZW5zaW9uID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKiBBIHR5cGUgaW4gYW4gYWJpICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHlwZSB7XHJcbiAgICAvKiogVHlwZSBuYW1lICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFR5cGUgbmFtZSB0aGlzIGlzIGFuIGFsaWFzIG9mLCBpZiBhbnkgKi9cclxuICAgIGFsaWFzT2ZOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFR5cGUgdGhpcyBpcyBhbiBhcnJheSBvZiwgaWYgYW55ICovXHJcbiAgICBhcnJheU9mOiBUeXBlO1xyXG5cclxuICAgIC8qKiBUeXBlIHRoaXMgaXMgYW4gb3B0aW9uYWwgb2YsIGlmIGFueSAqL1xyXG4gICAgb3B0aW9uYWxPZjogVHlwZTtcclxuXHJcbiAgICAvKiogTWFya3MgYmluYXJ5IGV4dGVuc2lvbiBmaWVsZHMgKi9cclxuICAgIGV4dGVuc2lvbk9mPzogVHlwZTtcclxuXHJcbiAgICAvKiogQmFzZSBuYW1lIG9mIHRoaXMgdHlwZSwgaWYgdGhpcyBpcyBhIHN0cnVjdCAqL1xyXG4gICAgYmFzZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiogQmFzZSBvZiB0aGlzIHR5cGUsIGlmIHRoaXMgaXMgYSBzdHJ1Y3QgKi9cclxuICAgIGJhc2U6IFR5cGU7XHJcblxyXG4gICAgLyoqIENvbnRhaW5lZCBmaWVsZHMsIGlmIHRoaXMgaXMgYSBzdHJ1Y3QgKi9cclxuICAgIGZpZWxkczogRmllbGRbXTtcclxuXHJcbiAgICAvKiogQ29udmVydCBgZGF0YWAgdG8gYmluYXJ5IGZvcm0gYW5kIHN0b3JlIGluIGBidWZmZXJgICovXHJcbiAgICBzZXJpYWxpemU6IChidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikgPT4gdm9pZDtcclxuXHJcbiAgICAvKiogQ29udmVydCBkYXRhIGluIGBidWZmZXJgIGZyb20gYmluYXJ5IGZvcm0gKi9cclxuICAgIGRlc2VyaWFsaXplOiAoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiBhbnk7XHJcbn1cclxuXHJcbi8qKiBTdHJ1Y3R1cmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgc3ltYm9sICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3ltYm9sIHtcclxuICAgIC8qKiBOYW1lIG9mIHRoZSBzeW1ib2wsIG5vdCBpbmNsdWRpbmcgcHJlY2lzaW9uICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIE51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQgKi9cclxuICAgIHByZWNpc2lvbjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyYWN0IHtcclxuICAgIGFjdGlvbnM6IE1hcDxzdHJpbmcsIFR5cGU+O1xyXG4gICAgdHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhvcml6YXRpb24ge1xyXG4gICAgYWN0b3I6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb246IHN0cmluZztcclxufVxyXG5cclxuLyoqIEFjdGlvbiB3aXRoIGRhdGEgaW4gc3RydWN0dXJlZCBmb3JtICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uIHtcclxuICAgIGFjY291bnQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGF1dGhvcml6YXRpb246IEF1dGhvcml6YXRpb25bXTtcclxuICAgIGRhdGE6IGFueTtcclxufVxyXG5cclxuLyoqIEFjdGlvbiB3aXRoIGRhdGEgaW4gc2VyaWFsaXplZCBoZXggZm9ybSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRBY3Rpb24ge1xyXG4gICAgYWNjb3VudDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXphdGlvbjogQXV0aG9yaXphdGlvbltdO1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogU2VyaWFsaXplIGFuZCBkZXNlcmlhbGl6ZSBkYXRhICovXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxCdWZmZXIge1xyXG4gICAgLyoqIEFtb3VudCBvZiB2YWxpZCBkYXRhIGluIGBhcnJheWAgKi9cclxuICAgIHB1YmxpYyBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICAvKiogRGF0YSBpbiBzZXJpYWxpemVkIChiaW5hcnkpIGZvcm0gKi9cclxuICAgIHB1YmxpYyBhcnJheTogVWludDhBcnJheTtcclxuXHJcbiAgICAvKiogQ3VycmVudCBwb3NpdGlvbiB3aGlsZSByZWFkaW5nIChkZXNlcmlhbGl6aW5nKSAqL1xyXG4gICAgcHVibGljIHJlYWRQb3MgPSAwO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXI7XHJcbiAgICBwdWJsaWMgdGV4dERlY29kZXI6IFRleHREZWNvZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIF9fbmFtZWRQYXJhbWV0ZXJzXHJcbiAgICAgKiAgICAqIGBhcnJheWA6IGBudWxsYCBpZiBzZXJpYWxpemluZywgb3IgYmluYXJ5IGRhdGEgdG8gZGVzZXJpYWxpemVcclxuICAgICAqICAgICogYHRleHRFbmNvZGVyYDogYFRleHRFbmNvZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXHJcbiAgICAgKiAgICAqIGB0ZXh0RGVjb2RlcmA6IGBUZXh0RGVjaWRlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih7IHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciwgYXJyYXkgfSA9IHt9IGFzXHJcbiAgICAgICAgeyB0ZXh0RW5jb2Rlcj86IFRleHRFbmNvZGVyLCB0ZXh0RGVjb2Rlcj86IFRleHREZWNvZGVyLCBhcnJheT86IFVpbnQ4QXJyYXkgfSkge1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheSB8fCBuZXcgVWludDhBcnJheSgxMDI0KTtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcclxuICAgICAgICB0aGlzLnRleHRFbmNvZGVyID0gdGV4dEVuY29kZXIgfHwgbmV3IFRleHRFbmNvZGVyKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IHRleHREZWNvZGVyIHx8IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIsIHsgZmF0YWw6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJlc2l6ZSBgYXJyYXlgIGlmIG5lZWRlZCB0byBoYXZlIGF0IGxlYXN0IGBzaXplYCBieXRlcyBmcmVlICovXHJcbiAgICBwdWJsaWMgcmVzZXJ2ZShzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggKyBzaXplIDw9IHRoaXMuYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGwgPSB0aGlzLmFycmF5Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodGhpcy5sZW5ndGggKyBzaXplID4gbCkge1xyXG4gICAgICAgICAgICBsID0gTWF0aC5jZWlsKGwgKiAxLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IG5ldyBVaW50OEFycmF5KGwpO1xyXG4gICAgICAgIG5ld0FycmF5LnNldCh0aGlzLmFycmF5KTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIElzIHRoZXJlIGRhdGEgYXZhaWxhYmxlIHRvIHJlYWQ/ICovXHJcbiAgICBwdWJsaWMgaGF2ZVJlYWREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRQb3MgPCB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmVzdGFydCByZWFkaW5nIGZyb20gdGhlIGJlZ2lubmluZyAqL1xyXG4gICAgcHVibGljIHJlc3RhcnRSZWFkKCkge1xyXG4gICAgICAgIHRoaXMucmVhZFBvcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJldHVybiBkYXRhIHdpdGggZXhjZXNzIHN0b3JhZ2UgdHJpbW1lZCBhd2F5ICovXHJcbiAgICBwdWJsaWMgYXNVaW50OEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLmFycmF5LmJ1ZmZlciwgMCwgdGhpcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYnl0ZXMgKi9cclxuICAgIHB1YmxpYyBwdXNoQXJyYXkodjogbnVtYmVyW10gfCBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5yZXNlcnZlKHYubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmFycmF5LnNldCh2LCB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gdi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFwcGVuZCBieXRlcyAqL1xyXG4gICAgcHVibGljIHB1c2goLi4udjogbnVtYmVyW10pIHtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheSh2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGEgc2luZ2xlIGJ5dGUgKi9cclxuICAgIHB1YmxpYyBnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyA8IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5W3RoaXMucmVhZFBvcysrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZCBwYXN0IGVuZCBvZiBidWZmZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFwcGVuZCBieXRlcyBpbiBgdmAuIFRocm93cyBpZiBgbGVuYCBkb2Vzbid0IG1hdGNoIGB2Lmxlbmd0aGAgKi9cclxuICAgIHB1YmxpYyBwdXNoVWludDhBcnJheUNoZWNrZWQodjogVWludDhBcnJheSwgbGVuOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodi5sZW5ndGggIT09IGxlbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgZGF0YSBoYXMgaW5jb3JyZWN0IHNpemVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KHYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYGxlbmAgYnl0ZXMgKi9cclxuICAgIHB1YmxpYyBnZXRVaW50OEFycmF5KGxlbjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyArIGxlbiA+IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWQgcGFzdCBlbmQgb2YgYnVmZmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheSh0aGlzLmFycmF5LmJ1ZmZlciwgdGhpcy5yZWFkUG9zLCBsZW4pO1xyXG4gICAgICAgIHRoaXMucmVhZFBvcyArPSBsZW47XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYHVpbnQxNmAgKi9cclxuICAgIHB1YmxpYyBwdXNoVWludDE2KHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHVzaCgodiA+PiAwKSAmIDB4ZmYsICh2ID4+IDgpICYgMHhmZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIGB1aW50MTZgICovXHJcbiAgICBwdWJsaWMgZ2V0VWludDE2KCkge1xyXG4gICAgICAgIGxldCB2ID0gMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYHVpbnQzMmAgKi9cclxuICAgIHB1YmxpYyBwdXNoVWludDMyKHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHVzaCgodiA+PiAwKSAmIDB4ZmYsICh2ID4+IDgpICYgMHhmZiwgKHYgPj4gMTYpICYgMHhmZiwgKHYgPj4gMjQpICYgMHhmZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIGB1aW50MzJgICovXHJcbiAgICBwdWJsaWMgZ2V0VWludDMyKCkge1xyXG4gICAgICAgIGxldCB2ID0gMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcclxuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMTY7XHJcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDI0O1xyXG4gICAgICAgIHJldHVybiB2ID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYSBgdWludDY0YC4gKkNhdXRpb24qOiBgbnVtYmVyYCBvbmx5IGhhcyA1MyBiaXRzIG9mIHByZWNpc2lvbiAqL1xyXG4gICAgcHVibGljIHB1c2hOdW1iZXJBc1VpbnQ2NCh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnB1c2hVaW50MzIodiA+Pj4gMCk7XHJcbiAgICAgICAgdGhpcy5wdXNoVWludDMyKE1hdGguZmxvb3IodiAvIDB4MTAwMDBfMDAwMCkgPj4+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgYHVpbnQ2NGAgYXMgYSBgbnVtYmVyYC4gKkNhdXRpb24qOiBgbnVtYmVyYCBvbmx5IGhhcyA1MyBiaXRzIG9mIHByZWNpc2lvbjsgc29tZSB2YWx1ZXMgd2lsbCBjaGFuZ2UuXHJcbiAgICAgKiBgbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoc2VyaWFsQnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpYCByZWNvbW1lbmRlZCBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVaW50NjRBc051bWJlcigpIHtcclxuICAgICAgICBjb25zdCBsb3cgPSB0aGlzLmdldFVpbnQzMigpO1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSB0aGlzLmdldFVpbnQzMigpO1xyXG4gICAgICAgIHJldHVybiAoaGlnaCA+Pj4gMCkgKiAweDEwMDAwXzAwMDAgKyAobG93ID4+PiAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYHZhcnVpbnQzMmAgKi9cclxuICAgIHB1YmxpYyBwdXNoVmFydWludDMyKHY6IG51bWJlcikge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2ID4+PiA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goMHg4MCB8ICh2ICYgMHg3ZikpO1xyXG4gICAgICAgICAgICAgICAgdiA9IHYgPj4+IDc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2godik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGEgYHZhcnVpbnQzMmAgKi9cclxuICAgIHB1YmxpYyBnZXRWYXJ1aW50MzIoKSB7XHJcbiAgICAgICAgbGV0IHYgPSAwO1xyXG4gICAgICAgIGxldCBiaXQgPSAwO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmdldCgpO1xyXG4gICAgICAgICAgICB2IHw9IChiICYgMHg3ZikgPDwgYml0O1xyXG4gICAgICAgICAgICBiaXQgKz0gNztcclxuICAgICAgICAgICAgaWYgKCEoYiAmIDB4ODApKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdiA+Pj4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYHZhcmludDMyYCAqL1xyXG4gICAgcHVibGljIHB1c2hWYXJpbnQzMih2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnB1c2hWYXJ1aW50MzIoKHYgPDwgMSkgXiAodiA+PiAzMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBgdmFyaW50MzJgICovXHJcbiAgICBwdWJsaWMgZ2V0VmFyaW50MzIoKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMuZ2V0VmFydWludDMyKCk7XHJcbiAgICAgICAgaWYgKHYgJiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKH52KSA+PiAxKSB8IDB4ODAwMF8wMDAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2ID4+PiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYGZsb2F0MzJgICovXHJcbiAgICBwdWJsaWMgcHVzaEZsb2F0MzIodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDMyQXJyYXkoW3ZdKSkuYnVmZmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIGBmbG9hdDMyYCAqL1xyXG4gICAgcHVibGljIGdldEZsb2F0MzIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5nZXRVaW50OEFycmF5KDQpLnNsaWNlKCkuYnVmZmVyKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYGZsb2F0NjRgICovXHJcbiAgICBwdWJsaWMgcHVzaEZsb2F0NjQodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW3ZdKSkuYnVmZmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIGBmbG9hdDY0YCAqL1xyXG4gICAgcHVibGljIGdldEZsb2F0NjQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkodGhpcy5nZXRVaW50OEFycmF5KDgpLnNsaWNlKCkuYnVmZmVyKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgYG5hbWVgICovXHJcbiAgICBwdWJsaWMgcHVzaE5hbWUoczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIG5hbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNoYXJUb1N5bWJvbChjOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKGMgPj0gXCJhXCIuY2hhckNvZGVBdCgwKSAmJiBjIDw9IFwielwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYyAtIFwiYVwiLmNoYXJDb2RlQXQoMCkpICsgNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA+PSBcIjFcIi5jaGFyQ29kZUF0KDApICYmIGMgPD0gXCI1XCIuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjIC0gXCIxXCIuY2hhckNvZGVBdCgwKSkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhID0gbmV3IFVpbnQ4QXJyYXkoOCk7XHJcbiAgICAgICAgbGV0IGJpdCA9IDYzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNoYXJUb1N5bWJvbChzLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgICAgICBpZiAoYml0IDwgNSkge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMgPDwgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNDsgaiA+PSAwOyAtLWopIHtcclxuICAgICAgICAgICAgICAgIGlmIChiaXQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFbTWF0aC5mbG9vcihiaXQgLyA4KV0gfD0gKChjID4+IGopICYgMSkgPDwgKGJpdCAlIDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBgbmFtZWAgKi9cclxuICAgIHB1YmxpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkoOCk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgYml0ID0gNjM7IGJpdCA+PSAwOykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYml0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gKGMgPDwgMSkgfCAoKGFbTWF0aC5mbG9vcihiaXQgLyA4KV0gPj4gKGJpdCAlIDgpKSAmIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID49IDYpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMgKyBcImFcIi5jaGFyQ29kZUF0KDApIC0gNik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjICsgXCIxXCIuY2hhckNvZGVBdCgwKSAtIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFwiLi4uLi4uLi4uLi4uLlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQuZW5kc1dpdGgoXCIuXCIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgbGVuZ3RoLXByZWZpeGVkIGJpbmFyeSBkYXRhICovXHJcbiAgICBwdWJsaWMgcHVzaEJ5dGVzKHY6IG51bWJlcltdIHwgVWludDhBcnJheSkge1xyXG4gICAgICAgIHRoaXMucHVzaFZhcnVpbnQzMih2Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBsZW5ndGgtcHJlZml4ZWQgYmluYXJ5IGRhdGEgKi9cclxuICAgIHB1YmxpYyBnZXRCeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVaW50OEFycmF5KHRoaXMuZ2V0VmFydWludDMyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYSBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyBwdXNoU3RyaW5nKHY6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucHVzaEJ5dGVzKHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKHYpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IGEgc3RyaW5nICovXHJcbiAgICBwdWJsaWMgZ2V0U3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHREZWNvZGVyLmRlY29kZSh0aGlzLmdldEJ5dGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYSBgc3ltYm9sX2NvZGVgLiBVbmxpa2UgYHN5bWJvbGAsIGBzeW1ib2xfY29kZWAgZG9lc24ndCBpbmNsdWRlIGEgcHJlY2lzaW9uLiAqL1xyXG4gICAgcHVibGljIHB1c2hTeW1ib2xDb2RlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzeW1ib2xfY29kZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYSA9IFtdO1xyXG4gICAgICAgIGEucHVzaCguLi50aGlzLnRleHRFbmNvZGVyLmVuY29kZShuYW1lKSk7XHJcbiAgICAgICAgd2hpbGUgKGEubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgICBhLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEuc2xpY2UoMCwgOCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBgc3ltYm9sX2NvZGVgLiBVbmxpa2UgYHN5bWJvbGAsIGBzeW1ib2xfY29kZWAgZG9lc24ndCBpbmNsdWRlIGEgcHJlY2lzaW9uLiAqL1xyXG4gICAgcHVibGljIGdldFN5bWJvbENvZGUoKSB7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg4KTtcclxuICAgICAgICBsZXQgbGVuO1xyXG4gICAgICAgIGZvciAobGVuID0gMDsgbGVuIDwgYS5sZW5ndGg7ICsrbGVuKSB7XHJcbiAgICAgICAgICAgIGlmICghYVtsZW5dKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgbGVuKSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEFwcGVuZCBhIGBzeW1ib2xgICovXHJcbiAgICBwdWJsaWMgcHVzaFN5bWJvbCh7IG5hbWUsIHByZWNpc2lvbiB9OiB7IG5hbWU6IHN0cmluZywgcHJlY2lzaW9uOiBudW1iZXIgfSkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBbcHJlY2lzaW9uICYgMHhmZl07XHJcbiAgICAgICAgYS5wdXNoKC4uLnRoaXMudGV4dEVuY29kZXIuZW5jb2RlKG5hbWUpKTtcclxuICAgICAgICB3aGlsZSAoYS5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgICAgIGEucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoYS5zbGljZSgwLCA4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhIGBzeW1ib2xgICovXHJcbiAgICBwdWJsaWMgZ2V0U3ltYm9sKCk6IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9IHtcclxuICAgICAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkoNyk7XHJcbiAgICAgICAgbGV0IGxlbjtcclxuICAgICAgICBmb3IgKGxlbiA9IDA7IGxlbiA8IGEubGVuZ3RoOyArK2xlbikge1xyXG4gICAgICAgICAgICBpZiAoIWFbbGVuXSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudGV4dERlY29kZXIuZGVjb2RlKG5ldyBVaW50OEFycmF5KGEuYnVmZmVyLCBhLmJ5dGVPZmZzZXQsIGxlbikpO1xyXG4gICAgICAgIHJldHVybiB7IG5hbWUsIHByZWNpc2lvbiB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYW4gYXNzZXQgKi9cclxuICAgIHB1YmxpYyBwdXNoQXNzZXQoczogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIGFzc2V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzID0gcy50cmltKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IDA7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IDA7XHJcbiAgICAgICAgaWYgKHNbcG9zXSA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgYW1vdW50ICs9IFwiLVwiO1xyXG4gICAgICAgICAgICArK3BvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZvdW5kRGlnaXQgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAocG9zIDwgcy5sZW5ndGggJiYgcy5jaGFyQ29kZUF0KHBvcykgPj0gXCIwXCIuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XHJcbiAgICAgICAgICAgIGZvdW5kRGlnaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbW91bnQgKz0gc1twb3NdO1xyXG4gICAgICAgICAgICArK3BvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmb3VuZERpZ2l0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG11c3QgYmVnaW4gd2l0aCBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNbcG9zXSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgKytwb3M7XHJcbiAgICAgICAgICAgIHdoaWxlIChwb3MgPCBzLmxlbmd0aCAmJiBzLmNoYXJDb2RlQXQocG9zKSA+PSBcIjBcIi5jaGFyQ29kZUF0KDApICYmIHMuY2hhckNvZGVBdChwb3MpIDw9IFwiOVwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCArPSBzW3Bvc107XHJcbiAgICAgICAgICAgICAgICArK3ByZWNpc2lvbjtcclxuICAgICAgICAgICAgICAgICsrcG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzLnN1YnN0cihwb3MpLnRyaW0oKTtcclxuICAgICAgICB0aGlzLnB1c2hBcnJheShudW1lcmljLnNpZ25lZERlY2ltYWxUb0JpbmFyeSg4LCBhbW91bnQpKTtcclxuICAgICAgICB0aGlzLnB1c2hTeW1ib2woeyBuYW1lLCBwcmVjaXNpb24gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCBhbiBhc3NldCAqL1xyXG4gICAgcHVibGljIGdldEFzc2V0KCkge1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuZ2V0VWludDhBcnJheSg4KTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHByZWNpc2lvbiB9ID0gdGhpcy5nZXRTeW1ib2woKTtcclxuICAgICAgICBsZXQgcyA9IG51bWVyaWMuc2lnbmVkQmluYXJ5VG9EZWNpbWFsKGFtb3VudCwgcHJlY2lzaW9uICsgMSk7XHJcbiAgICAgICAgaWYgKHByZWNpc2lvbikge1xyXG4gICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSBwcmVjaXNpb24pICsgXCIuXCIgKyBzLnN1YnN0cihzLmxlbmd0aCAtIHByZWNpc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzICsgXCIgXCIgKyBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYSBwdWJsaWMga2V5ICovXHJcbiAgICBwdWJsaWMgcHVzaFB1YmxpY0tleShzOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBudW1lcmljLnN0cmluZ1RvUHVibGljS2V5KHMpO1xyXG4gICAgICAgIHRoaXMucHVzaChrZXkudHlwZSk7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoa2V5LmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBwdWJsaWMga2V5ICovXHJcbiAgICBwdWJsaWMgZ2V0UHVibGljS2V5KCkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkobnVtZXJpYy5wdWJsaWNLZXlEYXRhU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWVyaWMucHVibGljS2V5VG9TdHJpbmcoeyB0eXBlLCBkYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBBcHBlbmQgYSBwcml2YXRlIGtleSAqL1xyXG4gICAgcHVibGljIHB1c2hQcml2YXRlS2V5KHM6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IG51bWVyaWMuc3RyaW5nVG9Qcml2YXRlS2V5KHMpO1xyXG4gICAgICAgIHRoaXMucHVzaChrZXkudHlwZSk7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoa2V5LmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBwcml2YXRlIGtleSAqL1xyXG4gICAgcHVibGljIGdldFByaXZhdGVLZXkoKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0VWludDhBcnJheShudW1lcmljLnByaXZhdGVLZXlEYXRhU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWVyaWMucHJpdmF0ZUtleVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQXBwZW5kIGEgc2lnbmF0dXJlICovXHJcbiAgICBwdWJsaWMgcHVzaFNpZ25hdHVyZShzOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBudW1lcmljLnN0cmluZ1RvU2lnbmF0dXJlKHMpO1xyXG4gICAgICAgIHRoaXMucHVzaChrZXkudHlwZSk7XHJcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoa2V5LmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgYSBzaWduYXR1cmUgKi9cclxuICAgIHB1YmxpYyBnZXRTaWduYXR1cmUoKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0VWludDhBcnJheShudW1lcmljLnNpZ25hdHVyZURhdGFTaXplKTtcclxuICAgICAgICByZXR1cm4gbnVtZXJpYy5zaWduYXR1cmVUb1N0cmluZyh7IHR5cGUsIGRhdGEgfSk7XHJcbiAgICB9XHJcbn0gLy8gU2VyaWFsQnVmZmVyXHJcblxyXG4vKiogSXMgdGhpcyBhIHN1cHBvcnRlZCBBQkkgdmVyc2lvbj8gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRlZEFiaVZlcnNpb24odmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmVyc2lvbi5zdGFydHNXaXRoKFwiZW9zaW86OmFiaS8xLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tEYXRlUGFyc2UoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gICAgaWYgKE51bWJlci5pc05hTihyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0aW1lIGZvcm1hdFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGRhdGUgaW4gSVNPIGZvcm1hdCB0byBgdGltZV9wb2ludGAgKG1pbGlzZWNvbmRzIHNpbmNlIGVwb2NoKSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVGltZVBvaW50KGRhdGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoY2hlY2tEYXRlUGFyc2UoZGF0ZSArIFwiWlwiKSAqIDEwMDApO1xyXG59XHJcblxyXG4vKiogQ29udmVydCBgdGltZV9wb2ludGAgKG1pbGlzZWNvbmRzIHNpbmNlIGVwb2NoKSB0byBkYXRlIGluIElTTyBmb3JtYXQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVQb2ludFRvRGF0ZSh1czogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzID0gKG5ldyBEYXRlKHVzIC8gMTAwMCkpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgZGF0ZSBpbiBJU08gZm9ybWF0IHRvIGB0aW1lX3BvaW50X3NlY2AgKHNlY29uZHMgc2luY2UgZXBvY2gpICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9UaW1lUG9pbnRTZWMoZGF0ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChjaGVja0RhdGVQYXJzZShkYXRlICsgXCJaXCIpIC8gMTAwMCk7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGB0aW1lX3BvaW50X3NlY2AgKHNlY29uZHMgc2luY2UgZXBvY2gpIHRvIHRvIGRhdGUgaW4gSVNPIGZvcm1hdCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGltZVBvaW50U2VjVG9EYXRlKHNlYzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzID0gKG5ldyBEYXRlKHNlYyAqIDEwMDApKS50b0lTT1N0cmluZygpO1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGRhdGUgaW4gSVNPIGZvcm1hdCB0byBgYmxvY2tfdGltZXN0YW1wX3R5cGVgIChoYWxmLXNlY29uZHMgc2luY2UgYSBkaWZmZXJlbnQgZXBvY2gpICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9CbG9ja1RpbWVzdGFtcChkYXRlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChjaGVja0RhdGVQYXJzZShkYXRlICsgXCJaXCIpIC0gOTQ2Njg0ODAwMDAwKSAvIDUwMCk7XHJcbn1cclxuXHJcbi8qKiBDb252ZXJ0IGBibG9ja190aW1lc3RhbXBfdHlwZWAgKGhhbGYtc2Vjb25kcyBzaW5jZSBhIGRpZmZlcmVudCBlcG9jaCkgdG8gdG8gZGF0ZSBpbiBJU08gZm9ybWF0ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBibG9ja1RpbWVzdGFtcFRvRGF0ZShzbG90OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHMgPSAobmV3IERhdGUoc2xvdCAqIDUwMCArIDk0NjY4NDgwMDAwMCkpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgYHN0cmluZ2AgdG8gYFN5bWJvbGAuIGZvcm1hdDogYHByZWNpc2lvbixOQU1FYC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvU3ltYm9sKHM6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9IHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHN5bWJvbFwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9eKFswLTldKyksKFtBLVpdKykkLyk7XHJcbiAgICBpZiAoIW0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN5bWJvbFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IG5hbWU6IG1bMl0sIHByZWNpc2lvbjogK21bMV0gfTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgYFN5bWJvbGAgdG8gYHN0cmluZ2AuIGZvcm1hdDogYHByZWNpc2lvbixOQU1FYC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN5bWJvbFRvU3RyaW5nKHsgbmFtZSwgcHJlY2lzaW9uIH06IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9KSB7XHJcbiAgICByZXR1cm4gcHJlY2lzaW9uICsgXCIsXCIgKyBuYW1lO1xyXG59XHJcblxyXG4vKiogQ29udmVydCBiaW5hcnkgZGF0YSB0byBoZXggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9IZXgoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IHggb2YgZGF0YSkge1xyXG4gICAgICAgIHJlc3VsdCArPSAoXCIwMFwiICsgeC50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgaGV4IHRvIGJpbmFyeSBkYXRhICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1VpbnQ4QXJyYXkoaGV4OiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2YgaGV4ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgaGV4IGRpZ2l0c1wiKTtcclxuICAgIH1cclxuICAgIGlmIChoZXgubGVuZ3RoICUgMikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9kZCBudW1iZXIgb2YgaGV4IGRpZ2l0c1wiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGwgPSBoZXgubGVuZ3RoIC8gMjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGwpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpICogMiwgMiksIDE2KTtcclxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGhleCBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdFtpXSA9IHg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJpYWxpemVVbmtub3duKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnkpOiBTZXJpYWxCdWZmZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9uJ3Qga25vdyBob3cgdG8gc2VyaWFsaXplIFwiICsgdGhpcy5uYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVVbmtub3duKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKTogU2VyaWFsQnVmZmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkRvbid0IGtub3cgaG93IHRvIGRlc2VyaWFsaXplIFwiICsgdGhpcy5uYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplU3RydWN0KHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IG5ldyBTZXJpYWxpemVyU3RhdGUoKSwgYWxsb3dFeHRlbnNpb25zID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMuYmFzZSkge1xyXG4gICAgICAgIHRoaXMuYmFzZS5zZXJpYWxpemUoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcclxuICAgICAgICBpZiAoZmllbGQubmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwcGVkQmluYXJ5RXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmV4cGVjdGVkIFwiICsgdGhpcy5uYW1lICsgXCIuXCIgKyBmaWVsZC5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZC50eXBlLnNlcmlhbGl6ZShcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciwgZGF0YVtmaWVsZC5uYW1lXSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyAmJiBmaWVsZCA9PT0gdGhpcy5maWVsZHNbdGhpcy5maWVsZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0V4dGVuc2lvbnMgJiYgZmllbGQudHlwZS5leHRlbnNpb25PZikge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIFwiICsgdGhpcy5uYW1lICsgXCIuXCIgKyBmaWVsZC5uYW1lICsgXCIgKHR5cGU9XCIgKyBmaWVsZC50eXBlLm5hbWUgKyBcIilcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplU3RydWN0KHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBzdGF0ZSA9IG5ldyBTZXJpYWxpemVyU3RhdGUoKSwgYWxsb3dFeHRlbnNpb25zID0gdHJ1ZSkge1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIGlmICh0aGlzLmJhc2UpIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmJhc2UuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGFsbG93RXh0ZW5zaW9ucyAmJiBmaWVsZC50eXBlLmV4dGVuc2lvbk9mICYmICFidWZmZXIuaGF2ZVJlYWREYXRhKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gZmllbGQudHlwZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhcmlhbnQodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoICE9PSAyIHx8IHR5cGVvZiBkYXRhWzBdICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCB2YXJpYW50OiBbXCJ0eXBlXCIsIHZhbHVlXScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHRoaXMuZmllbGRzLmZpbmRJbmRleCgoZmllbGQ6IEZpZWxkKSA9PiBmaWVsZC5uYW1lID09PSBkYXRhWzBdKTtcclxuICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdHlwZSBcIiR7ZGF0YVswXX1cIiBpcyBub3QgdmFsaWQgZm9yIHZhcmlhbnRgKTtcclxuICAgIH1cclxuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGkpO1xyXG4gICAgdGhpcy5maWVsZHNbaV0udHlwZS5zZXJpYWxpemUoYnVmZmVyLCBkYXRhWzFdLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVWYXJpYW50KHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaSA9IGJ1ZmZlci5nZXRWYXJ1aW50MzIoKTtcclxuICAgIGlmIChpID49IHRoaXMuZmllbGRzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdHlwZSBpbmRleCAke2l9IGlzIG5vdCB2YWxpZCBmb3IgdmFyaWFudGApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcclxuICAgIHJldHVybiBbZmllbGQubmFtZSwgZmllbGQudHlwZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplQXJyYXkodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xyXG4gICAgYnVmZmVyLnB1c2hWYXJ1aW50MzIoZGF0YS5sZW5ndGgpO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmFycmF5T2Yuc2VyaWFsaXplKGJ1ZmZlciwgaXRlbSwgc3RhdGUsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVBcnJheSh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGxlbiA9IGJ1ZmZlci5nZXRWYXJ1aW50MzIoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYXJyYXlPZi5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplT3B0aW9uYWwodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcclxuICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJ1ZmZlci5wdXNoKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBidWZmZXIucHVzaCgxKTtcclxuICAgICAgICB0aGlzLm9wdGlvbmFsT2Yuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplT3B0aW9uYWwodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoYnVmZmVyLmdldCgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWxPZi5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplRXh0ZW5zaW9uKHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5leHRlbnNpb25PZi5zZXJpYWxpemUoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVFeHRlbnNpb24odGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25PZi5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlVHlwZUFyZ3Mge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGFsaWFzT2ZOYW1lPzogc3RyaW5nO1xyXG4gICAgYXJyYXlPZj86IFR5cGU7XHJcbiAgICBvcHRpb25hbE9mPzogVHlwZTtcclxuICAgIGV4dGVuc2lvbk9mPzogVHlwZTtcclxuICAgIGJhc2VOYW1lPzogc3RyaW5nO1xyXG4gICAgYmFzZT86IFR5cGU7XHJcbiAgICBmaWVsZHM/OiBGaWVsZFtdO1xyXG4gICAgc2VyaWFsaXplPzogKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgZGVzZXJpYWxpemU/OiAoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVR5cGUoYXR0cnM6IENyZWF0ZVR5cGVBcmdzKTogVHlwZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiPG1pc3NpbmcgbmFtZT5cIixcclxuICAgICAgICBhbGlhc09mTmFtZTogXCJcIixcclxuICAgICAgICBhcnJheU9mOiBudWxsLFxyXG4gICAgICAgIG9wdGlvbmFsT2Y6IG51bGwsXHJcbiAgICAgICAgZXh0ZW5zaW9uT2Y6IG51bGwsXHJcbiAgICAgICAgYmFzZU5hbWU6IFwiXCIsXHJcbiAgICAgICAgYmFzZTogbnVsbCxcclxuICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplVW5rbm93bixcclxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVVbmtub3duLFxyXG4gICAgICAgIC4uLmF0dHJzLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tSYW5nZShvcmlnOiBudW1iZXIsIGNvbnZlcnRlZDogbnVtYmVyKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKCtvcmlnKSB8fCBOdW1iZXIuaXNOYU4oK2NvbnZlcnRlZCkgfHwgKHR5cGVvZiBvcmlnICE9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvcmlnICE9PSBcInN0cmluZ1wiKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG51bWJlclwiKTtcclxuICAgIH1cclxuICAgIGlmICgrb3JpZyAhPT0gK2NvbnZlcnRlZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gK29yaWc7XHJcbn1cclxuXHJcbi8qKiBDcmVhdGUgdGhlIHNldCBvZiB0eXBlcyBidWlsdC1pbiB0byB0aGUgYWJpIGZvcm1hdCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFR5cGVzKCk6IE1hcDxzdHJpbmcsIFR5cGU+IHtcclxuICAgIGNvbnN0IHJlc3VsdDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICBib29sOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib29sXCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHRydWUgb3IgZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChkYXRhID8gMSA6IDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gISFidWZmZXIuZ2V0KCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdWludDg6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVpbnQ4XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSAmIDB4ZmYpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXQoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBpbnQ4OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpbnQ4XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA8PCAyNCA+PiAyNCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldCgpIDw8IDI0ID4+IDI0OyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVpbnQxNjogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidWludDE2XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoVWludDE2KGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSAmIDB4ZmZmZikpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQxNigpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGludDE2OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpbnQxNlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQxNihjaGVja1JhbmdlKGRhdGEsIGRhdGEgPDwgMTYgPj4gMTYpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MTYoKSA8PCAxNiA+PiAxNjsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1aW50MzI6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVpbnQzMlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQzMihjaGVja1JhbmdlKGRhdGEsIGRhdGEgPj4+IDApKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MzIoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB1aW50NjQ6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVpbnQ2NFwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLmRlY2ltYWxUb0JpbmFyeSg4LCBcIlwiICsgZGF0YSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoYnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGludDY0OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpbnQ2NFwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLnNpZ25lZERlY2ltYWxUb0JpbmFyeSg4LCBcIlwiICsgZGF0YSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gbnVtZXJpYy5zaWduZWRCaW5hcnlUb0RlY2ltYWwoYnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGludDMyOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpbnQzMlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQzMihjaGVja1JhbmdlKGRhdGEsIGRhdGEgfCAwKSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0VWludDMyKCkgfCAwOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZhcnVpbnQzMjogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidmFydWludDMyXCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoVmFydWludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA+Pj4gMCkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFZhcnVpbnQzMigpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZhcmludDMyOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ2YXJpbnQzMlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFZhcmludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSB8IDApKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRWYXJpbnQzMigpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVpbnQxMjg6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVpbnQxMjhcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLmRlY2ltYWxUb0JpbmFyeSgxNiwgXCJcIiArIGRhdGEpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIG51bWVyaWMuYmluYXJ5VG9EZWNpbWFsKGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaW50MTI4OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpbnQxMjhcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5zaWduZWREZWNpbWFsVG9CaW5hcnkoMTYsIFwiXCIgKyBkYXRhKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSgxNikpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZsb2F0MzI6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0MzJcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hGbG9hdDMyKGRhdGEpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldEZsb2F0MzIoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmbG9hdDY0OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmbG9hdDY0XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoRmxvYXQ2NChkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRGbG9hdDY0KCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmxvYXQxMjg6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0MTI4XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoaGV4VG9VaW50OEFycmF5KGRhdGEpLCAxNik7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIGJ5dGVzOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJieXRlc1wiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaEJ5dGVzKGhleFRvVWludDhBcnJheShkYXRhKSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRCeXRlcygpKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHJpbmc6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFN0cmluZyhkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRTdHJpbmcoKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBuYW1lOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoTmFtZShkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXROYW1lKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGltZV9wb2ludDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGltZV9wb2ludFwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaE51bWJlckFzVWludDY0KGRhdGVUb1RpbWVQb2ludChkYXRhKSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiB0aW1lUG9pbnRUb0RhdGUoYnVmZmVyLmdldFVpbnQ2NEFzTnVtYmVyKCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRpbWVfcG9pbnRfc2VjOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0aW1lX3BvaW50X3NlY1wiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQzMihkYXRlVG9UaW1lUG9pbnRTZWMoZGF0YSkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gdGltZVBvaW50U2VjVG9EYXRlKGJ1ZmZlci5nZXRVaW50MzIoKSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYmxvY2tfdGltZXN0YW1wX3R5cGU6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJsb2NrX3RpbWVzdGFtcF90eXBlXCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoVWludDMyKGRhdGVUb0Jsb2NrVGltZXN0YW1wKGRhdGEpKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJsb2NrVGltZXN0YW1wVG9EYXRlKGJ1ZmZlci5nZXRVaW50MzIoKSk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3ltYm9sX2NvZGU6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInN5bWJvbF9jb2RlXCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoU3ltYm9sQ29kZShkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRTeW1ib2xDb2RlKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3ltYm9sOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJzeW1ib2xcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTeW1ib2woc3RyaW5nVG9TeW1ib2woZGF0YSkpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gc3ltYm9sVG9TdHJpbmcoYnVmZmVyLmdldFN5bWJvbCgpKTsgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBhc3NldDogY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hBc3NldChkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRBc3NldCgpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtMTYwOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaGVja3N1bTE2MFwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgMjApOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSgyMCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtMjU2OiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaGVja3N1bTI1NlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgMzIpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSgzMikpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrc3VtNTEyOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaGVja3N1bTUxMlwiLFxyXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgNjQpOyB9LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSg2NCkpOyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHB1YmxpY19rZXk6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInB1YmxpY19rZXlcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hQdWJsaWNLZXkoZGF0YSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0UHVibGljS2V5KCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcHJpdmF0ZV9rZXk6IGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInByaXZhdGVfa2V5XCIsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoUHJpdmF0ZUtleShkYXRhKTsgfSxcclxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRQcml2YXRlS2V5KCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc2lnbmF0dXJlOiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogXCJzaWduYXR1cmVcIixcclxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTaWduYXR1cmUoZGF0YSk7IH0sXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0U2lnbmF0dXJlKCk7IH0sXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmVzdWx0LnNldChcImV4dGVuZGVkX2Fzc2V0XCIsIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgIG5hbWU6IFwiZXh0ZW5kZWRfYXNzZXRcIixcclxuICAgICAgICBiYXNlTmFtZTogXCJcIixcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcInF1YW50aXR5XCIsIHR5cGVOYW1lOiBcImFzc2V0XCIsIHR5cGU6IHJlc3VsdC5nZXQoXCJhc3NldFwiKSB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiY29udHJhY3RcIiwgdHlwZU5hbWU6IFwibmFtZVwiLCB0eXBlOiByZXN1bHQuZ2V0KFwibmFtZVwiKSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXHJcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0gLy8gY3JlYXRlSW5pdGlhbFR5cGVzKClcclxuXHJcbi8qKiBHZXQgdHlwZSBmcm9tIGB0eXBlc2AgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUodHlwZXM6IE1hcDxzdHJpbmcsIFR5cGU+LCBuYW1lOiBzdHJpbmcpOiBUeXBlIHtcclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5nZXQobmFtZSk7XHJcbiAgICBpZiAodHlwZSAmJiB0eXBlLmFsaWFzT2ZOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFR5cGUodHlwZXMsIHR5cGUuYWxpYXNPZk5hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiW11cIikpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGFycmF5T2Y6IGdldFR5cGUodHlwZXMsIG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMikpLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZUFycmF5LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgb3B0aW9uYWxPZjogZ2V0VHlwZSh0eXBlcywgbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKSksXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplT3B0aW9uYWwsXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZU9wdGlvbmFsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUuZW5kc1dpdGgoXCIkXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb25PZjogZ2V0VHlwZSh0eXBlcywgbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKSksXHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplRXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVFeHRlbnNpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgbmFtZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdHlwZXMgZnJvbSBhYmlcclxuICogQHBhcmFtIGluaXRpYWxUeXBlcyBTZXQgb2YgdHlwZXMgdG8gYnVpbGQgb24uXHJcbiAqICAgICBJbiBtb3N0IGNhc2VzLCBpdCdzIGJlc3QgdG8gZmlsbCB0aGlzIGZyb20gYSBmcmVzaCBjYWxsIHRvIGBnZXRUeXBlc0Zyb21BYmkoKWAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZXNGcm9tQWJpKGluaXRpYWxUeXBlczogTWFwPHN0cmluZywgVHlwZT4sIGFiaTogQWJpKSB7XHJcbiAgICBjb25zdCB0eXBlcyA9IG5ldyBNYXAoaW5pdGlhbFR5cGVzKTtcclxuICAgIGlmIChhYmkudHlwZXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHsgbmV3X3R5cGVfbmFtZSwgdHlwZSB9IG9mIGFiaS50eXBlcykge1xyXG4gICAgICAgICAgICB0eXBlcy5zZXQobmV3X3R5cGVfbmFtZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVR5cGUoeyBuYW1lOiBuZXdfdHlwZV9uYW1lLCBhbGlhc09mTmFtZTogdHlwZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFiaS5zdHJ1Y3RzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGJhc2UsIGZpZWxkcyB9IG9mIGFiaS5zdHJ1Y3RzKSB7XHJcbiAgICAgICAgICAgIHR5cGVzLnNldChuYW1lLCBjcmVhdGVUeXBlKHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYXNlTmFtZTogYmFzZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogZmllbGRzLm1hcCgoeyBuYW1lOiBuLCB0eXBlIH0pID0+ICh7IG5hbWU6IG4sIHR5cGVOYW1lOiB0eXBlLCB0eXBlOiBudWxsIH0pKSxcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFiaS52YXJpYW50cykge1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCB0eXBlczogdCB9IG9mIGFiaS52YXJpYW50cykge1xyXG4gICAgICAgICAgICB0eXBlcy5zZXQobmFtZSwgY3JlYXRlVHlwZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB0Lm1hcCgocykgPT4gKHsgbmFtZTogcywgdHlwZU5hbWU6IHMsIHR5cGU6IG51bGwgfSkpLFxyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVWYXJpYW50LFxyXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplVmFyaWFudCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgW25hbWUsIHR5cGVdIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGUuYmFzZU5hbWUpIHtcclxuICAgICAgICAgICAgdHlwZS5iYXNlID0gZ2V0VHlwZSh0eXBlcywgdHlwZS5iYXNlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdHlwZS5maWVsZHMpIHtcclxuICAgICAgICAgICAgZmllbGQudHlwZSA9IGdldFR5cGUodHlwZXMsIGZpZWxkLnR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZXM7XHJcbn0gLy8gZ2V0VHlwZXNGcm9tQWJpXHJcblxyXG4vKiogVEFQb1M6IFJldHVybiB0cmFuc2FjdGlvbiBmaWVsZHMgd2hpY2ggcmVmZXJlbmNlIGByZWZCbG9ja2AgYW5kIGV4cGlyZSBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgYHJlZkJsb2NrLnRpbWVzdGFtcGAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zYWN0aW9uSGVhZGVyKHJlZkJsb2NrOiBCbG9ja1RhcG9zSW5mbywgZXhwaXJlU2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV4cGlyYXRpb246IHRpbWVQb2ludFNlY1RvRGF0ZShkYXRlVG9UaW1lUG9pbnRTZWMocmVmQmxvY2sudGltZXN0YW1wKSArIGV4cGlyZVNlY29uZHMpLFxyXG4gICAgICAgIHJlZl9ibG9ja19udW06IHJlZkJsb2NrLmJsb2NrX251bSAmIDB4ZmZmZixcclxuICAgICAgICByZWZfYmxvY2tfcHJlZml4OiByZWZCbG9jay5yZWZfYmxvY2tfcHJlZml4LFxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqIENvbnZlcnQgYWN0aW9uIGRhdGEgdG8gc2VyaWFsaXplZCBmb3JtIChoZXgpICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0OiBDb250cmFjdCwgYWNjb3VudDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYWN0aW9uID0gY29udHJhY3QuYWN0aW9ucy5nZXQobmFtZSk7XHJcbiAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gJHtuYW1lfSBpbiBjb250cmFjdCAke2FjY291bnR9YCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXIsIHRleHREZWNvZGVyIH0pO1xyXG4gICAgYWN0aW9uLnNlcmlhbGl6ZShidWZmZXIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGFycmF5VG9IZXgoYnVmZmVyLmFzVWludDhBcnJheSgpKTtcclxufVxyXG5cclxuLyoqIFJldHVybiBhY3Rpb24gaW4gc2VyaWFsaXplZCBmb3JtICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVBY3Rpb24oY29udHJhY3Q6IENvbnRyYWN0LCBhY2NvdW50OiBzdHJpbmcsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBBdXRob3JpemF0aW9uW10sIGRhdGE6IGFueSwgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2Rlcik6IFNlcmlhbGl6ZWRBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXV0aG9yaXphdGlvbixcclxuICAgICAgICBkYXRhOiBzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBkYXRhLCB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIpLFxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqIERlc2VyaWFsaXplIGFjdGlvbiBkYXRhLiBJZiBgZGF0YWAgaXMgYSBgc3RyaW5nYCwgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgaW4gaGV4LiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0OiBDb250cmFjdCwgYWNjb3VudDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcltdLCB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29kZXI6IFRleHREZWNvZGVyKTogYW55IHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGNvbnRyYWN0LmFjdGlvbnMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZGF0YSA9IGhleFRvVWludDhBcnJheShkYXRhKTtcclxuICAgIH1cclxuICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbiAke25hbWV9IGluIGNvbnRyYWN0ICR7YWNjb3VudH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBTZXJpYWxCdWZmZXIoeyB0ZXh0RGVjb2RlciwgdGV4dEVuY29kZXIgfSk7XHJcbiAgICBidWZmZXIucHVzaEFycmF5KGRhdGEpO1xyXG4gICAgcmV0dXJuIGFjdGlvbi5kZXNlcmlhbGl6ZShidWZmZXIpO1xyXG59XHJcblxyXG4vKiogRGVzZXJpYWxpemUgYWN0aW9uLiBJZiBgZGF0YWAgaXMgYSBgc3RyaW5nYCwgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgaW4gaGV4LiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVBY3Rpb24oY29udHJhY3Q6IENvbnRyYWN0LCBhY2NvdW50OiBzdHJpbmcsIG5hbWU6IHN0cmluZywgYXV0aG9yaXphdGlvbjogQXV0aG9yaXphdGlvbltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcltdLCB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXV0aG9yaXphdGlvbixcclxuICAgICAgICBkYXRhOiBkZXNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciksXHJcbiAgICB9O1xyXG59XHJcbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vd2x6bGEwMDAvYmFjODNkZjZkM2M1MTkxNmM0ZGQwYmM5NDdlNDY5NDcvcmF3LzdlZTM0NjJiMDk1YWIyMjU4MGRkYWYxOTFmNDRhNTkwZGE2ZmUzM2IvUklQRU1ELTE2MC5qc1xyXG5cclxuLypcclxuXHRSSVBFTUQtMTYwLmpzXHJcblxyXG5cdFx0ZGV2ZWxvcGVkXHJcblx0XHRcdGJ5IEsuIChodHRwczovL2dpdGh1Yi5jb20vd2x6bGEwMDApXHJcblx0XHRcdG9uIERlY2VtYmVyIDI3LTI5LCAyMDE3LFxyXG5cclxuXHRcdGxpY2Vuc2VkIHVuZGVyXHJcblxyXG5cclxuXHRcdHRoZSBNSVQgbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoYykgMjAxNyBLLlxyXG5cclxuXHRcdCBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxyXG5cdFx0b2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cclxuXHRcdGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxyXG5cdFx0cmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXHJcblx0XHRjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuXHRcdHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXHJcblx0XHRTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xyXG5cdFx0Y29uZGl0aW9uczpcclxuXHJcblx0XHQgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuXHRcdGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdCBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG5cdFx0RVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXHJcblx0XHRPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG5cdFx0Tk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcclxuXHRcdEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxyXG5cdFx0V0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcblx0XHRGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXHJcblx0XHRPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIFJJUEVNRDE2MFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdC8vIGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcclxuXHRcdC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSAvKiBpbiBieXRlcywgMSBieXRlIGlzIDggYml0cy4gKi8pXHJcblx0e1xyXG5cdFx0Ly8gIE9idGFpbiB0aGUgbnVtYmVyIG9mIGJ5dGVzIG5lZWRlZCB0byBwYWQgdGhlIG1lc3NhZ2UuXHJcblx0XHQvLyBJdCBkb2VzIG5vdCBjb250YWluIHRoZSBzaXplIG9mIHRoZSBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXHJcblx0XHQvKlxyXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXHJcblxyXG5cdFx0XHRUaGUgQ3J5cHRvZ3JhcGhpYyBIYXNoIEZ1bmN0aW9uIFJJUEVNRC0xNjBcclxuXHJcblx0XHRcdHdyaXR0ZW4gYnlcclxuXHRcdFx0XHRCYXJ0IFByZW5lZWwsXHJcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXHJcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcclxuXHRcdFx0aW5cclxuXHRcdFx0XHQxOTk3LlxyXG5cclxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxyXG5cclxuXHRcdFx0Li4uLi4uXHJcblxyXG5cdFx0XHQgSW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoYXQgdGhlIHRvdGFsIGlucHV0IHNpemUgaXMgYVxyXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxyXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXHJcblx0XHRcdGFwcGVuZHMgYSBzaW5nbGUgMSBmb2xsb3dlZCBieSBhIHN0cmluZyBvZiAwcyAodGhlXHJcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xyXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXHJcblx0XHRcdG9mIHRoZSBpbnB1dCBzaXplIGluIGJpdHMsIGxlYXN0IHNpZ25pZmljYW50IGJ5dGUgZmlyc3QuXHJcblx0XHQqL1xyXG5cdFx0LypcclxuXHRcdFx0aHR0cHM6Ly90b29scy5pZXRmLm9yZy9yZmMvcmZjMTE4Ni50eHRcclxuXHJcblx0XHRcdFJGQyAxMTg2OiBNRDQgTWVzc2FnZSBEaWdlc3QgQWxnb3JpdGhtLlxyXG5cclxuXHRcdFx0d3JpdHRlbiBieVxyXG5cdFx0XHRcdFJvbmFsZCBMaW5uIFJpdmVzdFxyXG5cdFx0XHRpblxyXG5cdFx0XHRcdE9jdG9iZXIgMTk5MC5cclxuXHJcblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHTCpzMgICAgIE1ENCBBbGdvcml0aG0gRGVzY3JpcHRpb25cclxuXHJcblx0XHRcdC4uLi4uLlxyXG5cclxuXHRcdFx0U3RlcCAxLiBBcHBlbmQgcGFkZGluZyBiaXRzXHJcblxyXG5cdFx0XHQgVGhlIG1lc3NhZ2UgaXMgXCJwYWRkZWRcIiAoZXh0ZW5kZWQpIHNvIHRoYXQgaXRzIGxlbmd0aFxyXG5cdFx0XHQoaW4gYml0cykgaXMgY29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMi4gVGhhdCBpcywgdGhlXHJcblx0XHRcdG1lc3NhZ2UgaXMgZXh0ZW5kZWQgc28gdGhhdCBpdCBpcyBqdXN0IDY0IGJpdHMgc2h5IG9mXHJcblx0XHRcdGJlaW5nIGEgbXVsdGlwbGUgb2YgNTEyIGJpdHMgbG9uZy4gUGFkZGluZyBpcyBhbHdheXNcclxuXHRcdFx0cGVyZm9ybWVkLCBldmVuIGlmIHRoZSBsZW5ndGggb2YgdGhlIG1lc3NhZ2UgaXMgYWxyZWFkeVxyXG5cdFx0XHRjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyIChpbiB3aGljaCBjYXNlIDUxMiBiaXRzIG9mXHJcblx0XHRcdHBhZGRpbmcgYXJlIGFkZGVkKS5cclxuXHJcblx0XHRcdCBQYWRkaW5nIGlzIHBlcmZvcm1lZCBhcyBmb2xsb3dzOiBhIHNpbmdsZSBcIjFcIiBiaXQgaXNcclxuXHRcdFx0YXBwZW5kZWQgdG8gdGhlIG1lc3NhZ2UsIGFuZCB0aGVuIGVub3VnaCB6ZXJvIGJpdHMgYXJlXHJcblx0XHRcdGFwcGVuZGVkIHNvIHRoYXQgdGhlIGxlbmd0aCBpbiBiaXRzIG9mIHRoZSBwYWRkZWRcclxuXHRcdFx0bWVzc2FnZSBiZWNvbWVzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuXHJcblxyXG5cdFx0XHRTdGVwIDIuIEFwcGVuZCBsZW5ndGhcclxuXHJcblx0XHRcdCBBIDY0LWJpdCByZXByZXNlbnRhdGlvbiBvZiBiICh0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlXHJcblx0XHRcdGJlZm9yZSB0aGUgcGFkZGluZyBiaXRzIHdlcmUgYWRkZWQpIGlzIGFwcGVuZGVkIHRvIHRoZVxyXG5cdFx0XHRyZXN1bHQgb2YgdGhlIHByZXZpb3VzIHN0ZXAuIEluIHRoZSB1bmxpa2VseSBldmVudCB0aGF0XHJcblx0XHRcdGIgaXMgZ3JlYXRlciB0aGFuIDJeNjQsIHRoZW4gb25seSB0aGUgbG93LW9yZGVyIDY0IGJpdHNcclxuXHRcdFx0b2YgYiBhcmUgdXNlZC4gKFRoZXNlIGJpdHMgYXJlIGFwcGVuZGVkIGFzIHR3byAzMi1iaXRcclxuXHRcdFx0d29yZHMgYW5kIGFwcGVuZGVkIGxvdy1vcmRlciB3b3JkIGZpcnN0IGluIGFjY29yZGFuY2VcclxuXHRcdFx0d2l0aCB0aGUgcHJldmlvdXMgY29udmVudGlvbnMuKVxyXG5cclxuXHRcdFx0IEF0IHRoaXMgcG9pbnQgdGhlIHJlc3VsdGluZyBtZXNzYWdlIChhZnRlciBwYWRkaW5nIHdpdGhcclxuXHRcdFx0Yml0cyBhbmQgd2l0aCBiKSBoYXMgYSBsZW5ndGggdGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZVxyXG5cdFx0XHRvZiA1MTIgYml0cy4gRXF1aXZhbGVudGx5LCB0aGlzIG1lc3NhZ2UgaGFzIGEgbGVuZ3RoXHJcblx0XHRcdHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGUgb2YgMTYgKDMyLWJpdCkgd29yZHMuIExldFxyXG5cdFx0XHRNWzAgLi4uIE4tMV0gZGVub3RlIHRoZSB3b3JkcyBvZiB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UsXHJcblx0XHRcdHdoZXJlIE4gaXMgYSBtdWx0aXBsZSBvZiAxNi5cclxuXHRcdCovXHJcblx0XHQvLyBodHRwczovL2NyeXB0by5zdGFja2V4Y2hhbmdlLmNvbS9hLzMyNDA3LzU0NTY4XHJcblx0XHQvKlxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxyXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcclxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXHJcblx0XHRcdFx0WzEgYml0OiAxLl1cclxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxyXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxyXG5cclxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcclxuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cclxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxyXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXHJcblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXHJcblxyXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxyXG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxyXG5cdFx0XHRcdFsxIGJpdDogMS5dXHJcblx0XHRcdFx0WzAgYml0OiAwLl1cclxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cclxuXHRcdCovXHJcblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhZGRpbmcgemVybyBiaXRzOlxyXG5cdFx0Ly8gICAgICA1MTEgLSBbeyhtZXNzYWdlIHNpemUgaW4gYml0cykgKyA2NH0gKG1vZCA1MTIpXVxyXG5cdFx0cmV0dXJuIDY0IC0gKChtZXNzYWdlX3NpemUgKyA4KSAmIDBiMDAxMTExMTEgLyogNjMgKi8pO1xyXG5cdH1cclxuXHRzdGF0aWMgcGFkKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1lc3NhZ2Vfc2l6ZSA9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcclxuXHRcdGNvbnN0IG5fcGFkID0gUklQRU1EMTYwLmdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUpO1xyXG5cclxuXHRcdC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcclxuXHRcdC8vIGJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHQgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzLlxyXG5cdFx0Y29uc3QgZGl2bW9kID0gKGRpdmlkZW5kLCBkaXZpc29yKSA9PiBbXHJcblx0XHRcdE1hdGguZmxvb3IoZGl2aWRlbmQgLyBkaXZpc29yKSxcclxuXHRcdFx0ZGl2aWRlbmQgJSBkaXZpc29yXHJcblx0XHRdO1xyXG5cdFx0LypcclxuVG8gc2hpZnRcclxuXHJcbiAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IG9cclxuICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NZXRob2QgIzFcclxuXHJcbiAgICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cclxuICAgWzAwMDAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXSAoPEE+IGNhcHR1cmVkKVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUEwMDBdICg8QT4gc2hpZnRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cclxuICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cclxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXSAoPEE+ICYgPEJfMj4gbWVyZ2VkKVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFCQkJdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG5cdFx0Y29uc3QgdWludDMyX21heF9wbHVzXzEgPSAweDEwMDAwMDAwMDsgLy8gKDIgKiogMzIpXHJcblx0XHRjb25zdCBbXHJcblx0XHRcdG1zZ19ieXRlX3NpemVfbW9zdCwgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDIxKSAtIDFdLlxyXG5cdFx0XHRtc2dfYnl0ZV9zaXplX2xlYXN0IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAzMikgLSAxXS5cclxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCB1aW50MzJfbWF4X3BsdXNfMSk7XHJcblx0XHRjb25zdCBbXHJcblx0XHRcdGNhcnJ5LCAvLyBWYWx1ZSByYW5nZSBbMCwgN10uXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gOF0uXHJcblx0XHRdID0gZGl2bW9kKG1lc3NhZ2VfYnl0ZV9zaXplX2xlYXN0ICogOCwgdWludDMyX21heF9wbHVzXzEpO1xyXG5cdFx0Y29uc3QgbWVzc2FnZV9iaXRfc2l6ZV9tb3N0ID0gbWVzc2FnZV9ieXRlX3NpemVfbW9zdCAqIDhcclxuXHRcdFx0KyBjYXJyeTsgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDI0KSAtIDFdLlxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbk1ldGhvZCAjMlxyXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XHJcbiAgICAgIFswMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQSAgQUFBXSAoPEE+IGNhcHR1cmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgWzAwMEJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gc2hpZnRlZCkgW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxyXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXHJcblxyXG5cdFx0Ki9cclxuXHRcdGNvbnN0IFtcclxuXHRcdFx0bXNnX2JpdF9zaXplX21vc3QsXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdFxyXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXHJcblx0XHRcdC5tYXAoKHgsIGluZGV4KSA9PiAoaW5kZXggPyAoeCAqIDgpIDogeCkpO1xyXG5cclxuXHRcdC8vIGBBcnJheUJ1ZmZlci50cmFuc2ZlcigpYCBpcyBub3Qgc3VwcG9ydGVkLlxyXG5cdFx0Y29uc3QgcGFkZGVkID0gbmV3IFVpbnQ4QXJyYXkobWVzc2FnZV9zaXplICsgbl9wYWQgKyA4KTtcclxuXHRcdHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xyXG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHBhZGRlZC5idWZmZXIpO1xyXG5cdFx0ZGF0YV92aWV3LnNldFVpbnQ4KG1lc3NhZ2Vfc2l6ZSwgMGIxMDAwMDAwMCk7XHJcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCxcclxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0LFxyXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuXHRcdCk7XHJcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxyXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCArIDQsXHJcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxyXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHBhZGRlZC5idWZmZXI7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZihqLCB4LCB5LCB6KVxyXG5cdHtcclxuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxyXG5cdFx0eyAvLyBFeGNsdXNpdmUtT1JcclxuXHRcdFx0cmV0dXJuIHggXiB5IF4gejtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXHJcblx0XHRcdHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XHJcblx0XHR9XHJcblx0XHRpZigzMiA8PSBqICYmIGogPD0gNDcpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiAoeCB8IH55KSBeIHo7XHJcblx0XHR9XHJcblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcblx0XHR7IC8vIE11bHRpcGxleGluZyAobXV4aW5nKVxyXG5cdFx0XHRyZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xyXG5cdFx0fVxyXG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4geCBeICh5IHwgfnopO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0aWMgSyhqKVxyXG5cdHtcclxuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gMHgwMDAwMDAwMDtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxyXG5cdFx0XHRyZXR1cm4gMHg1QTgyNzk5OTtcclxuXHRcdH1cclxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0NylcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoMykpXHJcblx0XHRcdHJldHVybiAweDZFRDlFQkExO1xyXG5cdFx0fVxyXG5cdFx0aWYoNDggPD0gaiAmJiBqIDw9IDYzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcclxuXHRcdFx0cmV0dXJuIDB4OEYxQkJDREM7XHJcblx0XHR9XHJcblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxyXG5cdFx0XHRyZXR1cm4gMHhBOTUzRkQ0RTtcclxuXHRcdH1cclxuXHR9XHJcblx0c3RhdGljIEtQKGopIC8vIEsnXHJcblx0e1xyXG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDIpKVxyXG5cdFx0XHRyZXR1cm4gMHg1MEEyOEJFNjtcclxuXHRcdH1cclxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXHJcblx0XHRcdHJldHVybiAweDVDNEREMTI0O1xyXG5cdFx0fVxyXG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcclxuXHRcdFx0cmV0dXJuIDB4NkQ3MDNFRjM7XHJcblx0XHR9XHJcblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXHJcblx0XHR7XHJcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDcpKVxyXG5cdFx0XHRyZXR1cm4gMHg3QTZENzZFOTtcclxuXHRcdH1cclxuXHRcdGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdHN0YXRpYyBhZGRfbW9kdWxvMzIoLyogLi4uLi4uICovKVxyXG5cdHtcclxuXHRcdC8vIDEuICBNb2R1bG8gYWRkaXRpb24gKGFkZGl0aW9uIG1vZHVsbykgaXMgYXNzb2NpYXRpdmUuXHJcblx0XHQvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcclxuIFx0XHQvLyAyLiAgQml0d2lzZSBvcGVyYXRpb24gaW4gSmF2YXNjcmlwdFxyXG5cdFx0Ly8gICAgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzXHJcblx0XHQvLyAgICBhbmQgcmVzdWx0cyBpbiBhIDMyLWJpdHMgdmFsdWUuXHJcblx0XHRyZXR1cm4gQXJyYXlcclxuXHRcdFx0LmZyb20oYXJndW1lbnRzKVxyXG5cdFx0XHQucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XHJcblx0fVxyXG5cdHN0YXRpYyByb2wzMih2YWx1ZSwgY291bnQpXHJcblx0eyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxyXG5cdFx0cmV0dXJuICh2YWx1ZSA8PCBjb3VudCkgfCAodmFsdWUgPj4+ICgzMiAtIGNvdW50KSk7XHJcblx0fVxyXG5cdHN0YXRpYyBoYXNoKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxyXG5cdHtcclxuXHRcdC8vLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXHJcblxyXG5cdFx0Ly8gVGhlIHBhZGRlZCBtZXNzYWdlLlxyXG5cdFx0Y29uc3QgcGFkZGVkID0gUklQRU1EMTYwLnBhZChtZXNzYWdlKTtcclxuXHJcblx0XHQvLy8vLy8vLy8vICAgICBDb21wcmVzc2lvbiAgICAgLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIE1lc3NhZ2Ugd29yZCBzZWxlY3RvcnMuXHJcblx0XHRjb25zdCByID0gW1xyXG5cdFx0XHQwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxyXG5cdFx0XHQ3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxyXG5cdFx0XHQzLCAxMCwgMTQsIDQsIDksIDE1LCA4LCAxLCAyLCA3LCAwLCA2LCAxMywgMTEsIDUsIDEyLFxyXG5cdFx0XHQxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxyXG5cdFx0XHQ0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXHJcblx0XHRdO1xyXG5cdFx0Y29uc3QgclAgPSBbIC8vIHInXHJcblx0XHRcdDUsIDE0LCA3LCAwLCA5LCAyLCAxMSwgNCwgMTMsIDYsIDE1LCA4LCAxLCAxMCwgMywgMTIsXHJcblx0XHRcdDYsIDExLCAzLCA3LCAwLCAxMywgNSwgMTAsIDE0LCAxNSwgOCwgMTIsIDQsIDksIDEsIDIsXHJcblx0XHRcdDE1LCA1LCAxLCAzLCA3LCAxNCwgNiwgOSwgMTEsIDgsIDEyLCAyLCAxMCwgMCwgNCwgMTMsXHJcblx0XHRcdDgsIDYsIDQsIDEsIDMsIDExLCAxNSwgMCwgNSwgMTIsIDIsIDEzLCA5LCA3LCAxMCwgMTQsXHJcblx0XHRcdDEyLCAxNSwgMTAsIDQsIDEsIDUsIDgsIDcsIDYsIDIsIDEzLCAxNCwgMCwgMywgOSwgMTFcclxuXHRcdF07XHJcblxyXG5cdFx0Ly8gQW1vdW50cyBmb3IgJ3JvdGF0ZSBsZWZ0JyBvcGVyYXRpb24uXHJcblx0XHRjb25zdCBzID0gW1xyXG5cdFx0XHQxMSwgMTQsIDE1LCAxMiwgNSwgOCwgNywgOSwgMTEsIDEzLCAxNCwgMTUsIDYsIDcsIDksIDgsXHJcblx0XHRcdDcsIDYsIDgsIDEzLCAxMSwgOSwgNywgMTUsIDcsIDEyLCAxNSwgOSwgMTEsIDcsIDEzLCAxMixcclxuXHRcdFx0MTEsIDEzLCA2LCA3LCAxNCwgOSwgMTMsIDE1LCAxNCwgOCwgMTMsIDYsIDUsIDEyLCA3LCA1LFxyXG5cdFx0XHQxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCA5LCA4LCA5LCAxNCwgNSwgNiwgOCwgNiwgNSwgMTIsXHJcblx0XHRcdDksIDE1LCA1LCAxMSwgNiwgOCwgMTMsIDEyLCA1LCAxMiwgMTMsIDE0LCAxMSwgOCwgNSwgNlxyXG5cdFx0XTtcclxuXHRcdGNvbnN0IHNQID0gWyAvLyBzJ1xyXG5cdFx0XHQ4LCA5LCA5LCAxMSwgMTMsIDE1LCAxNSwgNSwgNywgNywgOCwgMTEsIDE0LCAxNCwgMTIsIDYsXHJcblx0XHRcdDksIDEzLCAxNSwgNywgMTIsIDgsIDksIDExLCA3LCA3LCAxMiwgNywgNiwgMTUsIDEzLCAxMSxcclxuXHRcdFx0OSwgNywgMTUsIDExLCA4LCA2LCA2LCAxNCwgMTIsIDEzLCA1LCAxNCwgMTMsIDEzLCA3LCA1LFxyXG5cdFx0XHQxNSwgNSwgOCwgMTEsIDE0LCAxNCwgNiwgMTQsIDYsIDksIDEyLCA5LCAxMiwgNSwgMTUsIDgsXHJcblx0XHRcdDgsIDUsIDEyLCA5LCAxMiwgNSwgMTQsIDYsIDgsIDEzLCA2LCA1LCAxNSwgMTMsIDExLCAxMVxyXG5cdFx0XTtcclxuXHJcblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cclxuXHRcdGNvbnN0IHdvcmRfc2l6ZSA9IDQ7XHJcblxyXG5cdFx0Ly8gVGhlIHNpemUsIGluIGJ5dGVzLCBvZiBhIDE2LXdvcmRzIGJsb2NrLlxyXG5cdFx0Y29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xyXG5cclxuXHRcdC8vIFRoZSBudW1iZXIgb2YgdGhlIDE2LXdvcmRzIGJsb2Nrcy5cclxuXHRcdGNvbnN0IHQgPSBwYWRkZWQuYnl0ZUxlbmd0aCAvIGJsb2NrX3NpemU7XHJcblxyXG5cdFx0Ly8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XHJcblx0XHQvLyBhcmUgZGVub3RlZCB3aXRoIFhfaVtqXSwgd2l0aCAw4omkaeKJpCh0IOKIkiAxKSBhbmQgMOKJpGriiaQxNS5cclxuXHRcdGNvbnN0IFggPSAobmV3IEFycmF5KHQpKVxyXG5cdFx0XHQuZmlsbCh1bmRlZmluZWQpXHJcblx0XHRcdC5tYXAoKF8sIGkpID0+IG5ldyBQcm94eShcclxuXHRcdFx0XHRuZXcgRGF0YVZpZXcoXHJcblx0XHRcdFx0XHRwYWRkZWQsIGkgKiBibG9ja19zaXplLCBibG9ja19zaXplXHJcblx0XHRcdFx0KSwge1xyXG5cdFx0XHRcdGdldChibG9ja192aWV3LCBqKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiBibG9ja192aWV3LmdldFVpbnQzMihcclxuXHRcdFx0XHRcdFx0aiAqIHdvcmRfc2l6ZSxcclxuXHRcdFx0XHRcdFx0dHJ1ZSAvLyBMaXR0bGUtZW5kaWFuXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkpO1xyXG5cclxuXHRcdC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxyXG5cdFx0Ly8gd2hpY2ggZm9ybSB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGFsZ29yaXRobS4gVGhlIGZpbmFsXHJcblx0XHQvLyBjb250ZW50IG9mIHRoZXNlIGZpdmUgMzItYml0IHdvcmRzIGlzIGNvbnZlcnRlZCB0byBhIDE2MC1iaXRcclxuXHRcdC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cclxuXHRcdGxldCBoID0gW1xyXG5cdFx0XHQweDY3NDUyMzAxLCAvLyBoXzBcclxuXHRcdFx0MHhFRkNEQUI4OSwgLy8gaF8xXHJcblx0XHRcdDB4OThCQURDRkUsIC8vIGhfMlxyXG5cdFx0XHQweDEwMzI1NDc2LCAvLyBoXzNcclxuXHRcdFx0MHhDM0QyRTFGMCAgLy8gaF80XHJcblx0XHRdO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0OyArK2kpXHJcblx0XHR7XHJcblx0XHRcdGxldCBBID0gaFswXSwgQiA9IGhbMV0sIEMgPSBoWzJdLCBEID0gaFszXSwgRSA9IGhbNF07XHJcblx0XHRcdGxldCBBUCA9IEEsIEJQID0gQiwgQ1AgPSBDLCBEUCA9IEQsIEVQID0gRTtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDgwOyArK2opXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBMZWZ0IHJvdW5kc1xyXG5cdFx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcclxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFx0XHRBLFxyXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5mKGosIEIsIEMsIEQpLFxyXG5cdFx0XHRcdFx0XHRcdFhbaV1bcltqXV0sXHJcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLksoailcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0c1tqXVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdEVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdEEgPSBFO1xyXG5cdFx0XHRcdEUgPSBEO1xyXG5cdFx0XHRcdEQgPSBSSVBFTUQxNjAucm9sMzIoQywgMTApO1xyXG5cdFx0XHRcdEMgPSBCO1xyXG5cdFx0XHRcdEIgPSBUO1xyXG5cclxuXHRcdFx0XHQvLyBSaWdodCByb3VuZHNcclxuXHRcdFx0XHRUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcclxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcclxuXHRcdFx0XHRcdFx0XHRBUCxcclxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuZihcclxuXHRcdFx0XHRcdFx0XHRcdDc5IC0gaixcclxuXHRcdFx0XHRcdFx0XHRcdEJQLFxyXG5cdFx0XHRcdFx0XHRcdFx0Q1AsXHJcblx0XHRcdFx0XHRcdFx0XHREUFxyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0WFtpXVtyUFtqXV0sXHJcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLktQKGopXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHNQW2pdXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0RVBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdEFQID0gRVA7XHJcblx0XHRcdFx0RVAgPSBEUDtcclxuXHRcdFx0XHREUCA9IFJJUEVNRDE2MC5yb2wzMihDUCwgMTApO1xyXG5cdFx0XHRcdENQID0gQlA7XHJcblx0XHRcdFx0QlAgPSBUO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzFdLCBDLCBEUCk7XHJcblx0XHRcdGhbMV0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMl0sIEQsIEVQKTtcclxuXHRcdFx0aFsyXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFszXSwgRSwgQVApO1xyXG5cdFx0XHRoWzNdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzRdLCBBLCBCUCk7XHJcblx0XHRcdGhbNF0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMF0sIEIsIENQKTtcclxuXHRcdFx0aFswXSA9IFQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxyXG5cdFx0Ly8gb2YgaF8wLCBoXzEsIGhfMiwgaF8zLCBhbmQgaF80IGFmdGVyIGNvbnZlcnRpbmcgZWFjaCBoX2kgdG8gYVxyXG5cdFx0Ly8gNC1ieXRlIHN0cmluZyB1c2luZyB0aGUgbGl0dGxlLWVuZGlhbiBjb252ZW50aW9uLlxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcclxuXHRcdGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhyZXN1bHQpO1xyXG5cdFx0aC5mb3JFYWNoKChoX2ksIGkpID0+IGRhdGFfdmlldy5zZXRVaW50MzIoaSAqIDQsIGhfaSwgdHJ1ZSkpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFJJUEVNRDE2MFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=