// src/App.js
import React from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Dashboard</h1>
      <div className="student-list">
        {/* ৪ জন স্টুডেন্টের কার্ড */}
        <StudentCard 
          name="Hridrita" 
          id="22-XXXXX-1" 
          avatar="https://via.placeholder.com/150" 
          major="CSE" 
          gpa={3.9} 
        />
        <StudentCard 
          name="Arnob" 
          id="22-XXXXX-2" 
          avatar="https://via.placeholder.com/150" 
          major="EEE" 
          gpa={3.8} 
        />
        <StudentCard 
          name="Rahim" 
          id="22-XXXXX-3" 
          avatar="https://via.placeholder.com/150" 
          major="BBA" 
          gpa={3.5} 
        />
        <StudentCard 
          name="Karim" 
          id="22-XXXXX-4" 
          avatar="https://via.placeholder.com/150" 
          major="English" 
          gpa={3.7} 
        />
      </div>
    </div>
  );
}

export default App;