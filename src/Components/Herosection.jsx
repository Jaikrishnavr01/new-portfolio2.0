import React from 'react';
import CountUp from 'react-countup';
import './HeroSection.css';
import heroimg from '../assets/hero.png'; 

export default function HeroSection() {
  return (
    <>
    <div className="hero-container">
      <div className="hero-bubble"></div>
      <div className="hero-bubble2"></div>

      <div className="hero-content">
        {/* Left Section */}
        <div className="hero-left">
          <h1 className="hero-title">
            Hello, I’m <br />
            <span className="hero-highlight">Jai Krishna</span>
          </h1>
          <p className="hero-description">
          I’m a Freelance <b>Web Developer</b> based in Erode, Tamil Nadu.
          I specialize in building responsive and dynamic web applications using the <b>MERN stack</b>. I’m passionate about writing clean code and delivering user-focused designs that create seamless digital experiences.
          </p>
          <button className="hero-button">Say Hello!</button>
          {/* Stats Section */}
          <div className="hero-stats-container">
            <div className="hero-stat">
              <h3 className="hero-stat-number">
                <CountUp start={0} end={6} duration={2.5} /> Months
              </h3>
              <p className="hero-stat-text">Experience</p>
            </div>
            <div className="hero-stat">
              <h2 className="hero-stat-number">
                <CountUp start={0} end={10} duration={2.5} />+
              </h2>
              <p className="hero-stat-text">Projects Completed</p>
            </div>
            <div className="hero-stat">
              <h2 className="hero-stat-number">
                <CountUp start={0} end={2} duration={4.5} />
              </h2>
              <p className="hero-stat-text">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-image-container">
          <img
            src={heroimg}
            alt="jai krishna "
            className="hero-image"
          />
        </div>
      </div>
    </div>
    </>
  );
}
