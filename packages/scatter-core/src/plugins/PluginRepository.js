import * as PluginTypes from './PluginTypes';

/***
 * Setting up for plugin based generators,
 * this will add more blockchain compatibility in the future.
 */

class PluginRepositorySingleton {

    constructor() {
        this.plugins = [];
    }

    loadPlugin(plugin) {
        const hasPlugin = !!this.plugin(plugin.name);
        if (!hasPlugin) {
            this.plugins.push(plugin);
        }
    }

    signatureProviders() {
        return this.plugins.filter(plugin => plugin.type === PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    supportedBlockchains() {
        return this.signatureProviders().map(plugin => name)
    }

    plugin(name) {
        return this.plugins.find(plugin => plugin.name === name);
    }

    async endorsedNetworks() {
        return await Promise.all(this.signatureProviders().map(async plugin => await plugin.getEndorsedNetwork()));
    }
}

const PluginRepository = new PluginRepositorySingleton();
export default PluginRepository;