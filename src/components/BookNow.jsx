// BookNow.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => (
  <section className="book-now-page">
    <h2>Book Your Event</h2>
    <p>Fill out the form below to book EkcelEvents for your next occasion.</p>
    <form className="book-now-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="text" placeholder="Event Type (e.g. Wedding, Conference)" required />
      <input type="date" required />
      <textarea placeholder="Additional Details" rows={4}></textarea>
      <button type="submit">Submit Booking</button>
    </form>
    <Link to="/" className="primary" style={{display:'block',marginTop:'1.5rem',textAlign:'center'}}>Back to Homepage</Link>
  </section>
);

export default BookNow;
