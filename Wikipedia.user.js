// ==UserScript==
// @name         Wikipedia
// @namespace    Wikipedia
// @version      0.1
// @description  Wikipedia
// @author       Arex
// @match        https://en.wikipedia.org/wiki/*
// @require      https://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var sidebar = $('div#mw-panel');
    var content = $('div#content');

// toggle_sidebar shows or hides the sidebar, updating the "show sidebar"
// button link text to match
    function toggle_sidebar() {
		sidebar.hide();
		content.css('margin-left', '0px');
}

// sidebar is hidden by default
    toggle_sidebar();
})();