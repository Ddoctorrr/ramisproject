// Hero carousel functionality
export function initializeHeroCarousel() {
  const heroCarousel = document.getElementById('heroCarousel');
  if (!heroCarousel) return;

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Sustainable Energy'
    },
    {
      url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Green Technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Renewable Future'
    }
  ];

  let currentImageIndex = 0;

  // Create and append images
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    img.className = index === 0 ? 'active' : '';
    heroCarousel.appendChild(img);
  });

  // Carousel rotation
  setInterval(() => {
    const imgs = heroCarousel.querySelectorAll('img');
    imgs[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgs[currentImageIndex].classList.add('active');
  }, 5000);
}