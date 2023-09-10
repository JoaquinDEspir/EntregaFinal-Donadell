import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

function Navbar() {
  return (
    <nav >
      <div className="nav-container">
      <NavLink to='/'> 
        <h1 className="nav-link">Emporio de anna</h1>
      </NavLink>
      </div>
      <div className="nav-container">
      <NavLink to='/category/espada' className="nav-link"> <h2 className="nav-link">Espadas</h2></NavLink>
      </div>
      <div className="nav-container">
      <NavLink to='/category/lanza' className="nav-link" ><h2 className="nav-link" >Lanza</h2></NavLink>
      </div>  
      <div className="nav-container">
      <NavLink to='/category/hacha' className="nav-link">Hachas</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;