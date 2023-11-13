// ==UserScript==
// @name         easyNext yt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  double-click left/right button to play next or previous video on youtube
// @author       wantvtre
// @match        https://www.youtube.com/*
// @match        https://www.youtube.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var contextMenuClickCount = 0;
    var leftClickButton = document.querySelector('.ytp-next-button.ytp-button');
    var rightClickButton = document.querySelector('.ytp-prev-button.ytp-button');

    function handleContextMenu(event) {
        // Prevent the default context menu behavior
        event.preventDefault();

        // Increment the contextMenuClickCount
        contextMenuClickCount++;

        // Check if it's a double right-click (contextmenu)
        if (contextMenuClickCount === 2) {
            // Trigger the button click
            rightClickButton.click();
        }
    }

    // Function to reset contextMenuClickCount every second
    function resetContextMenuClickCount() {
        setInterval(function() {
            contextMenuClickCount = 0;
        }, 1000);
    }

    // Start the interval to reset contextMenuClickCount
    resetContextMenuClickCount();

    document.addEventListener('dblclick', function(event) {
        // Trigger the button click when the document is clicked
        leftClickButton.click();
    });

    document.addEventListener('contextmenu', handleContextMenu);
})();

