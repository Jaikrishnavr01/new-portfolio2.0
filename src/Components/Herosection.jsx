import React from 'react';
import CountUp from 'react-countup';
import './HeroSection.css';

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
            I’m a Freelance <b>UI/UX Designer</b> and <b>Developer</b> based in London,
            England. I strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
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
            src="https://placehold.co/400"
            alt="jai krishna "
            className="hero-image"
          />
        </div>
      </div>
    </div>
    </>
  );
}
