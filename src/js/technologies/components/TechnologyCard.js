export function createTechnologyCard(tech) {
  return `
    <div class="tech-card" data-tech-id="${tech.id}">
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
        <button class="learn-more-btn">
          Learn More
          <i data-lucide="chevron-right"></i>
        </button>
      </div>
    </div>
  `;
}