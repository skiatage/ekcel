import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import MapWidget from './components/MapWidget';

// AdminRoute component for login protection (must be outside App to use hooks)
import React, { useState } from 'react';
// ...existing code...
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImageCarousel from './components/ImageCarousel';
import BookNow from './components/BookNow';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';

const initialEvents = [
  { id: 1, title: 'Tech Conference 2025', date: '2025-10-10', location: 'Lagos', description: 'A conference for tech enthusiasts.' },
  { id: 2, title: 'Music Festival', date: '2025-11-05', location: 'Abuja', description: 'Enjoy live music from top artists.' },
  { id: 3, title: 'Business Summit', date: '2025-12-01', location: 'Port Harcourt', description: 'Networking for business professionals.' },
];

function AdminRoute({ events, setEvents }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn
    ? <AdminPanel events={events} setEvents={setEvents} />
    : <AdminLogin onLogin={() => setLoggedIn(true)} />;
}

function App() {
  // Responsive header state
  const [navOpen, setNavOpen] = useState(false);

  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [adminMode, setAdminMode] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <Router>
        <header className="main-header">
          <div className="header-content">
            <Link to="/" className="logo-area" onClick={() => setNavOpen(false)}>
              <img src="/ekcel-logo.svg" alt="EkcelEvents Logo" className="header-logo" />
              <span className="brand-name">EkcelEvents</span>
            </Link>
            <nav className={`main-nav${navOpen ? ' open' : ''}`}>
              <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
              <Link to="/book" onClick={() => setNavOpen(false)}>Book Now</Link>
              <Link to="/testimonial" onClick={() => setNavOpen(false)}>Testimonials</Link>
              <Link to="/contact" onClick={() => setNavOpen(false)}>Contact Us</Link>
            </nav>
            <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)}>
              <span className="hamburger"></span>
            </button>
          </div>
        </header>
        <div className="app-container">
          <Routes>
            <Route path="/" element={
              !adminMode && !selectedEvent && !showBooking ? (
                <>
                  {/* ...existing homepage sections... */}
                  <section className="hero-section">
                    <div className="hero-bg">
                      <div className="hero-overlay"></div>
                      <div className="hero-content">
                        <h1>Beautiful spaces that meet all your needs</h1>
                        <p className="hero-sub">EkcelEvents is a spectacular event center in the heart of Lagos, perfect for conferences, weddings, exhibitions, and more.</p>
                        <Link to="/book" className="primary hero-cta">Book Your Event</Link>
                      </div>
                    </div>
                  </section>
                  <section className="about-section">
                    <div className="about-content">
                      <h2>About EkcelEvents</h2>
                      <p>
                        Located in a prime area overlooking the city, EkcelEvents offers a modern, accessible, and sustainable venue for all types of events. Our commitment to excellence and service ensures your event is exceptional on every level.
                      </p>
                      <Link to="/about" className="secondary">More About Us</Link>
                    </div>
                  </section>
                  <section className="carousel-section">
                    <div className="carousel-wrapper">
                      <ImageCarousel />
                    </div>
                  </section>
                  <section className="features-section">
                    <div className="features-container">
                      <div className="feature-card">
                        <img src="https://img.icons8.com/ios-filled/50/007bff/marker.png" alt="Location" />
                        <h3>Prime Location</h3>
                        <p>Located in the heart of Lagos, easily accessible from anywhere in the city.</p>
                      </div>
                      <div className="feature-card">
                        <img src="https://img.icons8.com/ios-filled/50/007bff/eco.png" alt="Sustainability" />
                        <h3>Sustainable Venue</h3>
                        <p>Committed to environmental and social sustainability for a better future.</p>
                      </div>
                      <div className="feature-card">
                        <img src="https://img.icons8.com/ios-filled/50/007bff/conference.png" alt="Versatile Spaces" />
                        <h3>Versatile Spaces</h3>
                        <p>Flexible halls and meeting rooms for conferences, exhibitions, weddings, and more.</p>
                      </div>
                      <div className="feature-card">
                        <img src="https://img.icons8.com/ios-filled/50/007bff/parking.png" alt="Parking" />
                        <h3>Ample Parking</h3>
                        <p>Spacious and secure parking for all your guests and event needs.</p>
                      </div>
                    </div>
                  </section>
                  <section className="events-section">
                    <div className="events-header">
                      <h2>Upcoming Events</h2>
                      <Link to="/events" className="secondary events-link">All Events</Link>
                    </div>
                    <div className="events-container">
                      {events.slice(0,4).map(event => (
                        <div className="event-card" key={event.id}>
                          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt={event.title} className="event-img" />
                          <div className="event-info">
                            <span className="event-type">{event.title.includes('Conference') ? 'Conference' : event.title.includes('Festival') ? 'Festival' : 'Event'}</span>
                            <h3>{event.title}</h3>
                            <p className="event-date">{event.date}</p>
                            <p className="event-location">{event.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p>Contact us or book your space today and make your event unforgettable at EkcelEvents. Our team is ready to help you plan, customize, and execute a memorable event experience.</p>
                    <div className="cta-buttons">
                      <Link to="/book" className="primary">Book Now</Link>
                      <Link to="/contact" className="secondary">Contact Us</Link>
                    </div>
                    <div className="cta-contact-info"></div>
                  </section>
                  <MapWidget />
                </>
              ) : null
            } />
            <Route path="/book" element={<BookNow />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/admin" element={<AdminRoute events={events} setEvents={setEvents} />} />
          {/* End of routes */}
          </Routes>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-branding">
                <img src="/ekcel-logo.svg" alt="EkcelEvents Logo" className="footer-logo" />
                <span>EkcelEvents</span>
              </div>
              <div className="footer-links">
                <a href="mailto:info@ekcelevents.com">info@ekcelevents.com</a>
                <a href="tel:+2348001234567">+234 800 123 4567</a>
              </div>
              <div className="footer-social">
                <a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
                <a href="#" aria-label="Facebook"><i className="ri-facebook-circle-line"></i></a>
                <a href="#" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
              </div>
              <div className="footer-admin">
                <Link to="/admin" className="admin-toggle">Admin</Link>
              </div>
            </div>
            <small>&copy; 2025 EkcelEvents. All rights reserved.</small>
          </footer>
        </div>
      </Router>
    );
}


export default App;
