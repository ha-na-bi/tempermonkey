// ==UserScript==
// @name         鼠标移入显示密码
// @version      0.1
// @description  鼠标移动到页面上的password密码框可以查看输入（临时改为text）
// @author       fn
// @require      https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js
// @include      *
// ==/UserScript==

(function () {
    //使用严格模式
    'use strict';

    //获取所有password
    var inputs = $("input[type=password]");

    //遍历添加mouseover和mouseout事件改变type
    inputs.map(function () {
        var ele = $(this);
        ele.mouseover(function () {
            this.type = 'text';
        }).mouseout(function () {
            this.type = 'password';
        });
    });
})();
