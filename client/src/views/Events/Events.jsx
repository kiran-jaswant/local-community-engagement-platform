import React from 'react';
import './Events.css'
const Events = () => {
  return (
    <div className="events-page">
      <h1>Community Events</h1>
      <div className="events-container">
        <div className="event-card">
          <h2>Event 1: Summer Festival</h2>
          <p>Date: June 15th</p>
          <p>Time: 12pm - 4pm</p>
          <p>Location: Community Park</p>
        </div>
        <div className="event-card">
          <h2>Event 2: Charity Run</h2>
          <p>Date: July 10th</p>
          <p>Time: 8am - 10am</p>
          <p>Location: Downtown Area</p>
        </div>
        <div className="event-card">
          <h2>Event 3: Food Drive</h2>
          <p>Date: August 20th</p>
          <p>Time: 10am - 2pm</p>
          <p>Location: Community Center</p>
        </div>
        {/* Add more events here */}
      </div>
    </div>
  );
};

export default Events;
