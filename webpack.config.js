/*
 * @Author: zhaobowen 
 * @Date: 2018-08-11 14:58:11 
 * @Last Modified by: zhaobowen
 * @Last Modified time: 2018-08-19 20:00:03
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var outputPath = path.resolve(__dirname, './dist');

// 环境变量的配置， dev/online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// 获取 html-webpack-plugin参数的方法
var getHtmlConfig = function(name,title){
    return {
        template:'./src/view/'+name+'.html',
        filename:'view/'+name+'.html',
        title   :title,
        inject  :true,
        hash    :true,
        chunks  :['common',name] // 这里可以为不同的页面搭配不同的js
    }
}

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
        'result': ['./src/page/result/index.js'],
    },
    output: {
        path: outputPath,
        publicPath:'/dist',
        filename: 'js/[name].js'
    },
    module:{
        loaders:[
            {test: /\.css$/,loader:ExtractTextPlugin.extract ("style-loader","css-loader")},
            {test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },,
            {test: /\.string$/, loader: 'html-loader'}
        ],
    },
    resolve:{ // 为什么这么做？
        alias:{
            node_modules    :__dirname + '/node_modules',
            util            :__dirname + '/src/util',
            page            :__dirname + '/src/page',
            service         :__dirname + '/src/service',
            image           :__dirname + '/src/image',
        }
    },
    plugins: [
        // 独立通用模块到dist/js/base.js  如果有多个独立通用的模块怎么办？
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html 模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
        new HtmlWebpackPlugin(getHtmlConfig('login','用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('result','操作结果')),
    ],
}

if(WEBPACK_ENV === 'dev'){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;