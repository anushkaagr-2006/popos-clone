// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Check on initial load

// Particle Background Effect
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Dynamic Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;
    
    const statsSection = document.querySelector('.stats-section');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        statsAnimated = true;
        stats.forEach(stat => {
            const target = stat.innerText;
            let current = 0;
            const increment = 1;
            const timer = setInterval(() => {
                if (target.includes('M+')) {
                    current += 50000;
                    if (current >= 1000000) {
                        stat.innerText = '1M+';
                        clearInterval(timer);
                    } else {
                        stat.innerText = Math.floor(current / 1000) + 'K+';
                    }
                } else if (target.includes('K+')) {
                    current += 1000;
                    if (current >= 50000) {
                        stat.innerText = '50K+';
                        clearInterval(timer);
                    } else {
                        stat.innerText = Math.floor(current / 1000) + 'K+';
                    }
                } else if (target.includes('%')) {
                    current += 1;
                    if (current >= 99) {
                        stat.innerText = '99.9%';
                        clearInterval(timer);
                    } else {
                        stat.innerText = current + '%';
                    }
                } else {
                    stat.innerText = '24/7';
                    clearInterval(timer);
                }
            }, 20);
        });
    }
};

window.addEventListener('scroll', animateStats);

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = -scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
});

// Type writer effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero h1');
const text = heroTitle.innerText;
heroTitle.innerText = '';
let charIndex = 0;

const typeWriter = () => {
    if (charIndex < text.length) {
        heroTitle.innerText += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
};

// Start typewriter after loader hides
setTimeout(typeWriter, 1500);

// Console Easter Egg
console.log('%c🚀 Welcome to Pop!_OS Website Clone!', 'color: #63B3ED; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion for modern web development', 'color: #48E5C2; font-size: 14px;');
console.log('%c⚡ Performance First | 🎨 Beautiful Design | 🔒 Privacy Focused', 'color: #FAA41A; font-size: 12px;');