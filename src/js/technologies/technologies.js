import { technologies } from './data.js';
import { createTechnologyCard } from './components/TechnologyCard.js';

export function renderTechnologies() {
  const technologiesGrid = document.getElementById('technologiesGrid');
  if (!technologiesGrid) return;

  technologiesGrid.innerHTML = technologies
    .map(tech => createTechnologyCard(tech))
    .join('');
}