import React from 'react'

function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <h1>Lili Elegância Plus</h1>

        <p className="frase">
          Vista-se com confiança, valorize sua beleza e seja você mesma!
        </p>

        <nav aria-label="Navegação principal">
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
