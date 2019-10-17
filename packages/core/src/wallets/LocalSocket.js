import Plugin from "../plugins/Plugin";
import * as PluginTypes from "../plugins/PluginTypes";
import SocketService from "../services/SocketService";
import {EVENTS} from "../index";
import WalletAPI from "./WalletAPI";


export default class LocalSocket extends Plugin {
	constructor(context, holderFns){
		super('LocalSocket', PluginTypes.WALLET_SUPPORT);
		this.name = 'LocalSocket';
		this.context = context;
		this.holderFns = holderFns;
	}

	connect(pluginName, options = {}){
		return new Promise(resolve => {
			if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
			options = Object.assign({linkTimeout:3000, allowHttp:true}, options);

			// Tries to set up LocalSocket Connection
			this.socketService = new SocketService(pluginName, options.linkTimeout);
			this.socketService.link(options.allowHttp).then(async authenticated => {
				if(!authenticated) return resolve(false);
				this.holderFns.get().isExtension = false;
				if(!this.holderFns.get().wallet) this.holderFns.get().wallet = this.name;
				return resolve(this.socketService);
			});
		})
	}

	async runAfterInterfacing(){
		this.holderFns.get().addEventHandler((t,x) => this.eventHandler(t,x), 'internal');
		this.holderFns.get().identity = await this.holderFns.get().getIdentityFromPermissions();
		return true;
	}

	methods(){
		return WalletAPI.getMethods(this, this.socketService);
	}

	async eventHandler(event, payload){
		switch(event){
			case EVENTS.Disconnected:
				this.holderFns.get().identity = null;
				break;
			case EVENTS.LoggedOut:
				this.holderFns.get().identity = await this.holderFns.get().getIdentityFromPermissions();
				break;
		}
	}
}
