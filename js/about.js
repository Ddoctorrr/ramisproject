document.addEventListener('DOMContentLoaded', function() {
  // Timeline Data
  const timelineData = [
    {
      date: '2020',
      title: 'Foundation',
      description: 'EcoTech Solutions was founded with a vision to revolutionize the oil industry through sustainable practices.'
    },
    {
      date: '2021',
      title: 'First Innovation',
      description: 'Launched our flagship Eco-Optimizer 3000, reducing emissions by 40% in oil processing.'
    },
    {
      date: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries and formed key partnerships with industry leaders.'
    },
    {
      date: '2023',
      title: 'Green Achievement',
      description: 'Received ISO 14001 certification for environmental management systems.'
    },
    {
      date: '2024',
      title: 'Future Forward',
      description: 'Launched new R&D center focused on next-generation sustainable technologies.'
    }
  ];

  // Team Data
  const teamData = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'With 15+ years in sustainable energy, Sarah leads our mission to transform the oil industry.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'David brings 20 years of experience in green tech innovation and environmental engineering.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Head of Sustainability',
      bio: 'Environmental scientist passionate about creating sustainable solutions for the energy sector.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  // Achievements Data
  const achievementsData = [
    {
      icon: 'shield',
      title: 'ISO 14001 Certified',
      description: 'Internationally recognized environmental management system certification.'
    },
    {
      icon: 'users',
      title: 'Industry Partnerships',
      description: 'Strategic alliances with leading energy and environmental organizations.'
    },
    {
      icon: 'award',
      title: 'Green Innovation Award',
      description: '2023 recipient of the Global Green Technology Innovation Award.'
    },
    {
      icon: 'zap',
      title: 'Energy Efficiency',
      description: 'Achieved 40% reduction in energy consumption across client operations.'
    }
  ];

  // Render Timeline
  const timeline = document.getElementById('timeline');
  timelineData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-description">${item.description}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });

  // Render Team
  const teamGrid = document.getElementById('teamGrid');
  teamData.forEach(member => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <div class="team-image">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p class="team-bio">${member.bio}</p>
        <div class="team-social">
          <a href="${member.social.linkedin}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="linkedin"></i>
          </a>
          <a href="${member.social.twitter}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="twitter"></i>
          </a>
        </div>
      </div>
    `;
    teamGrid.appendChild(teamCard);
  });

  // Render Achievements
  const achievementsGrid = document.getElementById('achievementsGrid');
  achievementsData.forEach(achievement => {
    const achievementCard = document.createElement('div');
    achievementCard.className = 'achievement-card';
    achievementCard.innerHTML = `
      <i data-lucide="${achievement.icon}"></i>
      <h3 class="achievement-title">${achievement.title}</h3>
      <p class="achievement-description">${achievement.description}</p>
    `;
    achievementsGrid.appendChild(achievementCard);
  });

  // Initialize Lucide icons for dynamically added elements
  lucide.createIcons();

  // Scroll animation for timeline items
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
});