import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import * as PluginTypes from "../plugins/PluginTypes";
import SocketService from "../services/SocketService";
import {EVENTS, WALLET_METHODS} from "../index";
import LocalSocket from "./LocalSocket";



const WEB_HOST = `http://localhost:8081`;
const SOCKET_HOST = `localhost:50005`;

export default class RelaySocket extends Plugin {
	constructor(context, holderFns){
		super('RelaySocket', PluginTypes.WALLET_SUPPORT);
		this.name = 'RelaySocket';
		this.context = context;
		this.holderFns = holderFns;
	}

	connect(pluginName, options = {}){
		return new Promise(async resolve => {
			if(!pluginName || !pluginName.length) throw new Error("You must specify a name for this connection");
			options = Object.assign({initTimeout:1000, linkTimeout:3000}, options);

			const uuid = await fetch(`${WEB_HOST}/app/connect`).then(x => x.json());
			if(!uuid) return resolve(false);

			// Tries to set up LocalSocket Connection
			this.socketService = new SocketService(pluginName, options.linkTimeout);
			this.socketService.link(uuid, SOCKET_HOST).then(async authenticated => {
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
		return LocalSocket.getMethods(this);
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