// Navbar scroll effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Create overlay
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
}

if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Subtle animations on scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section-title, .hero-content').forEach(el => {
    // observer.observe(el); 
});
