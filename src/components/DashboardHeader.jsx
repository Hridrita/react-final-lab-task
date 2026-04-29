import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { MdOutlineWbSunny, MdDarkMode } from "react-icons/md"; 
import './DashboardHeader.css';

const DashboardHeader = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="dashboard-header" style={{ backgroundColor: isDarkMode ? '#222' : '#403f3f' }}>
      <div className="header-content">
        <h1>Student DashBoard</h1>
        <p>Manage and track student progress efficiently</p>
        
        
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? (
            <span className="icon-wrapper"><MdOutlineWbSunny color="#ffcf40" /> Light Mode</span>
          ) : (
            <span className="icon-wrapper"><MdDarkMode color="#fff" /> Dark Mode</span>
          )}
        </button>
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