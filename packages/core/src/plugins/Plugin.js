import * as PluginTypes from "./PluginTypes";

export default class Plugin {

    constructor(_name = '', _type = ''){
        this.name = _name;
        this.type = _type;
    }

    static placeholder(){ return new Plugin(); }
    static fromJson(json){ return Object.assign(Plugin.placeholder(), json); }

    isSignatureProvider(){
    	return this.type === PluginTypes.BLOCKCHAIN_SUPPORT;
	}

	isValid(){
    	return Object.keys(PluginTypes).map(x => PluginTypes[x]).includes(this.type);
	}

}