// Article card component
export function createArticleCard(article) {
  return `
    <div class="article-card" data-id="${article.id}">
      <div class="article-image">
        <img src="${article.image}" alt="${article.title}">
        <span class="article-category">${article.category}</span>
      </div>
      <div class="article-content">
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-meta">
          <div class="meta-left">
            <span class="author">${article.author}</span>
            <span class="date">${new Date(article.date).toLocaleDateString()}</span>
          </div>
          <span class="read-time">${article.readTime} min read</span>
        </div>
      </div>
    </div>
  `;
}