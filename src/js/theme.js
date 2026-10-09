/* =============================================
   SKILLFORGE — theme.js
   Dark/Light mode + RTL mode (system detection + persistence)
   Loaded in <head> so theme/direction apply before paint.
============================================ */
(function () {
  var root = document.documentElement;
  var THEME_KEY = 'sf-theme';
  var DIR_KEY = 'sf-dir';

  /* ─── THEME ─── */
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = savedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  /* ─── DIRECTION ─── */
  var savedDir = null;
  try { savedDir = localStorage.getItem(DIR_KEY); } catch (e) {}
  var dir = savedDir || 'ltr';
  root.setAttribute('dir', dir);

  /* Expose helpers (buttons are injected later by navbar.js) */
  window.SFTheme = {
    get: function () { return root.getAttribute('data-theme'); },
    set: function (value) {
      root.setAttribute('data-theme', value);
      try { localStorage.setItem(THEME_KEY, value); } catch (e) {}
      document.dispatchEvent(new CustomEvent('sf:themechange', { detail: value }));
    },
    toggle: function () { this.set(this.get() === 'dark' ? 'light' : 'dark'); },
    getDir: function () { return root.getAttribute('dir'); },
    setDir: function (value) {
      root.setAttribute('dir', value);
      try { localStorage.setItem(DIR_KEY, value); } catch (e) {}
      document.dispatchEvent(new CustomEvent('sf:dirchange', { detail: value }));
    },
    toggleDir: function () { this.setDir(this.getDir() === 'rtl' ? 'ltr' : 'rtl'); }
  };

  /* React to system changes when the user has not chosen manually */
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      var manual = null;
      try { manual = localStorage.getItem(THEME_KEY); } catch (err) {}
      if (!manual) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
  }

  /* Event delegation — works even though toggles are injected after load */
  document.addEventListener('click', function (e) {
    var themeBtn = e.target.closest('[data-theme-toggle]');
    if (themeBtn) { e.preventDefault(); window.SFTheme.toggle(); return; }
    var dirBtn = e.target.closest('[data-dir-toggle]');
    if (dirBtn) { e.preventDefault(); window.SFTheme.toggleDir(); }
  });
})();
