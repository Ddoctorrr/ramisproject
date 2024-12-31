// Category filter component
export function createCategoryFilter(categories, activeCategory) {
  return `
    <div class="category-filters">
      <button 
        class="category-btn ${activeCategory === 'all' ? 'active' : ''}" 
        data-category="all"
      >
        All
      </button>
      ${categories.map(category => `
        <button 
          class="category-btn ${activeCategory === category ? 'active' : ''}" 
          data-category="${category}"
        >
          ${category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      `).join('')}
    </div>
  `;
}