class Account {
	constructor(){
		this.blockchain = '';
		this.chainId = '';
		this.isHardware = false;
	}

	static placeholder(){ return new Account(); }
	static fromJson(json){ return Object.assign(Account.placeholder(), json); }
}

class EOSAccount extends Account {
	constructor() {
		super();
		this.publicKey = '';
		this.name = '';
		this.authority = '';
	}

	static placeholder(){ return new EOSAccount(); }
	static fromJson(json){ return Object.assign(EOSAccount.placeholder(), json); }

	formatted(){ return `${this.name}@${this.authority}` }
	authorization(){ return {authorization:[this.formatted()]} }
}

class AddressAccount extends Account {
	constructor() {
		super();
		this.address = '';
	}

	static placeholder(){ return new AddressAccount(); }
	static fromJson(json){ return Object.assign(AddressAccount.placeholder(), json); }
}

export default {
    Account,
    EOSAccount,
    AddressAccount
}