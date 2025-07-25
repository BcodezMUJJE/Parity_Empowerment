import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png'; // Make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section with Image */}
        <div className="navbar-brand">
          <img src={logo} alt="Parity Empowerment Initiative Logo" className="logo-image" />
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/programs" className="nav-link">Programs</a> {/* Fixed this line */}
          <a href="/get-involved" className="nav-link">Get Involved</a>
          <a href="/contact" className="nav-link">Contact</a>
          <button className="donate-button">Donate</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;