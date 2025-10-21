// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
    darkModeToggle.checked = true;
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

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const fadeIns = document.querySelectorAll('.fade-in');
fadeIns.forEach(el => observer.observe(el));