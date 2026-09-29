import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  /*
    products armazena todos os produtos recebidos da API.

    setProducts é responsável por atualizar essa lista.
  */
  const [products, setProducts] = useState([]);

  /*
    search armazena o texto digitado pelo usuário
    no campo de busca.

    Dessa forma, conseguimos criar uma interação
    entre o usuário e os dados da API.
  */
  const [search, setSearch] = useState('');

  /*
    Função responsável por consumir a API.

    axios.get() realiza uma requisição HTTP GET
    para buscar os produtos.
  */
  const pegarDados = async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products'
    );

    /*
      response.data contém os produtos retornados pela API.

      setProducts atualiza o estado com os dados recebidos.
    */
    setProducts(response.data);
  };

  /*
    O useEffect é executado quando o componente
    Main é montado.

    O array vazio [] significa que a requisição
    será realizada uma vez.
  */
  useEffect(() => {
    pegarDados();
  }, []);

  /*
    O filter() cria uma nova lista contendo apenas
    os produtos cujo título possui o texto digitado.

    toLowerCase() permite que a busca não diferencie
    letras maiúsculas de minúsculas.
  */
  const produtosFiltrados = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="main">
      <section className="products-section">

        <div className="intro">
          <h2>Produtos</h2>

          <p>
            Explore nossa coleção e encontre o produto
            que combina com você.
          </p>
        </div>

        {/* Campo de busca utilizado como interação */}
        <div className="search-container">
          <label htmlFor="search">
            Buscar produto
          </label>

          <input
            id="search"
            type="search"
            placeholder="Digite o nome de um produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {/*
          O map() percorre a lista filtrada e cria
          um card para cada produto.
        */}
        <section className="products-grid">
          {produtosFiltrados.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              <div className="product-info">
                <h3>{product.title}</h3>

                <p className="product-price">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/*
          Se a busca não encontrar nenhum produto,
          mostramos uma mensagem para o usuário.
        */}
        {produtosFiltrados.length === 0 && (
          <p className="no-results">
            Nenhum produto encontrado.
          </p>
        )}

      </section>
    </main>
  );
}

export default Main;