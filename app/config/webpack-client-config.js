const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack-base-config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
    entry: [ 'babel-polyfill', path.join(__dirname, '../src/entry-client.js') ],
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new VueSSRClientPlugin()
    ]
})