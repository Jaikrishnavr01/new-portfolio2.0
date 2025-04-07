import React, { useState } from 'react';
import './Navbar.css';
import Contact from './Contact';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ Scroll to any section by id
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // optional: close menu on mobile after click
    }
  };

  return (
    <div>
      <nav>
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo">
            <h1>Jai Krishna</h1>
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
            <li><a  onClick={() => scrollToElement('home')}>Home</a></li>
            <li><a  onClick={() => scrollToElement('about')}>About</a></li>
            <li><a  onClick={() => scrollToElement('process')}>Process</a></li>
            <li><a  onClick={() => scrollToElement('portfolio')}>Portfolio</a></li>
            <li><a  onClick={() => scrollToElement('services')}>Services</a></li>
            <li>
              <button className="contact" onClick={() => scrollToElement('contact')}>
                Contact
              </button>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}
