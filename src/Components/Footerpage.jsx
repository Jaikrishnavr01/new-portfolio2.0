import React from 'react';
import './Footerpage.css';

const Footerpage = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2 className="footer-title">Jai Krishna</h2>
          <p className="footer-description">
            Full Stack Developer specializing in modern web experiences.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-list">
            <li><button onClick={() => scrollToElement('about')}>About</button></li>
            <li><button onClick={() => scrollToElement('portfolio')}>Projects</button></li>
            <li><button onClick={() => scrollToElement('services')}>Skills</button></li>
            <li><button onClick={() => scrollToElement('contact')}>Contact</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Connect</h3>
          <div className="footer-icons">
            <a href="https://github.com/jaikrishnavr01" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/jaikrishnavr" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:jaikrishnavr@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jai Krishna. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footerpage;
