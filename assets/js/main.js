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

  /* Clientes — aba e seção só existem quando site-config.js trouxer clientes */
  var clients = Array.isArray(cfg.clientes) ? cfg.clientes.filter(function (c) { return c && String(c.nome || '').trim(); }) : [];
  var clientsSection = doc.getElementById('clientes');
  var clientsList = doc.getElementById('clientes-lista');
  if (clients.length && clientsSection && clientsList) {
    var el = function (tag, cls, text) { var n = doc.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
    clients.forEach(function (c) {
      var li = el('li', 'client');
      if (c.logo && /^assets\/img\/clientes\/[\w.\-\/]+$/.test(c.logo)) {
        var img = el('img', 'client-logo'); img.src = c.logo; img.alt = c.nome; img.loading = 'lazy'; li.appendChild(img);
      }
      li.appendChild(el('h3', 'client-name', c.nome));
      if (c.tipo) li.appendChild(el('p', 'client-type', c.tipo));
      if (c.descricao) li.appendChild(el('p', 'client-desc', c.descricao));
      if (Array.isArray(c.servicos) && c.servicos.length) {
        var tags = el('ul', 'client-tags');
        c.servicos.forEach(function (t) { tags.appendChild(el('li', '', t)); });
        li.appendChild(tags);
      }
      var info = el('dl', 'client-info');
      [['Endereço', c.endereco], ['Horário', c.horario], ['Telefones', c.telefones]].forEach(function (p) {
        if (p[1]) { info.appendChild(el('dt', '', p[0])); info.appendChild(el('dd', '', p[1])); }
      });
      if (c.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) {
        info.appendChild(el('dt', '', 'E-mail'));
        var dd = el('dd'); var m = el('a', '', c.email); m.href = 'mailto:' + c.email; dd.appendChild(m); info.appendChild(dd);
      }
      if (info.children.length) li.appendChild(info);
      var ig = String(c.instagram || '').replace(/^@/, '').trim();
      if (/^[A-Za-z0-9_.]+$/.test(ig)) {
        var l = el('a', 'client-link', 'Instagram @' + ig); l.href = 'https://www.instagram.com/' + ig + '/'; l.target = '_blank'; l.rel = 'noopener noreferrer'; li.appendChild(l);
      }
      if (c.site && /^https:\/\//.test(c.site)) {
        var a = el('a', 'client-link', 'Visitar site'); a.href = c.site; a.target = '_blank'; a.rel = 'noopener noreferrer'; li.appendChild(a);
      }
      clientsList.appendChild(li);
    });
    clientsSection.hidden = false;
  }
  doc.querySelectorAll('[data-clientes]').forEach(function (el) { el.hidden = !clients.length; });

  var y = doc.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
