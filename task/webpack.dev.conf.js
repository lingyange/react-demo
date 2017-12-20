var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var merge = require('webpack-merge');
var config = require('./webpack.base.conf.js');

module.exports = merge(config, {
    output:{
        publicPath:'/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../build/"),
        compress: true,
        //host:'192.168.1.133',
        hot: true,
        quiet: true,
        port: 9000,
        open: true
    },
    // cheap-module-eval-source-map is faster for development
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});