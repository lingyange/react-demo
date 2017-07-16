var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname , "app/main.js")
    ],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        publicPath: '/static/'
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: ['react-hot-loader','babel-loader'] //loader的名称（必须）
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热模块替换插件
    ],
    // webpack-dev-server配置
    // devServer: {
    //     contentBase: path.join(__dirname, "build"), //'./build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器 ，应该在这里设置其所在目录（本例设置到"build"目录）
    //     colors: true, //在cmd终端中输出彩色日志
    //     historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    //     inline: true, //设置为true，当源文件改变时会自动刷新页面
    //     port: 8850, //设置默认监听端口，如果省略，默认为"8080"
    //     process: true, //显示合并代码进度
    //     publicPath: '/',
    //     hot: true,
    //     open: true
    // }
}