var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'bin'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};