/* ==========================================================
   DESTAQUES DO CARROSSEL (os cartões logo abaixo da barra)
   - target: id da categoria para onde o cartão leva ao tocar
   - image:  foto de fundo
   O primeiro cartão ("hoje") é montado automaticamente
   pelo dia da semana (veja render.js).
   ========================================================== */
window.Panela = window.Panela || {};

Panela.HIGHLIGHTS = [
  { type: "today", target: "pratos-do-dia" },
  {
    target: "pratos-do-dia",
    image: "images/pratos-do-dia/feijoada-para-3-pessoas.jpg",
    title:    { pt: "Feijoada", en: "Feijoada", es: "Feijoada" },
    subtitle: { pt: "Sextas e sábados", en: "Fridays and Saturdays", es: "Viernes y sábados" }
  },
  {
    target: "pizza-broto",
    image: "images/pizza-broto/marguerita-broto.jpg",
    title:    { pt: "Pizzas", en: "Pizzas", es: "Pizzas" },
    subtitle: { pt: "Broto, média e grande, após as 17h", en: "Small, medium and large, after 5 pm", es: "Pequeña, mediana y grande, después de las 17 h" }
  },
  {
    target: "petiscos",
    image: "images/petiscos/bolinho-de-bacalhau.jpg",
    title:    { pt: "Petiscos", en: "Appetizers and snacks", es: "Aperitivos y tapas" },
    subtitle: { pt: "Bolinho de bacalhau, pastel e mais", en: "Codfish fritters, pastries and more", es: "Croquetas de bacalao, empanadillas y más" }
  }
];
