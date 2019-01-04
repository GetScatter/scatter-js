import login from './html/login.html.js';
import css from './css/bridge.css.js';



export default class DOM {

	static injectCss(){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	static loginPopup(origin, fields){
		console.log('lorigin', origin);
		return new Promise((resolve, reject) => {
			let win;

			const messageHandler = (e) => {
				if(!e.data.hasOwnProperty('type')) return;

				if(e.data.type === 'gimme') {
					return win.postMessage({type:'gimme', origin, fields}, '*');
				}

				if(e.data.type === 'token'){
					console.log('got token', e.data);
					window.removeEventListener('message', messageHandler);
					return resolve({token:e.data.token, identity:e.data.identity});
				}
			};

			window.addEventListener('message', messageHandler);
			win = window.open(`http://bridge.devx:8080/allow`, "Scatter Login", "height=500,width=400,menubar=0,toolbar=0");
			win.onbeforeunload = () => window.removeEventListener('message', messageHandler);
		})
	}

}