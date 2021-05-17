// ==UserScript==
// @name         show password
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  鼠标移入password展示text
// @author       fn
// @include      *
// ==/UserScript==

(function() {
    'use strict';

    let inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        if(input.type == 'password'){
            input.onmouseenter = function() {
                this.type = 'text';
            }
            input.onmouseleave = function() {
                this.type = 'password';
            }
        }
    }
})();
