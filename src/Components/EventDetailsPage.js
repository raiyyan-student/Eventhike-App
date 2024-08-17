import React from "react";

const EventDetailsPage = () => {
  const event = {
    title: "Music Concert",
    date: "15th August 2024",
    location: "New York City, NY",
    bannerImage: "event-banner.jpg",
    description: "Join us for an unforgettable night of music featuring top artists from around the world.",
    schedule: "Doors open at 6:00 PM. Show starts at 7:00 PM.",
    venue: "Madison Square Garden, 4 Pennsylvania Plaza, New York, NY 10001",
    organizer: "XYZ Productions",
    tickets: [
      { type: "General Admission", price: "$100" },
      { type: "VIP Admission", price: "$250" },
    ],
    mapUrl: "https://prestigiousvenues.com/wp-content/uploads/bb-plugin/cache/Gala-Dinner-Venue-In-London-Gibson-Hall-Prestigious-Venues-panorama-e59dc799b93c25c0dc960e904af705e0-59099a98687f6.jpg",
    relatedEvents: [
      { title: "Art Workshop", date: "22nd August 2024", location: "Los Angeles, CA" },
      { title: "Tech Conference", date: "5th September 2024", location: "San Francisco, CA" },
    ],
  };

  return (
    <div className="event-details-page">
      {/* Event Banner */}
      <div className="event-banner" style={{ backgroundImage: `url(${event.bannerImage})` }}>
        <div className="event-banner-overlay">
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
      </div>

      {/* Event Information */}
      <div className="event-info">
        <h2>Event Information</h2>
        <p>{event.description}</p>
        <p><strong>Schedule:</strong> {event.schedule}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
      </div>

      {/* Ticket Options */}
      <div className="ticket-options">
        <h2>Ticket Options</h2>
        {event.tickets.map((ticket, index) => (
          <div key={index} className="ticket-option">
            <p>{ticket.type}</p>
            <p>{ticket.price}</p>
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>

      {/* Map Integration */}
      <div className="event-map">
        <h2>Event Location</h2>
        <iframe
          src={event.mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Related Events */}
      <div className="related-events">
        <h2>Related Events</h2>
        <div className="related-event-cards">
          {event.relatedEvents.map((relatedEvent, index) => (
            <div key={index} className="related-event-card">
              <h3>{relatedEvent.title}</h3>
              <p>{relatedEvent.date}</p>
              <p>{relatedEvent.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews & Ratings */}
      <div className="user-reviews">
        <h2>User Reviews & Ratings</h2>
        <div className="review">
          <p><strong>John Doe</strong>: Amazing event! Had a great time.</p>
          <p>Rating: ★★★★★</p>
        </div>
        <div className="review">
          <p><strong>Jane Smith</strong>: Well organized and fantastic performances.</p>
          <p>Rating: ★★★★☆</p>
        </div>
        {/* Add more reviews as needed */}
      </div>
    </div>
  );
};

export default EventDetailsPage;