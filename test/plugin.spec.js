import scatter from '../src/scatter';
import Eos from 'eosjs';
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
};

scatter.connect("Test Plugin", getter, setter);

let identity;

describe('Plugin', () => {

    it('should create a connection to Scatter', done => {
        new Promise(async() => {
            setTimeout(() => {
                console.log(scatter);
                done();
            }, 1000)
        });
    });

    it('should get an eosjs reference', done => {
        new Promise(async() => {
            const eos = scatter.eos(network, Eos);
            const transfer = await eos.transfer('testacc', 'eosio', '1.0000 EOS', '');
            console.log('transfer', transfer);
            done();
        });
    });

});