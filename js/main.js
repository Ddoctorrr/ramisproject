// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
  // Dynamically import modules
  const { initializeMobileMenu, updateCopyrightYear } = await import('./utils.js');
  const { initializeNewsletter } = await import('./newsletter.js');
  const { initializeSpaceScene } = await import('./space.js');
  const { initializeScroll } = await import('./scroll.js');
  
  // Initialize components
  initializeMobileMenu();
  initializeNewsletter();
  updateCopyrightYear();
  initializeSpaceScene();
  initializeScroll();
});