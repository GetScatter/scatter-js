import {DeviceUUID} from 'device-uuid';
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