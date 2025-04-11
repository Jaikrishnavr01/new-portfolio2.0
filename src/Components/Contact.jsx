import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6qz7alb',         // Your Service ID
      'template_jqr3vof',        // Your Template ID
      form.current,
      'hQUs42nt4uSkQXR4Y'        // Your Public Key
    )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          form.current.reset(); // reset form after submit
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="contact-wrapper" id='contact'>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-glass">
        <div className="contact-heading">
          <h2>Let’s Work Together</h2>
          <p>Feel free to reach out. Let's bring your vision to life.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-block">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Erode, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="info-block">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>jaikrishnavr@gmail.com</p>
              </div>
            </div>
            <div className="info-block">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 8270581154</p>
              </div>
            </div>

            <div className="socials">
              <a href="https://www.instagram.com/jk_webdesign_solutions" target="_self" className="icon"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/jaikrishnavr/" target="_self" className="icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:jaikrishnavr@gmail.com" class="icon" aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/8270581154?text=Hi%20Jai%20krishna%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!" class="icon" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Name*" required />
            <input type="email" name="user_email" placeholder="Email*" required />
            <textarea name="user_message" placeholder="Your Message*" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
