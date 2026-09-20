import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-container">

        <h1 className="cabecalho-titulo">
          Lili Elegancia Plus
        </h1>

        <p className="cabecalho-frase">
          Vista-se com confiança e valorize sua beleza!
        </p>

        <nav
          className="cabecalho-navegacao"
          aria-label="Navegação principal"
        >
          <ul className="menu">

            <li>
              <a href="#inicio">Início</a>
            </li>

            <li>
              <a href="#pecas">Peças</a>
            </li>

            <li>
              <a href="#feedbacks">Feedbacks</a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
