
(function () {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  function setScrolled() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('is-visible'); });
  }



  const stickyCta = document.querySelector('.mobile-sticky-cta');
  function setStickyCta() {
    if (!stickyCta) return;
    const show = window.innerWidth <= 680 && window.scrollY > 620;
    stickyCta.classList.toggle('is-visible', show);
    document.body.classList.toggle('has-sticky-cta', show);
  }
  setStickyCta();
  window.addEventListener('scroll', setStickyCta, { passive: true });
  window.addEventListener('resize', setStickyCta);

  const form = document.querySelector('[data-inquiry-form]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        'New export inquiry for SOVIRA GLOBAL',
        '',
        'Name: ' + (data.get('name') || ''),
        'Company: ' + (data.get('company') || ''),
        'Country: ' + (data.get('country') || ''),
        'Email: ' + (data.get('email') || ''),
        'Phone/WhatsApp: ' + (data.get('phone') || ''),
        'Product Interest: ' + (data.get('product') || ''),
        'Estimated Quantity: ' + (data.get('quantity') || ''),
        'Packaging Requirement: ' + (data.get('packaging') || ''),
        '',
        'Message:',
        data.get('message') || ''
      ];
      const subject = encodeURIComponent('SOVIRA GLOBAL Export Inquiry - ' + (data.get('product') || 'Product Catalogue'));
      const body = encodeURIComponent(lines.join('\n'));
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Opening your email app with the inquiry details. You can send it directly to the SOVIRA GLOBAL export desk.';
      window.location.href = 'mailto:soviraglobal@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
