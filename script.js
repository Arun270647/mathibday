document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const aboutFloatingImages = document.querySelector('.floating-images');
    const celebrationBg = document.querySelector('.celebration-bg');

    // Hero Section Parallax (Subtle Zoom)
    const scrollYHero = window.scrollY;
    hero.style.backgroundSize = 100 + scrollYHero * 0.05 + '%';

    // About Section Floating Images (Basic Movement)
    if (aboutFloatingImages) {
        const scrollYAbout = window.scrollY - aboutFloatingImages.offsetTop + window.innerHeight * 0.5; // Adjust offset
        aboutFloatingImages.querySelectorAll('img').forEach((img, index) => {
            const speed = (index + 1) * 0.2; // Adjust speed for each image
            img.style.transform = `translateY(${scrollYAbout * speed}px) translateX(${scrollYAbout * speed * 0.1}px)`;
        });
    }

    // Celebration Section Parallax (Already handled by CSS background-attachment: fixed)
});

// JavaScript for Confetti (Optional - for Wishes Section)
function createConfetti() {
    const confettiContainer = document.querySelector('.floating-confetti');
    if (!confettiContainer) return;

    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    const numConfetti = 100;

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.animationDuration = `${Math.random() * 5 + 5}s`;
        confettiContainer.appendChild(confetti);
    }
}

createConfetti(); // Initialize confetti on page load