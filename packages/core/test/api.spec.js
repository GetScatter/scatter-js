// import ScatterJS from '../src/scatter';
// import SocketService from '../src/services/SocketService';
// import { assert } from 'chai';
// import 'mocha';
//
// const network = {
//     blockchain:'eos',
//     protocol:'http',
//     host:'192.168.1.6',
//     port:8888,
//     chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
// }
//
// let scatter, identity;
//
// describe('Api', () => {
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
//     it('should be able to get the Scatter version', done => {
//         new Promise(async() => {
//             const test = await SocketService.sendApiRequest({
//                 type:'getVersion',
//                 payload:{}
//             });
//             assert(test, "Could not get the version")
//             done();
//         });
//     });
//
//     it('should be able to suggest a network', done => {
//         new Promise(async() => {
//             const test = await SocketService.sendApiRequest({
//                 type:'requestAddNetwork',
//                 payload:{
//                      network
//                 }
//             });
//             assert(test, "Could not suggest the network")
//             done();
//         });
//     });
//
//     it('should be able to forget an identity', done => {
//         new Promise(async() => {
//             const test = await SocketService.sendApiRequest({
//                 type:'forgetIdentity',
//                 payload:{
//
//                 }
//             });
//             assert(!test.hasOwnProperty('isError'), "identityFromPermissions")
//             done();
//         });
//     });
//
//     it('should be able to get or request an Identity', done => {
//         new Promise(async() => {
//             const test = await SocketService.sendApiRequest({
//                 type:'getOrRequestIdentity',
//                 payload:{
//                     fields:[]
//                 }
//             });
//             assert(!test.hasOwnProperty('isError'), "getOrRequestIdentity")
//             done();
//         });
//     });
//
//     it('should be able to get an identity from permissions', done => {
//         new Promise(async() => {
//             identity = await SocketService.sendApiRequest({
//                 type:'identityFromPermissions',
//                 payload:{
//
//                 }
//             });
//             assert(!identity.hasOwnProperty('isError'), "identityFromPermissions")
//             done();
//         });
//     });
//
//     it('should be able to forget an identity', done => {
//         new Promise(async() => {
//             const test = await SocketService.sendApiRequest({
//                 type:'forgetIdentity',
//                 payload:{
//
//                 }
//             });
//             assert(!test.hasOwnProperty('isError'), "identityFromPermissions")
//             done();
//         });
//     });
//
//     it('should be able to get an identity with an account', done => {
//         new Promise(async() => {
//             identity = await SocketService.sendApiRequest({
//                 type:'getOrRequestIdentity',
//                 payload:{
//                     fields:{accounts:[network]}
//                 }
//             });
//             assert(!identity.hasOwnProperty('isError'), "getOrRequestIdentity")
//             done();
//         });
//     });
//
//     let transaction;
//
//     it('should be able to create a transaction using Scatter', done => {
//         new Promise(async() => {
//             const account = identity.accounts.find(x => x.blockchain === 'eos');
//             transaction = await SocketService.sendApiRequest({
//                 type:'createTransaction',
//                 payload:{
//                     blockchain:'eos',
//                     actions:[
//                         {
//                             contract:'eosio.token',
//                             action:'transfer',
//                             params:[account.name, 'eosio', '1.0000 EOS', ''],
//                         },
//                         {
//                             contract:'eosio.token',
//                             action:'transfer',
//                             params:[account.name, 'eosio', '2.0000 EOS', ''],
//                         }
//                     ],
//                     account,
//                     network
//                 }
//             });
//
//             assert(!transaction.hasOwnProperty('isError'), "identityFromPermissions")
//             done();
//         });
//     });
//
//     it('should be able to request a signature for a transaction using Scatter', done => {
//         new Promise(async() => {
//             const account = identity.accounts.find(x => x.blockchain === 'eos');
//             const test = await SocketService.sendApiRequest({
//                 type:'requestSignature',
//                 payload:transaction
//             });
//
//             const tx = {
//                 compression:'none',
//                 transaction:transaction.transaction,
//                 signatures:test.signatures
//             };
//
//             // Testing send via standard HTTP
//             const res = await fetch(`http://${network.host}:8888/v1/chain/push_transaction`, {
//                 method: "POST",
//                 headers: {
//                     'Accept': 'application/json, text/plain, */*',
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify(tx)
//             });
//
//             const json = await res.json();
//             assert(json.hasOwnProperty('transaction_id'), "requestSignature");
//             done();
//         });
//     });
//
// });