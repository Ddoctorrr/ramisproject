import { renderTechnologies } from './technologies.js';
import { renderCaseStudies } from './caseStudies.js';
import { renderTestimonials } from './testimonials.js';
import { initializeModals } from './modals.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTechnologies();
  renderCaseStudies();
  renderTestimonials();
  initializeModals();
});