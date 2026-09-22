# 🚀 Projetos — Desenvolvimento Web

Repositório destinado aos projetos desenvolvidos durante os estudos de **Desenvolvimento Web**, com foco na prática de **HTML5, CSS3, semântica, acessibilidade, responsividade e organização de código**.

Os projetos representam etapas diferentes do aprendizado, começando pela construção de uma página HTML e evoluindo para uma aplicação com maior preocupação com **semântica, experiência do usuário e design responsivo**.

---

# 📌 Projeto 1 — Página HTML

## 📖 Sobre

O primeiro projeto teve como objetivo colocar em prática os **fundamentos do HTML5**, trabalhando a estrutura básica de uma página web e a organização do conteúdo.

A proposta foi compreender como os elementos HTML são utilizados para construir a estrutura de uma página antes da aplicação de estilos mais avançados.

## 🎯 Objetivos

* Aprender a estrutura básica de um documento HTML;
* Utilizar corretamente as principais tags HTML;
* Organizar conteúdos utilizando títulos e parágrafos;
* Trabalhar com listas e links;
* Inserir imagens;
* Criar uma estrutura de página organizada;
* Praticar a criação de páginas web do zero.

## 🧱 Estrutura

O projeto utiliza elementos HTML para estruturar:

* Títulos;
* Parágrafos;
* Links;
* Listas;
* Imagens;
* Seções de conteúdo.

## 🛠️ Tecnologia utilizada

* HTML5

## 📚 Conceitos praticados

* Estrutura de documentos HTML;
* Tags HTML;
* Hierarquia de títulos;
* Parágrafos;
* Listas;
* Links;
* Imagens;
* Atributos HTML;
* Organização do conteúdo.

---

# 🐾 Projeto 2 — Web Pet Guide

## 📖 Sobre

O segundo projeto representa uma evolução em relação ao primeiro, utilizando conceitos de **HTML5 semântico e CSS3** para desenvolver uma página educativa sobre cuidados com animais de estimação.

O projeto apresenta informações sobre **alimentação, higiene, saúde, bem-estar, exercícios e segurança dos pets**, além de uma galeria de animais.

O desenvolvimento teve como foco a criação de uma página organizada, acessível e adaptável a diferentes dispositivos.

## 🎯 Objetivos

* Praticar HTML5 semântico;
* Utilizar CSS3 para estilização;
* Desenvolver um layout responsivo;
* Utilizar Flexbox;
* Trabalhar com medidas flexíveis;
* Criar cards de conteúdo;
* Criar uma galeria responsiva;
* Aplicar efeitos de interação;
* Trabalhar conceitos básicos de acessibilidade;
* Utilizar variáveis CSS para organização das cores.

---

## 🧱 HTML Semântico

O projeto utiliza diferentes elementos semânticos do HTML5, incluindo:

```html
<header>
<nav>
<main>
<section>
<article>
<figure>
<figcaption>
<aside>
<footer>
```

A utilização desses elementos melhora a organização estrutural da página e facilita a compreensão do conteúdo por navegadores, mecanismos de busca e tecnologias assistivas.

---

## 🎨 CSS e identidade visual

Foi criada uma identidade visual própria utilizando variáveis CSS.

### Paleta de cores

| Cor              | Código    |
| ---------------- | --------- |
| Verde principal  | `#2F6F73` |
| Verde escuro     | `#24575A` |
| Laranja          | `#F2A65A` |
| Coral            | `#E76F51` |
| Fundo            | `#F7FAF9` |
| Branco           | `#FFFFFF` |
| Verde claro      | `#E8F3F2` |
| Texto            | `#263238` |
| Texto secundário | `#5F6F73` |
| Borda            | `#D8E4E3` |

As cores foram definidas utilizando **CSS Custom Properties**, facilitando a manutenção e alteração da identidade visual.

---

## 📐 Flexbox

O layout utiliza **Flexbox** para organizar os conteúdos e cards.

Foram utilizados recursos como:

```css
display: flex;
flex-wrap: wrap;
gap;
flex;
```

Essa abordagem permite que os elementos se adaptem ao espaço disponível sem depender de larguras fixas.

---

## 📱 Design Responsivo

O projeto foi desenvolvido para diferentes tamanhos de tela.

### 📱 Mobile

* Cards em uma coluna;
* Navegação vertical;
* Imagens adaptáveis;
* Espaçamentos reduzidos;
* Conteúdo ocupando melhor o espaço disponível.

### 📲 Tablet

* Cards distribuídos em duas colunas;
* Galeria organizada em duas colunas;
* Elementos dimensionados de forma flexível.

### 🖥️ Desktop

* Quatro cards de cuidados em uma linha;
* Galeria com três cards por linha;
* Maior aproveitamento do espaço horizontal;
* Conteúdo centralizado e limitado a uma largura adequada para leitura.

---

## 🖼️ Galeria de Pets

A página possui uma galeria com seis animais:

1. 🐱 Gato;
2. 🐶 Golden Retriever;
3. 🐦 Pardal;
4. 🐰 Coelho;
5. 🐟 Peixes;
6. 🦊 Raposa.

As imagens utilizam:

```html
<figure>
    <img>
    <figcaption>
</figure>
```

Também foram utilizados textos alternativos (`alt`) para melhorar a acessibilidade.

---

## ✨ Interações

Foram implementados efeitos visuais utilizando CSS.

Os cards apresentam:

* Elevação ao passar o mouse;
* Alteração da borda;
* Sombra;
* Transições suaves.

As imagens da galeria também possuem um pequeno efeito de zoom.

---

## ♿ Acessibilidade

Foram aplicadas algumas práticas básicas de acessibilidade:

* Textos alternativos nas imagens;
* HTML semântico;
* `aria-label`;
* `aria-labelledby`;
* Foco visível para navegação pelo teclado;
* Contraste entre elementos;
* Suporte à preferência de redução de movimento.

---

👗 Projeto 3 — Lili Elegancia Plus
📖 Sobre

O terceiro projeto representa uma nova etapa na evolução dos estudos de Desenvolvimento Web, introduzindo React.js e componentização.

O projeto consiste em uma página de uma loja fictícia de roupas plus size, chamada Lili Elegancia Plus.

A aplicação foi desenvolvida com foco em uma estrutura simples e organizada, utilizando componentes funcionais do React, HTML semântico, CSS separado por componente, responsividade e acessibilidade.

🎯 Objetivos
Introduzir React.js;
Criar componentes funcionais;
Compreender a composição de componentes;
Separar a interface em diferentes partes;
Utilizar JSX;
Praticar HTML semântico dentro do React;
Organizar CSS por componente;
Utilizar Flexbox;
Utilizar CSS Grid;
Desenvolver uma interface responsiva;
Aplicar boas práticas de acessibilidade;
Trabalhar a organização de um projeto React com Vite.
⚛️ React e Componentização

A página foi dividida em três componentes principais:

App
│
├── Header
├── Main
└── Footer

O App.jsx é responsável por reunir os componentes e definir a ordem em que eles aparecem na página.

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

Essa organização facilita a compreensão, manutenção e evolução da aplicação.

🧩 Header

O componente Header.jsx é responsável pelo cabeçalho da página.

Ele apresenta:

Nome da loja;
Frase de autoestima;
Menu de navegação;
Links para as seções da página.

Foi utilizado HTML semântico:

<header>
<nav>
<ul>
<li>
<a>

Também foi utilizado:

aria-label="Navegação principal"

para auxiliar usuários que utilizam tecnologias assistivas.

🏠 Main

O componente Main.jsx representa o conteúdo principal da aplicação.

A seção apresenta:

Título principal;
Texto de apresentação;
Cards de produtos;
Área de feedbacks.

Os cards foram estruturados utilizando:

<article>

permitindo uma organização semântica do conteúdo.

👗 Cards

A página apresenta três cards:

Vestidos
Conjuntos
Acessórios

Cada card possui um título e uma descrição curta.

🦶 Footer

O componente Footer.jsx representa o rodapé da aplicação.

Ele apresenta:

Missão concluída!

E a mensagem:

Projeto desenvolvido para aprender React.js.

🎨 Organização dos estilos

Diferentemente dos projetos anteriores, o terceiro projeto organiza o CSS separadamente para cada componente.

components/
│
├── Header.jsx
├── Header.css
│
├── Main.jsx
├── Main.css
│
├── Footer.jsx
└── Footer.css

Essa organização permite que cada componente mantenha seus estilos relacionados de maneira mais clara.

📐 Flexbox e CSS Grid

O projeto utiliza Flexbox para organização de elementos como:

Cabeçalho;
Menu;
Footer;
Áreas de conteúdo.

Também utiliza CSS Grid para organizar os cards.

No mobile:

grid-template-columns: 1fr;

No tablet:

grid-template-columns: repeat(2, 1fr);

No desktop:

grid-template-columns: repeat(3, 1fr);

Dessa forma, os cards se adaptam ao tamanho disponível.

📱 Responsividade

O projeto utiliza uma abordagem Mobile First, permitindo adaptação para:

📱 Smartphone
Cards em uma coluna;
Menu adaptável;
Espaçamentos menores;
Conteúdo ajustado à largura da tela.
📲 Tablet
Cards organizados em duas colunas;
Maior aproveitamento do espaço disponível.
🖥️ Desktop
Três cards lado a lado;
Conteúdo centralizado;
Maior aproveitamento da largura da tela.

Foram utilizadas unidades flexíveis como:

rem
%
vw
clamp()
♿ Acessibilidade

O projeto aplica práticas de acessibilidade, incluindo:

HTML semântico;
aria-label;
aria-labelledby;
Foco visível para navegação pelo teclado;
Contraste adequado;
Áreas de toque maiores nos links;
Textos com boa legibilidade;
Estrutura de títulos organizada.
🛠️ Tecnologias utilizadas
⚛️ React.js
⚡ Vite
🟨 JavaScript
🌐 HTML5
🎨 CSS3
📐 Flexbox
🗂️ CSS Grid
♿ Acessibilidade Web
📱 Responsive Design
📊 Comparação dos projetos
Característica	Projeto 1	Projeto 2	Projeto 3
HTML5	✅	✅	✅
CSS3	❌	✅	✅
HTML semântico	Básico	✅	✅
Flexbox	❌	✅	✅
CSS Grid	❌	❌	✅
Responsividade	Básica	✅	✅
Media Queries	❌	✅	✅
CSS Variables	❌	✅	—
Cards	❌	✅	✅
Galeria	Básica	✅	❌
figure / figcaption	❌	✅	❌
React.js	❌	❌	✅
JSX	❌	❌	✅
Componentes funcionais	❌	❌	✅
CSS separado por componente	❌	❌	✅
Acessibilidade	Básica	✅	✅
Efeitos hover	❌	✅	✅
Design responsivo	❌	✅	✅
📈 Evolução do aprendizado

Os três projetos representam uma evolução gradual no desenvolvimento web.

Projeto 1

HTML → Estrutura

O foco principal foi compreender como uma página web é construída utilizando HTML.

⬇️

Projeto 2

HTML Semântico → CSS → Flexbox → Responsividade → Acessibilidade

No segundo projeto, os conhecimentos foram ampliados para criar uma página mais estruturada, visualmente organizada e adaptável a diferentes dispositivos.

⬇️

Projeto 3

React → JSX → Componentização → CSS Grid → Responsividade → Acessibilidade

No terceiro projeto, o aprendizado avançou para o desenvolvimento de interfaces utilizando React.js e componentes funcionais.

A página passou a ser dividida em partes independentes:

Header
   ↓
Main
   ↓
Footer

Essa evolução representa a passagem de páginas HTML tradicionais para uma abordagem baseada em componentes reutilizáveis e organização modular.

🛠️ Tecnologias

Projeto 1
HTML5
Projeto 2
HTML5
CSS3
Flexbox
CSS Variables
Media Queries
Responsive Design
Acessibilidade Web
Projeto 3
React.js
Vite
JavaScript
JSX
HTML5
CSS3
Flexbox
CSS Grid
Media Queries
Responsive Design
Acessibilidade Web

📂 Organização do repositório

projetos-desenvolvimento-web/
│
├── Projeto_1/
│   ├── index.html
│   └── README.md
│
├── Projeto_2/
│   ├── index.html
│   ├── style.css
│   └── README.md
│
├── Projeto_3/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Main.jsx
│   │   │   ├── Main.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── README.md
│
└── README.md

🎓 Contexto

Os projetos foram desenvolvidos como parte da jornada de aprendizado em Desenvolvimento Web, com o objetivo de transformar conceitos teóricos em aplicações práticas.

A evolução entre os projetos demonstra a aplicação progressiva de conceitos relacionados à construção, estilização, organização, acessibilidade, adaptação de páginas web e desenvolvimento de interfaces utilizando React.

📌 Status
Projeto	Status
Projeto 1 — Página HTML	✅ Concluído
Projeto 2 — Web Pet Guide	✅ Concluído
Projeto 3 — Lili Elegancia Plus	🚧 Em desenvolvimento

👩‍💻 Autora

Thais Nascimento

Projeto desenvolvido para fins educacionais e de prática em desenvolvimento web.

🔗 GitHub:
https://github.com/thaisnascimento2308

🔗 LinkedIn:
https://linkedin.com/in/thais-nascimento-dev/
