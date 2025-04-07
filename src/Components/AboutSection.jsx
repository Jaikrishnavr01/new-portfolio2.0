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
      <a href="https://www.instagram.com/jk_webdesign_solutions" target='_self' class="icon"> <i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/jaikrishnavr/" target='_self' class="icon"> <i class="fab fa-linkedin-in"></i></a>
      {/* <a href="#" class="icon"> <i class="fab fa-behance"></i></a> */}
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
