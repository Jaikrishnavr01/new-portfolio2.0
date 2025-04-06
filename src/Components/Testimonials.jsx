import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Ravi Kumar',
      role: 'Freelance Client',
      location: 'India',
      feedback: 'Jai Krishna is a talented developer! He understood our vision and brought it to life with great attention to detail.',
    },
    // {
    //   name: 'Sneha R.',
    //   role: 'UI/UX Designer',
    //   feedback: 'Working with Jai was smooth and efficient. He always delivers clean, scalable code!',
    // },
    {
      name: 'Rudi S',
      role: 'Freelance Client',
      location: 'Spain',
      feedback: 'Very professional and fast turnaround. Highly recommended for front-end work.',
    },
  ];

  return (
    <div className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What People Say</h2>
      <p className="testimonials-subtitle">
        Here's what clients and collaborators have to say about working with me.
      </p>
      <div className="testimonials-grid">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            {/* <div className="testimonial-avatar">👤</div> */}
            <p className="testimonial-feedback">“{item.feedback}”</p>
            <h4 className="testimonial-name">{item.name}</h4>
            <span className="testimonial-role">{item.role}</span>
            <p className="testimonial-role">({item.location})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
