// ==UserScript==
// @name         google-search-result-helper
// @namespace    https://github.com/nhosoya
// @version      0.2.2
// @description  Shortcut(j, k, /) for Google search result
// @author       nhosoya
// @match        https://www.google.co.jp/search?*
// @require      https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/Caret.js/0.3.1/jquery.caret.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let focusSearchBox = function() {
        let searchBox = $('#lst-ib');
        var temp = searchBox.val();
        searchBox.focus();
        searchBox.val('');
        searchBox.val(temp);
        return false;
    };

    var i = -1;
    var resultLinks = $('.g .r a:not(".l")');

    let focusNextLink = function() {
        i++;
        validateIndex();
        resultLinks[i].focus();
        return false;
    };

    let focusPreviousLink = function() {
        i--;
        validateIndex();
        resultLinks[i].focus();
        return false;
    };

    let validateIndex = function() {
        i = Math.max(i, 0);
        i = Math.min(i, resultLinks.length - 1);
    };

    key('/', focusSearchBox);
    key('j', focusNextLink);
    key('k', focusPreviousLink);
})();
