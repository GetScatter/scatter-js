const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const getPackagePath = x => `./packages/${x}/src/index.js`;

const packageFiles = [
	'core',
	'plugin-eosjs',
	'plugin-eosjs2',
	'plugin-fio',
	'plugin-web3',
	'plugin-tron',
	'plugin-lynx',
	'plugin-cyberway',
];

const entry = packageFiles.reduce((o, file) => Object.assign(o, {[`${file}.min.js`]: getPackagePath(file)}), {});


module.exports = {
	entry,
	output: {
		path: path.resolve(__dirname, './bundles'),
		filename: 'scatterjs-[name]'
	},
	resolve: {
		modules:[
			"node_modules"
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						],
						plugins:[
							'@babel/plugin-transform-runtime'
						]
					}
				},
				exclude: /node_modules/
			}
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner:(x) => {
				const packageName = x.filename.replace('scatterjs-', '').replace('.min.js', '');
				const version = require(`./packages/${packageName}/package.json`).version;
				return `
ScatterJS - ${packageName} v${version}
https://github.com/GetScatter/scatter-js/
Released under the MIT license.
				`;
			}
		}),
		// new UglifyJsPlugin()

	],
	stats: { colors: true },
	// devtool: false,
	devtool: 'inline-source-map',
	externals: {
		'@scatterjs/core': 'ScatterJS'
	}
}
