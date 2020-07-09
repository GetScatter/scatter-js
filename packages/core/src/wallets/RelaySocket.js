import Plugin from "../plugins/Plugin";
import {Blockchains} from "../models/Blockchains";
import * as PluginTypes from "../plugins/PluginTypes";
import SocketService from "../services/SocketService";
import {EVENTS, WALLET_METHODS} from "../index";
import LocalSocket from "./LocalSocket";
import device from '../util/Device';



const WEB_HOST = `https://relay.get-scatter.com:443`;
const SOCKET_HOST = `relaysock.get-scatter.com:443`;

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
			options = Object.assign({linkTimeout:3000, allowHttp:true}, options);

			const uuid = await fetch(`${WEB_HOST}/app/connect/${device}`).then(x => x.status === 200 ? x.json() : null);
			if(!uuid) return resolve(false);

			// Tries to set up LocalSocket Connection
			this.socketService = new SocketService(pluginName, options.linkTimeout);
			this.socketService.link(options.allowHttp, uuid, SOCKET_HOST).then(async authenticated => {
				if(!authenticated) return resolve(false);
				this.holderFns.get().isExtension = false;
				if(!this.holderFns.get().wallet) this.holderFns.get().wallet = this.name;
				return resolve(this.socketService);
			});
		})
	}

	async runAfterInterfacing(){
		// this.holderFns.get().addEventHandler((t,x) => this.eventHandler(t,x), 'internal');
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