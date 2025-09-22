// ContactUs.jsx
import React from 'react';
import MapWidget from './MapWidget';

const ContactUs = () => (
  <div>
    <div className="contact-us-page">
      <h2>Contact Us</h2>
      <p className="contact-description">
        Have questions, feedback, or want to book an event? Reach out to us using the form below or through our contact details. We look forward to hearing from you!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Your Message" required />
        </div>
        <button type="submit" className="primary">Send Message</button>
      </form>
      <div className="contact-details">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> info@ekcel.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Event Avenue, City, Country</p>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>
    </div>
    <MapWidget />
  </div>
);

export default ContactUs;
