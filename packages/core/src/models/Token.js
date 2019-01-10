import {Blockchains} from "./Blockchains";

export default class Token {

	constructor(blockchain = Blockchains.EOS, contract = '', symbol = '', name = null, decimals = null){
		this.blockchain = blockchain;
		this.contract = contract;
		this.symbol = symbol;
		this.name = name ? name : symbol;
		this.decimals = decimals;
	}

	static placeholder(){ return new Token(); }
	static fromJson(json){ return Object.assign(this.placeholder(), json); }
}