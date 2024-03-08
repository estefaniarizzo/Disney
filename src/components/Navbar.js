import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa el archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="#" className="nav-link">Perfil</Link>
        </li>
        <li>
          <Link to="#" className="nav-link">Ajustes</Link>
        </li>
        <li>
          <Link to="/" className="nav-link">Cerrar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

