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

# 📊 Comparação dos projetos

| Característica          | Projeto 1 | Projeto 2 |
| ----------------------- | --------- | --------- |
| HTML5                   | ✅         | ✅         |
| Estrutura HTML          | ✅         | ✅         |
| CSS3                    | ❌         | ✅         |
| HTML semântico          | Básico    | ✅         |
| Flexbox                 | ❌         | ✅         |
| Responsividade          | Básica    | ✅         |
| Media Queries           | ❌         | ✅         |
| CSS Variables           | ❌         | ✅         |
| Cards                   | ❌         | ✅         |
| Galeria                 | Básica    | ✅         |
| `figure` / `figcaption` | ❌         | ✅         |
| Acessibilidade          | Básica    | ✅         |
| Efeitos `hover`         | ❌         | ✅         |
| Design responsivo       | ❌         | ✅         |

---

# 📈 Evolução do aprendizado

Os dois projetos representam uma evolução gradual no desenvolvimento web.

### Projeto 1

**HTML → Estrutura**

O foco principal foi compreender como uma página web é construída utilizando HTML.

⬇️

### Projeto 2

**HTML Semântico → CSS → Flexbox → Responsividade → Acessibilidade**

No segundo projeto, os conhecimentos foram ampliados para criar uma página mais estruturada, visualmente organizada e adaptável a diferentes dispositivos.

---

# 🛠️ Tecnologias

### Projeto 1

* HTML5

### Projeto 2

* HTML5
* CSS3
* Flexbox
* CSS Variables
* Media Queries
* Responsive Design
* Acessibilidade Web

---

# 📂 Organização do repositório

```text
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
└── README.md
```

---

# 🎓 Contexto

Os projetos foram desenvolvidos como parte da jornada de aprendizado em **Desenvolvimento Web**, com o objetivo de transformar conceitos teóricos em aplicações práticas.

A evolução entre os projetos demonstra a aplicação progressiva de conceitos relacionados à construção, estilização, organização e adaptação de páginas web.

---

# 📌 Status

| Projeto                   | Status      |
| ------------------------- | ----------- |
| Projeto 1 — Página HTML   | ✅ Concluído |
| Projeto 2 — Web Pet Guide | ✅ Concluído |

---

## 👩‍💻 Autora

**Thais Nascimento**

Projeto desenvolvido para fins educacionais e de prática em desenvolvimento web.
