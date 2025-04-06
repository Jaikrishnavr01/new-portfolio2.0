import React from 'react';
import './whatIDo.css';

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
          <span>💻</span>
          <h3>JavaScript</h3>
        </div>
        <div className="whatIDo-card">
          <span>⚛️</span>
          <h3>React.js</h3>
        </div>
        <div className="whatIDo-card">
          <span>🟩</span>
          <h3>Node.js</h3>
        </div>
        <div className="whatIDo-card">
          <span>🌐</span>
          <h3>HTML & CSS</h3>
        </div>
        <div className="whatIDo-card">
          <span>📦</span>
          <h3>MongoDB</h3>
        </div>
        <div className="whatIDo-card">
          <span>📘</span>
          <h3>C / C++</h3>
        </div>
        <div className="whatIDo-card">
          <span>☕</span>
          <h3>Java (Basics)</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
