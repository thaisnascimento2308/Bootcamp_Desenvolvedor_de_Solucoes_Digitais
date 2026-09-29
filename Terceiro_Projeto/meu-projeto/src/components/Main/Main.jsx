import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
  /*
    useState cria um estado chamado "info".

    Inicialmente, o estado recebe um array vazio [].
    Depois que a API responder, utilizaremos setInfo()
    para armazenar os produtos recebidos.
  */
  const [info, setInfo] = useState([]);

  /*
    Esta função realiza a requisição para a Fake Store API.

    O axios.get() faz uma requisição HTTP do tipo GET
    para buscar os produtos.
  */
  const pegarDados = async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products'
    );

    /*
      response.data contém os dados enviados pela API.

      setInfo() atualiza o estado "info" com os produtos.
      Quando o estado é atualizado, o React renderiza
      novamente o componente.
    */
    setInfo(response.data);
  };

  /*
    useEffect executa o código quando o componente
    é montado.

    O array [] significa que esse efeito será executado
    apenas uma vez.
  */
  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <main className="main">
      <h1>Lili Elegância Plus</h1>

      <section className="products-grid">
        {/*
          O método map() percorre todos os produtos
          armazenados no estado "info".

          Para cada produto, um novo <article> é criado.
        */}
        {info.map((item) => (
          <article className="product-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
            />

            <h2>{item.title}</h2>

            <p>
              {item.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;