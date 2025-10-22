import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Kitchen from './pages/Kitchen';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import PlaceOrder from './pages/PlaceOrder';

export default function App() {
  return (
    <Router>
      <nav className="nav">
       
        <NavLink to="/">Kitchen</NavLink>
        <NavLink to="/orders">Orders</NavLink>
       <NavLink to="/Contact">Contact</NavLink>
      </nav>
      <Routes>
        
        <Route path="/" element={<Kitchen />} />
        <Route path="/orders" element={<Orders />} />
<Route path="/Contact" element={<Contact />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </Router>
  );
}
