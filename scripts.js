// Responsive navigation menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ScrollReveal animations
ScrollReveal().reveal('.header__container', { delay: 200, origin: 'top', distance: '30px' });
ScrollReveal().reveal('.about__container', { delay: 200, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.room__container', { delay: 300, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.service__container', { delay: 400, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.footer__container', { delay: 500, origin: 'bottom', distance: '30px' });

// Form validation (simple example)
document.querySelector('.contactForm1 form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission for demonstration
  alert("Form submitted!");
  // Implement actual form submission logic here
});

// Hide mobile menu on link click (optional for single-page sites)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
