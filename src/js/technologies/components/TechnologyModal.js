export function createTechnologyModal(tech) {
  return `
    <div class="modal-header">
      <img src="${tech.image}" alt="${tech.name}">
      <i data-lucide="${tech.icon}" class="modal-icon"></i>
      <button class="close-button">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="modal-body">
      <h2>${tech.name}</h2>
      <div class="modal-section">
        <h3>Overview</h3>
        <p>${tech.description}</p>
      </div>
      <!-- Benefits Section -->
      <div class="modal-section">
        <h3>Key Benefits</h3>
        <div class="benefits-grid">
          ${tech.benefits.map(benefit => `
            <div class="benefit-item">
              <i data-lucide="check"></i>
              <span>${benefit}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${tech.details ? `
        <!-- Specifications Section -->
        <div class="modal-section">
          <h3>Technical Specifications</h3>
          <ul class="specs-list">
            ${tech.details.specifications.map(spec => `
              <li>
                <i data-lucide="arrow-right"></i>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <!-- Applications Section -->
        <div class="modal-section">
          <h3>Applications</h3>
          <div class="applications-grid">
            ${tech.details.applications.map(app => `
              <div class="application-item">
                <i data-lucide="arrow-right"></i>
                <span>${app}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <div class="modal-actions">
        <button class="close-button secondary">Close</button>
        <button class="request-demo primary">Request Demo</button>
      </div>
    </div>
  `;
}