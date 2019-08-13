
let device;

if(typeof navigator === 'undefined'){
	device = 'nodejs_env'
} else {
	const {DeviceUUID} = require('device-uuid');

	const du = new DeviceUUID().parse();
	const dua = [
		du.language,
		du.platform,
		du.os,
		du.cpuCores,
		du.colorDepth,
	];
	device = du.hashMD5(dua.join(':'));
}

export default device;