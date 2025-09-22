// ContactUs.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => (
  <section className="contact-us-page">
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Reach out via the form or contact details below.</p>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows={4} required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div className="contact-details">
      <p><FaPhone /> +234 800 123 4567</p>
      <p><FaEnvelope /> info@ekcelevents.com</p>
      <p><FaMapMarkerAlt /> 123 Main Street, Lagos, Nigeria</p>
    </div>
  </section>
);

export default ContactUs;
