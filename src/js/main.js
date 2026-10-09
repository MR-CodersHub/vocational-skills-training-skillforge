/* =============================================
   SKILLFORGE — main.js
   Scroll reveal | Stagger | Parallax | Counters
   FAQ accordion | Image fallback
   (Navbar & mobile menu are handled by navbar.js)
============================================ */

/* ─── IMAGE FALLBACK (runs immediately to catch early errors) ─── */
(function () {
  var FALLBACK = function (img) {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = '1';
    var seed = (img.alt || img.getAttribute('src') || 'skillforge')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'skillforge';
    img.src = 'https://picsum.photos/seed/' + seed + '/800/600';
  };
  window.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') FALLBACK(e.target);
  }, true);
  window.addEventListener('load', function () {
    document.querySelectorAll('img').forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) FALLBACK(img);
    });
  });
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ─── INTERSECTION OBSERVER — SCROLL REVEAL ─── */
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (window.IntersectionObserver) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ─── STAGGERED CARD DELAYS ─── */
  function stagger(selector, step) {
    document.querySelectorAll(selector).forEach(function (c, i) { c.style.transitionDelay = (i * step) + 's'; });
  }
  stagger('.highlights-grid .card-dark', 0.07);
  stagger('.course-card', 0.07);
  stagger('.post-card', 0.09);
  stagger('.testimonial-card', 0.11);
  stagger('.process-step', 0.07);
  stagger('.partner-card', 0.03);
  stagger('.included-item', 0.06);
  stagger('.team-card', 0.09);
  stagger('.module-item', 0.05);

  /* ─── HERO PARALLAX ─── */
  var heroImg = document.getElementById('hero-parallax-img');
  if (heroImg) {
    window.addEventListener('scroll', function () {
      if (window.scrollY < window.innerHeight * 1.2) {
        heroImg.style.transform = 'translateY(' + (window.scrollY * 0.1) + 'px)';
      }
    }, { passive: true });
  }

  /* ─── SMOOTH NUMBER COUNTER ─── */
  function animateCount(el, end, suffix) {
    var start = 0;
    var duration = 1600;
    suffix = suffix || '';
    var step = function (timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * end) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  var statEls = document.querySelectorAll('[data-count]');
  if (window.IntersectionObserver) {
    var statsObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var raw = el.dataset.count;
          if (raw) animateCount(el, parseInt(raw, 10), el.dataset.suffix || '');
          statsObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statEls.forEach(function (el) { statsObs.observe(el); });
  } else {
    statEls.forEach(function (el) { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });
  }

  /* ─── FAQ ACCORDION (works for static + injected FAQs) ─── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-question');
    if (!btn) return;
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (i) {
      i.classList.remove('open');
      var q = i.querySelector('.faq-question');
      if (q) q.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  /* ─── COUNTDOWN (coming-soon page) ─── */
  var countdown = document.getElementById('countdown');
  if (countdown) {
    var deadline = new Date(countdown.getAttribute('data-deadline')).getTime();
    var units = {
      days: countdown.querySelector('[data-cd="days"]'),
      hours: countdown.querySelector('[data-cd="hours"]'),
      mins: countdown.querySelector('[data-cd="mins"]'),
      secs: countdown.querySelector('[data-cd="secs"]')
    };
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var diff = deadline - Date.now();
      if (diff < 0) diff = 0;
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      if (units.days) units.days.textContent = pad(d);
      if (units.hours) units.hours.textContent = pad(h);
      if (units.mins) units.mins.textContent = pad(m);
      if (units.secs) units.secs.textContent = pad(s);
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ─── TAB GROUPS ─── */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-tab]');
      if (!btn) return;
      var target = btn.getAttribute('data-tab');
      group.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      document.querySelectorAll('[data-panel]').forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
      });
    });
  });

  /* ─── GENERIC INLINE FILTERS (pricing/faq category tabs etc.) ─── */
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var targetSel = group.getAttribute('data-filter-group');
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      group.querySelectorAll('[data-filter]').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.dataset.filter;
      document.querySelectorAll(targetSel + ' [data-category]').forEach(function (el) {
        var show = filter === 'all' || el.dataset.category === filter;
        el.style.display = show ? '' : 'none';
      });
    });
  });
});
