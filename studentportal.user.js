// ==UserScript==
// @name         Auto Scroll Greasemonkey Script
// @namespace    https://github.com/henrikvilhelmberglund/
// @version      0.1
// @author       henrikvilhelmberglund
// @description  Automatically scrolls the page by 386px on specific URLs
// @match        https://studentportal.nackademin.se/mod/page/view.php*
// @require      file:///C:/Github/tampermonkey-scripts/tampermonkey-studentportal/studentportal.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Function to scroll a specific element by a given amount of pixels
  function scrollElementBy(element, amount) {
    element.scrollTop += amount;
  }

  // Function to handle the page's DOMContentLoaded event
  function onPageLoaded() {
    var targetElement = document.querySelector("#page");
    if (targetElement) {
      scrollElementBy(targetElement, 386);
    }
  }

  // Attach the handler to the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", onPageLoaded);
})();
