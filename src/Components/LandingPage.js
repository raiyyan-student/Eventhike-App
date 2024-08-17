import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Events Around You</h1>
          <input
            type="text"
            placeholder="Search events by location or category"
            className="search-bar"
          />
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <img src="https://www.ovoarena.co.uk/assets/img/NEW-1440-810-1c21fcacb5.jpg" alt="Event 1" />
            <div className="event-info">
              <h3>Music Concert</h3>
              <p>15th August 2024</p>
              <p>New York City, NY</p>
            </div>
          </div>
          <div className="event-card">
            <img src="https://static.toiimg.com/thumb/msid-108729080,width-400,resizemode-4/108729080.jpg" alt="Event 2" />
            <div className="event-info">
              <h3>Art Workshop</h3>
              <p>22nd August 2024</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className="event-card">
            <img src="https://i.pinimg.com/736x/b1/f4/ce/b1f4ce54f17ba6d546c00bef66938d35.jpg" alt="Event 3" />
            <div className="event-info">
              <h3>Tech Conference</h3>
              <p>5th September 2024</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="event-categories">
        <h2>Explore by Category</h2>
        <div className="categories">
          <div className="category">
            <i className="fas fa-music"></i>
            <p>Music</p>
          </div>
          <div className="category">
            <i className="fas fa-paint-brush"></i>
            <p>Art</p>
          </div>
          <div className="category">
            <i className="fas fa-code"></i>
            <p>Tech</p>
          </div>
          <div className="category">
            <i className="fas fa-futbol"></i>
            <p>Sports</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <button className="cta-button">Create an Event</button>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
};

export default LandingPage;