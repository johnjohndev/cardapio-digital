/* ==========================================================
   CARDS: abrir e fechar o prato (foto grande atrás da descrição)
   - tocar na miniatura abre; tocar de novo (ou em qualquer parte do
     card aberto) fecha.
   - a foto grande só é baixada quando o card abre (economiza dados).
   ========================================================== */
(function () {
  const P = window.Panela;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Carrega a foto grande uma única vez, na primeira abertura
  function loadPhoto(card) {
    const holder = card.querySelector(".item__photo");
    const img = holder.querySelector("img");
    if (img.getAttribute("src")) return;
    const src = card.dataset.photo;
    // endereço completo: dentro do CSS, um caminho relativo seria lido a partir da pasta css/
    holder.style.setProperty("--photo", 'url("' + new URL(src, document.baseURI).href + '")');
    img.addEventListener("load", () => {
      if (img.naturalWidth < 400) card.classList.add("is-lowres"); // foto pequena: usa fundo desfocado
      card.classList.add("is-ready");
    }, { once: true });
    img.addEventListener("error", () => card.classList.add("is-ready"), { once: true });
    img.src = src;
  }

  function setOpen(card, open) {
    const lang = P.state.lang;
    const thumb = card.querySelector(".item__thumb");
    card.classList.toggle("is-open", open);
    thumb.setAttribute("aria-expanded", String(open));
    thumb.setAttribute("aria-label", P.TEXTS[open ? "closePhoto" : "viewPhoto"][lang] + ": " + card.dataset.name);

    if (open) {
      loadPhoto(card);
      // quando a animação termina, garante que o card inteiro apareça na tela
      clearTimeout(card._scrollTimer);
      card._scrollTimer = setTimeout(() => {
        if (card.classList.contains("is-open")) {
          card.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
        }
      }, 460);
    }
  }

  P.initCards = function () {
    const menu = document.getElementById("menu");

    // começa a baixar a foto assim que o dedo encosta (antes do clique)
    menu.addEventListener("pointerdown", (e) => {
      const thumb = e.target.closest(".item__thumb");
      if (thumb) loadPhoto(thumb.closest(".item"));
    }, { passive: true });

    menu.addEventListener("click", (e) => {
      const card = e.target.closest(".item");
      if (!card) return;
      const isOpen = card.classList.contains("is-open");
      if (e.target.closest(".item__thumb") || isOpen) setOpen(card, !isOpen);
    });
  };
})();
