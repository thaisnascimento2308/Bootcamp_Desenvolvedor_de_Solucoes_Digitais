# 👗 Lili Elegancia Plus

Uma aplicação web desenvolvida em **React.js + Vite** para simular um e-commerce fictício de roupas plus size.

O projeto foi desenvolvido como parte do **🚀 Desafio 02: Painel Interativo com API Pública**, com foco no consumo de uma API REST, manipulação de dados, componentização, responsividade e interação com o usuário.

---

## 📖 O que é?

O **Lili Elegancia Plus** é um projeto educacional criado para praticar conceitos fundamentais do desenvolvimento Front-End com **React.js**, utilizando dados reais fornecidos por uma API pública.

A aplicação utiliza a **Fake Store API** para buscar informações de produtos e apresentá-las de maneira organizada através de cards.

Além da visualização dos produtos, o usuário pode utilizar o campo de **busca** para encontrar produtos pelo nome.

O projeto permite praticar:

* 🔌 Consumo de API REST;
* ⚛️ Componentes funcionais no React;
* 🪝 `useState`;
* 🪝 `useEffect`;
* 📡 Axios;
* 🔎 Filtragem de dados;
* 🔄 Renderização dinâmica com `.map()`;
* 📱 Responsividade;
* ♿ Acessibilidade;
* 🎨 Organização de CSS;
* 🧩 Componentização.
---

## 💡 Problemática

Atualmente, muitas informações estão disponíveis através de APIs públicas, porém os dados retornados precisam ser organizados para que possam ser apresentados de maneira simples e compreensível para o usuário.

A proposta deste projeto é transformar os dados disponibilizados por uma API pública em uma interface visual organizada, permitindo que o usuário consulte e pesquise produtos de maneira simples.
---

## 🎯 Objetivo

Desenvolver uma aplicação React funcional e responsiva capaz de:

* Consumir uma API pública;
* Apresentar os dados recebidos de forma organizada;
* Utilizar estados do React;
* Criar componentes com responsabilidades claras;
* Permitir interação com os dados;
* Criar uma interface responsiva;
* Praticar o consumo de uma API REST;
* Documentar o desenvolvimento do projeto.
---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Front-End

* ⚛️ React.js
* ⚡ Vite
* 🟨 JavaScript (ES6+)
* 🌐 HTML5
* 🎨 CSS3
* 📡 Axios

### API

* 🛒 Fake Store API

Endpoint utilizado:

https://fakestoreapi.com/products

### Conceitos Aplicados

* 📦 Componentização
* 🪝 `useState`
* 🪝 `useEffect`
* 🔌 Consumo de API REST
* 🔎 `filter()`
* 🔄 `map()`
* 📱 Responsividade
* ♿ Acessibilidade
* 🎨 CSS Grid
* 🏗️ HTML semântico

### Ferramentas

* 💻 Visual Studio Code
* 🐙 Git
* 🌍 GitHub
* 🚀 Vite
---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

* Node.js
* Git

Verifique as versões:

node -v

git --version
---

### 1. Clonar o repositório
git clone URL_DO_REPOSITORIO

> Substitua `URL_DO_REPOSITORIO` pelo endereço do repositório no GitHub.
---

### 2. Entrar na pasta do projeto
cd meu-projeto
---

### 3. Instalar as dependências
npm install
---

### 4. Instalar o Axios
npm install axios
---

### 5. Executar o projeto
bash
npm run dev

---

### 6. Abrir no navegador
Normalmente o projeto será executado em:

http://localhost:5173

O endereço exato será informado pelo Vite no terminal.
---

## ⚙️ Como Funciona?

A aplicação utiliza a arquitetura baseada em componentes do React.

O componente `Main` é responsável pelo consumo da API e pela apresentação dos produtos.

O fluxo principal da aplicação funciona da seguinte maneira:

Fake Store API
      ↓
     Axios
      ↓
   useEffect
      ↓
   response.data
      ↓
   setProducts()
      ↓
    useState
      ↓
      map()
      ↓
Cards de produtos

O usuário também pode realizar uma busca:

Usuário digita
      ↓
   useState
      ↓
    filter()
      ↓
Produtos filtrados
      ↓
Cards atualizados
---

## 📂 Estrutura do Projeto

src/
│
├── components/
│   │
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Main/
│   │   ├── Main.jsx
│   │   └── Main.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── App.jsx
├── App.css
├── main.jsx
└── style.css

---

## 🧩 Componentes

### 🧩 Header

Responsável por:

* Exibir o nome da aplicação;
* Apresentar uma breve mensagem relacionada à proposta da loja.

Tecnologias utilizadas:

* HTML semântico;
* CSS;
* Responsividade.
---

### 🧩 Main

É o principal componente da aplicação.

Responsável por:

* Consumir a Fake Store API;
* Armazenar os produtos utilizando `useState`;
* Realizar a requisição através do Axios;
* Utilizar `useEffect` para realizar a requisição quando o componente é montado;
* Criar a busca de produtos;
* Filtrar os produtos utilizando `filter()`;
* Renderizar os produtos utilizando `map()`;
* Exibir os cards dos produtos.

Cada card apresenta:

* 🖼️ Imagem;
* 📝 Título;
* 💰 Preço.

Exemplo de renderização:

jsx
products.map((product) => (
  <article key={product.id}>
    <img
      src={product.image}
      alt={product.title}
    />

    <h3>{product.title}</h3>

    <p>{product.price}</p>
  </article>
))
---

### 🧩 Footer

Responsável por:

* Exibir os direitos reservados;
* Finalizar visualmente a aplicação.

Tecnologias utilizadas:

* HTML semântico;
* CSS;
* Responsividade.
---

## 🔌 Consumo da API

A aplicação utiliza o **Axios** para realizar uma requisição HTTP GET:

javascript
const response = await axios.get(
  'https://fakestoreapi.com/products'
);

Após a resposta da API, os dados são armazenados no estado:

javascript
setProducts(response.data);

Dessa forma, os produtos recebidos ficam disponíveis para serem apresentados na interface.
---

## 🪝 useEffect

O `useEffect` é utilizado para executar a requisição quando o componente `Main` é montado.

javascript
useEffect(() => {
  pegarDados();
}, []);

O array de dependências vazio `[]` faz com que o efeito seja executado na montagem do componente.
---

## 🪝 useState

O `useState` é utilizado para armazenar os produtos recebidos da API:

javascript
const [products, setProducts] = useState([]);

Também é utilizado para armazenar o texto digitado pelo usuário no campo de busca:

javascript
const [search, setSearch] = useState('');
---

## 🔎 Busca de Produtos

A aplicação possui uma funcionalidade de interação através de uma busca por nome.

O usuário pode digitar o nome ou parte do nome de um produto.

O método `filter()` é utilizado para criar uma nova lista com os produtos correspondentes:

javascript
const produtosFiltrados = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);

O resultado da busca é apresentado automaticamente na interface.

Caso nenhum produto seja encontrado, a aplicação apresenta uma mensagem informando:

Nenhum produto encontrado.
---

## 🃏 Renderização dos Produtos

O método `.map()` é utilizado para percorrer os produtos recebidos pela API.

Para cada produto, um card é criado dinamicamente.

Isso permite que a aplicação apresente qualquer quantidade de produtos retornados pela API sem precisar criar os cards manualmente.
---

## 🎨 Organização do CSS

O projeto utiliza CSS separado por componente:

Header.css
Main.css
Footer.css

Essa organização facilita:

* ✅ Manutenção;
* ✅ Organização;
* ✅ Leitura do código;
* ✅ Separação de responsabilidades;
* ✅ Evolução do projeto.

Os estilos globais ficam separados dos estilos específicos dos componentes.
---

## 📱 Responsividade

O projeto foi desenvolvido para funcionar adequadamente em diferentes tamanhos de tela:

* 📱 Smartphones;
  -- 📲 Tablets;
* 💻 Desktops.

O layout dos produtos utiliza **CSS Grid**.

Em telas maiores, os produtos são apresentados em múltiplas colunas.

Em telas menores, a quantidade de colunas é reduzida para facilitar a visualização.

No smartphone, os produtos são apresentados em uma única coluna.
---

## ♿ Acessibilidade

Foram aplicadas boas práticas de acessibilidade, incluindo:

* HTML semântico;
* `alt` descritivo nas imagens;
* Uso do título do produto fornecido pela API no `alt`;
* `label` associado ao campo de busca;
* Foco visível no campo de pesquisa;
* Elementos com tamanho adequado para interação.

Exemplo:

jsx
<img
  src={product.image}
  alt={product.title}
/>

O atributo `alt` utiliza o próprio título fornecido pela API.
---

## 🌎 Onde Posso Acessar?

### 💻 Projeto local

http://localhost:5173

### 🚀 Vercel

Link da aplicação publicada:

A adicionar após o deploy

### 🌐 Netlify

Link da aplicação publicada:

A adicionar após o deploy
---

## 💻 Repositório

### GitHub

Repositório do projeto:

A adicionar/confirmar após o envio do projeto
---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Ela foi utilizada para:

* pesquisar e compreender conceitos;
* auxiliar na organização dos componentes;
* compreender o consumo da API;
* identificar e corrigir erros;
* auxiliar na implementação da busca;
* melhorar a organização do código;
* auxiliar na responsividade;
* melhorar a documentação do projeto.

A IA foi utilizada como apoio ao desenvolvimento, sendo necessário compreender o funcionamento do código e das decisões utilizadas na aplicação.

### 📌 Prompt utilizado

> "Atue como um Desenvolvedor Front-end Senior e Especialista em Ensino de React. Crie uma aplicação web didática em React chamada Lili Elegância Plus, que consiste em um e-commerce fictício voltado para o aprendizado prático de consumo de APIs REST. Utilize axios para buscar os dados da Fake Store API, useEffect com array de dependências vazio e useState para armazenar os produtos. A aplicação deve possuir Header, Main e Footer, cards de produtos, CSS responsivo e comentários didáticos no código."

### 🎯 Objetivo

Utilizei esse prompt para compreender como estruturar uma aplicação React que consome uma API pública, organiza os dados recebidos em componentes e apresenta os produtos de forma responsiva.

A IA também foi utilizada como apoio para compreender e corrigir problemas encontrados durante o desenvolvimento.
---

## 📚 Objetivo Acadêmico

Este projeto foi desenvolvido com fins educacionais para praticar:

* React.js;
* Vite;
* Componentes funcionais;
* `useState`;
* `useEffect`;
* Axios;
* Consumo de API REST;
* `map()`;
* `filter()`;
* JavaScript;
* CSS moderno;
* CSS Grid;
* Responsividade;
* Acessibilidade;
* Organização de projetos Front-End.
---

## ✅ Checklist do Desafio 02

* [x] React + Vite
* [x] API pública
* [x] Axios
* [x] Dados da API apresentados na interface
* [x] Componentes separados
* [x] Interação com os dados
* [x] Busca por produto
* [x] Responsividade
* [x] CSS separado por componente
* [x] Acessibilidade básica
* [x] README documentado
* [x] Uso de IA documentado
* [x] Repositório publicado no GitHub
* [x] Aplicação publicada na Vercel ou Netlify
---

## 👩‍💻 Quem Desenvolveu?

### Thais do Nascimento

Estudante de Engenharia de Software e desenvolvedora Front-End em formação.

🔗 GitHub:

https://github.com/thaisnascimento2308

🔗 LinkedIn:

https://linkedin.com/in/thais-nascimento-dev/
---

⭐ Projeto desenvolvido para fins educacionais como parte do **Desafio 02 — Painel Interativo com API Pública**.
