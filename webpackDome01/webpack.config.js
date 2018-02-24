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
    //在模板页面引入的框架，全局变量
    externals: {
        'jquery': '$'
    },
    module: {
       rules: [
           {
               test:/\.scss/,
               use:[
                   // {loader:'style-loader'},
                   // {loader:'css-loader'},
                   // {loader:'sass-loader'}
                   //或者链式loader
                   'style-loader',
                   'css-loader',
                   'sass-loader'
               ],
               include: APP_PATH
           },
           {
               test: /\.(png|jpg|gif|ico)$/,
               loader: 'url-loader?limit=3000&name=img/[name].[ext]'
           },
           {
               test: /\.(eot|woff|woff2|ttf|svg)$/,
               loader: 'url-loader?limit=3000&name=fonts/[name].[ext]'
           },
           {
               test: /\.(mp3|wav|ogg)$/,
               loader: 'url-loader?limit=3000&name=audio/[name].[ext]'
           },
           {
               test: /\.(js|jsx)$/,
               loader: 'babel-loader',
               include: APP_PATH,
               query: {
                   presets: ['es2015']//, 'stage-0', 'react'
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
    //添加我们的插件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: './Template/index.html'
        })
    ]
};