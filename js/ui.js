/* ==========================================================
   UI: interações (idioma, busca, abas, carrossel e rolagem)
   ========================================================== */
(function () {
  const P = window.Panela;
  const $ = (id) => document.getElementById(id);

  // Trava/destrava a rolagem do fundo (usado pela tela de idioma e pela foto)
  const lockScroll = (on) => { document.body.style.overflow = on ? "hidden" : ""; };

  // ---------- Idioma ----------
  function setLanguage(lang) {
    P.state.lang = lang;
    P.renderAll();
  }

  function initLanguage() {
    // Tela inicial
    document.querySelectorAll("#splash [data-lang]").forEach((btn) =>
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        $("splash").hidden = true;
        lockScroll(false);
        window.scrollTo(0, 0);
      })
    );

    // Menu de idioma da barra
    const menu = $("lang-menu"), button = $("lang-btn");
    const toggle = (open) => { menu.hidden = !open; button.setAttribute("aria-expanded", open); };
    button.addEventListener("click", (e) => { e.stopPropagation(); toggle(menu.hidden); });
    menu.querySelectorAll("[data-lang]").forEach((btn) =>
      btn.addEventListener("click", () => { setLanguage(btn.dataset.lang); toggle(false); })
    );
    document.addEventListener("click", () => toggle(false));
  }

  // ---------- Rolagem até uma categoria ----------
  // Altura das barras fixas (topo + abas) para o título não ficar escondido
  function stickyOffset() {
    const safe = parseFloat(getComputedStyle(document.documentElement).paddingTop) || 0;
    return safe + $("bar").offsetHeight + $("tabs").offsetHeight;
  }

  function scrollToSection(id) { scrollToEl($("sec-" + id)); }

  function scrollToEl(el) {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - stickyOffset() + 1;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  // ---------- Clicar na logo volta ao início da página (rolagem suave) ----------
  function initLogoTop() {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-top]").forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      })
    );
  }

  // A logo pequena só aparece na barra depois que a logo grande sai da tela
  function syncBarLogo() {
    const safe = parseFloat(getComputedStyle(document.documentElement).paddingTop) || 0;
    const gone = $("top").getBoundingClientRect().bottom <= safe + 40;
    $("bar").classList.toggle("is-scrolled", gone);
  }

  // ---------- Aba ativa conforme a rolagem ----------
  let currentId = null;

  P.updateActiveTab = function (force) {
    const sections = document.querySelectorAll(".sec");
    if (!sections.length) return;
    const line = stickyOffset() + 30;
    let active = sections[0].dataset.id;
    sections.forEach((s) => { if (s.getBoundingClientRect().top <= line) active = s.dataset.id; });
    if (active === currentId && !force) return;
    currentId = active;

    const scroller = $("tabs-scroll");
    document.querySelectorAll(".tab").forEach((tab) => {
      const on = tab.dataset.id === active;
      tab.classList.toggle("is-active", on);
      // move só a barra de abas na horizontal (nunca a página)
      if (on) {
        const left = tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2;
        if (scroller.scrollTo) scroller.scrollTo({ left: left, behavior: "smooth" });
        else scroller.scrollLeft = left;
      }
    });
  };

  function initScroll() {
    let waiting = false;
    window.addEventListener("scroll", () => {
      if (waiting) return;
      waiting = true;
      requestAnimationFrame(() => { waiting = false; P.updateActiveTab(); syncBarLogo(); });
    }, { passive: true });

    $("tabs-scroll").addEventListener("click", (e) => {
      const tab = e.target.closest(".tab");
      if (tab) scrollToSection(tab.dataset.id);
    });
    $("highlights").addEventListener("click", (e) => {
      const card = e.target.closest(".hl__card");
      if (card) scrollToSection(card.dataset.target);
    });
    // botões Seg, Ter, Qua… dos pratos do dia
    $("menu").addEventListener("click", (e) => {
      const btn = e.target.closest(".daynav button");
      if (btn) scrollToEl(document.querySelector('.day[data-days~="' + btn.dataset.day + '"]'));
    });
  }

  // ---------- Carrossel de destaques: setas, bolinhas e giro automático ----------
  function initCarousel() {
    const rail = $("highlights");
    const cards = () => rail.querySelectorAll(".hl__card");
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0, timer = null;

    function paintDots() {
      document.querySelectorAll("#hl-dots span").forEach((d, i) => d.classList.toggle("is-active", i === index));
    }

    function go(i) {
      const list = cards();
      if (!list.length) return;
      index = (i + list.length) % list.length;
      const el = list[index];
      const left = el.offsetLeft - 16; // 16px = espaço do início (igual ao CSS)
      if (rail.scrollTo) rail.scrollTo({ left: left, behavior: "smooth" });
      else rail.scrollLeft = left;
      paintDots();
    }

    // descobre qual cartão está visível quando a pessoa desliza com o dedo
    let waiting = false;
    rail.addEventListener("scroll", () => {
      if (waiting) return;
      waiting = true;
      requestAnimationFrame(() => {
        waiting = false;
        const list = cards();
        let best = 0, dist = Infinity;
        list.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - 16 - rail.scrollLeft);
          if (d < dist) { dist = d; best = i; }
        });
        // no fim da rolagem, o último cartão não alcança o início: considera-o ativo
        if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4) best = list.length - 1;
        if (best !== index) { index = best; paintDots(); }
      });
    }, { passive: true });

    // giro automático (para quando a pessoa toca/passa o mouse, ou se a tela está escondida)
    function stop() { clearInterval(timer); timer = null; }
    function start() {
      stop();
      if (reduceMotion) return;
      timer = setInterval(() => {
        const r = rail.getBoundingClientRect();
        if (document.hidden || r.bottom < 0 || r.top > window.innerHeight) return;
        go(index + 1);
      }, 4500);
    }
    ["pointerdown", "touchstart", "mouseenter", "focusin"].forEach((ev) =>
      $("highlights").parentElement.addEventListener(ev, stop, { passive: true }));
    ["touchend", "mouseleave", "focusout"].forEach((ev) =>
      $("highlights").parentElement.addEventListener(ev, () => setTimeout(start, 3000), { passive: true }));

    $("hl-prev").addEventListener("click", () => { go(index - 1); start(); });
    $("hl-next").addEventListener("click", () => { go(index + 1); start(); });

    paintDots();
    start();
  }

  // ---------- Busca ----------
  function initSearch() {
    $("search").addEventListener("input", (e) => {
      P.state.query = e.target.value;
      P.renderMenu();
      if (P.state.query) {
        // leva a tela para o início dos resultados
        const y = $("tabs").getBoundingClientRect().top + window.scrollY - stickyOffset() + $("tabs").offsetHeight;
        if (window.scrollY < y) window.scrollTo(0, y);
      }
    });
  }

  P.initUI = function () {
    initLanguage();
    initScroll();
    initLogoTop();
    initCarousel();
    initSearch();
    lockScroll(true); // a tela de idioma está aberta
    syncBarLogo();
  };
})();
