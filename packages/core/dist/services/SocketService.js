'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _StorageService = require('./StorageService');

var _StorageService2 = _interopRequireDefault(_StorageService);

var _getRandomValues = require('get-random-values');

var _getRandomValues2 = _interopRequireDefault(_getRandomValues);

var _createHash = require('create-hash');

var _createHash2 = _interopRequireDefault(_createHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const host = '127.0.0.1:50005';

let socket = null;
let connected = false;
let paired = false;

let plugin;
let openRequests = [];

let allowReconnects = true;
let reconnectionTimeout = null;

const sha256 = data => (0, _createHash2.default)('sha256').update(data).digest('hex');

const reconnectOnAbnormalDisconnection = () => {
    if (!allowReconnects) return;

    clearTimeout(reconnectionTimeout);
    reconnectionTimeout = setTimeout(() => {
        SocketService.link();
    }, 1000);
};

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

const send = (type = null, data = null) => {
    if (type === null && data === null) socket.send('40/scatter');else socket.send('42/scatter,' + (0, _stringify2.default)([type, data]));
};

let pairingPromise = null;
const pair = (passthrough = false) => {
    return new _promise2.default((resolve, reject) => {
        pairingPromise = { resolve, reject };
        send('pair', { data: { appkey, origin: getOrigin(), passthrough }, plugin });
    });
};

class SocketService {

    static init(_plugin, timeout = 60000) {
        plugin = _plugin;
        this.timeout = timeout;
    }

    static link() {

        return _promise2.default.race([new _promise2.default((resolve, reject) => setTimeout(() => {
            if (connected) return;
            resolve(false);

            if (socket) {
                socket.disconnect();
                socket = null;
            }

            reconnectOnAbnormalDisconnection();
        }, this.timeout)), new _promise2.default((resolve, reject) => {
            socket = new WebSocket(`ws://${host}/socket.io/?EIO=3&transport=websocket`);

            socket.onclose = x => {
                resolve(false);
            };

            socket.onerror = err => {
                console.error('err', err);
                resolve(false);
            };

            socket.onopen = x => {
                send();
                clearTimeout(reconnectionTimeout);
                connected = true;
                pair(true).then(() => {
                    console.log('then pair', connected);
                    resolve(true);
                });
            };

            socket.onmessage = msg => {
                // Handshaking/Upgrading
                if (msg.data.indexOf('42/scatter') === -1) return false;

                // Real message
                const [type, data] = JSON.parse(msg.data.replace('42/scatter,', ''));

                switch (type) {
                    case 'paired':
                        return msg_paired(data);
                    case 'rekey':
                        return msg_rekey();
                    case 'api':
                        return msg_api(data);
                }
            };

            const msg_paired = result => {
                console.log('paired', result);
                paired = result;

                if (paired) {
                    const savedKey = _StorageService2.default.getAppKey();
                    const hashed = appkey.indexOf('appkey:') > -1 ? sha256(appkey) : appkey;

                    if (!savedKey || savedKey !== hashed) {
                        _StorageService2.default.setAppKey(hashed);
                        appkey = _StorageService2.default.getAppKey();
                    }
                }

                pairingPromise.resolve(result);
            };

            const msg_rekey = () => {
                appkey = 'appkey:' + random();
                send('rekeyed', { data: { appkey, origin: getOrigin() }, plugin });
            };

            const msg_api = result => {
                const openRequest = openRequests.find(x => x.id === result.id);
                if (!openRequest) return;
                if (typeof result.result === 'object' && result.result !== null && result.result.hasOwnProperty('isError')) openRequest.reject(result.result);else openRequest.resolve(result.result);
            };

            //
            // socket.on('event', event => {
            //     console.log('event', event);
            // });
            //
            // socket.on('disconnect', () => {
            //     console.log('Disconnected')
            //     connected = false;
            //     socket = null;
            //
            //     // If bad disconnect, retry connection
            //     reconnectOnAbnormalDisconnection();
            // });
            //
            // socket.on('connect_error', () => {
            //     allowReconnects = false;
            //     resolve(false);
            // });
            //
            // socket.on('rejected', reason => {
            //     console.error('reason', reason);
            //     reject(reason);
            // });
        })]);
    }

    static isConnected() {
        return connected;
    }

    static disconnect() {
        socket.disconnect();
        return true;
    }

    static sendApiRequest(request) {
        return new _promise2.default((resolve, reject) => {
            if (request.type === 'identityFromPermissions' && !paired) return resolve(false);

            pair().then(() => {
                if (!paired) return reject({ code: 'not_paired', message: 'The user did not allow this app to connect to their Scatter' });

                // Request ID used for resolving promises
                request.id = random();

                // Set Application Key
                request.appkey = appkey;

                // Nonce used to authenticate this request
                request.nonce = _StorageService2.default.getNonce() || 0;
                // Next nonce used to authenticate the next request
                const nextNonce = random();
                request.nextNonce = sha256(nextNonce);
                _StorageService2.default.setNonce(nextNonce);

                if (request.hasOwnProperty('payload') && !request.payload.hasOwnProperty('origin')) request.payload.origin = getOrigin();

                openRequests.push((0, _assign2.default)(request, { resolve, reject }));
                send('api', { data: request, plugin });
            });
        });
    }

}
exports.default = SocketService;