import { articles } from './data/articles.js';
import { createArticleCard } from './components/ArticleCard.js';
import { createCategoryFilter } from './components/CategoryFilter.js';
import { filterArticles, getUniqueCategories } from './utils/filters.js';

class NewsManager {
  constructor() {
    this.currentCategory = 'all';
    this.currentSearchTerm = '';
    this.categories = getUniqueCategories(articles);
    
    this.initializeComponents();
    this.attachEventListeners();
    this.renderArticles();
  }

  initializeComponents() {
    // Initialize filters
    const filtersContainer = document.getElementById('categoryFilters');
    filtersContainer.innerHTML = createCategoryFilter(this.categories, this.currentCategory);
  }

  attachEventListeners() {
    // Search input handler
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.currentSearchTerm = e.target.value;
      this.renderArticles();
    });

    // Category filter handler
    const filtersContainer = document.getElementById('categoryFilters');
    filtersContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('category-btn')) {
        this.currentCategory = e.target.dataset.category;
        document.querySelectorAll('.category-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
        });
        this.renderArticles();
      }
    });
  }

  renderArticles() {
    const filteredArticles = filterArticles(articles, {
      category: this.currentCategory,
      searchTerm: this.currentSearchTerm
    });
    
    const articlesGrid = document.getElementById('articlesGrid');
    articlesGrid.innerHTML = filteredArticles
      .map(article => createArticleCard(article))
      .join('');
    
    // Add click handlers to cards
    document.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = `article.html?id=${card.dataset.id}`;
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NewsManager();
});