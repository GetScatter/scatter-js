import {Blockchains} from './Blockchains';
import Token from "./Token";

export default class Network {
    constructor(_name = '', _protocol = 'https', _host = '', _port = 0, blockchain = Blockchains.EOS, chainId = ''){
        this.name = _name;
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;
        this.blockchain = blockchain;
        this.chainId = chainId.toString();

        this.token = null;
    }

    static placeholder(){ return new Network(); }

    static fromJson(json){
        const p = Object.assign(Network.placeholder(), json);
        p.chainId = p.chainId ? p.chainId.toString() : '';
	    p.token = json.hasOwnProperty('token') && json.token ? Token.fromJson(json.token) : null;
        return p;
    }

    fullhost(){ return `${this.protocol}://${this.host}${this.port ? ':' : ''}${this.port}` }
	unique(){ return (`${this.blockchain}:` + (this.chainId.length ? `chain:${this.chainId}` : `${this.host}:${this.port}`)).toLowerCase(); }
}