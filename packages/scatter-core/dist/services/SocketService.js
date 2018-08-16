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

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _StorageService = require('../services/StorageService');

var _StorageService2 = _interopRequireDefault(_StorageService);

var _getRandomValues = require('get-random-values');

var _getRandomValues2 = _interopRequireDefault(_getRandomValues);

var _eosjs = require('eosjs');

var _eosjs2 = _interopRequireDefault(_eosjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { ecc } = _eosjs2.default.modules;

const host = 'http://127.0.0.1:50005';

let socket = null;
let connected = false;
let paired = false;

let plugin;
let openRequests = [];

let allowReconnects = true;
let reconnectionTimeout = null;

const reconnectOnAbnormalDisconnection = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* () {
        if (!allowReconnects) return;

        clearTimeout(reconnectionTimeout);
        reconnectionTimeout = setTimeout(function () {
            SocketService.link();
        }, 1000);
    });

    return function reconnectOnAbnormalDisconnection() {
        return _ref.apply(this, arguments);
    };
})();

const random = () => {
    const array = new Uint8Array(24);
    (0, _getRandomValues2.default)(array);
    return array.join('');
};

const getOrigin = () => {
    let origin;
    if (typeof location !== 'undefined') {
        if (location.hasOwnProperty('hostname') && location.hostname.length && location.hostname !== 'localhost') origin = location.hostname;else origin = plugin;
    } else origin = plugin;
    return origin;
};

// StorageService.removeAppKey();
// StorageService.removeNonce();

let appkey = _StorageService2.default.getAppKey();
if (!appkey) appkey = 'appkey:' + random();

let pairingPromise = null;
const pair = (passthrough = false) => {
    return new _promise2.default((resolve, reject) => {
        pairingPromise = { resolve, reject };
        socket.emit('pair', { data: { appkey, origin: getOrigin(), passthrough }, plugin });
    });
};

class SocketService {

    static init(_plugin, timeout = 60000) {
        plugin = _plugin;
        this.timeout = timeout;
    }

    static link() {
        var _this = this;

        return (0, _asyncToGenerator3.default)(function* () {

            return _promise2.default.race([new _promise2.default(function (resolve, reject) {
                return setTimeout((0, _asyncToGenerator3.default)(function* () {
                    if (connected) return;
                    resolve(false);

                    if (socket) {
                        socket.disconnect();
                        socket = null;
                    }

                    reconnectOnAbnormalDisconnection();
                }), _this.timeout);
            }), new _promise2.default((() => {
                var _ref3 = (0, _asyncToGenerator3.default)(function* (resolve, reject) {
                    socket = _socket2.default.connect(`${host}/scatter`, { secure: true, reconnection: false, rejectUnauthorized: false });

                    socket.on('connected', (0, _asyncToGenerator3.default)(function* () {
                        clearTimeout(reconnectionTimeout);
                        connected = true;
                        yield pair(true);
                        resolve(true);
                    }));

                    socket.on('paired', (() => {
                        var _ref5 = (0, _asyncToGenerator3.default)(function* (result) {
                            paired = result;

                            if (paired) {
                                const savedKey = _StorageService2.default.getAppKey();
                                const hashed = appkey.indexOf('appkey:') > -1 ? ecc.sha256(appkey) : appkey;

                                if (!savedKey || savedKey !== hashed) {
                                    _StorageService2.default.setAppKey(hashed);
                                    appkey = _StorageService2.default.getAppKey();
                                }
                            }

                            pairingPromise.resolve(result);
                        });

                        return function (_x3) {
                            return _ref5.apply(this, arguments);
                        };
                    })());

                    socket.on('rekey', (0, _asyncToGenerator3.default)(function* () {
                        appkey = 'appkey:' + random();
                        socket.emit('rekeyed', { data: { appkey, origin: getOrigin() }, plugin });
                    }));

                    socket.on('event', function (event) {
                        console.log('event', event);
                    });

                    socket.on('api', function (result) {
                        const openRequest = openRequests.find(function (x) {
                            return x.id === result.id;
                        });
                        if (!openRequest) return;
                        if (typeof result.result === 'object' && result.result !== null && result.result.hasOwnProperty('isError')) openRequest.reject(result.result);else openRequest.resolve(result.result);
                    });

                    socket.on('disconnect', (0, _asyncToGenerator3.default)(function* () {
                        console.log('Disconnected');
                        connected = false;
                        socket = null;

                        // If bad disconnect, retry connection
                        reconnectOnAbnormalDisconnection();
                    }));

                    socket.on('connect_error', (0, _asyncToGenerator3.default)(function* () {
                        allowReconnects = false;
                        resolve(false);
                    }));

                    socket.on('rejected', (() => {
                        var _ref9 = (0, _asyncToGenerator3.default)(function* (reason) {
                            console.error('reason', reason);
                            reject(reason);
                        });

                        return function (_x4) {
                            return _ref9.apply(this, arguments);
                        };
                    })());
                });

                return function (_x, _x2) {
                    return _ref3.apply(this, arguments);
                };
            })())]);
        })();
    }

    static isConnected() {
        return connected;
    }

    static disconnect() {
        return (0, _asyncToGenerator3.default)(function* () {
            socket.disconnect();
            return true;
        })();
    }

    static sendApiRequest(request) {
        return (0, _asyncToGenerator3.default)(function* () {
            return new _promise2.default((() => {
                var _ref10 = (0, _asyncToGenerator3.default)(function* (resolve, reject) {
                    if (request.type === 'identityFromPermissions' && !paired) return resolve(false);

                    yield pair();
                    if (!paired) return reject({ code: 'not_paired', message: 'The user did not allow this app to connect to their Scatter' });

                    // Request ID used for resolving promises
                    request.id = random();

                    // Set Application Key
                    request.appkey = appkey;

                    // Nonce used to authenticate this request
                    request.nonce = _StorageService2.default.getNonce() || 0;
                    // Next nonce used to authenticate the next request
                    const nextNonce = random();
                    request.nextNonce = ecc.sha256(nextNonce);
                    _StorageService2.default.setNonce(nextNonce);

                    if (request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin')) request.payload.origin = getOrigin();

                    openRequests.push((0, _assign2.default)(request, { resolve, reject }));
                    socket.emit('api', { data: request, plugin });
                });

                return function (_x5, _x6) {
                    return _ref10.apply(this, arguments);
                };
            })());
        })();
    }

}
exports.default = SocketService;