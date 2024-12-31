import { technologies } from './data.js';
import { createTechnologyModal } from './components/TechnologyModal.js';

export function initializeModals() {
  const modal = document.getElementById('techModal');
  const modalContent = document.getElementById('modalContent');

  document.addEventListener('click', (e) => {
    const techCard = e.target.closest('.tech-card');
    if (techCard) {
      const techId = techCard.dataset.techId;
      const technology = technologies.find(t => t.id === techId);
      
      if (technology) {
        modalContent.innerHTML = createTechnologyModal(technology);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
      }
    }

    if (e.target.matches('.modal, .close-button')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}