$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Networks and Systems", "Maintenance"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay)
    } else {
        // erase 
        setTimeout(erase, typingDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingDelay)
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, typingDelay + 250);
})

// particles.js
particles.js.load('particles.js', 'paticles.json', function () {
    console.log('paticles.json loaded')
})