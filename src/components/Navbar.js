import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Oasis Infobyte</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
