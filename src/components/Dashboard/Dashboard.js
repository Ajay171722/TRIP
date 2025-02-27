import React from 'react';
import './Dashboard.css';
import TripPlanner from '../TripPlanner';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-brand">Trip Planner</div>
        <div className="nav-user">
          <span>Welcome, {user?.name || 'User'}</span>
          <button onClick={onLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <TripPlanner />
      </div>
    </div>
  );
};

export default Dashboard; 