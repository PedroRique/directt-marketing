import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Ícone de hambúrguer
import { AiOutlineClose } from 'react-icons/ai'; // Ícone de fechar
import './Header.css';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => {
    setSidebar(false);
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className="header">
      <div className="logo"> 
        <img src="/logo-horizontal.png" alt="Logo" />
      </div>
      
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li><a href="#services" onClick={closeSidebar}>O que fazemos?</a></li>
          <li><a href="#sales" onClick={closeSidebar}>Especialidade</a></li>
          <li><a href="#testimonials" onClick={closeSidebar}>Depoimentos</a></li>
          <li><a href="#contact" onClick={closeSidebar}>Contato</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleSidebar}>
        {sidebar ? <AiOutlineClose /> : <FaBars />}
      </div>

      <div className={sidebar ? "overlay active" : "overlay"} onClick={toggleSidebar}></div>
    </header>
  );
};

export default Header;
