// EventDetails.jsx
import React from 'react';

const EventDetails = ({ event, onBook, onBack }) => {
  if (!event) return null;
  return (
    <div className="event-details">
      <button onClick={onBack}>Back to Events</button>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <button onClick={() => onBook(event)}>Book/RSVP</button>
    </div>
  );
};

export default EventDetails;
