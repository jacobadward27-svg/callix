document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isVisible = mainNav.style.display === 'flex';
      mainNav.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '100%';
        mainNav.style.left = '0';
        mainNav.style.right = '0';
        mainNav.style.background = '#FFFFFF';
        mainNav.style.padding = '20px';
        mainNav.style.borderBottom = '1px solid #E8E3DC';
      }
    });
  }

  // Contact Form Submission & Mailto Handler
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cf-name')?.value || '';
      const email = document.getElementById('cf-email')?.value || '';
      const phone = document.getElementById('cf-phone')?.value || '';
      const service = document.getElementById('cf-service')?.value || '';
      const message = document.getElementById('cf-message')?.value || '';

      const subject = encodeURIComponent(`New Inquiry from ${name} - Callix Agency`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterested Service: ${service}\n\nMessage:\n${message}`
      );

      // Trigger user mail client
      window.location.href = `mailto:hello@callixagency.com?subject=${subject}&body=${body}`;

      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    });
  }
});