// ==UserScript==
// @name         Auto Scroll Greasemonkey Script
// @namespace    https://github.com/henrikvilhelmberglund/
// @version      0.11
// @author       henrikvilhelmberglund
// @description  Automatically scrolls the page by 410px on specific URLs
// @match        https://studentportal.nackademin.se/mod/page/view.php*
// @match        https://studentportal.nackademin.se/mod/url/view.php*
// @match        https://studentportal.nackademin.se/course/view.php*
// @downloadURL  https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// @updateURL    https://raw.githubusercontent.com/henrikvilhelmberglund/tampermonkey-studentportal/main/studentportal.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Function to scroll a specific element by a given amount of pixels
  function scrollElementBy(element, amount) {
    element.scrollTop += amount;
  }

  // Function to replace YouTube links with embedded video players
  function embedYouTubeVideos() {
    let youtubeLinks = document.querySelectorAll('a[href*="youtube.com"]');

    youtubeLinks.forEach(function (link) {
      let videoId = link.href.match(/v=([^&]+)/)[1];
      if (videoId) {
        let embedCode =
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
          videoId +
          '" frameborder="0" allowfullscreen></iframe>';
        link.insertAdjacentHTML("afterend", embedCode);
        link.remove();
      }
    });
  }

  window.onload = function () {
    let targetElement = document.querySelector("#page");
    if (targetElement) {
      scrollElementBy(targetElement, 410);
    }
    embedYouTubeVideos();
  };
})();
