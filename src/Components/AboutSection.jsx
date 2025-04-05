import React from 'react'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <>
    <div className='about-section'></div>
    <div class="template-1">
   <div class="template">
   <div className="hero-bubble3"></div>
  <div class="profile-container">
    <img src="https://placehold.co/400" alt="Profile Image" class="profile-img" />
    <div class="social-icons">
      <a href="#" class="icon"> <i class="fab fa-facebook-f"></i></a>
      <a href="#" class="icon"> <i class="fab fa-instagram"></i></a>
      <a href="#" class="icon"> <i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="icon"> <i class="fab fa-behance"></i></a>
    </div>
  </div>
  <div class="content">
    <h2>I am Professional User Experience Designer</h2>
    <p>
      I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences.
    </p>
    <div class="buttons">
      <a href="#" class="btn project-btn">My Project</a>
      <a href="#" class="btn cv-btn">Download CV</a>
    </div>
  </div>
</div>
</div>

    </>
  )
}
