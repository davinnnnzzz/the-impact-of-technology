// Initialize AOS
AOS.init({
    once: true, // Animasi hanya berjalan sekali
    duration: 800, // Durasi animasi 800ms
    offset: 100, // Memicu animasi 100px sebelum elemen terlihat
    easing: 'ease-out-cubic',
});

// GSAP Marquee Scroll Animation
window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    const marqueeWrapper = document.querySelector('.marquee-wrapper');
    const marqueeElements = document.querySelectorAll('.marquee');
    
    let scrollTween = gsap.to(marqueeElements, {
        xPercent: -100,
        repeat: -1,
        duration: 40,
        ease: "linear"
    }).totalProgress(0.5);

    gsap.set(marqueeWrapper, {x: 0});

    let skew = 0;
    
    ScrollTrigger.create({
        trigger: ".marquee-container",
        start: "top bottom",
        end: "bottom top",
        onUpdate: self => {
            const newSkew = self.getVelocity() / -300;
            
            if(Math.abs(newSkew - skew) > 0.1) {
                skew = newSkew;
                gsap.to(marqueeWrapper, {
                    skewX: skew,
                    overwrite: true,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

// On page load, check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
    darkModeToggle.checked = true;
} else {
    html.classList.remove('dark');
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
});
