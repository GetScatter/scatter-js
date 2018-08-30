import Eos from 'eosjs'
import ScatterJS from '../../packages/core/dist/index';
import ScatterEosjs from '../../packages/plugin-eosjs/dist/index'

const network = {
	blockchain:'eos',
	chainId:'038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
	host:'dev.cryptolions.io',
	port:18888,
	protocol:'http'
};


ScatterJS.plugins( new ScatterEosjs() );
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