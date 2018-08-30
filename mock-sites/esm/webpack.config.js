var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};