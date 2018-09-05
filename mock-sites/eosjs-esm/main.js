import Eos from 'eosjs'
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs'

// const network = {
// 	blockchain:'eos',
// 	chainId:'038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
// 	host:'dev.cryptolions.io',
// 	port:18888,
// 	protocol:'http'
// };

const network = {
	blockchain:'eos',
	chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
	host:'nodes.get-scatter.com',
	port:443,
	protocol:'https'
};


ScatterJS.plugins( new ScatterEOS() );
let scatter = null;

ScatterJS.scatter.connect('LernaTest').then(connected => {
	if(!connected) return false;
	scatter = ScatterJS.scatter;
	console.log('sc', scatter);
});

window.login = () => {
	scatter.getIdentity({accounts:[network]}).then(id => {
		console.log('id', id);
	})
};

window.logout = () => {
	scatter.forgetIdentity();
};

window.transfer = () => {
	const eos = scatter.eos(network, Eos);
	const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
	const opts = { authorization:[`${account.name}@${account.authority}`] };
	eos.transfer(account.name, 'test', '1.0000 EOS', '', opts).then(trx => {
		console.log('trx', trx);
	}).catch(err => {
		console.error(err);
	})
};

window.dynamicDonate = () => {
	scatter.requestTransfer(network, 'safetransfer', 0, {contract:'eosio.token', symbol:'EOS', memo:'ramdeathtest', decimals:4}).then(function(result){
		console.log('result', result);
	})
};

window.fixedDonate = () => {
	scatter.requestTransfer(network, 'safetransfer', '1.0000', {contract:'eosio.token', symbol:'EOS', memo:'ramdeathtest', decimals:4}).then(function(result){
		console.log('result', result);
	})
};