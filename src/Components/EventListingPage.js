import React, { useState } from "react";

const EventListingPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Concert",
      date: "15th August 2024",
      location: "New York City, NY",
      price: "$100",
      image: "https://imgmedia.lbb.in/media/2020/01/5e295fb9f5212ebf003efbd1_1579769785119.jpg",
      description: "An amazing night of live music.",
    },
    {
      id: 2,
      title: "Art Workshop",
      date: "22nd August 2024",
      location: "Los Angeles, CA",
      price: "$75",
      image: "https://coursehorse.imgix.net/images/course/8861/main/mixed%20media%20la.jpg?auto=format%2Cenhance%2Ccompress&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330",
      description: "Learn the basics of painting and sketching.",
    },
    {
      id: 3,
      title: "Tech Conference",
      date: "5th September 2024",
      location: "San Francisco, CA",
      price: "$150",
      image: "https://www.tryreason.com/wp-content/uploads/2022/12/event-photo.jpeg",
      description: "Explore the latest in technology and innovation.",
    },
    // Add more event objects as needed
  ]);

  const [filters, setFilters] = useState({
    date: "",
    location: "",
    category: "",
    priceRange: "",
    sort: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredEvents = events.filter((event) => {
    return (
      (filters.date ? event.date.includes(filters.date) : true) &&
      (filters.location ? event.location.includes(filters.location) : true) &&
      (filters.category ? event.title.includes(filters.category) : true) &&
      (filters.priceRange ? event.price.includes(filters.priceRange) : true)
    );
  });

  const sortedEvents = filteredEvents.sort((a, b) => {
    if (filters.sort === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (filters.sort === "price") {
      return parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1));
    }
    return 0;
  });

  return (
    <div className="event-listing-page">
      {/* Search & Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          name="date"
          placeholder="Search by date"
          value={filters.date}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Search by category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
          <option value="">Select Price Range</option>
          <option value="$0-$50">0-$50</option>
          <option value="$50-$100">$50-$100</option>
          <option value="$100+">$100+</option>
        </select>
        <select name="sort" value={filters.sort} onChange={handleFilterChange}>
          <option value="">Sort By</option>
          <option value="popularity">Popularity</option>
          <option value="date">Date</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Event Cards Section */}
      <div className="event-cards-section">
        {sortedEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.price}</p>
              <p>{event.description}</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="pagination-section">
        <button className="pagination-button">Previous</button>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default EventListingPage;