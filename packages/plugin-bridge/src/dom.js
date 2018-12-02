import login from './html/login.html';
import css from './css/bridge.css.js';

export default class DOM {

	static injectCss(){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	static loginPopup(){
		document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', login());
	}

}