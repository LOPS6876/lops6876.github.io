
(function(){
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-mobile-toggle]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('form[data-enhanced="true"]').forEach(form => {
    form.addEventListener('submit', function(event){
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thank you. Your inquiry has been received. Our export desk will contact you shortly.';
        status.setAttribute('role', 'status');
      }
      form.reset();
    });
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
