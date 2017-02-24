// ==UserScript==
// @name         精简知乎日报页面
// @version      0.2
// @description  移除无用信息。
// @author       fn
// @require      https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js
// @include      *daily.zhihu.com*
// ==/UserScript==

(function() {
    'use strict';

    //移除头部
    var header = $("div.header").remove();
    //移除横幅广告
    var download = $("div.download").remove();
    //移除查看更多
    var read_more = $("a.read-more").remove();
    //移除详情页顶部下载按钮
    var buttons = $("a.button").remove();
    //移除详情页这篇文章有意思吗？
    var question = $("div.question:last").remove();
    //移除详情页二维码
    var qr = $("div.qr").remove();

    console.log("知乎日报精简完成");
})();