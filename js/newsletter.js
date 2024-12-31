// Newsletter functionality
export function initializeNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMessage = document.getElementById('newsletterMessage');

  if (!newsletterForm || !newsletterMessage) return;

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showMessage('Successfully subscribed!', 'success');
      newsletterForm.reset();
    } catch (error) {
      showMessage('Failed to subscribe. Please try again.', 'error');
    }
  });

  function showMessage(text, type) {
    newsletterMessage.textContent = text;
    newsletterMessage.className = `newsletter-message ${type}`;
    
    setTimeout(() => {
      newsletterMessage.className = 'newsletter-message';
    }, 3000);
  }
}