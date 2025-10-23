import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
       
        <span>FoodHub Hotel</span>
      </Link>
      <div className="nav-links">
        <NavLink 
          to="/Kitchen" 
          
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Menu
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;