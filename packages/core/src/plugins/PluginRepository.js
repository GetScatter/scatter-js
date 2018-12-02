import * as PluginTypes from './PluginTypes';

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor(){
        this.plugins = [];
    }

    loadPlugin(plugin){
		if(!this.plugin(plugin.name))
			this.plugins.push(plugin);
	}

    plugin(name){
        return this.plugins.find(plugin => plugin.name === name);
    }
}

const PluginRepository = new PluginRepositorySingleton();
export default PluginRepository;