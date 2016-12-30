// ==UserScript==
// @name         精简知乎日报页面
// @version      0.1
// @description  移除无用信息。
// @author       fn
// @require      https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js
// @include      *daily.zhihu.com*
// ==/UserScript==

(function() {
    'use strict';

    //隐藏头部
    var header = $("div.header").css("display","none");
    //隐藏横幅广告
    var download = $("div.download").css("display","none");
    //隐藏查看更多
    var read_more = $("a.read-more").css("display","none");
    //隐藏详情页顶部下载按钮
    var buttons = $("a.button").css("display","none");
    //隐藏详情页这篇文章有意思吗？
    var question = $("div.question:last").css("display","none");
    //隐藏详情页二维码
    var qr = $("div.qr").css("display","none");

    console.log("hide success.");
})();
