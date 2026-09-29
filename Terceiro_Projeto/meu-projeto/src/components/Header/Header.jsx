import React from 'react';
import './Header.css'; // Importa o arquivo CSS responsável pela estilização do Header.

function Header() {
// O Header possui uma única responsabilidade:
// exibir o título principal da aplicação.
    return(
        <header className="header">
            <h1>Lili Elegância Plus</h1>
            <p>Encontre peças que valorizam sua beleza e seu estilo.</p>
        </header>
    )
}

export default Header;