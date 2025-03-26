// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logoImage = document.getElementById('logoImage');
const footerLogo = document.getElementById('footerLogo');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('light');
    logoImage.setAttribute('src', './assets/avatar-light.png');
    footerLogo.setAttribute('src', './assets/lift-detox.png');
  } else {
    body.classList.remove('light');
    logoImage.setAttribute('src', './assets/avatar.png');
    footerLogo.setAttribute('src', './assets/lift-detox.png');
  }
});

// CTA Button click handler
const ctaButton = document.getElementById('ctaButton');

ctaButton.addEventListener('click', () => {
  window.open('https://app.monetizze.com.br/r/ATH24021569', '_blank');
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'ctaButton' && !entry.target.classList.contains('pulse')) {
        entry.target.classList.add('pulse');
      }
    }
  });
}, observerOptions);

// Observe elements
observer.observe(document.getElementById('ctaButton'));