# Cardápio digital – Restaurante Panela Caseira

Abra o `index.html` no navegador (ou hospede a pasta inteira em qualquer site, como o Netlify).

## Estrutura
```
index.html            estrutura da página (HTML)
css/
  variables.css       cores, fontes e medidas
  base.css            reset e regras gerais
  header.css          logo, barra do topo, destaques e contato
  menu.css            abas das categorias e pratos do dia (Seg…Sáb)
  item.css            card do prato: miniatura, expansão e foto grande
  overlays.css        tela de idioma e rodapé
js/
  config.js           WhatsApp, Instagram e endereço
  i18n.js             textos da página em PT / EN / ES
  highlights.js       cartões do carrossel de destaques
  data/               um arquivo por categoria do cardápio
  render.js           desenha a página na tela
  ui.js               idioma, busca, abas, carrossel e rolagem
  cards.js            abrir e fechar o prato (foto grande atrás da descrição)
  main.js             inicialização
images/
  logo/               logo do restaurante e favicon
  <categoria>/        uma foto grande por prato (ex.: images/petiscos/pastel-com-6.jpg)
  <categoria>/thumbs/ miniatura leve da lista (mesmo nome do arquivo grande)
  extras/             fotos que ainda não têm prato no cardápio
```

## Como o prato abre
Ao tocar na miniatura, o card cresce com uma transição suave e a foto grande aparece atrás da
descrição. Tocar de novo (na miniatura ou no card aberto) fecha. A foto grande só é baixada
quando o card abre, para a lista carregar rápido no celular.

## Como editar
- **Preço, nome ou descrição de um prato:** abra o arquivo da categoria em `js/data/`.
- **Trocar a foto de um prato:** substitua `images/<categoria>/<prato>.jpg` (foto grande) e
  `images/<categoria>/thumbs/<prato>.jpg` (miniatura quadrada, ~240 px), mantendo o mesmo nome.
  Fotos com menos de 400 px de largura aparecem inteiras sobre um fundo desfocado.
- **Novo prato:** copie um bloco `{ ... }` dentro de `items`, troque os textos e coloque a foto
  grande e a miniatura nas pastas da categoria.
- **Nova categoria:** crie um arquivo em `js/data/`, copie o formato de outro e adicione a linha
  `<script>` em `index.html`.
- **Telefone, Instagram ou endereço:** `js/config.js`.
- **Cores:** `css/variables.css`.
