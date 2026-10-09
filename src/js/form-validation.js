/* =============================================
   SKILLFORGE — form-validation.js
   Client-side validation + success/acknowledgement messages
   for contact, newsletter, login and signup forms.
============================================ */
(function () {
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^[0-9+()\-\s]{7,20}$/;

  function keyFor(field) { return field.id || field.name || ''; }

  function errorEl(form, field) {
    return form.querySelector('[data-error-for="' + keyFor(field) + '"]');
  }

  function setError(form, field, message) {
    var group = field.closest('.form-group') || field.closest('.form-consent');
    var el = errorEl(form, field);
    if (group) group.classList.add('has-error');
    if (field) field.setAttribute('aria-invalid', 'true');
    if (el) el.textContent = message || '';
  }

  function clearError(form, field) {
    var group = field.closest('.form-group') || field.closest('.form-consent');
    var el = errorEl(form, field);
    if (group) group.classList.remove('has-error');
    if (field) field.removeAttribute('aria-invalid');
    if (el) el.textContent = '';
  }

  function validateField(form, field) {
    var value = (field.value || '').trim();
    var type = (field.getAttribute('type') || '').toLowerCase();

    if (field.hasAttribute('required')) {
      if (type === 'checkbox' && !field.checked) { setError(form, field, field.dataset.error || 'Please confirm to continue.'); return false; }
      if (type !== 'checkbox' && !value) { setError(form, field, field.dataset.error || 'This field is required.'); return false; }
    }
    if (value && type === 'email' && !EMAIL_RE.test(value)) { setError(form, field, 'Enter a valid email address.'); return false; }
    if (value && type === 'tel' && !PHONE_RE.test(value)) { setError(form, field, 'Enter a valid phone number.'); return false; }
    var min = parseInt(field.getAttribute('minlength'), 10);
    if (value && min && value.length < min) { setError(form, field, 'Please enter at least ' + min + ' characters.'); return false; }
    if (value && field.tagName === 'SELECT' && field.value === '') { setError(form, field, 'Please choose an option.'); return false; }

    clearError(form, field);
    return true;
  }

  function statusBox(form) {
    return form.querySelector('.form-status') || form.parentNode.querySelector('.form-status');
  }

  function showStatus(form, message, ok) {
    var box = statusBox(form);
    if (!box) return;
    box.hidden = false;
    box.textContent = message;
    box.classList.toggle('is-success', !!ok);
    if (ok && box.scrollIntoView) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function bind(form) {
    var fields = form.querySelectorAll('input, select, textarea');

    fields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(form, field); });
      field.addEventListener('input', function () {
        if (field.closest('.has-error') || (field.getAttribute('type') || '') === 'checkbox') validateField(form, field);
      });
      field.addEventListener('change', function () { validateField(form, field); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      var valid = true;
      fields.forEach(function (field) {
        var ok = validateField(form, field);
        if (!ok && !firstInvalid) firstInvalid = field;
        valid = valid && ok;
      });

      if (!valid) {
        showStatus(form, form.dataset.errorMessage || 'Please correct the highlighted fields and try again.', false);
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var submitBtn = form.querySelector('[type="submit"]');
      var original = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending...'; }

      window.setTimeout(function () {
        form.reset();
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = original; }
        showStatus(form, form.dataset.successMessage || 'Thank you! Your submission has been received. We will be in touch shortly.', true);
      }, 700);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form.validate-form').forEach(bind);

    /* Pre-select course on the contact page from ?course= */
    var params = {};
    window.location.search.replace(/^\?/, '').split('&').forEach(function (pair) {
      if (!pair) return;
      var kv = pair.split('=');
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
    });
    if (params.course) {
      var sel = document.querySelector('#contact-form select[id="course"], form.validate-form select[name="course"]');
      if (sel) {
        var match = Array.prototype.find.call(sel.options, function (o) {
          return o.value === params.course;
        });
        if (match) sel.value = match.value;
      }
    }
  });
})();
