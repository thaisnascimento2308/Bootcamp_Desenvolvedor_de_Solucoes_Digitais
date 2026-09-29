import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  // Guarda todos os produtos recebidos da API.
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");

  // Busca os produtos na API quando o componente é carregado.
  const pegarDados = async () => {
    try{
      const dados = await axios.get("https://fakestoreapi.com/products");
      // Guarda os produtos recebidos no estado.
      setInfo(dados.data);
    } catch (errorDaRequisicao) {
      setError("Erro ao buscar dados:", errorDaRequisicao);
    } finally{
      console.log("Requisição finalizada");
    }
  };

  // Executa a função uma vez quando o Main é montado.
  useEffect(() => {
    pegarDados();
  }, []);

  /*
    Filtra os produtos de acordo com o texto digitado.

    toLowerCase() deixa a busca independente de
    letras maiúsculas ou minúsculas.

    includes() verifica se o texto digitado
    existe dentro do título do produto.
  */
  const filtrarProdutos = info.filter((item) =>
    item.category === "electronics",
  );

  return (
    <main className="main">
      {error && <p className="error-message">{error}</p>}
      <section className="products-container">
        {info.map((item) => (
          <article className="product-card" key={item.id}>
            <img className="product-image" src={item.image} alt={item.title} />

        <div className="product-content">
          <h2 className="product-title">{item.title}</h2>
          <p className="product-price">R$ {item.price.toFixed(2)}</p>
        </div>
      </article>
    ))}

        {filtrarProdutos.map((item) => (
          <article className="product-card" key={item.id}>
            <img className="product-image" src={item.image} alt={item.title} />

            <div className="product-content">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">R$ {item.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;