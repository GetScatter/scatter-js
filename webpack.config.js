const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        entry: __dirname + '/src/scatter.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scatter.min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": [["env", {
                        targets: { "node": true }
                    }], "stage-3"],
                    "plugins": [
                        "transform-runtime"
                    ]
                }
            }
        ]
    },
    plugins:[
        new UglifyJsPlugin()
    ],
    devtool:"source-map"
}