// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Tab navigation for Portfolio
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(tc => tc.style.display = 'none');
    document.getElementById(btn.dataset.tab).style.display = 'block';
  });
});

// Animate on scroll (fade-in) – optional for lively look
const revealElements = document.querySelectorAll('section, .timeline-card, .skills-icons .skill');
const animateOnScroll = () => {
  const scrollY = window.scrollY + window.innerHeight;
  revealElements.forEach(el => {
    if (scrollY > el.offsetTop + 30) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.6s, transform 0.6s";
  });
  animateOnScroll();
});

// Contact Form Demo
document.querySelector('.contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
  this.reset();
});
