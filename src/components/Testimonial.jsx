import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Aisha Bello',
    text: 'EkcelEvents made our wedding unforgettable! The staff was attentive and the venue was stunning.',
    event: 'Wedding',
  },
  {
    name: 'Chinedu Okafor',
    text: 'Our tech conference ran smoothly thanks to the modern facilities and great support team.',
    event: 'Tech Conference',
  },
  {
    name: 'Ngozi Umeh',
    text: 'The location is perfect and the parking is ample. Highly recommend for any event!',
    event: 'Birthday Party',
  },
];

const Testimonial = () => (
  <section className="testimonial-page">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p className="testimonial-text">“{t.text}”</p>
          <div className="testimonial-meta">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-event">{t.event}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonial;
