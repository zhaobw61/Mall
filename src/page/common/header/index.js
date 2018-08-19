/*
 * @Author: zhaobowen 
 * @Date: 2018-08-19 14:28:45 
 * @Last Modified by: zhaobowen
 * @Last Modified time: 2018-08-19 16:04:22
 */
'use strict';
require('./index.css')
var _mm = require('util/mm.js');
// 导航
var header = {
    init:function(){
        this.bindEvent();
        return this;
    },
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');  
        // keyword 存在 就回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent : function(){
        var _this = this;
        // 点击搜索按钮，就搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // 输入回车后 搜索提交
        $('#search-input').keyup(function(e){
            // 13 是回车键
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword.正常跳转到list页。
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }else{
            _mm.goHome();
        }
    }
};

header.init();