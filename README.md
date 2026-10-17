# Portifolio
# Portfólio — Davi Nascimento

Portfólio de **Full Stack Developer e UI/UX Designer**, feito com HTML, CSS e JavaScript puros: sem frameworks, sem dependências e sem etapa de build. É só abrir o `index.html`.

## Destaques

- **Tema azul e branco** com hero em degradê, grid técnico e a logo como marca d'água animada.
- **Menu em tela cheia** que abre com um círculo se expandindo a partir do botão. A foto grande à direita troca a cada link em que o mouse passa, e há um selo circular girando e uma faixa de texto em movimento.
- **Carrosséis de imagens** nos cards de projeto, com troca automática, barra de progresso, setas, bolinhas e gesto de arrastar no celular.
- **Galeria** horizontal com arrastar, rolagem por setas e zoom suave ao passar o mouse.
- **Popup de contato:** ao clicar no e-mail, abre um formulário que envia a mensagem para o e-mail configurado.
- **Cursor customizado**, cards com inclinação 3D, linha do tempo que se desenha ao rolar e entrada suave das seções.
- **Responsivo** (desktop, tablet e celular), com foco visível no teclado e respeito a `prefers-reduced-motion`.

## Projetos apresentados

| Projeto | Tipo |
| --- | --- |
| Scuderia Pro Autoparts | E-commerce e site institucional do zero, com Mercado Livre e Shopee |
| Protect World | Plataforma de e-commerce completa, do banco de dados à interface |
| System Wave | Landing page com cursor customizado e artes para redes sociais |
| PlantSP | Interface de loja virtual de plantas |
| Roboteen | Interface de site para escola de robótica |
| Kombi and Dinosaurs | Página de divulgação de jogo |
| Modelagem 3D | Personagens e escultura no Blender |
| Rede corporativa | Topologia de rede por setores |
| Portfólio pessoal | Este próprio site |

## Como abrir

Dê dois cliques em `index.html`. Não precisa instalar nada.

Para publicar, envie a pasta inteira para qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Cloudflare Pages). O formulário de contato funciona melhor com o site já publicado.

## Estrutura

```
portfolio-davi-nascimento/
├── index.html              conteúdo e estrutura das seções
├── css/
│   └── style.css           cores, layout, animações e responsividade
├── js/
│   └── main.js             menu, carrosséis, galeria e popup de contato
├── assets/
│   ├── logo.png            logo (cabeçalho, marca d'água e favicon)
│   ├── foto-davi.jpg       foto do hero e do menu
│   ├── menu/               imagens grandes exibidas no menu em tela cheia
│   └── projetos/           fotos dos projetos (scuderia-1.jpg, pw-1.jpg...)
├── docs/                   prévias usadas neste README
└── README.md
```

## Como personalizar

**Cores.** Variáveis no começo de `css/style.css`, dentro de `:root` (`--blue`, `--blue-deep`, `--cyan`, `--white`, entre outras).

**Foto e logo.** Substitua `assets/foto-davi.jpg` (retrato, cerca de 1200 x 1500 px) e `assets/logo.png` (PNG com fundo transparente), mantendo os nomes.

**Textos.** Tudo está em `index.html`: apresentação, estatísticas, skills, projetos, experiência, formação e contato.

**Projetos e fotos.** Cada card de projeto em `index.html` tem um bloco como este:

```html
<div class="car pj-img" data-imgs="assets/projetos/scuderia-1.jpg,assets/projetos/scuderia-2.jpg"></div>
```

Para trocar ou acrescentar imagens, coloque os arquivos em `assets/projetos/` e liste os caminhos separados por vírgula, sem espaços. Uma imagem só mostra o card sem setas. A galeria é a lista `GALLERY` em `js/main.js`.

**Imagens do menu.** `assets/menu/` guarda as imagens exibidas ao passar o mouse em Skills, Projetos, Experiência e Contato. A de "Sobre" usa `foto-davi.jpg`. As referências estão em `VIEWS` no `js/main.js`.

**WhatsApp.** No começo de `js/main.js`, preencha `WHATSAPP_NUMERO` com código do país, DDD e número, só dígitos:

```js
const WHATSAPP_NUMERO = '5511999999999';
```

Enquanto estiver vazio, o botão de WhatsApp abre o formulário de contato.

**LinkedIn, GitHub e Instagram.** Em `index.html`, troque o `href="#"` desses links na seção de contato e no rodapé do menu pelas suas URLs.

**E-mail de contato.** Altere `EMAIL_CONTATO` no começo de `js/main.js` e o texto do e-mail em `index.html`.

## Formulário de contato

O popup envia a mensagem pelo serviço gratuito [FormSubmit](https://formsubmit.co) para o e-mail configurado em `EMAIL_CONTATO`.

1. Publique o site.
2. Envie uma mensagem de teste pelo formulário.
3. O FormSubmit manda um e-mail de confirmação para o seu endereço. Clique no link dele para ativar.

A partir daí as mensagens chegam na sua caixa de entrada, e você responde direto para quem escreveu. Se o envio falhar, o popup oferece abrir a mensagem no aplicativo de e-mail da pessoa.

Os dados digitados no formulário passam pelo FormSubmit; se preferir outro serviço ou um back-end próprio, a função de envio fica no final de `js/main.js`.

## Tecnologias

- HTML5, CSS3 (variáveis, grid, flexbox, `clip-path`, `mask-image`) e JavaScript (ES6+)
- Fontes: Space Grotesk, Inter e IBM Plex Mono, via Google Fonts (precisam de internet; sem ela o navegador usa uma fonte padrão)
- Formulário: FormSubmit

## Compatibilidade

Navegadores modernos (Chrome, Edge, Firefox e Safari recentes).

## Autor

**Davi dos Santos Nascimento**, Web Designer, UI/UX Designer e desenvolvedor Full Stack, São Paulo, SP.

Contato: davi.nascimento0907@gmail.com
