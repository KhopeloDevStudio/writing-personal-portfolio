// ==========================================
// PROJECTS PAGE SPECIFIC LOGIC
// ==========================================
(function() {
  /**
   * Scrolls a horizontal script row left or right on desktop buttons
   * @param {string} rowId - The ID of the horizontal row container
   * @param {number} amount - Pixel scroll amount (positive for right, negative for left)
   */
  window.scrollRow = function(rowId, amount) {
    const row = document.getElementById(rowId);
    if (row) {
      row.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  /**
   * Filters the script category sections based on sidebar button selection
   * @param {string} category - Category key ('all', 'tv', 'movie', 'short')
   */
  window.filterCategory = function(category) {
    // Update active state on sidebar buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Safely highlight the clicked button
    if (window.event && window.event.currentTarget) {
      window.event.currentTarget.classList.add('active');
    }

    // Show or hide corresponding category sections
    const sections = document.querySelectorAll('.script-category-section');
    sections.forEach(section => {
      if (category === 'all' || section.dataset.category === category) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  };
})();
