import React from 'react';
import './whatIDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCoffee, faC } from '@fortawesome/free-solid-svg-icons';


const WhatIDo = () => {
  return (
    <div className="whatIDo-container" id="services">
      <div className="whatIDo-header">
        <h1 className="whatIDo-title">Tech Stack I Work With</h1>
        <p className="whatIDo-description">
          I’m comfortable building full-stack web apps using modern technologies. Here’s a glimpse of the programming languages and tools I regularly use.
        </p>
      </div>

      <div className="whatIDo-card-grid">
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faCode} size="2x" /></span>
    <h3>JavaScript</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faReact} size="2x" style={{ color: '#61dafb' }} /></span>
    <h3>React.js</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faNodeJs} size="2x" style={{ color: '#68a063' }} /></span>
    <h3>Node.js</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faHtml5} size="2x" style={{ color: 'red' }} /></span>
    <h3>HTML & CSS</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faDatabase} size="2x" style={{ color: 'orange' }}/></span>
    <h3>MongoDB</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faC} size="2x" style={{ color: 'blue' }} /></span>
    <h3>C / C++</h3>
  </div>
  <div className="whatIDo-card">
    <span><FontAwesomeIcon icon={faJava} size="2x" style={{ color: 'red' }} /></span>
    <h3>Java (Basics)</h3>
  </div>
</div>
    </div>
  );
};

export default WhatIDo;
