const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        entry: __dirname + '/src/scatter.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scatter.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}