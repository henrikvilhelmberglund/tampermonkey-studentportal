// ==UserScript==
// @name         Auto Scroll Greasemonkey Script
// @namespace    https://github.com/henrikvilhelmberglund/
// @version      0.1
// @author       henrikvilhelmberglund
// @description  Automatically scrolls the page by 410px on specific URLs
// @match        https://studentportal.nackademin.se/mod/page/view.php*
// @match        https://studentportal.nackademin.se/mod/url/view.php*
// @downloadURL  https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// @updateURL    https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Function to scroll a specific element by a given amount of pixels
  function scrollElementBy(element, amount) {
    element.scrollTop += amount;
  }

  window.onload = function () {
    var targetElement = document.querySelector("#page");
    if (targetElement) {
      scrollElementBy(targetElement, 410);
    }
  };
})();
