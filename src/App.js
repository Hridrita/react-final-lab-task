// src/App.js
import React, { useState, useEffect } from 'react';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import './App.css';

const MOCK_DATA = [
  { name: "Hridrita", id: "22-XXXXX-1", avatar: "https://i.ibb.co.com/ZpQcDRXV/image.png", major: "CSE", gpa: 3.9 },
  { name: "Arnob", id: "22-XXXXX-2", avatar: "https://i.ibb.co.com/Gv547Q1H/image.png", major: "EEE", gpa: 3.8 },
  { name: "Rahim", id: "22-XXXXX-3", avatar: "https://i.ibb.co.com/XxcpyZMX/image.png", major: "BBA", gpa: 3.5 },
  { name: "Karim", id: "22-XXXXX-4", avatar: "https://i.ibb.co.com/PZZ6XzyM/image.png", major: "English", gpa: 3.7 }
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [sortType, setSortType] = useState("default"); // Sort state

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(MOCK_DATA);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Task 4: Dynamic Tab Title
  useEffect(() => {
    const count = filteredAndSortedStudents.length;
    document.title = `Dashboard — ${count} Student${count !== 1 ? 's' : ''}`;
  }, [searchTerm, students, sortType]);

  const handleFavoriteToggle = (isFav) => {
    setFavoritesCount(prev => isFav ? prev + 1 : prev - 1);
  };

  // Search & Sort Logic
  const filteredAndSortedStudents = students
    .filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.major.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'gpa') return b.gpa - a.gpa;
      return 0; // default
    });

  if (loading) return <div className="loader">Loading Dashboard...</div>;

  return (
    <div className="App">
      {/* Header এ ফেভারিট কাউন্ট পাঠিয়ে দাও */}
      <DashboardHeader favCount={favoritesCount} />
      
      <div className="controls-section">
        <SearchBar onSearch={setSearchTerm} />
        <SortControls onSort={setSortType} />
      </div>

      <main className="student-list">
        {filteredAndSortedStudents.map((student) => (
          <StudentCard 
            key={student.id} 
            {...student} 
            onFavToggle={handleFavoriteToggle} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;