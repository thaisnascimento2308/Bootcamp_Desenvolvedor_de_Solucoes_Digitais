# 🐾 Web Pet Guide

## 📖 Sobre o projeto

O **Web Pet Guide** é um projeto educacional desenvolvido com **HTML5 e CSS3**, criado com o objetivo de apresentar informações sobre cuidados, alimentação, higiene, bem-estar e segurança dos animais de estimação.

O projeto também foi desenvolvido para colocar em prática conceitos de **HTML semântico, acessibilidade, CSS, Flexbox, responsividade e organização de estilos**.

---

## 🎯 Objetivos

* Praticar a estruturação de páginas utilizando **HTML5 semântico**;
* Aplicar conceitos de **CSS3**;
* Desenvolver uma página **responsiva**;
* Utilizar **Flexbox** para organização dos conteúdos;
* Trabalhar com **medidas flexíveis**;
* Aplicar uma identidade visual utilizando variáveis CSS;
* Implementar efeitos de `hover`;
* Utilizar recursos básicos de **acessibilidade**;
* Trabalhar com imagens, `alt`, `figure` e `figcaption`;
* Criar uma página adaptável para diferentes tamanhos de tela.

---

## 🧱 Estrutura HTML

A página foi desenvolvida utilizando elementos semânticos do HTML5, evitando o uso desnecessário de elementos genéricos.

Foram utilizados:

* `<header>` — cabeçalho da página;
* `<nav>` — menus de navegação;
* `<main>` — conteúdo principal;
* `<section>` — organização das áreas de conteúdo;
* `<article>` — conteúdos independentes e cards;
* `<figure>` — estrutura das imagens;
* `<figcaption>` — legendas das imagens;
* `<aside>` — informação complementar;
* `<footer>` — rodapé da página.

Essa estrutura melhora a organização do código e contribui para **acessibilidade, manutenção e compreensão do conteúdo**.

---

## 🎨 Identidade visual

O projeto utiliza uma paleta de cores baseada em tons de verde-azulado, laranja e tons neutros.

### Paleta utilizada

| Cor              | Código    | Aplicação              |
| ---------------- | --------- | ---------------------- |
| Verde principal  | `#2F6F73` | Elementos principais   |
| Verde escuro     | `#24575A` | Cabeçalho e rodapé     |
| Laranja          | `#F2A65A` | Destaques e interações |
| Coral            | `#E76F51` | Títulos e destaques    |
| Fundo            | `#F7FAF9` | Fundo geral            |
| Branco           | `#FFFFFF` | Cards e conteúdos      |
| Verde claro      | `#E8F3F2` | Área de destaque       |
| Texto            | `#263238` | Texto principal        |
| Texto secundário | `#5F6F73` | Textos complementares  |
| Borda            | `#D8E4E3` | Bordas dos cards       |

As cores foram organizadas utilizando **variáveis CSS**, facilitando futuras alterações na identidade visual.

---

## 📱 Responsividade

A página foi desenvolvida para funcionar em diferentes tamanhos de tela.

### 📱 Mobile

Em telas menores:

* Os cards ficam organizados em uma única coluna;
* A navegação passa para o formato vertical;
* Os conteúdos ocupam melhor o espaço disponível;
* As imagens se adaptam à largura dos cards;
* Os espaçamentos são reduzidos para melhorar a experiência de leitura.

### 📲 Tablet

Em tablets:

* Os cards são distribuídos em duas colunas;
* A galeria também utiliza duas colunas;
* Os elementos possuem dimensões flexíveis;
* O conteúdo aproveita melhor a largura disponível.

### 🖥️ Desktop

Em telas maiores:

* Os quatro cards de cuidados podem ser exibidos em uma linha;
* A galeria apresenta três imagens por linha;
* Os conteúdos educativos são organizados em duas colunas;
* O conteúdo principal possui largura máxima para melhorar a leitura.

---

## 📐 Flexbox

O projeto utiliza **CSS Flexbox** para organizar os principais elementos da página.

Foi utilizado, por exemplo:

```css
display: flex;
flex-wrap: wrap;
gap: var(--espacamento);
```

Os cards utilizam propriedades como:

```css
flex: 1 1 280px;
```

Isso permite que os elementos **cresçam, diminuam e quebrem linha automaticamente**, tornando o layout mais adaptável.

---

## 🖼️ Imagens responsivas

As imagens da galeria foram configuradas para acompanhar o tamanho dos cards.

Foi utilizado:

```css
width: 100%;
height: auto;
aspect-ratio: 4 / 3;
object-fit: cover;
```

Dessa forma, as imagens mantêm uma proporção consistente e não ficam deformadas quando o tamanho da tela é alterado.

---

## ✨ Interações

Foram adicionados efeitos de interação utilizando `:hover`.

Os cards possuem:

* Elevação visual;
* Alteração da borda;
* Sombra;
* Pequeno movimento vertical.

Na galeria, as imagens também possuem um efeito de zoom suave.

Exemplo:

```css
article:hover {
    transform: translateY(-5px);
}
```

---

## ♿ Acessibilidade

O projeto também considera alguns princípios básicos de acessibilidade.

Foram utilizados:

* Texto alternativo (`alt`) nas imagens;
* `aria-label` nos menus de navegação;
* `aria-labelledby` nas seções;
* Elementos HTML semânticos;
* Foco visível para navegação pelo teclado;
* Contraste entre texto e fundo;
* `prefers-reduced-motion` para usuários que preferem reduzir animações.

Exemplo:

```css
a:focus-visible {
    outline: 3px solid var(--cor-secundaria);
    outline-offset: 4px;
}
```

---

## 🐶 Conteúdo da página

O site apresenta conteúdos relacionados a:

### Cuidados essenciais

Informações sobre:

* Saúde;
* Acompanhamento veterinário;
* Higiene;
* Cuidados diários.

### Alimentação

Aborda:

* Alimentação equilibrada;
* Necessidades específicas dos animais;
* Importância da hidratação;
* Disponibilidade de água fresca.

### Bem-estar

Apresenta informações sobre:

* Atividade física;
* Brincadeiras;
* Estímulos;
* Carinho;
* Interação;
* Descanso.

### Cuidados importantes

Foram desenvolvidos quatro cards:

1. Alimentação;
2. Higiene;
3. Exercícios;
4. Segurança.

### Galeria

A página possui uma galeria com seis animais:

* 🐱 Gato;
* 🐶 Golden Retriever;
* 🐦 Pardal;
* 🐰 Coelho;
* 🐟 Peixes;
* 🦊 Raposa.

Cada imagem possui descrição alternativa e legenda utilizando `figure` e `figcaption`.

---

## 📂 Estrutura do projeto

```text
Web-Pet-Guide/
│
├── index.html
├── style.css
└── README.md
```

### `index.html`

Responsável pela estrutura e conteúdo da página utilizando HTML5 semântico.

### `style.css`

Responsável pela aparência visual, cores, espaçamentos, Flexbox, responsividade, efeitos e acessibilidade.

### `README.md`

Documentação do projeto, apresentando seus objetivos, tecnologias e principais funcionalidades.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* Flexbox
* CSS Variables
* Media Queries
* Responsive Design
* Acessibilidade Web

---

## 📚 Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos de:

* HTML semântico;
* Estrutura de documentos HTML;
* CSS;
* Seletores CSS;
* Variáveis CSS;
* Box Model;
* Flexbox;
* `flex-wrap`;
* `gap`;
* `clamp()`;
* `min()`;
* `max()`;
* `calc()`;
* `aspect-ratio`;
* `object-fit`;
* Media Queries;
* Design Responsivo;
* Pseudo-classes;
* Transições;
* Acessibilidade;
* Organização e reutilização de estilos.

---

## 🌐 Imagens

As imagens utilizadas na galeria são provenientes de fontes públicas, principalmente do **Wikimedia Commons**.

A autoria, licença e requisitos de atribuição devem ser verificados na página original de cada imagem utilizada.

---

## 👩‍💻 Projeto educacional

Este projeto foi desenvolvido como parte dos estudos de **Desenvolvimento Web**, com foco na prática de HTML5, CSS3, semântica, acessibilidade e desenvolvimento responsivo.

---

## 📌 Status

**Concluído — Projeto educacional**

O projeto pode receber futuras melhorias, como:

* JavaScript para interações;
* formulário de contato;
* menu mobile interativo;
* modo escuro;
* novas categorias de cuidados;
* melhorias de acessibilidade;
* otimização das imagens.

## 👩‍💻 Autora

**Thais Nascimento**

Projeto desenvolvido para fins educacionais e de prática em desenvolvimento web.
