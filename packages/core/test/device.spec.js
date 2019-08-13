import { assert } from 'chai';
import 'mocha';
const device = require("../src/util/Device");
//
describe('Api', () => {

    it('should be able to create a device uuid even from a nodejs environment', done => {
        new Promise(async() => {
            console.log('device', device);
        });
    });

});