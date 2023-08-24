// ==UserScript==
// @name         Auto Scroll Greasemonkey Script
// @namespace    http://your.namespace.com
// @version      1.0
// @description  Automatically scrolls the page by 500px on specific URLs
// @match        https://studentportal.nackademin.se/mod/(page|url)/view.php*
// ==/UserScript==

(function () {
  "use strict";

  // Function to scroll the page by a given amount of pixels
  function scrollPageBy(amount) {
    window.scrollBy(0, amount);
  }

  // Scroll the page by 500px when the page loads
  window.onload = function () {
    scrollPageBy(386);
  };
})();
