const test = '';

const origin = location.hostname;

let returnResult;

const PANELS = {
	Selector:'select',
	Email:'email',
};

const showPanel = panel => {
	const visiblePanels = [...document.getElementById('ScatterLoginPopup').getElementsByClassName('panel')].filter(x => ![...x.classList].includes('hidden'));
	visiblePanels[0].classList.add('hidden');
	document.getElementById(`Scatter${panel}`).classList.remove("hidden");
	console.log('visi', visiblePanels);

	// document.getElementsByClassName('panel').map(x => {
	// 	console.log('x', x);
	// })
};

const emailLogin = () => {
	// TODO: Change me, this isn't a secure way of doing this.
	const email = document.getElementById('ScatterInputEmail').value.trim();
	const pass = document.getElementById('ScatterInputPass').value.trim();
	returnResult(email, pass);
};

const login = (returner) => {
	returnResult = returner;

	return `
<section id="ScatterLoginPopup" class="popup">
	<section class="pop-out-head">
		<figure class="logo">Scatter</figure>
		<figure class="close icon-cancel">
			<div></div>
			<div></div>
		</figure>
	</section>
	
	<section class="action-info">
		<figure class="origin" :title="${origin}">${origin}</figure>
		<figure class="action">
			<b>login</b>
		</figure>
	</section>
	
	<section id="Scatter${PANELS.Selector}" class="panel">
		<button onclick="showPanel(PANELS.Email)">Login with Email</button>
	</section>
	
	<section id="Scatter${PANELS.Email}" class="panel hidden">
		<input id="ScatterInputEmail" placeholder="email" />
		<input id="ScatterInputPass" placeholder="password" type="password" />
		<button onclick="emailLogin()">Login</button>
	</section>
</section>

`
}

// TODO: TESTING ONLY
// window.login = login;

export default login;
