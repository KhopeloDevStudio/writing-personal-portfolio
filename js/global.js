// ==========================================
// GLOBAL CONFIGURATION & UTILITIES
// ==========================================
window.AppConfig = {
  API_ENDPOINT: '/api/add-script'
};

// Global security helper to prevent XSS attacks when rendering text
window.escapeHTML = function(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
};

// Global notification toast helper
window.showAlert = function(message, type = 'success') {
  const alertBox = document.createElement('div');
  alertBox.className = `global-alert global-alert-${type}`;
  alertBox.textContent = message;
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 4000);
};

// Automatically highlight the active navigation link based on the current URL
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-menu a, .dropdown-content a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
});
