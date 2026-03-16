// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Update cursor position
window.addEventListener('mousemove', (e) => {
    // We use setTimeout/requestAnimationFrame for smoothness
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    
    // Outline follows with slight delay naturally via CSS transition, but we set location immediately
    cursorOutline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 100, fill: "forwards" });
});

// Cursor hover effect on interactive elements
const interactives = document.querySelectorAll('a, button, .project-card, input, textarea');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation via Intersection Observer
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // when to reveal

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();

// Smooth scroll for nav links (fallback / cleaner native handling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
