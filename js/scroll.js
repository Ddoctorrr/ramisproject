export function initializeScroll() {
  const scrollButton = document.getElementById('scrollButton');
  const technologiesSection = document.getElementById('technologiesSection');
  const sections = document.querySelectorAll('section');

  if (scrollButton && technologiesSection) {
    scrollButton.addEventListener('click', () => {
      technologiesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px) translateZ(0)`;
    }
  });
}