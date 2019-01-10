const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const getPackagePath = x => `./packages/${x}/src/index.js`;

const packageFiles = [
	'core',
	'plugin-eosjs',
	'plugin-eosjs2',
	'plugin-web3',
	'plugin-tron',
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
		// new UglifyJsPlugin()
	],
	stats: { colors: true },
	// devtool: false,
	devtool: 'inline-source-map',
	externals: {
		'scatterjs-core': 'ScatterJS'
	}
}