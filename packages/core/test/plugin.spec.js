// import { assert } from 'chai';
// import 'mocha';
// import ScatterJS from '../src/scatter';
// import Eos from 'eosjs';
//
// const network = {
//     blockchain:'eos',
//     protocol:'http',
//     host:'192.168.1.6',
//     port:8888,
//     chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
// };
//
// let scatter, identity;
//
//
//
// describe('Plugin', () => {
//
//     it('should create a connection to Scatter', done => {
//         new Promise(async() => {
//             ScatterJS.scatter.connect("Test Plugin").then(connected => {
//                 assert(connected, 'Not connected');
//                 scatter = ScatterJS.scatter;
//                 done();
//             })
//         });
//     });
//
//     it('should forget an identity if existing', done => {
//         new Promise(async() => {
//             assert(await scatter.forgetIdentity(), "Could not forget");
//             done();
//         });
//     });
//
//     it('should get an identity', done => {
//         new Promise(async() => {
//             assert(await scatter.getIdentity({accounts:[network]}), "Could not get identity");
//             done();
//         });
//     });
//
//     it('should send a transaction with eos proxy object', done => {
//         new Promise(async() => {
//             const eos = scatter.eos(network, Eos);
//             const transfer = await eos.transfer('testacc', 'eosio', '1.0000 EOS', '');
//             assert(transfer.hasOwnProperty('transaction_id'), "Couldn't sign transfer");
//             done();
//         });
//     });
//
// });