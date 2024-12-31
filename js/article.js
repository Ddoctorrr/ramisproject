import { articles } from './data/articles.js';

class ArticleManager {
  constructor() {
    this.initializeArticle();
  }

  initializeArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    const article = articles.find(a => a.id === parseInt(articleId));
    if (!article) {
      window.location.href = '/news.html';
      return;
    }

    this.renderArticle(article);
    this.renderAuthor(article.author);
    this.renderRelatedArticles(article);
  }

  renderArticle(article) {
    const articleContent = document.getElementById('articleContent');
    articleContent.innerHTML = `
      <header class="article-header">
        <span class="article-category">${article.category}</span>
        <h1 class="article-title">${article.title}</h1>
        <div class="article-meta">
          <span>${article.author}</span>
          <span>${new Date(article.date).toLocaleDateString()}</span>
          <span>${article.readTime} min read</span>
        </div>
      </header>
      <img src="${article.image}" alt="${article.title}" class="article-image">
      <div class="article-body">${article.content || article.excerpt}</div>
    `;
  }

  renderAuthor(author) {
    if (!author) return;
    
    const authorSection = document.getElementById('authorSection');
    authorSection.innerHTML = `
      <div class="author-content">
        <img src="${author.image}" alt="${author.name}" class="author-image">
        <div class="author-info">
          <h3>${author.name}</h3>
          <p>${author.bio}</p>
          <div class="author-social">
            ${author.social ? `
              <a href="${author.social.twitter}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="twitter"></i>
              </a>
              <a href="${author.social.linkedin}" target="_blank" rel="noopener noreferrer">
                <i data-lucide="linkedin"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    lucide.createIcons();
  }

  renderRelatedArticles(currentArticle) {
    const relatedArticles = articles
      .filter(article => 
        article.id !== currentArticle.id && 
        article.category === currentArticle.category
      )
      .slice(0, 3);

    const relatedGrid = document.getElementById('relatedArticles');
    relatedGrid.innerHTML = relatedArticles.map(article => `
      <a href="article.html?id=${article.id}" class="related-card">
        <div class="related-image">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="related-content">
          <h3 class="related-title">${article.title}</h3>
          <p class="related-excerpt">${article.excerpt}</p>
          <div class="related-meta">
            <span>${article.author}</span>
            <span>${new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </a>
    `).join('');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ArticleManager();
});