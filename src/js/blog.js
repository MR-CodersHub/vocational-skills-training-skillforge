/* =============================================
   SKILLFORGE — blog.js
   Blog listing: client-side search + category filter.
   Blog details: dynamic render from ?id= query param.
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
  function catCount(cat) {
    return data.posts.filter(function (p) { return p.category === cat; }).length;
  }
  function card(p) {
    return '' +
      '<article class="post-card reveal" data-category="' + p.category + '">' +
        '<a class="post-img" href="blog-details.html?id=' + p.id + '">' +
          '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy" />' +
          '<span class="post-read">' + p.readTime + '</span>' +
        '</a>' +
        '<div class="post-body">' +
          '<div class="post-meta"><span class="post-cat">' + p.category + '</span><span>' + p.date + '</span></div>' +
          '<h3><a href="blog-details.html?id=' + p.id + '">' + p.title + '</a></h3>' +
          '<p>' + p.excerpt + '</p>' +
          '<a class="course-link" href="blog-details.html?id=' + p.id + '">Read Article ' +
            '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' +
        '</div>' +
      '</article>';
  }

  /* ─────────── LISTING ─────────── */
  var grid = document.getElementById('blog-grid');
  if (grid) {
    var searchInput = document.getElementById('blog-search');
    var catBar = document.getElementById('blog-categories');
    var countEl = document.getElementById('blog-count');
    var emptyEl = document.getElementById('blog-empty');
    var activeCat = 'All';

    var cats = ['All'];
    data.posts.forEach(function (p) { if (cats.indexOf(p.category) === -1) cats.push(p.category); });

    if (catBar) {
      catBar.innerHTML = cats.map(function (c, i) {
        var label = c === 'All' ? 'All' : c + ' (' + catCount(c) + ')';
        return '<button class="filter-btn' + (i === 0 ? ' is-active' : '') + '" data-filter="' + c + '">' + label + '</button>';
      }).join('');
    }

    function paint() {
      var q = (searchInput ? searchInput.value : '').trim().toLowerCase();
      var list = data.posts.filter(function (p) {
        var inCat = activeCat === 'All' || p.category === activeCat;
        var haystack = (p.title + ' ' + p.excerpt + ' ' + p.category + ' ' + (p.tags || []).join(' ')).toLowerCase();
        var inSearch = !q || haystack.indexOf(q) !== -1;
        return inCat && inSearch;
      });
      grid.innerHTML = list.map(card).join('');
      if (countEl) countEl.textContent = list.length;
      if (emptyEl) emptyEl.hidden = list.length > 0;
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
    paint();

    if (searchInput) {
      searchInput.addEventListener('input', paint);
    }
    if (catBar) {
      catBar.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        catBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        activeCat = btn.dataset.filter;
        paint();
      });
    }
  }

  /* ─────────── DETAILS ─────────── */
  var root = document.getElementById('blog-detail');
  if (!root) return;

  var id = params().id;
  var post = id ? data.getPost(id) : null;

  if (!post) {
    root.innerHTML =
      '<header class="page-hero page-hero--short"><div class="container">' +
        '<h1 class="page-hero-title">ARTICLE NOT FOUND</h1>' +
        '<p class="page-hero-sub">We could not find that article. It may have been moved or the link is incorrect.</p>' +
        '<a class="btn btn-primary" href="blog.html">Back to Blog</a>' +
      '</div></header>';
    return;
  }

  document.title = post.title + ' | SkillForge Blog';

  function renderContent(blocks) {
    return blocks.map(function (b) {
      if (b.indexOf('## ') === 0) return '<h2>' + b.slice(3) + '</h2>';
      return '<p>' + b + '</p>';
    }).join('');
  }

  var related = data.posts.filter(function (p) { return p.id !== post.id && p.category === post.category; });
  if (related.length < 3) {
    data.posts.forEach(function (p) {
      if (p.id !== post.id && related.indexOf(p) === -1 && related.length < 3) related.push(p);
    });
  }
  related = related.slice(0, 3);

  var categories = data.posts.map(function (p) { return p.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; });

  root.innerHTML =
    '<header class="page-hero">' +
      '<div class="page-hero-bg-text" aria-hidden="true">BLOG</div>' +
      '<div class="container">' +
        '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="blog.html">Blog</a><span>/</span><span>' + post.category + '</span></nav>' +
        '<div class="eyebrow-row" style="margin-top:1.2rem;"><div class="orange-line"></div><span class="eyebrow">' + post.category + '</span></div>' +
        '<h1 class="page-hero-title post-title">' + post.title + '</h1>' +
        '<div class="post-meta post-meta--lg">' +
          '<span>' + post.date + '</span><span>' + post.author + '</span><span>' + post.readTime + '</span>' +
        '</div>' +
      '</div>' +
    '</header>' +

    '<section class="article-section"><div class="container article-layout">' +
      '<article class="article-body">' +
        '<img class="article-hero-img" src="' + post.image + '" alt="' + post.title + '" />' +
        renderContent(post.content) +
        '<div class="article-tags">' + (post.tags || []).map(function (t) { return '<span class="tag">#' + t + '</span>'; }).join('') + '</div>' +
        '<div class="article-share">' +
          '<span>Share:</span>' +
          '<a href="#" aria-label="Share on Twitter">Twitter</a>' +
          '<a href="#" aria-label="Share on Facebook">Facebook</a>' +
          '<a href="#" aria-label="Share on LinkedIn">LinkedIn</a>' +
        '</div>' +
      '</article>' +

      '<aside class="article-sidebar">' +
        '<div class="widget">' +
          '<h3 class="widget-title">Categories</h3>' +
          '<ul class="widget-list">' + categories.map(function (c) {
            return '<li><a href="blog.html">' + c + '<span>' + catCount(c) + '</span></a></li>';
          }).join('') + '</ul>' +
        '</div>' +
        '<div class="widget">' +
          '<h3 class="widget-title">Recent Articles</h3>' +
          '<div class="widget-posts">' + data.posts.filter(function (p) { return p.id !== post.id; }).slice(0, 4).map(function (p) {
            return '<a class="widget-post" href="blog-details.html?id=' + p.id + '">' +
              '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy" />' +
              '<span><strong>' + p.title + '</strong><em>' + p.date + '</em></span>' +
            '</a>';
          }).join('') + '</div>' +
        '</div>' +
        '<div class="widget widget--cta">' +
          '<h3 class="widget-title">Start Your Career</h3>' +
          '<p>Practical trade training with placement support. Enroll now.</p>' +
          '<a href="contact.html" class="btn btn-primary btn-sm">Enroll Now</a>' +
        '</div>' +
      '</aside>' +
    '</div></section>' +

    '<section class="related-posts"><div class="container">' +
      '<div class="sessions-header"><div>' +
        '<div class="eyebrow-row"><div class="orange-line"></div><span class="eyebrow">Keep Reading</span></div>' +
        '<h2 class="display-md">RELATED ARTICLES</h2>' +
      '</div><a href="blog.html" class="btn btn-outline">All Articles</a></div>' +
      '<div class="posts-grid">' + related.map(card).join('') + '</div>' +
    '</div></section>';
})();
