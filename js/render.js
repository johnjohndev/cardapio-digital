/* ==========================================================
   RENDER: desenha na tela os textos, destaques, abas e pratos
   (não cuida de cliques; isso está em ui.js)
   ========================================================== */
(function () {
  const P = window.Panela;
  const $ = (id) => document.getElementById(id);

  P.state = { lang: "pt", query: "" };

  const text = (key) => P.TEXTS[key][P.state.lang];
  P.formatPrice = (n) => "R$ " + n.toFixed(2).replace(".", ",");

  // Chave do dia de hoje no fuso do Rio ("seg"… "sab"), ou null no domingo
  P.todayKey = function () {
    const w = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: P.CONFIG.timezone }).format(new Date());
    return { Mon: "seg", Tue: "ter", Wed: "qua", Thu: "qui", Fri: "sex", Sat: "sab" }[w] || null;
  };

  // ---------- Textos fixos (elementos com data-i18n) e contatos ----------
  P.renderStatic = function () {
    const lang = P.state.lang, C = P.CONFIG;
    document.documentElement.lang = P.HTML_LANG[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = text(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = text(el.dataset.i18nPlaceholder); });

    $("lang-current").textContent = lang.toUpperCase();
    document.querySelectorAll("#lang-menu button").forEach((b) => b.setAttribute("aria-current", b.dataset.lang === lang));

    $("whatsapp").href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(text("whatsappMessage"));
    document.querySelectorAll("[data-top]").forEach((el) => el.setAttribute("aria-label", text("backToTop")));
    $("hl-prev").setAttribute("aria-label", text("prev"));
    $("hl-next").setAttribute("aria-label", text("next"));
    $("whatsapp-sub").textContent = "WhatsApp " + C.phoneDisplay;
    const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(C.address);
    ["address-link", "footer-address"].forEach((id) => { $(id).href = maps; });
    $("address-text").textContent = C.address;
    $("footer-address").textContent = C.address;
    $("instagram-link").href = "https://www.instagram.com/" + C.instagram;
    $("instagram-text").textContent = "@" + C.instagram;
  };

  // ---------- Carrossel de destaques ----------
  P.renderHighlights = function () {
    const lang = P.state.lang;
    const dishes = P.MENU.find((s) => s.id === "pratos-do-dia");
    const today = dishes.items.filter((i) => i.days.includes(P.todayKey()));

    $("highlights").innerHTML = P.HIGHLIGHTS.map((h) => {
      let title, subtitle, image;
      if (h.type === "today") {
        title = text("todayTitle");
        subtitle = today.length ? today.map((i) => i.name[lang]).join(" / ") : text("todayFallback");
        image = today.length ? today[0].image : dishes.items[0].image;
      } else {
        title = h.title[lang]; subtitle = h.subtitle[lang]; image = h.image;
      }
      return `<button class="hl__card" data-target="${h.target}">
        <img src="${image}" alt="" loading="lazy">
        <div class="hl__text"><h2>${title}</h2><p>${subtitle}</p></div>
      </button>`;
    }).join("");

    // bolinhas de posição (uma por cartão)
    $("hl-dots").innerHTML = P.HIGHLIGHTS.map(() => "<span></span>").join("");
  };

  // ---------- Abas e lista de pratos (respeita a busca) ----------
  function matches(item, q) {
    if (!q) return true;
    const lang = P.state.lang;
    return (item.name[lang] + " " + item.desc[lang]).toLowerCase().includes(q);
  }

  // escapa texto que vai dentro de atributos HTML
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  // miniatura leve: images/<categoria>/thumbs/<arquivo>.jpg
  P.thumbOf = (src) => src.replace(/([^/]+)$/, "thumbs/$1");

  function itemHtml(item, showDay) {
    const lang = P.state.lang, name = item.name[lang];
    const days = item.days.map((d) => P.DAYS[d][lang]).join(text("and"));
    return `<article class="item" data-photo="${item.image}" data-name="${esc(name)}">
      <!-- foto grande e degradê: ficam atrás de tudo e só aparecem com o card aberto -->
      <div class="item__photo" aria-hidden="true"><img alt=""></div>
      <div class="item__shade" aria-hidden="true"></div>

      <div class="item__row">
        <div class="item__meta">
          <h4 class="item__title">${name}</h4>
          ${showDay && days ? `<span class="item__day">${days}</span>` : ""}
          <div class="item__price">${P.formatPrice(item.price)}</div>
          ${item.extras ? `<span class="item__extras">${text("extras")}</span>` : ""}
        </div>
        <button class="item__thumb" type="button" aria-expanded="false" aria-label="${text("viewPhoto")}: ${esc(name)}">
          <img src="${P.thumbOf(item.image)}" alt="" loading="lazy">
          <span class="item__zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg></span>
          <span class="item__close" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></span>
        </button>
      </div>

      <div class="item__stage" aria-hidden="true"></div>
      <p class="item__desc">${item.desc[lang]}</p>
    </article>`;
  }

  // Pratos do dia: botões de dia + um bloco para cada dia da semana
  function daysHtml(items) {
    const lang = P.state.lang, today = P.todayKey();
    const groups = [];
    items.forEach((i) => {
      const key = i.days.join(" ");
      let g = groups.find((x) => x.key === key);
      if (!g) groups.push(g = { key, days: i.days, items: [] });
      g.items.push(i);
    });
    const nav = Object.keys(P.DAYS_SHORT).map((d) =>
      `<button type="button" data-day="${d}"${d === today ? ' class="is-today"' : ""}>${P.DAYS_SHORT[d][lang]}</button>`).join("");
    const blocks = groups.map((g) => `<div class="day" data-days="${g.key}">
      <h3 class="day__title">${g.days.map((d) => P.DAYS[d][lang]).join(text("and"))}${g.days.includes(today) ? `<span class="day__badge">${text("today")}</span>` : ""}</h3>
      <div class="list">${g.items.map((i) => itemHtml(i, false)).join("")}</div>
    </div>`).join("");
    return `<div class="daynav">${nav}</div>${blocks}`;
  }

  P.renderMenu = function () {
    const lang = P.state.lang, q = P.state.query.trim().toLowerCase();
    let tabs = "", sections = "";

    P.MENU.forEach((sec) => {
      const items = sec.items.filter((i) => matches(i, q));
      if (!items.length) return;
      tabs += `<button class="tab" data-id="${sec.id}">${sec.name[lang]}</button>`;
      sections += `<section class="sec" id="sec-${sec.id}" data-id="${sec.id}">
        <h2>${sec.name[lang]}</h2>
        ${sec.note ? `<p class="sec__note">${sec.note[lang]}</p>` : ""}
        ${sec.groupBy === "days" && !q ? daysHtml(items) : `<div class="list">${items.map((i) => itemHtml(i, true)).join("")}</div>`}
      </section>`;
    });

    $("tabs-scroll").innerHTML = tabs;
    $("menu").innerHTML = sections || `<p class="empty">${text("noResults")}</p>`;
    P.updateActiveTab(true);
  };

  P.renderAll = function () {
    P.renderStatic();
    P.renderHighlights();
    P.renderMenu();
  };
})();
