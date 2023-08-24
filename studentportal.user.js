// ==UserScript==
// @name         Auto Scroll Greasemonkey Script
// @namespace    https://github.com/henrikvilhelmberglund/
// @version      0.1
// @author       henrikvilhelmberglund
// @description  Automatically scrolls the page by 386px on specific URLs
// @match        https://studentportal.nackademin.se/mod/(page|url)/view.php*
// @downloadURL  https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// @updateURL    https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Function to scroll a specific element by a given amount of pixels
  function scrollElementBy(element, amount) {
    element.scrollTop += amount;
  }

  // Find the element you want to scroll (you might need to inspect the page's HTML to get the correct selector)
  var targetElement = document.querySelector("#page");

  // Scroll the target element by 386px when the page loads
  if (targetElement) {
    window.onload = function () {
      scrollElementBy(targetElement, 386);
    };
  }
})();
