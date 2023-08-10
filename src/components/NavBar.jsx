import React from 'react';
import CartWidget from './CartWidget';
import './styles/NavBar.css';

const NavBar = () => {

  return (
    <header>
      <div className="header-container">
        <div>
        <div className="brand-container">
          <span>Mi E-commerce</span>
        </div>
        </div>
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Productos</a>
            </li>
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
          <CartWidget />
        </nav>
        
      </div>
    </header>
  );
};

export default NavBar;

