import plugin from '../src/scatter';
import SocketService from '../src/services/SocketService';
import "isomorphic-fetch"
import { assert } from 'chai';
import 'mocha';

let key = `-----BEGIN PRIVATE KEY-----
MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEA2ndHeUenLxef1GcQ
vmUC6VU3JxJX/caEXH0wmZeNUE9iSTAFlSeTW08iyUIGyRMdYgyD3hMEI0mzEGAI
SCt7GwIDAQABAkBggebCDcQuCnqhovIDma3Ck9FsYi8avVKFZQxOHWPgwI97hab2
PwmC749N2zaz4nZ5bhjhuHjXMJJLdt60E+PxAiEA+lzHRo4GK6GCRri7DLthPn/x
hpw/5YMgj9Df5ZoA58MCIQDfYqHvdZLbYJ9qbzVdOLiYvIUGr1PRUYL5NdoUhh9B
yQIgNhrkyd+Zf8ZYlBYJ/ldkTZByzsdnm57543qdWE4u0ecCIBVdXZeFazJIH3cS
g8wSrLUO8roc8qtGXHxxRhZIbZzhAiAShQ3cx+AOxNwUxhK27mUDjtODHZ9HD4oU
p/EbR1pVXQ==
-----END PRIVATE KEY-----`;
const getter = () => new Promise(resolve => resolve(key));
const setter = x => new Promise(resolve => resolve(key = x));

const network = {
    blockchain:'eos',
    protocol:'http',
    host:'192.168.1.7',
    port:8888,
    chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
}

plugin.connect("Test Plugin", getter, setter);

let identity;

describe('Api', () => {

    it('should create a connection to Scatter', done => {
        new Promise(async() => {
            setTimeout(() => {
                assert(plugin.isConnected(), 'Could not connect to Scatter');
                done();
            }, 2000);
        });
    });

    it('should be able to get the Scatter version', done => {
        new Promise(async() => {
            const test = await SocketService.sendApiRequest({
                type:'getVersion',
                payload:{}
            });
            assert(test, "Could not get the version")
            done();
        });
    });

    it('should be able to suggest a network', done => {
        new Promise(async() => {
            const test = await SocketService.sendApiRequest({
                type:'requestAddNetwork',
                payload:{
                     network
                }
            });
            assert(test, "Could not suggest the network")
            done();
        });
    });

    it('should be able to forget an identity', done => {
        new Promise(async() => {
            const test = await SocketService.sendApiRequest({
                type:'forgetIdentity',
                payload:{

                }
            });
            assert(!test.hasOwnProperty('isError'), "identityFromPermissions")
            done();
        });
    });

    it('should be able to get or request an Identity', done => {
        new Promise(async() => {
            const test = await SocketService.sendApiRequest({
                type:'getOrRequestIdentity',
                payload:{
                    fields:[]
                }
            });
            assert(!test.hasOwnProperty('isError'), "getOrRequestIdentity")
            done();
        });
    });

    it('should be able to get an identity from permissions', done => {
        new Promise(async() => {
            identity = await SocketService.sendApiRequest({
                type:'identityFromPermissions',
                payload:{

                }
            });
            assert(!identity.hasOwnProperty('isError'), "identityFromPermissions")
            done();
        });
    });

    it('should be able to forget an identity', done => {
        new Promise(async() => {
            const test = await SocketService.sendApiRequest({
                type:'forgetIdentity',
                payload:{

                }
            });
            assert(!test.hasOwnProperty('isError'), "identityFromPermissions")
            done();
        });
    });

    it('should be able to get an identity with an account', done => {
        new Promise(async() => {
            identity = await SocketService.sendApiRequest({
                type:'getOrRequestIdentity',
                payload:{
                    fields:{accounts:[network]}
                }
            });
            assert(!identity.hasOwnProperty('isError'), "getOrRequestIdentity")
            done();
        });
    });

    let transaction;

    it('should be able to create a transaction using Scatter', done => {
        new Promise(async() => {
            const account = identity.accounts.find(x => x.blockchain === 'eos');
            transaction = await SocketService.sendApiRequest({
                type:'createTransaction',
                payload:{
                    blockchain:'eos',
                    actions:[
                        {
                            contract:'eosio.token',
                            action:'transfer',
                            params:[account.name, 'eosio', '1.0000 EOS', ''],
                        },
                        {
                            contract:'eosio.token',
                            action:'transfer',
                            params:[account.name, 'eosio', '2.0000 EOS', ''],
                        }
                    ],
                    account,
                    network
                }
            });

            assert(!transaction.hasOwnProperty('isError'), "identityFromPermissions")
            done();
        });
    });

    it('should be able to request a signature for a transaction using Scatter', done => {
        new Promise(async() => {
            const account = identity.accounts.find(x => x.blockchain === 'eos');
            const test = await SocketService.sendApiRequest({
                type:'requestSignature',
                payload:transaction
            });

            const tx = {
                compression:'none',
                transaction:transaction.transaction,
                signatures:test.signatures
            };

            // Testing send via standard HTTP
            const res = await fetch('http://192.168.1.7:8888/v1/chain/push_transaction', {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(tx)
            });

            const json = await res.json();
            assert(json.hasOwnProperty('transaction_id'), "requestSignature");
            done();
        });
    });

});