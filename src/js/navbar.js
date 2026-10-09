/* =============================================
   SKILLFORGE — navbar.js
   Injects ONE shared navbar + mobile menu into #site-navbar
   on every page, and wires up its behaviour.
============================================ */
(function () {
  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var BASE = inPages ? '../' : '';
  window.SF_BASE = BASE;

  var file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function url(path) { return BASE + path; }
  function activeFor(href) {
    return href.split('/').pop().toLowerCase() === file ? ' class="active"' : '';
  }
  var homeActive = (file === 'index.html' || file === 'home-2.html') ? ' class="active"' : '';

  var navHTML =
    '<nav id="navbar" class="site-navbar" role="navigation" aria-label="Main navigation">' +
      '<div class="nav-inner">' +
        '<a href="' + url('index.html') + '" class="nav-logo" aria-label="SkillForge home">' +
          '<div class="nav-logo-mark" aria-hidden="true"><span>S</span></div>' +
          '<span class="nav-logo-text">SKILL<em>FORGE</em></span>' +
        '</a>' +
        '<ul class="nav-links" role="list">' +
          '<li class="has-dropdown">' +
            '<a href="' + url('index.html') + '"' + homeActive + '>Home' +
              '<svg class="caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>' +
            '</a>' +
            '<ul class="dropdown" role="list">' +
              '<li><a href="' + url('index.html') + '">Home 1 — General</a></li>' +
              '<li><a href="' + url('pages/home-2.html') + '">Home 2 — Renewable Niche</a></li>' +
            '</ul>' +
          '</li>' +
          '<li><a href="' + url('pages/about.html') + '"' + activeFor('about.html') + '>About</a></li>' +
          '<li><a href="' + url('pages/services.html') + '"' + activeFor('services.html') + '>Services</a></li>' +
          '<li><a href="' + url('pages/blog.html') + '"' + activeFor('blog.html') + '>Blog</a></li>' +
          '<li><a href="' + url('pages/pricing.html') + '"' + activeFor('pricing.html') + '>Pricing</a></li>' +
          '<li><a href="' + url('pages/contact.html') + '"' + activeFor('contact.html') + '>Contact</a></li>' +
        '</ul>' +
        '<div class="nav-actions">' +
          '<button type="button" class="nav-icon-btn" data-theme-toggle aria-label="Toggle dark and light mode" title="Toggle theme">' +
            '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
            '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' +
          '</button>' +
          '<button type="button" class="nav-icon-btn nav-dir-btn" data-dir-toggle aria-label="Toggle text direction" title="Toggle direction">' +
            '<span class="dir-ltr">LTR</span><span class="dir-rtl">RTL</span>' +
          '</button>' +
          '<a href="' + url('pages/contact.html') + '" class="nav-join">Enroll Now</a>' +
          '<button class="hamburger" id="hamburger-btn" aria-label="Toggle mobile menu" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation">' +
        '<div class="mobile-menu-head">' +
          '<span class="mobile-menu-title">Menu</span>' +
          '<div class="mobile-menu-toggles">' +
            '<button type="button" class="nav-icon-btn" data-theme-toggle aria-label="Toggle theme">' +
              '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
              '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' +
            '</button>' +
            '<button type="button" class="nav-icon-btn nav-dir-btn" data-dir-toggle aria-label="Toggle direction">' +
              '<span class="dir-ltr">LTR</span><span class="dir-rtl">RTL</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<a href="' + url('index.html') + '">Home 1</a>' +
        '<a href="' + url('pages/home-2.html') + '">Home 2</a>' +
        '<a href="' + url('pages/about.html') + '">About</a>' +
        '<a href="' + url('pages/services.html') + '">Services</a>' +
        '<a href="' + url('pages/blog.html') + '">Blog</a>' +
        '<a href="' + url('pages/pricing.html') + '">Pricing</a>' +
        '<a href="' + url('pages/faq.html') + '">FAQ</a>' +
        '<a href="' + url('pages/contact.html') + '">Contact</a>' +
        '<div class="mobile-menu-actions">' +
          '<a href="' + url('pages/contact.html') + '" class="btn btn-primary">Enroll Now</a>' +
        '</div>' +
      '</div>' +
    '</nav>';

  var host = document.getElementById('site-navbar');
  if (host) { host.innerHTML = navHTML; }

  /* ─── HAMBURGER ─── */
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      var bars = hamburgerBtn.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.querySelectorAll('span').forEach(function (b) { b.style.transform = ''; b.style.opacity = ''; });
      });
    });
  }

  /* ─── SCROLL SHADOW ─── */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    var onScroll = function () { navbar.classList.toggle('scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
