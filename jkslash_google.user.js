// ==UserScript==
// @name         JKSlash Google
// @namespace    https://github.com/nhosoya
// @version      0.1
// @description  Shortcut(j, k, /) for Google Search Result
// @author       nhosoya
// @match        https://www.google.co.jp/search?q=*
// @require      https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/Caret.js/0.3.1/jquery.caret.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let shortcutSlash = function() {
        let searchBox = $('#lst-ib');
        searchBox.focus();
        searchBox.val(searchBox.val());
        return false;
    };

    var i = -1;

    let shortcutJ = function() {
        i++;
        if (i < 0) i = 0;
        $('.g .r a:not(".l")')[i].focus();
        return false;
    };

    let shortcutK = function() {
        i--;
        if (i < 0) i = 0;
        $('.g .r a:not(".l")')[i].focus();
        return false;
    };

    key('/', shortcutSlash);
    key('j', shortcutJ);
    key('k', shortcutK);
})();
