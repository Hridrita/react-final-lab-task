import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");

  // LocalStorage Persistence (Task 5)
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    } else {
      setStudents([
        { name: "Hridrita", id: "22-101", avatar: "https://i.ibb.co.com/ZpQcDRXV/image.png", major: "CSE", gpa: 3.9 },
        { name: "Arnob", id: "22-102", avatar: "https://i.ibb.co.com/Gv547Q1H/image.png", major: "EEE", gpa: 3.8 }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => setStudents([...students, newStudent]);
  
  const removeStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ 
      students, searchTerm, setSearchTerm, sortType, setSortType, addStudent, removeStudent 
    }}>
      {children}
    </StudentContext.Provider>
  );
};