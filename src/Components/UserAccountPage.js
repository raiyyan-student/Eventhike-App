import React, { useState } from "react";

const UserAccountPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    savedEvents: [
      { id: 1, title: "Music Concert", date: "2024-09-01" },
      { id: 2, title: "Tech Conference", date: "2024-09-15" },
    ],
    myEvents: [
      { id: 1, title: "Art Workshop", sales: 120, attendees: 200 },
      { id: 2, title: "Charity Run", sales: 150, attendees: 300 },
    ],
  });

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleEventEdit = (id) => {
    // Functionality to edit event details
    console.log("Edit Event ID:", id);
  };

  return (
    <div className="user-account-page">
      <h1>My Account</h1>

      {/* Profile Management */}
      <section className="profile-management">
        <h2>Profile Management</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={userInfo.location} onChange={handleInputChange} />
          </label>
        </form>
      </section>

      {/* Event Dashboard */}
      <section className="event-dashboard">
        <h2>My Events</h2>
        <div className="event-list">
          {userInfo.myEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>Sales: {event.sales}</p>
              <p>Attendees: {event.attendees}</p>
              <button onClick={() => handleEventEdit(event.id)}>Edit Event</button>
            </div>
          ))}
        </div>
      </section>

      {/* Saved Events */}
      <section className="saved-events">
        <h2>Saved Events</h2>
        <div className="saved-list">
          {userInfo.savedEvents.map((event) => (
            <div key={event.id} className="saved-card">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserAccountPage;