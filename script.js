// script.js
function addHeart() {
    const heart = document.createElement('div');
    heart.innerText = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animation = 'fall 5s linear';
    document.body.appendChild(heart);

    // Set random size for each heart
    heart.style.fontSize = Math.random() * (30 - 14) + 14 + 'px';

    // Remove heart after it falls
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(addHeart, 300);

// CSS for animation
const styleElement = document.createElement('style');
styleElement.innerHTML = `
@keyframes fall {
    0% { top: -50px; }
    100% { top: 100vh; }
}`;
document.head.appendChild(styleElement);
