import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const labLinks = [
  // 1. "Ondas en una Cuerda" ahora está de primero y es un enlace funcional.
  { path: '/lab/ondas-cuerda', title: 'Ondas en una Cuerda' },
  
  // 2. "Óptica Física" ahora muestra "(En construcción)" y no es un enlace.
  { path: '#', title: 'Óptica Física', disabled: true }, 

  // 3. "Teoría de Errores" está comentado, por lo que no se mostrará.
  // { path: '/lab/teoria-errores', title: 'Teoría de Errores' },
];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={`${import.meta.env.BASE_URL}logo_udea.png`} alt="Logo Universidad de Antioquia" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li 
          className="dropdown" // La clase se mantiene en el <li>
          onMouseEnter={() => setIsMenuOpen(true)} // El evento ahora está en el contenedor
          onMouseLeave={() => setIsMenuOpen(false)} // El evento ahora está en el contenedor
        >
          <span className="dropdown-toggle">Lab de Ondas FIII</span>
          {isMenuOpen && (
            <ul className="dropdown-menu">
              {labLinks.map((link) => (
                <li key={link.title} className={link.disabled ? 'disabled-link' : ''}>
                  {link.disabled ? (
                    <span>{link.title} <small>(En construcción)</small></span>
                  ) : (
                    <NavLink to={link.path}>{link.title}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><NavLink to="/contacto">Contactar al docente</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;