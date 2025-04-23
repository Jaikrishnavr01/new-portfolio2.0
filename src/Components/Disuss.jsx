import React from 'react';
import './Discuss.css';

const Discuss = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='discuss'>
      <h3>Do you have a project idea?</h3>
      <h3>Let's discuss your project!</h3>
      <p>I'm excited to collaborate and bring your vision to life.</p>
      <button onClick={() => scrollToElement('contact')}>Let's work Together ➡️</button>
    </div>
  );
};

export default Discuss;
