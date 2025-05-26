// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Testimonials carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto-advance carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const phoneInput = document.getElementById('phone');
    if (!isValidIndianPhone(phoneInput.value)) {
        e.preventDefault();
        phoneInput.classList.add('input-error');
        phoneInput.focus();
        alert('Please enter a valid 10-digit Indian mobile number. +91 is optional.');
        return false;
    } else {
        phoneInput.classList.remove('input-error');
    }
    setTimeout(() => {
        document.getElementById('successOverlay').classList.add('show');
        this.reset();
    }, 1000);
});

function closeSuccess() {
    document.getElementById('successOverlay').classList.remove('show');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.design-card, .testimonial-slide, .contact-feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Design cards hover effect is handled by CSS




// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navRight = document.querySelector('.nav-right');

menuToggle?.addEventListener('click', () => {
    navRight.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Close mobile menu on nav link click (for mobile UX)
document.querySelectorAll('.nav-link, .contact-btn').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navRight.classList.contains('show')) {
            navRight.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});

// Phone number validation for Indian numbers
function isValidIndianPhone(phone) {
    // Accepts: 9876543210, 09876543210, +919876543210, +91 9876543210, +91-9876543210
    const cleaned = phone.replace(/\s|-/g, '');
    return /^((\+91)?0?)?[6-9][0-9]{9}$/.test(cleaned);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced form validation
const formInputs = document.querySelectorAll('.form-input, .form-select');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});