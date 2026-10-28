


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// CAROUSEL
// =========================

const carousel = document.querySelector('.popular-products');
const cards = document.querySelectorAll('.showcase-card');
const dots = document.querySelectorAll('.carousel-dots span');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const index = Array.from(cards).indexOf(entry.target);

      dots.forEach((dot) => {
        dot.classList.remove('active');
      });

      dots[index].classList.add('active');
    }

  });

}, {
  root: carousel,
  threshold: 0.6
});

cards.forEach((card) => {
  observer.observe(card);
});

