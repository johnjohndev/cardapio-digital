/* ==========================================================
   MAIN: ponto de partida. Desenha a página e liga as interações.
   ========================================================== */
(function () {
  const P = window.Panela;
  P.renderAll();   // começa em português, por trás da tela de idioma
  P.initUI();
  P.initCards();   // abrir/fechar os pratos (js/cards.js)
})();
