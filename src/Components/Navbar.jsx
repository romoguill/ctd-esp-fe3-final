import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);
  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h2>
        <span>D</span>H Odonto
      </h2>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacto">Contact</Link>
          </li>
          <li>
            <Link to="/favoritos">Favs</Link>
          </li>
        </ul>
      </div>
      <button className={`theme-change ${theme}`} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '🌞'}
      </button>
    </nav>
  );
};

export default Navbar;
