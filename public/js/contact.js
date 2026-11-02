// ==========================================
// CONTACT PAGE FORM SUBMISSION LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const formalForm = document.querySelector('.formal-contact-form');
  
  if (formalForm) {
    formalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = formalForm.querySelector('input[name="name"]');
      const name = nameInput ? nameInput.value : 'Industry Colleague';
      
      if (window.showAlert) {
        window.showAlert(`Thank you, ${name}! Your formal inquiry has been submitted successfully.`);
      } else {
        alert(`Thank you, ${name}! Your formal inquiry has been submitted successfully.`);
      }
      formalForm.reset();
    });
  }
});
