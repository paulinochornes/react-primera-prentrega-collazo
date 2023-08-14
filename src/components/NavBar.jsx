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
              <a href="/">Sensores</a>
            </li>
            <li>
              <a href="/">Actuadores</a>
            </li>
            <li>
              <a href="/">Sistemas</a>
            </li>
            <li>
              <a href="/">Soporte Técnico</a>
            </li>
          </ul>
          <CartWidget />
        </nav>
        
      </div>
    </header>
  );
};

export default NavBar;

