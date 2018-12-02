const test = '';

const origin = location.hostname;

const login = () => `
<section class="popup">
	<section class="pop-out-head">
		<figure class="logo">Scatter</figure>
		<figure class="close icon-cancel"></figure>
	</section>
	
	<section class="action-info">
		<figure class="origin" :title="${origin}">${origin}</figure>
		<figure class="action">
			<b>login</b>
		</figure>
	</section>
	
	<section class="panel">
	
	</section>
</section>
`

// export default login;
window.login = login;