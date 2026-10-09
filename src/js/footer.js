/* =============================================
   SKILLFORGE — footer.js
   Injects ONE shared footer into #site-footer on every page.
============================================ */
(function () {
  var normPath = (window.location.pathname || '').replace(/\\/g, '/');
  var inPages = normPath.indexOf('/pages/') !== -1 || normPath.indexOf('pages/') !== -1;
  var BASE = window.SF_BASE !== undefined ? window.SF_BASE : (inPages ? '../' : '');
  function url(path) { return BASE + path; }

  var social =
    '<div class="social-links" aria-label="Social media links">' +
      '<a class="social-link" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>' +
      '<a class="social-link" href="#" aria-label="Twitter X"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>' +
      '<a class="social-link" href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>' +
      '<a class="social-link" href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>' +
    '</div>';

  var html =
    '<footer id="footer" role="contentinfo">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<a href="' + url('index.html') + '" class="footer-logo" aria-label="SkillForge home">' +
              '<img class="nav-logo-mark" src="' + url('assets/logo.png') + '" alt="SkillForge Logo" width="38" height="38">' +
              '<span class="nav-logo-text" style="color:#fff">SKILL<em>FORGE</em></span>' +
            '</a>' +
            '<p class="footer-tagline">A vocational skills training institute built for people who want practical training, recognised certification, and real employment.</p>' +
            social +
          '</div>' +
          '<div class="footer-col">' +
            '<div class="footer-col-title">Company</div>' +
            '<nav class="footer-links" aria-label="Company links">' +
              '<a href="' + url('pages/about.html') + '">About Us</a>' +
              '<a href="' + url('pages/services.html') + '">Services</a>' +
              '<a href="' + url('pages/pricing.html') + '">Pricing</a>' +
              '<a href="' + url('pages/blog.html') + '">Blog</a>' +
              '<a href="' + url('pages/faq.html') + '">FAQ</a>' +
              '<a href="' + url('pages/login.html') + '">Student Login</a>' +
              '<a href="' + url('pages/signup.html') + '">Sign Up</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer-col">' +
            '<div class="footer-col-title">Programs</div>' +
            '<nav class="footer-links" aria-label="Program links">' +
              '<a href="' + url('pages/service-details.html?id=electrical') + '">Electrical Technician</a>' +
              '<a href="' + url('pages/service-details.html?id=welding') + '">Welding &amp; Fabrication</a>' +
              '<a href="' + url('pages/service-details.html?id=plumbing') + '">Plumbing &amp; Pipefitting</a>' +
              '<a href="' + url('pages/service-details.html?id=hvac') + '">HVAC &amp; Refrigeration</a>' +
              '<a href="' + url('pages/service-details.html?id=solar') + '">Solar PV Installation</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer-col">' +
            '<div class="footer-col-title">Newsletter</div>' +
            '<p class="footer-newsletter-text">Trade tips, batch dates and job leads — straight to your inbox.</p>' +
            '<form class="newsletter-form validate-form" id="newsletter-form" novalidate data-success-message="You are subscribed! Watch your inbox for trades tips and batch dates." data-error-message="Please enter a valid email address.">' +
              '<div class="newsletter-field">' +
                '<input type="email" id="newsletter-email" name="email" placeholder="you@example.com" aria-label="Email address" required />' +
                '<button type="submit" aria-label="Subscribe"><svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>' +
              '</div>' +
              '<span class="form-error" data-error-for="newsletter-email"></span>' +
              '<div class="form-status form-status--compact" id="newsletter-status" role="status" aria-live="polite" hidden></div>' +
            '</form>' +
            '<div class="footer-contact">' +
              '<div class="fc-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>+1 (555) 240-8890</span></div>' +
              '<div class="fc-item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>admissions@skillforge.edu</span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div class="footer-copy">&copy; 2026 <span>SkillForge</span> Vocational Training Institute. All rights reserved.</div>' +
          '<nav class="footer-legal" aria-label="Legal links">' +
            '<a href="' + url('pages/privacy-policy.html') + '">Privacy Policy</a>' +
            '<a href="' + url('pages/terms-of-service.html') + '">Terms of Service</a>' +
            '<a href="' + url('pages/faq.html') + '">Support</a>' +
          '</nav>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var host = document.getElementById('site-footer');
  if (host) { host.innerHTML = html; }
})();
