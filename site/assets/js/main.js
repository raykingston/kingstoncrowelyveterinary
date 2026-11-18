/* Kingston Crowley Veterinary — site behaviour (no dependencies) */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ------------------------------------------------------------------
     Icon sprite: injected so <svg><use href="#i-name"></use></svg> works
     on any host, including when the site is opened straight from disk.
     ------------------------------------------------------------------ */
  var ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    heartpulse: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
    stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    milk: '<path d="M8 2h8"/><path d="M9 2v2.79a4 4 0 0 1-.67 2.22l-.66.98A4 4 0 0 0 7 10.21V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.79a4 4 0 0 0-.67-2.22l-.66-.98A4 4 0 0 1 15 4.79V2"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    bone: '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>',
    menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    door: '<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.56v16.16a.5.5 0 0 1-.6.49L5 20V5.56a1 1 0 0 1 .76-.97l6-1.5a1 1 0 0 1 1.24.97Z"/>',
    paw: '<g fill="currentColor" stroke="none"><ellipse cx="6" cy="9" rx="2.2" ry="2.8" transform="rotate(-18 6 9)"/><ellipse cx="10" cy="5.2" rx="2.2" ry="2.9" transform="rotate(-6 10 5.2)"/><ellipse cx="14.6" cy="5.2" rx="2.2" ry="2.9" transform="rotate(8 14.6 5.2)"/><ellipse cx="18.4" cy="9.2" rx="2.2" ry="2.8" transform="rotate(20 18.4 9.2)"/><path d="M12.2 11c2.6 0 6 3.9 6 7 0 2-1.5 3-3.2 3-1.3 0-1.9-.7-2.8-.7s-1.6.7-2.9.7C7.6 21 6 20 6 18c0-3.1 3.5-7 6.2-7Z"/></g>'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(ICONS).forEach(function (k) { sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>'; });
  sprite += '</svg>';
  document.body.insertAdjacentHTML('afterbegin', sprite);

  /* ---------------- Header: scrolled state + mobile nav ---------------- */
  var header = document.querySelector('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    var setNav = function (open) {
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
    document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  }

  /* ---------------- Scroll reveal ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------- Opening hours: highlight today + open/closed ---------------- */
  // Times are in Irish time. [open, close] in minutes after midnight; day 0 = Sunday.
  var HOURS = { 1: [540, 1080], 2: [540, 1080], 3: [540, 1080], 4: [540, 1080], 5: [540, 1080], 6: [540, 780] };
  function irishNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Dublin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var get = function (t) { return (parts.find(function (p) { return p.type === t; }) || {}).value; };
      var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
      return { day: day, mins: (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60, ap = h >= 12 ? 'pm' : 'am'; h = h % 12 || 12; return h + (mm ? '.' + (mm < 10 ? '0' : '') + mm : '') + ap; }
  var now = irishNow();
  document.querySelectorAll('.hours tr[data-days]').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(now.day)) > -1) tr.classList.add('is-today');
  });
  document.querySelectorAll('[data-open-status]').forEach(function (el) {
    var h = HOURS[now.day];
    if (h && now.mins >= h[0] && now.mins < h[1]) { el.textContent = 'Open now · until ' + fmt(h[1]); el.classList.add('is-open'); }
    else { el.textContent = 'Closed now · emergencies 24/7 on 022 21258'; el.classList.add('is-closed'); }
  });

  /* ---------------- Team bio dialogs ---------------- */
  function openBio(id) {
    var dlg = document.getElementById(id);
    if (!dlg || typeof dlg.showModal !== 'function') return false;
    dlg.showModal();
    if (history.replaceState) history.replaceState(null, '', '#' + id);
    return true;
  }
  document.querySelectorAll('[data-bio]').forEach(function (btn) {
    btn.addEventListener('click', function (e) { if (openBio(btn.getAttribute('data-bio'))) e.preventDefault(); });
  });
  document.querySelectorAll('dialog.bio-dialog').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // click backdrop
    dlg.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', function () { dlg.close(); }); });
    dlg.addEventListener('close', function () { if (history.replaceState) history.replaceState(null, '', location.pathname + location.search); });
  });
  if (location.hash && /^#bio-/.test(location.hash)) {
    var target = location.hash.slice(1);
    setTimeout(function () {
      var card = document.querySelector('[data-bio="' + target + '"]');
      if (card) card.scrollIntoView({ block: 'center' });
      openBio(target);
    }, 250);
  }

  /* ---------------- Contact form ----------------
     Sends the form as JSON to the URL in its action attribute. Works with FormSubmit
     (https://formsubmit.co/ajax/<email>) and Formspree (https://formspree.io/f/<id>).
     Optional attributes on the <form>:
       data-subject  email subject; {field_name} is replaced with that field's value
       data-success  message shown after a successful send                       */
  document.querySelectorAll('form[data-contact-form]').forEach(function (form) {
    var status = form.querySelector('.form__status');
    var show = function (type, msg) { status.className = 'form__status is-visible is-' + type; status.textContent = msg; };
    var defaultSuccess = 'Thank you! Your message has been sent. We will get back to you as soon as we can.';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var honey = form.querySelector('.hp input');
      if (honey && honey.value) return; // spam honeypot
      var action = form.getAttribute('action') || '';
      if (!action || action.indexOf('YOUR_FORM_ID') > -1) {
        show('info', 'Online messages are not switched on yet. Please call us on 022 21258 and we will be happy to help.');
        return;
      }

      // Collect fields; ticked checkboxes sharing a name are joined into one line.
      var data = {};
      new FormData(form).forEach(function (value, key) {
        if (key === '_honey' || key === '_gotcha') return;
        data[key] = data[key] ? data[key] + ', ' + value : value;
      });
      var subject = form.getAttribute('data-subject');
      if (subject) {
        data._subject = subject.replace(/\{(\w+)\}/g, function (m, k) { return data[k] || ''; });
      }
      if (/formsubmit\.co/.test(action)) { data._template = 'table'; data._captcha = 'false'; }

      var btn = form.querySelector('[type="submit"]');
      btn.disabled = true; btn.dataset.label = btn.innerHTML; btn.textContent = 'Sending…';
      fetch(action, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json', Accept: 'application/json' } })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
        .then(function (res) {
          if (!res.ok || res.body.success === false || res.body.success === 'false') {
            // e.g. FormSubmit's "This form needs Activation..." message; visible in the browser console (F12).
            throw new Error(res.body.message || ('HTTP error'));
          }
          form.reset();
          show('success', form.getAttribute('data-success') || defaultSuccess);
          status.scrollIntoView({ block: 'center', behavior: 'smooth' });
        })
        .catch(function (err) {
          if (window.console) console.warn('Form not sent:', err && err.message, location.protocol === 'file:' ? '(forms only work on the live website, not a file opened from disk)' : '');
          show('error', 'Sorry, something went wrong sending your message. Please call us on 022 21258.');
        })
        .then(function () { btn.disabled = false; btn.innerHTML = btn.dataset.label; });
    });
  });

  /* ---------------- Footer year ---------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
