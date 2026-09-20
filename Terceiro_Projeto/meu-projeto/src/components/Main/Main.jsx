import React from 'react'

function Main() {
  return (
    <main id="inicio" className="conteudo-principal">
      <section className="apresentacao" aria-labelledby="titulo-apresentacao">
        <h2 id="titulo-apresentacao">
          Moda plus size para todos os estilos
        </h2>

        <p>
          Na Lili Elegancia Plus você encontra peças pensadas para
          valorizar sua beleza, seu conforto e sua personalidade.
        </p>
      </section>

      <section id="pecas" className="cards" aria-labelledby="titulo-pecas">
        <h2 id="titulo-pecas">Conheça nossas opções</h2>

        <div className="cards-container">

          <article className="card">
            <h3>Vestidos</h3>
            <p>
              Modelos confortáveis para você se sentir linda em qualquer ocasião.
            </p>
          </article>

          <article className="card">
            <h3>Conjuntos</h3>
            <p>
              Combinações práticas para criar looks modernos e cheios de estilo.
            </p>
          </article>

          <article className="card">
            <h3>Acessórios</h3>
            <p>
              Detalhes que completam o seu visual e deixam seu estilo ainda mais especial.
            </p>
          </article>

        </div>
      </section>

      <section id="feedbacks" className="feedbacks" aria-labelledby="titulo-feedbacks">
        <h2 id="titulo-feedbacks">Feedbacks</h2>

        <p>
          "Me senti linda, confortável e muito mais confiante!"
        </p>
      </section>
    </main>
  );
}

export default Main;
