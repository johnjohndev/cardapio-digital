/* Categoria: Pratos do dia */
window.Panela = window.Panela || {};
Panela.MENU = Panela.MENU || [];
Panela.MENU.push({
  id: "pratos-do-dia",
  groupBy: "days",   // mostra um bloco para cada dia da semana
  name: { pt: "Pratos do dia", en: "Dishes of the day", es: "Platos del día" },
  items: [
    {
      id: "a-almondegas",
      name: { pt: "A. Almôndegas", en: "A. Meatballs", es: "A. Albóndigas" },
      price: 31.90,
      days: ["seg"],
      extras: false,
      image: "images/pratos-do-dia/a-almondegas.jpg",
      desc: {
        pt: "Almôndegas de carne bovina ao molho de tomate, acompanhadas de purê de batatas cremoso, arroz branco e feijão.",
        en: "Beef meatballs in tomato sauce, served with creamy mashed potatoes, white rice and beans.",
        es: "Albóndigas de res en salsa de tomate, acompañadas de puré de papas cremoso, arroz blanco y frijoles."
      }
    },
    {
      id: "a-jardineira",
      name: { pt: "A. Jardineira", en: "A. Beef and Vegetable Stew", es: "A. Carne a la Jardinera" },
      price: 31.90,
      days: ["seg"],
      extras: false,
      image: "images/pratos-do-dia/a-jardineira.jpg",
      desc: {
        pt: "Carne bovina cozida com legumes variados, como batata, cenoura e ervilha, em molho temperado, acompanhada de arroz branco e feijão.",
        en: "Beef and vegetable stew (jardineira) prepared with potatoes, carrots and peas in a seasoned sauce, served with white rice and beans.",
        es: "Carne de res guisada con verduras variadas, como papas, zanahorias y guisantes, en salsa condimentada, acompañada de arroz blanco y frijoles."
      }
    },
    {
      id: "b-costelinha",
      name: { pt: "B. Costelinha", en: "B. Pork Ribs", es: "B. Costillitas de Cerdo" },
      price: 31.90,
      days: ["ter"],
      extras: false,
      image: "images/pratos-do-dia/b-costelinha.jpg",
      desc: {
        pt: "Costelinha de porco assada, suculenta e bem temperada, acompanhada de arroz branco, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Roasted pork ribs, tender and well-seasoned, served with white rice, beans and your choice of side: salad or fries.",
        es: "Costillitas de cerdo asadas, jugosas y bien condimentadas, acompañadas de arroz blanco, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "b-strogonoffe",
      name: { pt: "B. Strogonoffe", en: "B. Beef Stroganoff", es: "B. Strogonoff de Carne" },
      price: 31.90,
      days: ["ter"],
      extras: false,
      image: "images/pratos-do-dia/b-strogonoffe.jpg",
      desc: {
        pt: "Strogonoffe de carne bovina com tiras de carne ao molho cremoso, acompanhado de arroz branco, feijão e batata palha.",
        en: "Beef stroganoff, tender strips of beef in a creamy sauce, served with white rice, beans and crispy shoestring potatoes.",
        es: "Strogonoff de res con tiras de carne en salsa cremosa, acompañado de arroz blanco, frijoles y papas paja crujientes."
      }
    },
    {
      id: "c-carne-assada",
      name: { pt: "C. Carne Assada", en: "C. Roast Beef", es: "C. Carne Asada" },
      price: 31.90,
      days: ["qua"],
      extras: false,
      image: "images/pratos-do-dia/c-carne-assada.jpg",
      desc: {
        pt: "Carne bovina assada, macia e suculenta, servida ao molho da casa, acompanhada de arroz branco, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Roast beef, tender and juicy, served with house sauce, white rice, beans and your choice of side: salad or fries.",
        es: "Carne de res asada, tierna y jugosa, servida con salsa de la casa, arroz blanco, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "c-frango-ao-molho",
      name: { pt: "C. Frango ao Molho", en: "C. Chicken in Sauce", es: "C. Pollo en Salsa" },
      price: 31.90,
      days: ["qua"],
      extras: false,
      image: "images/pratos-do-dia/c-frango-ao-molho.jpg",
      desc: {
        pt: "Frango ao molho, macio e bem temperado, acompanhado de arroz branco, feijão e salada de maionese de batatas.",
        en: "Chicken in sauce, tender and well-seasoned, served with white rice, beans and potato mayonnaise salad.",
        es: "Pollo guisado en salsa, tierno y bien condimentado, acompañado de arroz blanco, frijoles y ensalada de papas con mayonesa."
      }
    },
    {
      id: "d-costela-de-boi",
      name: { pt: "D. Costela de Boi", en: "D. Beef Ribs", es: "D. Costilla de Res" },
      price: 31.90,
      days: ["qui"],
      extras: false,
      image: "images/pratos-do-dia/d-costela-de-boi.jpg",
      desc: {
        pt: "Costela bovina cozida lentamente, macia e suculenta, preparada com agrião e molho bem temperado, acompanhada de arroz branco e feijão.",
        en: "Slow-cooked beef ribs with watercress, tender and juicy in a seasoned sauce, served with white rice and beans.",
        es: "Costillas de res cocidas a fuego lento, tiernas y jugosas, preparadas con berros y salsa bien condimentada, acompañadas de arroz blanco y frijoles."
      }
    },
    {
      id: "d-panqueca",
      name: { pt: "D. Panqueca", en: "D. Savory Pancakes", es: "D. Panqueca (Crepas Saladas)" },
      price: 31.90,
      days: ["qui"],
      extras: false,
      image: "images/pratos-do-dia/d-panqueca.jpg",
      desc: {
        pt: "Panquecas recheadas com carne bovina moída ou frango desfiado, cobertas com molho de tomate temperado, acompanhadas de arroz branco e feijão.",
        en: "Savory pancakes stuffed with minced beef or shredded chicken, topped with a seasoned tomato sauce, served with white rice and beans.",
        es: "Panqueques rellenos de carne de res molida o pollo desmenuzado, cubiertos con salsa de tomate condimentada, acompañados de arroz blanco y frijoles."
      }
    },
    {
      id: "e-carre-a-mineira",
      name: { pt: "E. Carré à Mineira", en: "E. Minas-Style Pork Loin", es: "E. Chuleta de Cerdo a la Mineira" },
      price: 31.90,
      days: ["sex"],
      extras: false,
      image: "images/pratos-do-dia/e-carre-a-mineira.jpg",
      desc: {
        pt: "Prato de carré suíno grelhado, acompanhado de arroz branco, feijão, linguiça e couve refogada.",
        en: "Minas-style grilled pork chop plate, served with white rice, beans, sausage and sautéed collard greens.",
        es: "Plato de chuleta de cerdo a la plancha, acompañado de arroz blanco, frijoles, salchicha y col rizada salteada."
      }
    },
    {
      id: "e-pf-feijoada",
      name: { pt: "E. PF Feijoada", en: "E. Feijoada Plate", es: "E. Plato de Feijoada" },
      price: 39.90,
      days: ["sex", "sab"],
      extras: false,
      image: "images/pratos-do-dia/e-pf-feijoada.jpg",
      desc: {
        pt: "Prato individual. Feijoada brasileira preparada com feijão-preto, linguiça, carne-seca, lombo e costelinha suína, acompanhada de arroz branco, couve refogada, torresmo crocante, farofa e laranja.",
        en: "Individual plate. Brazilian feijoada made with black beans, sausage, dried beef, pork loin and pork ribs, served with white rice, sautéed collard greens, crispy pork rinds, farofa (toasted cassava flour) and orange.",
        es: "Plato individual. Feijoada brasileña preparada con frijoles negros, salchicha, carne de res salada y curada, lomo y costillas de cerdo, acompañada de arroz blanco, col rizada salteada, chicharrones crujientes, farofa (harina de mandioca tostada) y naranja."
      }
    },
    {
      id: "feijoada-para-3-pessoas",
      name: { pt: "Feijoada para 3 pessoas", en: "Feijoada for 3 people", es: "Feijoada para 3 personas" },
      price: 110.90,
      days: ["sex", "sab"],
      extras: false,
      image: "images/pratos-do-dia/feijoada-para-3-pessoas.jpg",
      desc: {
        pt: "Feijoada grande, para 3 pessoas. Feijoada brasileira preparada com feijão-preto, linguiça, carne-seca, lombo e costelinha suína, acompanhada de arroz branco, couve refogada, torresmo crocante, farofa e laranja.",
        en: "Large feijoada, serves 3 people. Brazilian feijoada made with black beans, sausage, dried beef, pork loin and pork ribs, served with white rice, sautéed collard greens, crispy pork rinds, farofa (toasted cassava flour) and orange.",
        es: "Feijoada grande, para 3 personas. Feijoada brasileña preparada con frijoles negros, salchicha, carne de res salada y curada, lomo y costillas de cerdo, acompañada de arroz blanco, col rizada salteada, chicharrones crujientes, farofa (harina de mandioca tostada) y naranja."
      }
    },
    {
      id: "feijoada-para-2-pessoas",
      name: { pt: "Feijoada para 2 pessoas", en: "Feijoada for 2 people", es: "Feijoada para 2 personas" },
      price: 76.90,
      days: ["sex", "sab"],
      extras: false,
      image: "images/pratos-do-dia/feijoada-para-2-pessoas.jpg",
      desc: {
        pt: "Feijoada pequena, para 2 pessoas. Feijoada brasileira preparada com feijão-preto, linguiça, carne-seca, lombo e costelinha suína, acompanhada de arroz branco, couve refogada, torresmo crocante, farofa e laranja.",
        en: "Small feijoada, serves 2 people. Brazilian feijoada made with black beans, sausage, dried beef, pork loin and pork ribs, served with white rice, sautéed collard greens, crispy pork rinds, farofa (toasted cassava flour) and orange.",
        es: "Feijoada pequeña, para 2 personas. Feijoada brasileña preparada con frijoles negros, salchicha, carne de res salada y curada, lomo y costillas de cerdo, acompañada de arroz blanco, col rizada salteada, chicharrones crujientes, farofa (harina de mandioca tostada) y naranja."
      }
    }
  ]
});
