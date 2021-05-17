// ==UserScript==
// @name         review tip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  用于复习的个人提醒脚本
// @author       fn
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/toastr.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/showdown/1.9.1/showdown.min.js
// @resource toastrcss https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/toastr.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
    let toastrcss = GM_getResourceText('toastrcss');
    GM_addStyle(toastrcss);

    // 初始化 markdown 转换组件
    let converter = new showdown.Converter();

    // 初始化 toastr 组件的配置
    toastr.options.timeOut = 3000; //默认的超时时间
    toastr.options.progressBar = true; //进度条
    toastr.options.positionClass = "toast-bottom-right"; //出现位置

    // 要提示的内容，如何从网络获取特定的文本？
    let messages = [
        '信息**安全策略**的四大特性是<span style="color:orange">科学性</span>、<span style="color:orange">严肃性</span>、<span style="color:orange">非二义性</span>和<span style="color:orange">可操作性</span>。',
    ];

    function showMessage(target) {
        let text = converter.makeHtml(messages[target]);
        toastr.info(text)
    }

    showMessage(getRandomInt(0, messages.length));

    // --辅助方法--
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})();