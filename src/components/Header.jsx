import React from 'react';
import './Header.css'; // Arquivo CSS para estilização

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo_horizontal.png" alt="Directt Marketing Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#services">O que fazemos?</a></li>
          <li><a href="#specialty">Especialidade</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
