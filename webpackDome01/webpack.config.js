var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.join(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'app');
var BUILD_PATH = path.join(ROOT_PATH, 'build');
var webConfig = require('./app/Config');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js,还可以每个页面打包成单独的js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    externals: {
        'jquery': '$'
    },
    module: {
       rules: [
           {
               test:/\.scss/,
               use:[
                   {loader:'style-loader'},
                   {loader:'css-loader'},
                   {loader:'sass-loader'}
               ],
               include: APP_PATH
           },
           {
               test: /\.(png|jpg)$/,
               loaders: 'url-loader?limit=40000'//limit图片大小限制
           },
           {
               test: /\.jsx?$/,
               loader: 'babel-loader',
               include: APP_PATH,
               query: {
                   presets: ['es2015']
               }
           }
       ]
    },
    devServer: {//服务代理
        port: webConfig.port,
        host: webConfig.getIP(),
        proxy: webConfig.getAgent(),
        disableHostCheck: true
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ]
};