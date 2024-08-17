import React, { useState } from "react";

const EventCreationPage = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "Summer Music Festival",
    description: "Join us for an exciting day of live music featuring top bands, food trucks, and family-friendly activities. Experience great music and make unforgettable memories!",
    date: "2024-09-15",
    time: "15:00",
    location: "Central Park, New York City, NY",
    ticketPrice: "$50",
    imageUrl: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image11%283%29.jpeg",
  });

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., saving the event to a database
    console.log("Event Created:", eventDetails);
  };

  return (
    <div className="event-creation-page">
      <h1>Create a New Event</h1>

      {/* Event Form */}
      <form className="event-form" onSubmit={handleSubmit}>
        <label>
          Event Title:
          <input type="text" name="title" value={eventDetails.title} onChange={handleChange} required />
        </label>

        <label>
          Description:
          <textarea name="description" value={eventDetails.description} onChange={handleChange} required />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={eventDetails.date} onChange={handleChange} required />
        </label>

        <label>
          Time:
          <input type="time" name="time" value={eventDetails.time} onChange={handleChange} required />
        </label>

        <label>
          Location:
          <input type="text" name="location" value={eventDetails.location} onChange={handleChange} required />
        </label>

        <label>
          Ticket Price:
          <input type="number" name="ticketPrice" value={eventDetails.ticketPrice} onChange={handleChange} required />
        </label>

        <label>
          Event Image URL:
          <input type="text" name="imageUrl" value={eventDetails.imageUrl} onChange={handleChange} required />
        </label>

        <button type="submit" className="submit-button">Save & Publish Event</button>
      </form>

      {/* Preview Section */}
      <div className="event-preview">
        <h2>Event Preview</h2>
        <div className="preview-banner" style={{ backgroundImage: `url(${eventDetails.imageUrl})` }}>
          <div className="preview-overlay">
            <h3>{eventDetails.title || "Event Title"}</h3>
            <p>{eventDetails.date ? `${eventDetails.date} at ${eventDetails.time}` : "Event Date & Time"}</p>
            <p>{eventDetails.location || "Event Location"}</p>
          </div>
        </div>
        <div className="preview-details">
          <p>{eventDetails.description || "Event Description"}</p>
          <p><strong>Ticket Price:</strong> {eventDetails.ticketPrice ? `$${eventDetails.ticketPrice}` : "Price"}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCreationPage;