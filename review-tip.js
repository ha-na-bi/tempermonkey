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
    GM_addStyle('#toast-container>div{width: 400px; padding: 15px 10px 0 15px;}');
    GM_addStyle('#toast-container>.toast-info{background-image: none !important;}');
    GM_addStyle('.toast-info{background-color: black !important;}');
    GM_addStyle('.toast-progress{background-color: red !important;}');

    // 初始化 markdown 转换组件
    let converter = new showdown.Converter();

    // 初始化 toastr 组件的配置
    toastr.options.timeOut = 10*1000; //默认的超时时间
    toastr.options.progressBar = true; //进度条
    toastr.options.positionClass = "toast-bottom-right"; //出现位置

    // 要提示的内容，如何从网络获取特定的文本？
    let messages = [
        {
            "title": "恢复点目标（Recovery Point Objective, RPO）",
            "content": "RPO 定义了在发生中断后可容忍的数据丢失量，以时间为单位来衡量。它回答了这样一个问题：“在灾难发生时，企业可以容忍丢失多长时间的数据？”\
                        例如，如果一个公司设定了一个 4 小时的 RPO，那么这意味着它必须至少每 4 小时备份一次数据，以确保在发生灾难时最多只丢失 4 小时的数据。"
        },
        {
            "title": "恢复时间目标（Recovery Time Objective, RTO）",
            "content": "RTO 是指从业务中断发生到服务恢复到可接受水平所需的最大时间。它回答了这样一个问题：“企业需要多长时间才能恢复其关键业务功能？”\
                        例如，如果一个公司设定了一个 24 小时的 RTO，那么在灾难发生后，它有 24 小时的时间来恢复其关键系统和服务。"
        }
    ];

    function showMessage(target) {
        let item = messages[target];
        let text = converter.makeHtml(item.content);
        toastr.info(text, item.title)
    }

    showMessage(getRandomInt(0, messages.length));

    // --辅助方法--
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})();
