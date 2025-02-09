// ==UserScript==
// @name         Auto Scroll Every 5s
// @namespace    https://github.com/muthhukumar/scripts
// @version      1.0
// @description  Smoothly scrolls 35% of the screen every 35000 seconds
// @author       Your Name
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/muthhukumar/scripts/main/auto-scroll.user.js
// @updateURL    https://raw.githubusercontent.com/muthhukumar/scripts/main/auto-scroll.user.js
// ==/UserScript==

(function scrollPage() {
    let scrollInterval = setInterval(() => {
        let scrollAmount = window.innerHeight * 0.35; /
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });
        }
    }, 35000); 
})();
