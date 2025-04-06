import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <div className="navbar-container">
      
          {/* Logo */}
          <div className="logo">
            {/* <img src="logo.png" alt="logo" /> */}
            <h1>Jai krishna</h1>
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Menu items */}
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li><a href="#blog">Blog</a></li> */}
            <li><a href="services">Services</a></li>
            <li><button className='contact'>Contact</button></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
