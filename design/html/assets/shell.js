// Skill Portal redesign v2: icon sprite + app chrome (sidebar only, no top bar).
// <body data-ws="employee|admin" data-active="..." data-role="manager"> + <main id="page">.
// Dark is the default theme; ?theme=light switches.  <i data-i="name" data-c="sm"></i> -> icon.
(function () {
  const P = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    record: '<rect x="5.5" y="4" width="13" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="m9 13.5 2 2 4-4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    inbox: '<path d="M3 13h5l2 3h4l2-3h5"/><path d="M5.5 5h13L21 13v6H3v-6z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.6-5.5 6.5-5.5s5.5 2 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.8c2 .8 3.2 2.6 3.7 5.2"/>',
    chart: '<path d="M5 20V11"/><path d="M11 20V5"/><path d="M17 20v-6"/><path d="M3 20.5h18"/>',
    shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
    book: '<path d="M4 4.5h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6V19h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2H4z"/><path d="M12 5.5V21"/>',
    route: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h7.5"/>',
    sliders: '<path d="M4 6h10M18 6h2"/><circle cx="16" cy="6" r="2"/><path d="M4 12h4M12 12h8"/><circle cx="10" cy="12" r="2"/><path d="M4 18h12"/><circle cx="18" cy="18" r="2"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 18z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9"/><path d="m17 6 3 3"/><path d="m14.5 8.5 2 2"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    bell: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    cr: '<path d="m9 6 6 6-6 6"/>', cd: '<path d="m6 9 6 6 6-6"/>', cl: '<path d="m15 6-6 6 6 6"/>', cu: '<path d="m6 15 6-6 6 6"/>',
    ext: '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', check: '<path d="m5 12 4.5 4.5L19 7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    spark: '<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    clip: '<path d="M20 11.5 12 19.5a5 5 0 0 1-7-7l8.5-8.5a3.5 3.5 0 0 1 5 5L10 17.5a2 2 0 0 1-3-3l7.5-7.5"/>',
    cal: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    alert: '<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.2h.01"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16"/><path d="M20 20v-4h-4"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>', arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    enter: '<path d="M20 5v7a3 3 0 0 1-3 3H5"/><path d="m9 11-4 4 4 4"/>',
    filter: '<path d="M4 5h16l-6 7.5V19l-4 2v-8.5z"/>', moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6h.01"/>',
    eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c5 0 8.5 4.5 9.5 6-.5.8-1.5 2.1-2.9 3.3"/><path d="M6.5 7.6C4.6 8.9 3.2 10.7 2.5 12c1 1.5 4.5 6 9.5 6 1.6 0 3-.4 4.3-1.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
    eye: '<path d="M2.5 12C3.5 10.5 7 6 12 6s8.5 4.5 9.5 6c-1 1.5-4.5 6-9.5 6s-8.5-4.5-9.5-6z"/><circle cx="12" cy="12" r="3"/>',
    msg: '<path d="M4 5h16v11H9l-5 4z"/>',
    cap: '<path d="M2 9 12 4l10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5"/><path d="M22 9v6"/>',
    upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    send: '<path d="M4 12 20 4l-6 16-3-7z"/>', swap: '<path d="M7 7h13l-3-3"/><path d="M17 17H4l3 3"/>',
    more: '<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    sun2: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>', grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    cmd: '<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"/>'
  };
  // status glyphs (filled shapes): not started, in progress, in review, approved, returned, locked, failed
  const S = {
    'st-not': '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3.1 2.6"/>',
    'st-prog': '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.2a4.8 4.8 0 0 1 0 9.6z" fill="currentColor"/>',
    'st-rev': '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.2a4.8 4.8 0 1 1-4.8 4.8H12z" fill="currentColor"/>',
    'st-ok': '<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="m8.3 12.3 2.5 2.5 4.9-5.3" fill="none" style="stroke:var(--surface)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>',
    'st-ret': '<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M15.6 12H8.6m2.8-2.8L8.6 12l2.8 2.8" fill="none" style="stroke:var(--surface)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'st-lock': '<rect x="6" y="11" width="12" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8.8 11V8.5a3.2 3.2 0 0 1 6.4 0V11" fill="none" stroke="currentColor" stroke-width="1.9"/>',
    'st-bad': '<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M9.2 9.2l5.6 5.6m0-5.6-5.6 5.6" fill="none" style="stroke:var(--surface)" stroke-width="2" stroke-linecap="round"/>'
  };
  let sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
  for (const k in P) sprite += `<symbol id="i-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${P[k]}</symbol>`;
  for (const k in S) sprite += `<symbol id="i-${k}" viewBox="0 0 24 24">${S[k]}</symbol>`;
  sprite += '</svg>';
  const ico = (n, c = '') => `<svg class="${n.startsWith('st-') ? 'st ' + n : 'i'} ${c}"><use href="#i-${n}"/></svg>`;
  window.ico = ico;

  const b = document.body;
  const q = new URLSearchParams(location.search);
  if (q.get('theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');
  b.insertAdjacentHTML('afterbegin', sprite);

  const page = document.getElementById('page');
  if (page) {
    const ws = b.dataset.ws || 'employee', act = b.dataset.active || '', mgr = b.dataset.role === 'manager';
    const a = (id, icon, label, extra = '') => `<a class="${act === id ? 'active' : ''}">${ico(icon)}<span>${label}</span>${extra}</a>`;
    // per-screen nav counts: <body data-counts='{"reviews":7}'>
    let counts = {}; try { counts = JSON.parse(b.dataset.counts || '{}'); } catch (e) {}
    const cnt = (id, d) => { const v = id in counts ? counts[id] : d; return v ? `<span class="cnt">${v}</span>` : ''; };
    // Optional user for the profile corner: <body data-user='{"name":"Omar Haddad","initials":"OH","role":"Systems Engineer"}'>
    let user = { name: 'Jordan Lee', initials: 'JL', role: 'Systems Engineer' }; try { Object.assign(user, JSON.parse(b.dataset.user || '{}')); } catch (e) {}
    const nav = ws === 'admin'
      ? `<div class="nav-sec" style="padding-top:2px">Admin console</div><nav class="nav">
          ${a('health', 'shield', 'Data health', '<span class="cnt alert">3</span>')}
          ${a('catalog', 'book', 'Catalog', '<span class="cnt">536</span>')}
          ${a('templates', 'route', 'Pathway templates', '<span class="cnt">4</span>')}
          ${a('rules', 'sliders', 'Rules &amp; populations')}
          ${a('sources', 'cloud', 'Sources', '<span class="cnt">5</span>')}
          ${a('access', 'key', 'Access')}
          ${a('audit', 'file', 'Audit log')}</nav>`
      : `<nav class="nav">
          ${a('today', 'home', 'Home')}
          ${a('find', 'book', 'Learning')}
          ${a('plan', 'target', 'Goals &amp; pathways')}
          ${a('colleagues', 'users', 'Colleagues')}</nav>
        ${mgr ? `<div class="nav-sec">My team</div><nav class="nav">
          ${a('reviews', 'inbox', 'Reviews', cnt('reviews', 4))}
          ${a('team', 'users', 'Team', cnt('team', 11))}
          ${a('insights', 'chart', 'Insights')}
          ${a('reports', 'file', 'Reports')}</nav>` : ''}`;
    const side = `<aside class="sidebar">
        <div class="ws-btn"><div class="mark">${ico('cap')}</div><b>Skill Portal</b>${ws === 'admin' ? '<span class="ws-tag">ADMIN</span>' : ''}${ico('cd', 'xs')}
          <div class="bell">${ico('bell', 'sm')}<span class="dot"></span></div></div>
        <div class="cmdk-btn">${ico('search', 'sm')}<span>Search or ask…</span><span class="kbd">Ctrl K</span></div>
        ${nav}
        <div class="side-foot"><nav class="nav">
          ${ws === 'admin' ? a('back', 'swap', 'Back to my portal') : a('admin', 'key', 'Admin console')}
          ${a('help', 'help', 'Help &amp; guides')}</nav></div></aside>`;
    // Profile corner, top right: the only thing above the page. Its menu: Profile, Connected agents, Theme, Sign out.
    const top = `<div class="utop"><div class="me-chip${act === 'me' ? ' active' : ''}" title="Profile, connected agents, theme, sign out">
        <div class="avatar">${user.initials}</div><div class="pc-who"><b>${user.name}</b><small>${user.role}</small></div>${ico('cd', 'xs')}</div></div>`;
    const shell = document.createElement('div');
    shell.className = 'app';
    shell.innerHTML = side + `<div class="main">${top}<div class="content" id="slot"></div></div>`;
    b.insertBefore(shell, page);
    document.getElementById('slot').appendChild(page);
  }
  // keep class and style on the placeholder so icons can be coloured directly: <i data-i="alert" class="c-warn">
  document.querySelectorAll('i[data-i]').forEach(el => {
    const style = el.getAttribute('style');
    el.outerHTML = ico(el.dataset.i, ((el.dataset.c || '') + ' ' + (el.getAttribute('class') || '')).trim()).replace('<svg ', style ? `<svg style="${style}" ` : '<svg ');
  });
})();
