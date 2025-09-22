// MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ open, onClose, adminMode, onToggleAdmin }) => (
  <div className={`mobile-menu${open ? ' open' : ''}`}>
    <button className="close-btn" onClick={onClose}>&times;</button>
    <nav className="mobile-nav">
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/book" onClick={onClose}>Book Now</Link>
      <Link to="/contact" onClick={onClose}>Contact Us</Link>
      <button onClick={() => { onToggleAdmin(); onClose(); }} className="admin-toggle">
        {adminMode ? 'User View' : 'Admin Panel'}
      </button>
    </nav>
  </div>
);

export default MobileMenu;
