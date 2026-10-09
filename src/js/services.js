/* =============================================
   SKILLFORGE — services.js
   Renders the services listing grid (with filter) and the
   dynamic service-details page (reads ?id= from the URL).
============================================ */
(function () {
  if (!window.SF_DATA) return;
  var data = window.SF_DATA;

  function params() {
    var out = {};
    window.location.search.replace(/^\?/, '').split('&').forEach(function (pair) {
      if (!pair) return;
      var kv = pair.split('=');
      out[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
    });
    return out;
  }

  function card(s) {
    return '' +
      '<article class="course-card reveal">' +
        '<div class="course-img-wrap">' +
          '<img src="' + s.image + '" alt="' + s.name + ' training" loading="lazy" />' +
          '<div class="course-tag">' + s.duration + '</div>' +
        '</div>' +
        '<div class="course-body">' +
          '<span class="course-cat">' + s.category + '</span>' +
          '<h3>' + s.name + '</h3>' +
          '<p>' + s.summary + '</p>' +
          '<div class="course-actions">' +
            '<a class="btn btn-primary btn-sm" href="service-details.html?id=' + s.id + '">View Course</a>' +
            '<a class="course-link" href="service-details.html?id=' + s.id + '">Details ' +
              '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* ─────────── LISTING ─────────── */
  var grid = document.getElementById('services-grid');
  if (grid) {
    var filterBar = document.getElementById('services-filter');
    var cats = ['All'];
    data.services.forEach(function (s) { if (cats.indexOf(s.category) === -1) cats.push(s.category); });

    if (filterBar) {
      filterBar.innerHTML = cats.map(function (c, i) {
        return '<button class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-filter="' + c + '">' + c + '</button>';
      }).join('');
    }

    function paint(filter) {
      grid.innerHTML = data.services
        .filter(function (s) { return filter === 'All' || s.category === filter; })
        .map(card).join('');
      var reveal = grid.querySelectorAll('.reveal');
      if (window.IntersectionObserver) {
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
        }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });
        reveal.forEach(function (el) { obs.observe(el); });
      } else {
        reveal.forEach(function (el) { el.classList.add('visible'); });
      }
    }
    paint('All');

    if (filterBar) {
      filterBar.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        paint(btn.dataset.filter);
      });
    }
  }

  /* ─────────── DETAILS ─────────── */
  var root = document.getElementById('service-detail');
  if (!root) return;

  var id = params().id;
  var s = id ? data.getService(id) : null;

  if (!s) {
    root.innerHTML =
      '<header class="page-hero page-hero--short">' +
        '<div class="container">' +
          '<h1 class="page-hero-title">COURSE NOT FOUND</h1>' +
          '<p class="page-hero-sub">We could not find that course. It may have been renamed or the link is incorrect.</p>' +
          '<a class="btn btn-primary" href="services.html">Browse All Courses</a>' +
        '</div>' +
      '</header>';
    return;
  }

  document.title = s.name + ' | SkillForge Vocational Training Institute';

  function tiers() {
    return [
      {
        name: 'Installment', price: '$' + Math.round(s.fee / 6), period: '/month × 6', desc: 'Spread the cost', highlight: false,
        features: ['Full course access', s.cert, 'Tools, materials & PPE', 'Placement assistance']
      },
      {
        name: 'Pay in Full', price: '$' + Math.round(s.fee * 0.9), period: 'one payment', desc: 'Save 10%', highlight: true,
        features: ['Everything in Installment', '10% discount', 'Priority batch selection', 'Free personal toolkit']
      },
      {
        name: 'Accelerator', price: '$' + Math.round(s.fee * 1.3), period: 'one payment', desc: 'Finish faster', highlight: false,
        features: ['Everything in Pay in Full', 'Intensive schedule', '1-on-1 mentoring', 'Guaranteed interview']
      }
    ];
  }

  var related = data.services.filter(function (x) { return x.id !== s.id; }).slice(0, 3);

  root.innerHTML =
    '<header class="page-hero">' +
      '<div class="page-hero-bg-text" aria-hidden="true">' + s.category.toUpperCase() + '</div>' +
      '<div class="container">' +
        '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span><span>' + s.name + '</span></nav>' +
        '<div class="eyebrow-row" style="margin-top:1.2rem;"><div class="orange-line"></div><span class="eyebrow">' + s.category + ' Program</span></div>' +
        '<h1 class="page-hero-title">' + s.name + '</h1>' +
        '<p class="page-hero-sub">' + s.tagline + ' ' + s.summary + '</p>' +
        '<div class="detail-meta">' +
          '<span class="detail-chip"><strong>Duration:</strong> ' + s.duration + '</span>' +
          '<span class="detail-chip"><strong>Level:</strong> ' + s.level + '</span>' +
          '<span class="detail-chip"><strong>Batches:</strong> ' + s.batch + '</span>' +
          '<span class="detail-chip"><strong>Certification:</strong> ' + s.cert + '</span>' +
        '</div>' +
      '</div>' +
    '</header>' +

    '<section class="service-overview">' +
      '<div class="container service-overview-layout">' +
        '<div class="service-overview-img reveal-left">' +
          '<img src="' + s.image + '" alt="' + s.name + ' practical training" />' +
          '<div class="service-img-tag">' + s.duration + '</div>' +
        '</div>' +
        '<div class="service-overview-content reveal-right">' +
          '<div class="eyebrow-row"><div class="orange-line"></div><span class="eyebrow">Course Overview</span></div>' +
          '<h2 class="display-md">WHAT YOU<br/>WILL LEARN</h2>' +
          s.overview.map(function (p) { return '<p class="body-lg">' + p + '</p>'; }).join('') +
          '<ul class="feature-list">' + s.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
          '<a class="btn btn-primary mt-lg" href="contact.html?course=' + s.id + '">Enroll Now ' +
            '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section-dark diagonal-both service-modules">' +
      '<div class="container">' +
        '<div class="testimonials-header reveal" style="text-align:center;align-items:center;">' +
          '<div class="eyebrow-row" style="justify-content:center;"><div class="orange-line"></div><span class="eyebrow">Curriculum</span></div>' +
          '<h2 class="display-md" style="color:#fff;">MODULES YOU<br/><em class="accent-italic">WILL COMPLETE.</em></h2>' +
        '</div>' +
        '<div class="module-grid reveal">' +
          s.modules.map(function (m, i) {
            return '<div class="module-item"><span class="module-num">' + String(i + 1).padStart(2, '0') + '</span><h3>' + m + '</h3></div>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="service-pricing">' +
      '<div class="container">' +
        '<div class="testimonials-header reveal" style="text-align:center;align-items:center;">' +
          '<div class="eyebrow-row" style="justify-content:center;"><div class="orange-line"></div><span class="eyebrow">Flexible Payment</span></div>' +
          '<h2 class="display-md">CHOOSE YOUR<br/>PAYMENT OPTION</h2>' +
        '</div>' +
        '<div class="pricing-grid reveal">' + tiers().map(function (t) {
          return '<div class="pricing-card' + (t.highlight ? ' pricing-card--featured' : '') + '">' +
            (t.highlight ? '<div class="featured-badge">Best Value</div>' : '') +
            '<div class="plan-tier">' + t.name + '</div>' +
            '<div class="plan-desc">' + t.desc + '</div>' +
            '<div class="plan-price' + (t.highlight ? ' plan-price--dark' : '') + '">' + t.price + '</div>' +
            '<div class="plan-freq' + (t.highlight ? ' plan-freq--dark' : '') + '">' + t.period + '</div>' +
            '<ul class="plan-features' + (t.highlight ? ' plan-features--dark' : '') + '">' +
              t.features.map(function (f) { return '<li>' + f + '</li>'; }).join('') +
            '</ul>' +
            '<a href="contact.html?course=' + s.id + '" class="btn ' + (t.highlight ? 'btn-primary' : 'btn-outline-white') + '">Enroll</a>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section-dark diagonal-both service-faq">' +
      '<div class="container">' +
        '<div class="testimonials-header reveal" style="text-align:center;align-items:center;">' +
          '<div class="eyebrow-row" style="justify-content:center;"><div class="orange-line"></div><span class="eyebrow">Questions</span></div>' +
          '<h2 class="display-md" style="color:#fff;">COURSE <em class="accent-italic">FAQ.</em></h2>' +
        '</div>' +
        '<div class="faq-list reveal">' + s.faqs.map(function (f) {
          return '<div class="faq-item">' +
            '<button class="faq-question" aria-expanded="false">' + f.q + '<span class="faq-toggle" aria-hidden="true"></span></button>' +
            '<div class="faq-answer"><p>' + f.a + '</p></div>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="related-services">' +
      '<div class="container">' +
        '<div class="sessions-header">' +
          '<div><div class="eyebrow-row"><div class="orange-line"></div><span class="eyebrow">Keep Exploring</span></div>' +
          '<h2 class="display-md">RELATED COURSES</h2></div>' +
          '<a href="services.html" class="btn btn-outline">View All</a>' +
        '</div>' +
        '<div class="courses-grid courses-grid--full">' + related.map(card).join('') + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="inline-cta-wrap"><div class="container"><div class="inline-cta reveal">' +
      '<div class="inline-cta-text"><h2>READY TO START ' + s.name.toUpperCase() + '?</h2>' +
      '<p>Seats are limited. Submit an enquiry and our admissions team will guide you through enrollment.</p></div>' +
      '<div class="inline-cta-actions">' +
        '<a href="contact.html?course=' + s.id + '" class="btn btn-primary">Enroll Now</a>' +
        '<a href="pricing.html" class="btn btn-outline-white">View Pricing</a>' +
      '</div>' +
    '</div></div></section>';
})();
