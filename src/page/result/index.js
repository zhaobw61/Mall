/*
 * @Author: zhaobowen 
 * @Date: 2018-08-19 19:38:52 
 * @Last Modified by: zhaobowen
 * @Last Modified time: 2018-08-19 20:41:48
 */
'use strict'
require('./index.css');
require('page/common/nav-simple/index.js');

var _mm = require('util/mm.js');

$(function(){
    console.log('asd');
        
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})