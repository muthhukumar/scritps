// ==UserScript==
// @name         Auto Scroll Every 35 seconds
// @namespace    https://github.com/muthhukumar/scripts
// @version      1.1
// @description  Smoothly scrolls 35% of the screen every 35000 seconds
// @author       Muthukumar P
// @match        *://*/*
// @grant        none
// @downloadURL  https://github.com/muthhukumar/scritps/raw/refs/heads/main/auto-scroll.user.js
// @updateURL    https://github.com/muthhukumar/scritps/raw/refs/heads/main/auto-scroll.user.js
// ==/UserScript==

(function scrollPage() {
    let scrollInterval = setInterval(() => {
        let scrollAmount = window.innerHeight * 0.35;
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });
        }
    }, 35000);
})();
