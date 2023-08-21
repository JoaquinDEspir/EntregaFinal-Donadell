import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to='/'> {/* Usa NavLink en lugar de link */}
        <h1>Emporio de anna</h1>
      </NavLink>
      <NavLink to='/category/espada'>Espadas</NavLink>
      <p> </p>
      <NavLink to='/category/lanza'>Lanza</NavLink>
      <p> </p>
      <NavLink to='/category/hacha'>Hachas</NavLink>
    </nav>
  );
}

export default Navbar;