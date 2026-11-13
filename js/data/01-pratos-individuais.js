/* Categoria: Pratos individuais */
window.Panela = window.Panela || {};
Panela.MENU = Panela.MENU || [];
Panela.MENU.push({
  id: "pratos-individuais",
  name: { pt: "Pratos individuais", en: "Individual plates", es: "Platos individuales" },
  items: [
    {
      id: "alcatra-a-gaucha",
      name: { pt: "Alcatra à Gaúcha", en: "Rump Steak Gaúcha-Style", es: "Alcatra a la Gaucha" },
      price: 47.90,
      days: [],
      extras: true,
      image: "images/pratos-individuais/alcatra-a-gaucha.jpg",
      desc: {
        pt: "Prato de alcatra grelhada, linguiça e ovo frito, com farofa. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled rump steak with sausage, fried egg and farofa (toasted cassava flour). Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de res a la parrilla (alcatra) con salchicha, huevo frito y farofa (harina de mandioca tostada). Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "bife-de-alcatra",
      name: { pt: "Bife de Alcatra", en: "Grilled Rump Steak", es: "Bife de Alcatra" },
      price: 43.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/bife-de-alcatra.jpg",
      desc: {
        pt: "Prato de alcatra grelhada. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled rump steak. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de res (alcatra) a la parrilla. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "bife-a-milanesa",
      name: { pt: "Bife à Milanesa", en: "Breaded Beef Steak", es: "Bife a la Milanesa" },
      price: 41.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/bife-a-milanesa.jpg",
      desc: {
        pt: "Prato de bife bovino à milanesa. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Breaded beef steak. Served with rice, beans and your choice of side: salad or fries.",
        es: "Bife de res empanado. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "bife-a-parmegiana",
      name: { pt: "Bife à Parmegiana", en: "Beef Parmigiana", es: "Bife a la Parmesana" },
      price: 51.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/bife-a-parmegiana.jpg",
      desc: {
        pt: "Prato de bife bovino à parmegiana, coberto com molho de tomate e queijo derretido. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Beef steak parmigiana: breaded beef steak topped with tomato sauce and melted cheese. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de res empanado a la parmesana, cubierto con salsa de tomate y queso fundido. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "calabresa-acebolada",
      name: { pt: "Calabresa Acebolada", en: "Calabresa Sausage with Onions", es: "Calabresa con Cebolla" },
      price: 34.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/calabresa-acebolada.jpg",
      desc: {
        pt: "Prato de calabresa acebolada. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Brazilian sausage (calabresa) with onions. Served with rice, beans and your choice of side: salad or fries.",
        es: "Salchicha brasileña (calabresa) con cebolla. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "carne-seca",
      name: { pt: "Carne Seca", en: "Brazilian Salt-Cured Beef", es: "Carne Seca" },
      price: 42.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/carne-seca.jpg",
      desc: {
        pt: "Prato de carne seca (carne bovina salgada e curada). Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Brazilian salt-cured beef (carne seca). Served with rice, beans and your choice of side: salad or fries.",
        es: "Carne de res salada y curada (carne seca brasileña). Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "carre-suino",
      name: { pt: "Carré Suíno", en: "Grilled Pork Chop", es: "Chuleta de Cerdo" },
      price: 37.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/carre-suino.jpg",
      desc: {
        pt: "Prato de carré suíno grelhado. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled pork chop. Served with rice, beans and your choice of side: salad or fries.",
        es: "Chuleta de cerdo a la plancha. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "espaguete-ao-molho-de-camarao",
      name: { pt: "Espaguete ao Molho de Camarão", en: "Spaghetti with Prawn Sauce", es: "Espagueti con Salsa de Camarones" },
      price: 48.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/espaguete-ao-molho-de-camarao.jpg",
      desc: {
        pt: "Espaguete ao molho de camarão, preparado com camarões suculentos envolvidos em molho de tomate temperado.",
        en: "Spaghetti with prawn sauce, served with succulent prawns in a seasoned tomato sauce.",
        es: "Espagueti a la salsa de camarones, preparado con camarones jugosos en una salsa de tomate condimentada."
      }
    },
    {
      id: "espaguete-a-bolonhesa",
      name: { pt: "Espaguete à Bolonhesa", en: "Spaghetti Bolognese", es: "Espagueti a la Boloñesa" },
      price: 34.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/espaguete-a-bolonhesa.jpg",
      desc: {
        pt: "Espaguete ao molho à bolonhesa, preparado com carne moída e molho de tomate temperado.",
        en: "Spaghetti Bolognese, served with minced beef in a seasoned tomato sauce.",
        es: "Espagueti a la boloñesa, preparado con carne molida y salsa de tomate condimentada."
      }
    },
    {
      id: "espetinho-misto",
      name: { pt: "Espetinho Misto", en: "Mixed Grilled Skewers", es: "Brocheta Mixta" },
      price: 45.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/espetinho-misto.jpg",
      desc: {
        pt: "Prato de espetinho misto com carne bovina, filé de frango e linguiça grelhados. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Mixed grilled skewer plate with beef, chicken fillet and grilled sausage. Served with rice, beans and your choice of side: salad or fries.",
        es: "Plato de brocheta mixta con carne de res, filete de pollo y salchicha a la parrilla. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "frango-com-brocolis",
      name: { pt: "Frango com Brócolis", en: "Fish or Chicken with Broccoli Rice", es: "Pollo con Brócoli" },
      price: 41.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/frango-com-brocolis.jpg",
      desc: {
        pt: "Prato feito (PF) de peixe ou frango, acompanhado de arroz com brócolis, feijão e opção de salada ou batata frita.",
        en: "Fish or chicken plate, served with broccoli rice, beans and your choice of side: salad or fries.",
        es: "Plato de pescado o pollo, acompañado de arroz con brócoli, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "frango-grelhado",
      name: { pt: "Frango Grelhado", en: "Grilled Chicken", es: "Pollo a la Plancha" },
      price: 37.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/frango-grelhado.jpg",
      desc: {
        pt: "Prato de filé de frango grelhado. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled chicken fillet. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de pollo a la plancha. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "frango-a-milanesa",
      name: { pt: "Frango à Milanesa", en: "Breaded Chicken", es: "Pollo a la Milanesa" },
      price: 38.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/frango-a-milanesa.jpg",
      desc: {
        pt: "Prato de filé de frango à milanesa. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Breaded chicken fillet. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de pollo empanado. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "frango-a-parmegiana",
      name: { pt: "Frango à Parmegiana", en: "Chicken Parmigiana", es: "Pollo a la Parmesana" },
      price: 48.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/frango-a-parmegiana.jpg",
      desc: {
        pt: "Prato de filé de frango à parmegiana, coberto com molho de tomate e queijo derretido. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Chicken parmigiana: breaded chicken fillet topped with tomato sauce and melted cheese. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de pollo empanado a la parmesana, cubierto con salsa de tomate y queso fundido. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "isca-de-figado",
      name: { pt: "Isca de Fígado", en: "Grilled Beef Liver", es: "Hígado de Res a la Plancha" },
      price: 34.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/isca-de-figado.jpg",
      desc: {
        pt: "Prato de iscas de fígado bovino grelhadas e temperadas. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled and seasoned beef liver strips. Served with rice, beans and your choice of side: salad or fries.",
        es: "Tiras de hígado de res a la plancha y condimentadas. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "omelete-misto",
      name: { pt: "Omelete Misto", en: "Mixed Omelette", es: "Tortilla Mixta" },
      price: 38.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/omelete-misto.jpg",
      desc: {
        pt: "Prato de omelete recheado com presunto, queijo, tomate e cebola. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Omelette filled with ham, cheese, tomato and onion. Served with rice, beans and your choice of side: salad or fries.",
        es: "Tortilla de huevos rellena de jamón, queso, tomate y cebolla. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "peixe-com-arroz-de-brocolis",
      name: { pt: "Peixe com Arroz de Brócolis", en: "Fish with Broccoli Rice", es: "Pescado con Arroz con Brócoli" },
      price: 41.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/peixe-com-arroz-de-brocolis.jpg",
      desc: {
        pt: "Prato de filé de peixe à dorê acompanhado de arroz de brócolis, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Battered fish fillet with broccoli rice and beans, plus your choice of side: salad or fries.",
        es: "Filete de pescado rebozado y frito con arroz con brócoli y frijoles, más una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "peixe-a-dore",
      name: { pt: "Peixe à Dorê", en: "Battered Fish Fillet", es: "Pescado Rebozado" },
      price: 37.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/peixe-a-dore.jpg",
      desc: {
        pt: "Prato de filé de peixe à dorê. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Battered fish fillet. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de pescado rebozado y frito. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "peixe-ao-molho-de-camarao",
      name: { pt: "Peixe ao Molho de Camarão", en: "Fish with Prawn Sauce", es: "Pescado con Salsa de Camarones" },
      price: 48.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/peixe-ao-molho-de-camarao.jpg",
      desc: {
        pt: "Prato de filé de peixe com molho de camarão. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Fish fillet with prawn sauce. Served with rice, beans and your choice of side: salad or fries.",
        es: "Filete de pescado con salsa de camarones. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    },
    {
      id: "picanha",
      name: { pt: "Picanha", en: "Grilled Picanha", es: "Picaña a la Parrilla" },
      price: 64.90,
      days: [],
      extras: false,
      image: "images/pratos-individuais/picanha.jpg",
      desc: {
        pt: "Prato de picanha grelhada. Acompanha arroz, feijão e acompanhamento à escolha: salada ou batata frita.",
        en: "Grilled picanha steak (rump cap). Served with rice, beans and your choice of side: salad or fries.",
        es: "Picaña a la parrilla. Acompañado de arroz, frijoles y una guarnición a elegir: ensalada o papas fritas."
      }
    }
  ]
});
