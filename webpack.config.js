/*
 * @Author: zhaobowen 
 * @Date: 2018-08-11 14:58:11 
 * @Last Modified by: zhaobowen
 * @Last Modified time: 2018-08-11 22:22:33
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var outputPath = path.resolve(__dirname, './dist')
// 获取 html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
    return {
        template:'./src/view/'+name+'.html',
        filename:'view/'+name+'.html',
        inject  : true,
        hash    :true,
        chunks  :['common',name]
    }
}

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        path: outputPath,
        filename: 'js/[name].js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:ExtractTextPlugin.extract ("style-loader","css-loader")}
        ],
    },
    plugins: [
        // 独立通用模块到dist/js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html 模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
    ],
}
module.exports = config;