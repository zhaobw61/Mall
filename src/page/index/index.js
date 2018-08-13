/*
 * @Author: zhaobowen 
 * @Date: 2018-08-11 15:24:51 
 * @Last Modified by: zhaobowen
 * @Last Modified time: 2018-08-14 01:07:04
 */
'use strict'
require('./index.css');
var _mm = require('util/mm.js');
// _mm.request({ //跨域了 需要开代理服务器
//     url:'http://happymmall.com/product/list.do?keyword=1',
//     success:function(res){
//         console.log(res);
//     },
//     error:function(errorMsg){
//         console.log(errorMsg);
//     }
// })
// console.log(_mm.getUrlParam('test'));
var html = '<div>{{data}}</div>';
var data = {
    data:123
}
console.log(_mm.renderHtml(html,data));