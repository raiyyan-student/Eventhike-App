import React from "react";

const AdminPanel = () => {
  const dashboardData = {
    totalEvents: 120,
    totalUsers: 4500,
    totalSales: "$120,000",
  };

  const events = [
    { id: 1, title: "Music Concert", status: "Approved" },
    { id: 2, title: "Tech Conference", status: "Pending" },
    { id: 3, title: "Art Exhibition", status: "Approved" },
  ];

  const users = [
    { id: 1, name: "John Doe", role: "User" },
    { id: 2, name: "Jane Smith", role: "Admin" },
    { id: 3, name: "Sam Johnson", role: "User" },
  ];

  const handleEventAction = (id, action) => {
    console.log(`Event ID: ${id}, Action: ${action}`);
  };

  const handleUserAction = (id, action) => {
    console.log(`User ID: ${id}, Action: ${action}`);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>

      {/* Dashboard Overview */}
      <section className="dashboard-overview">
        <h2>Platform Overview</h2>
        <div className="overview-cards">
          <div className="card">
            <h3>Total Events</h3>
            <p>{dashboardData.totalEvents}</p>
          </div>
          <div className="card">
            <h3>Total Users</h3>
            <p>{dashboardData.totalUsers}</p>
          </div>
          <div className="card">
            <h3>Total Sales</h3>
            <p>{dashboardData.totalSales}</p>
          </div>
        </div>
      </section>

      {/* Event Management */}
      <section className="event-management">
        <h2>Event Management</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.status}</td>
                <td>
                  <button onClick={() => handleEventAction(event.id, "edit")}>Edit</button>
                  <button onClick={() => handleEventAction(event.id, "approve")}>Approve</button>
                  <button onClick={() => handleEventAction(event.id, "remove")}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* User Management */}
      <section className="user-management">
        <h2>User Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleUserAction(user.id, "edit")}>Edit</button>
                  <button onClick={() => handleUserAction(user.id, "delete")}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Analytics */}
      <section className="analytics">
        <h2>Analytics</h2>
        <div className="analytics-charts">
          {/* Placeholder for charts */}
          <div className="chart-placeholder">User Activity Chart</div>
          <div className="chart-placeholder">Event Popularity Chart</div>
          <div className="chart-placeholder">Sales Data Chart</div>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;