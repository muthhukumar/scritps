// ==UserScript==
// @name         Auto Scroll Every 30 seconds
// @namespace    https://github.com/muthhukumar/scripts
// @version      1.5
// @description  Smoothly scrolls 35% of the screen every 35000 seconds
// @author       Muthukumar P
// @match        *://*/*
// @grant        none
// @downloadURL  https://github.com/muthhukumar/scritps/raw/refs/heads/main/auto-scroll.user.js
// @updateURL    https://github.com/muthhukumar/scritps/raw/refs/heads/main/auto-scroll.user.js
// ==/UserScript==

(function scrollPage() {
    let scrollPercentage = 0.48;
    let userScrollFactor = 0.3;
    let scrollIntervalTime = 45000;
    let userTimeFactor = 0.5;

    function startScrolling(scrollAmount, interval) {
        let intervalId = setInterval(() => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                clearInterval(intervalId);
            } else {
                window.scrollBy({ top: window.innerHeight * scrollAmount, left: 0, behavior: "smooth" });
            }
        }, interval);
    }

    let actualScrollAmount = scrollPercentage;
    let actualScrollTime = scrollIntervalTime;

    let userScrollAmount = actualScrollAmount * userScrollFactor;
    let userScrollTime = actualScrollTime * userTimeFactor;

    startScrolling(actualScrollAmount, actualScrollTime);
    startScrolling(userScrollAmount, userScrollTime);
})();
