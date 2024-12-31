```javascript
document.addEventListener('DOMContentLoaded', function() {
  const messagesList = document.getElementById('messagesList');
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const logoutBtn = document.getElementById('logoutBtn');
  const modal = document.getElementById('messageModal');
  const modalContent = document.getElementById('modalContent');
  const closeButton = document.querySelector('.close-button');

  let messages = [];

  // Fetch messages
  async function fetchMessages() {
    try {
      const response = await fetch('/api/admin/messages');
      const data = await response.json();
      
      if (response.ok) {
        messages = data;
        renderMessages();
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  }

  // Render messages
  function renderMessages() {
    const filteredMessages = filterMessages();
    
    messagesList.innerHTML = filteredMessages.map(message => `
      <div class="message-card ${message.status === 'new' ? 'unread' : ''}" data-id="${message.id}">
        <div class="message-header">
          <div class="message-info">
            <h3>${message.subject}</h3>
            <div class="message-meta">
              <span>${message.name}</span>
              <span>${message.email}</span>
              <span>${new Date(message.created_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div class="message-actions">
            <button onclick="markAsRead(${message.id})">
              <i data-lucide="${message.status === 'new' ? 'mail' : 'mail-check'}"></i>
            </button>
            <button onclick="archiveMessage(${message.id})">
              <i data-lucide="archive"></i>
            </button>
            <button onclick="deleteMessage(${message.id})">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
        <p class="message-preview">${message.message.substring(0, 150)}...</p>
      </div>
    `).join('');

    lucide.createIcons();
  }

  // Filter messages
  function filterMessages() {
    const searchTerm = searchInput.value.toLowerCase();
    const status = statusFilter.value;

    return messages.filter(message => {
      const matchesSearch = 
        message.subject.toLowerCase().includes(searchTerm) ||
        message.name.toLowerCase().includes(searchTerm) ||
        message.email.toLowerCase().includes(searchTerm) ||
        message.message.toLowerCase().includes(searchTerm);

      const matchesStatus = status === 'all' || message.status === status;

      return matchesSearch && matchesStatus;
    });
  }

  // Event listeners
  searchInput.addEventListener('input', renderMessages);
  statusFilter.addEventListener('change', renderMessages);

  messagesList.addEventListener('click', (e) => {
    const card = e.target.closest('.message-card');
    if (card && !e.target.closest('.message-actions')) {
      showMessageDetails(card.dataset.id);
    }
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  logoutBtn.addEventListener('click', async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  });

  // Message actions
  window.markAsRead = async (id) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}/read`, {
        method: 'POST'
      });
      
      if (response.ok) {
        const message = messages.find(m => m.id === id);
        if (message) {
          message.status = 'read';
          renderMessages();
        }
      }
    } catch (error) {
      console.error('Failed to mark message as read:', error);
    }
  };

  window.archiveMessage = async (id) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}/archive`, {
        method: 'POST'
      });
      
      if (response.ok) {
        const message = messages.find(m => m.id === id);
        if (message) {
          message.status = 'archived';
          renderMessages();
        }
      }
    } catch (error) {
      console.error('Failed to archive message:', error);
    }
  };

  window.deleteMessage = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        messages = messages.filter(m => m.id !== id);
        renderMessages();
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  function showMessageDetails(id) {
    const message = messages.find(m => m.id === id);
    if (!message) return;

    modalContent.innerHTML = `
      <h2>${message.subject}</h2>
      <div class="message-meta">
        <p><strong>From:</strong> ${message.name} (${message.email})</p>
        <p><strong>Date:</strong> ${new Date(message.created_at).toLocaleString()}</p>
        <p><strong>Status:</strong> ${message.status}</p>
      </div>
      <div class="message-content">
        <p>${message.message}</p>
      </div>
    `;

    modal.style.display = 'block';
    markAsRead(id);
  }

  // Initial fetch
  fetchMessages();
});
```