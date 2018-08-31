'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _scatterjsCore = require('scatterjs-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const proxy = (dummy, handler) => new Proxy(dummy, handler);

class EOS extends _scatterjsCore.Plugin {

    constructor() {
        super(_scatterjsCore.Blockchains.EOS, _scatterjsCore.PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    signatureProvider(...args) {

        const throwIfNoIdentity = args[0];

        // Protocol will be deprecated.
        return (network, _eos, _options = {}) => {

            network = _scatterjsCore.Network.fromJson(network);
            if (!network.isValid()) throw Error.noNetwork();
            const httpEndpoint = `${network.protocol}://${network.hostport()}`;

            const chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : _options.chainId;

            // The proxy stands between the eosjs object and scatter.
            // This is used to add special functionality like adding `requiredFields` arrays to transactions
            return proxy(_eos({ httpEndpoint, chainId }), {
                get(eosInstance, method) {

                    let returnedFields = null;

                    return (...args) => {

                        if (args.find(arg => arg.hasOwnProperty('keyProvider'))) throw Error.usedKeyProvider();

                        // The signature provider which gets elevated into the user's Scatter
                        const signProvider = (() => {
                            var _ref = (0, _asyncToGenerator3.default)(function* (signargs) {
                                throwIfNoIdentity();

                                const requiredFields = args.find(function (arg) {
                                    return arg.hasOwnProperty('requiredFields');
                                }) || { requiredFields: {} };
                                const payload = (0, _assign2.default)(signargs, { blockchain: _scatterjsCore.Blockchains.EOS, network, requiredFields: requiredFields.requiredFields });
                                const result = yield _scatterjsCore.SocketService.sendApiRequest({
                                    type: 'requestSignature',
                                    payload
                                });

                                // No signature
                                if (!result) return null;

                                if (result.hasOwnProperty('signatures')) {
                                    // Holding onto the returned fields for the final result
                                    returnedFields = result.returnedFields;

                                    // Grabbing buf signatures from local multi sig sign provider
                                    let multiSigKeyProvider = args.find(function (arg) {
                                        return arg.hasOwnProperty('signProvider');
                                    });
                                    if (multiSigKeyProvider) {
                                        result.signatures.push(multiSigKeyProvider.signProvider(signargs.buf, signargs.sign));
                                    }

                                    // Returning only the signatures to eosjs
                                    return result.signatures;
                                }

                                return result;
                            });

                            return function signProvider(_x) {
                                return _ref.apply(this, arguments);
                            };
                        })();

                        // TODO: We need to check about the implications of multiple eosjs instances
                        return new _promise2.default((resolve, reject) => {
                            _eos((0, _assign2.default)(_options, { httpEndpoint, signProvider, chainId }))[method](...args).then(result => {

                                // Standard method ( ie. not contract )
                                if (!result.hasOwnProperty('fc')) {
                                    result = (0, _assign2.default)(result, { returnedFields });
                                    resolve(result);
                                    return;
                                }

                                // Catching chained promise methods ( contract .then action )
                                const contractProxy = proxy(result, {
                                    get(instance, method) {
                                        if (method === 'then') return instance[method];
                                        return (...args) => {
                                            return new _promise2.default((() => {
                                                var _ref2 = (0, _asyncToGenerator3.default)(function* (res, rej) {
                                                    instance[method](...args).then(function (actionResult) {
                                                        res((0, _assign2.default)(actionResult, { returnedFields }));
                                                    }).catch(rej);
                                                });

                                                return function (_x2, _x3) {
                                                    return _ref2.apply(this, arguments);
                                                };
                                            })());
                                        };
                                    }
                                });

                                resolve(contractProxy);
                            }).catch(error => reject(error));
                        });
                    };
                }
            }); // Proxy
        };
    }
}

module.exports = EOS;