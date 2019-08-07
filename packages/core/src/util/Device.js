import {DeviceUUID} from 'device-uuid';

if(typeof navigator === 'undefined' && typeof global.navigator === 'undefined') global.navigator = {};
if(typeof screen === 'undefined' && typeof global.screen === 'undefined') global.screen = {};

const du = new DeviceUUID().parse();
const dua = [
	du.language,
	du.platform,
	du.os,
	du.cpuCores,
	du.colorDepth,
];
const device = du.hashMD5(dua.join(':'));
export default device;