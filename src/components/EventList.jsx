// EventList.jsx
import React from 'react';

const EventList = ({ events, onSelect }) => (
  <div className="event-list">
    <h2>Upcoming Events</h2>
    <ul>
      {events.map(event => (
        <li key={event.id} onClick={() => onSelect(event)} className="event-item">
          <h3>{event.title}</h3>
          <p>{event.date} | {event.location}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;
