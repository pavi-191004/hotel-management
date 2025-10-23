import React from 'react';
// Make sure you import 'Link' in addition to NavLink
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

import Kitchen from './pages/Kitchen';
import Orders from './pages/Orders';
import Contact from './pages/Contact';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 

export default function App() {
  return (
    <Router>
     
      <nav className="nav">
        
       
        <Link to="/" className="logo">
          FoodHub
        </Link>
        
       
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          
          <NavLink to="/kitchen">Kitchen</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>

      </nav>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}