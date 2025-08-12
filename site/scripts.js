document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('section, footer, header');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });

  revealEls.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Contact form handling (client-only stub)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      // Basic validation
      const email = String(payload.email || '').trim();
      const name = String(payload.name || '').trim();
      if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        status.textContent = 'Please provide a valid name and work email.';
        status.classList.remove('hidden');
        status.classList.remove('text-emerald-400');
        status.classList.add('text-amber-400');
        return;
      }

      try {
        // Placeholder: send to your backend endpoint
        // await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        console.log('Contact request', payload);
        status.textContent = "Thanks! We'll get back to you within 1 business day.";
        status.classList.remove('hidden');
        status.classList.remove('text-amber-400');
        status.classList.add('text-emerald-400');
        form.reset();
      } catch (err) {
        status.textContent = 'Something went wrong. Please email hello@example.com';
        status.classList.remove('hidden');
        status.classList.remove('text-emerald-400');
        status.classList.add('text-amber-400');
      }
    });
  }
});