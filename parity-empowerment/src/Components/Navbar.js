import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';
import logo from '../Assets/Logo.png';

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
          <Link to="/">
            <img src={logo} alt="Parity Empowerment Initiative Logo" className="logo-image" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links - Using Link instead of a */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/program" className="nav-link">Programs</Link>
          <Link to="/get-involved" className="nav-link">Get Involved</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/donate" className="donate-button">Donate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;