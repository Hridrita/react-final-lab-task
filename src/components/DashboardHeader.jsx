import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>Student DashBoard</h1>
        <p>Manage and track student progress efficiently</p>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#students">Students</a></li>
          <li><a href="#reports">Reports</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;