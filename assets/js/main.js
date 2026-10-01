(function () {
  var doc = document;

  /* Menu móvel */
  var btn = doc.querySelector('.menu-toggle');
  var nav = doc.getElementById('menu');
  function setMenu(open) {
    if (!btn || !nav) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    doc.body.classList.toggle('menu-open', open);
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); btn.focus(); } });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* Contatos (a partir de site-config.js) — só exibe o que foi preenchido */
  var cfg = window.MAR_CONFIG || {};
  var list = doc.getElementById('contact-actions');
  var fallback = doc.getElementById('contact-pending');
  if (list) {
    var items = [];
    var numbers = [].concat(cfg.whatsapp || []);
    numbers.forEach(function (n) {
      var wa = String(n).replace(/\D/g, '');
      if (!wa) return;
      items.push({ label: 'WhatsApp', href: 'https://wa.me/' + wa + '?text=' + encodeURIComponent(cfg.whatsappMensagem || ''), ext: true });
    });
    var ig = String(cfg.instagram || '').replace(/^@/, '').trim();
    if (ig) items.push({ label: 'Instagram', href: 'https://www.instagram.com/' + encodeURIComponent(ig) + '/', ext: true });
    var em = String(cfg.email || '').trim();
    if (em) items.push({ label: 'E-mail', href: 'mailto:' + em, ext: false });
    items.forEach(function (it) {
      var a = doc.createElement('a');
      a.className = 'btn ' + 'btn-ghost';
      a.href = it.href; a.textContent = it.label;
      if (it.ext) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      list.appendChild(a);
    });
    if (items.length) { list.hidden = false; if (fallback) fallback.hidden = true; }
  }

  var y = doc.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
