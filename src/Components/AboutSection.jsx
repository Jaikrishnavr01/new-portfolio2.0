import React from 'react'
import './AboutSection.css'
import aboutimg from '../assets/about.png'
import resume from '../assets/jaikrishna_ Resume.pdf'

export default function AboutSection() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className='about-section' id='about'></div>
    <div class="template-1">
   <div class="template">
   <div className="hero-bubble3"></div>
  <div class="profile-container">
    <img src={aboutimg} alt="Profile Image" class="profile-img" />
    <div class="social-icons">
      {/* <a href="#" class="icon"> <i class="fab fa-facebook-f"></i></a> */}
      <a href="https://www.instagram.com/jk_webdesign_solutions" class="icon" aria-label="Instagram">
  <i class="fab fa-instagram"></i>
</a>
<a href="https://www.linkedin.com/in/jaikrishnavr/" class="icon" aria-label="LinkedIn">
  <i class="fab fa-linkedin-in"></i>
</a>
<a href="mailto:jaikrishnavr@gmail.com" class="icon" aria-label="Email">
  <i class="fas fa-envelope"></i>
</a>
<a href="https://wa.me/8270581154?text=Hi%20Jai%20krishna%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!" class="icon" aria-label="WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>

    </div>
  </div>
  <div class="content">
    <h2>I am Professional Mern Stack Web Developer</h2>
    <p>
      I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences.
    </p>
    <div class="buttons">
      <a class="btn project-btn" onClick={() => scrollToElement('portfolio')}>My Project</a>
      <a href={resume} download='jaikrishna_resume' class="btn cv-btn">Download CV</a>
    </div>
  </div>
</div>
</div>

    </>
  )
}
