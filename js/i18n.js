/* ==========================================================
   TEXTOS DA PÁGINA nos 3 idiomas (pt, en, es)
   Os nomes e descrições dos pratos ficam em js/data/.
   ========================================================== */
window.Panela = window.Panela || {};

Panela.LANGS = ["pt", "en", "es"];
Panela.HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };

Panela.TEXTS = {
  searchPlaceholder: { pt: "Buscar no cardápio", en: "Search the menu", es: "Buscar en el menú" },
  contactTitle:      { pt: "Contate-nos!", en: "Contact us!", es: "¡Contáctanos!" },
  whatsappMessage:   {
    pt: "Olá! Vim pelo cardápio digital da Panela Caseira e gostaria de saber mais informações.",
    en: "Hello! I came from the Panela Caseira digital menu and would like more information.",
    es: "¡Hola! Vengo del menú digital de Panela Caseira y me gustaría saber más información."
  },
  today:             { pt: "Hoje", en: "Today", es: "Hoy" },
  backToTop:         { pt: "Voltar ao início", en: "Back to top", es: "Volver al inicio" },
  viewPhoto:         { pt: "Ver foto", en: "View photo", es: "Ver foto" },
  closePhoto:        { pt: "Fechar foto", en: "Close photo", es: "Cerrar foto" },
  prev:              { pt: "Anterior", en: "Previous", es: "Anterior" },
  next:              { pt: "Próximo", en: "Next", es: "Siguiente" },
  since:             { pt: "Desde 1992", en: "Since 1992", es: "Desde 1992" },
  noResults:         { pt: "Nenhum prato encontrado.", en: "No dishes found.", es: "No se encontraron platos." },
  extras:            { pt: "+ adicionais", en: "+ extras", es: "+ adicionales" },
  and:               { pt: " e ", en: " & ", es: " y " },

  // Cartão "hoje no cardápio" do carrossel
  todayTitle:        { pt: "Hoje no cardápio", en: "On today’s menu", es: "Hoy en el menú" },
  todayFallback:     { pt: "Veja os pratos de cada dia da semana", en: "See the dishes for each day of the week", es: "Mira los platos de cada día de la semana" }
};

// Dias da semana usados nos pratos do dia (chaves: seg, ter, qua, qui, sex, sab)
Panela.DAYS = {
  seg: { pt: "Segunda-feira", en: "Monday",    es: "Lunes" },
  ter: { pt: "Terça-feira",   en: "Tuesday",   es: "Martes" },
  qua: { pt: "Quarta-feira",  en: "Wednesday", es: "Miércoles" },
  qui: { pt: "Quinta-feira",  en: "Thursday",  es: "Jueves" },
  sex: { pt: "Sexta-feira",   en: "Friday",    es: "Viernes" },
  sab: { pt: "Sábado",        en: "Saturday",  es: "Sábado" }
};

// Nomes curtos para os botões de dia da semana
Panela.DAYS_SHORT = {
  seg: { pt: "Seg", en: "Mon", es: "Lun" },
  ter: { pt: "Ter", en: "Tue", es: "Mar" },
  qua: { pt: "Qua", en: "Wed", es: "Mié" },
  qui: { pt: "Qui", en: "Thu", es: "Jue" },
  sex: { pt: "Sex", en: "Fri", es: "Vie" },
  sab: { pt: "Sáb", en: "Sat", es: "Sáb" }
};
