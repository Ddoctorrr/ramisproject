// Technology data
const technologies = [
  {
    icon: 'gauge',
    name: 'Eco-Optimizer 3000',
    description: 'Advanced oil processing system that reduces emissions by 40% while maintaining peak efficiency.',
    benefits: ['40% emission reduction', 'Enhanced processing speed', 'Real-time monitoring'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: {
      specifications: [
        'Processing capacity: 10,000 barrels per day',
        'Energy consumption: 30% less than traditional systems',
        'Emission control: Advanced catalytic converter',
        'Monitoring: AI-powered sensors with 24/7 data analysis'
      ],
      applications: [
        'Oil refineries',
        'Petrochemical plants',
        'Industrial processing facilities',
        'Large-scale manufacturing'
      ],
      maintenance: [
        'Automated self-diagnostic system',
        'Quarterly professional inspection',
        'Annual parts replacement',
        'Remote monitoring capabilities'
      ]
    }
  },
  // ... (other technology objects)
];

// Initialize technologies grid
function initializeTechnologies() {
  const technologiesGrid = document.getElementById('technologiesGrid');
  if (!technologiesGrid) return;

  technologies.forEach(tech => {
    const card = createTechnologyCard(tech);
    technologiesGrid.appendChild(card);
  });

  // Initialize modals after cards are created
  initializeModals();
}

// Create technology card
function createTechnologyCard(tech) {
  const card = document.createElement('div');
  card.className = 'tech-card';
  card.innerHTML = `
    <div class="tech-card-image">
      <img src="${tech.image}" alt="${tech.name}">
      <div class="tech-card-overlay"></div>
      <i data-lucide="${tech.icon}" class="tech-card-icon"></i>
    </div>
    <div class="tech-card-content">
      <h3>${tech.name}</h3>
      <div class="tech-card-line"></div>
      <p>${tech.description}</p>
      <div class="tech-benefits">
        ${tech.benefits.map(benefit => `
          <div class="tech-benefit">
            <i data-lucide="chevron-right"></i>
            <span>${benefit}</span>
          </div>
        `).join('')}
      </div>
      <button class="learn-more-btn" onclick="showTechDetails('${tech.name}')">
        Learn More
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;

  return card;
}

// Show technology details in modal
function showTechDetails(techName) {
  const tech = technologies.find(t => t.name === techName);
  if (!tech) return;

  const modal = document.getElementById('techModal');
  const modalContent = document.getElementById('modalContent');
  
  modalContent.innerHTML = `
    <div class="modal-header">
      <img src="${tech.image}" alt="${tech.name}">
      <i data-lucide="${tech.icon}" class="modal-icon"></i>
    </div>
    <div class="modal-body">
      <h3>${tech.name}</h3>
      <div class="modal-section">
        <h4>Overview</h4>
        <p>${tech.description}</p>
      </div>
      <div class="modal-section">
        <h4>Key Benefits</h4>
        <ul>
          ${tech.benefits.map(benefit => `
            <li>
              <i data-lucide="check"></i>
              <span>${benefit}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      ${tech.details ? `
        <div class="modal-section">
          <h4>Technical Specifications</h4>
          <ul>
            ${tech.details.specifications.map(spec => `
              <li>
                <i data-lucide="check"></i>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="modal-section">
          <h4>Applications</h4>
          <ul>
            ${tech.details.applications.map(app => `
              <li>
                <i data-lucide="check"></i>
                <span>${app}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="modal-section">
          <h4>Maintenance</h4>
          <ul>
            ${tech.details.maintenance.map(item => `
              <li>
                <i data-lucide="check"></i>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

// Initialize modals
function initializeModals() {
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-button');

  closeButtons.forEach((button, index) => {
    button.onclick = () => {
      modals[index].style.display = 'none';
      document.body.style.overflow = 'auto';
    };
  });

  window.onclick = (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeTechnologies();
  lucide.createIcons();
});