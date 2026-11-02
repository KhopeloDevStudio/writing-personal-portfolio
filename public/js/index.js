// ==========================================
// INDEX PAGE CAROUSEL & FORM LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Carousel Track Logic (3 cards viewable, sliding by 1 card per click)
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-track .script-card');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  if (track && cards.length > 0) {
    let currentIndex = 0;
    
    function updateCarousel() {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 24; // 1.5rem gap = 24px
      const scrollAmount = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${scrollAmount}px)`;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - 3);
        if (currentIndex < maxIndex) {
          currentIndex++;
        } else {
          currentIndex = 0; // Loop back to start
        }
        updateCarousel();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - 3);
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = maxIndex; // Loop to end
        }
        updateCarousel();
      });
    }

    window.addEventListener('resize', updateCarousel);
  }

  // 2. Mini Contact Form Submission Handler (Connected mechanism)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[name="name"]');
      const name = nameInput ? nameInput.value : 'Guest';
      
      if (window.showAlert) {
        window.showAlert(`Thank you, ${name}! Your message has been sent successfully.`);
      } else {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
      }
      contactForm.reset();
    });
  }
});
