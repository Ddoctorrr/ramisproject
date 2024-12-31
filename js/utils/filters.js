// Filter utilities
export function filterArticles(articles, { category = 'all', searchTerm = '' }) {
  return articles.filter(article => {
    const matchesCategory = category === 'all' || article.category === category;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
}

export function getUniqueCategories(articles) {
  return [...new Set(articles.map(article => article.category))];
}