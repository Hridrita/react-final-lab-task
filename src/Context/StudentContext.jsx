import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");

  
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents && JSON.parse(savedStudents).length > 0) {
      setStudents(JSON.parse(savedStudents));
    } else {
    
      const defaultData = [
        { name: "Hridrita", id: "22-101", avatar: "https://i.ibb.co.com/ZpQcDRXV/image.png", major: "CSE", gpa: 3.9 },
        { name: "Arnob", id: "22-102", avatar: "https://i.ibb.co.com/Gv547Q1H/image.png", major: "EEE", gpa: 3.8 }
      ];
      setStudents(defaultData);
    }
  }, []);

  
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  const addStudent = (newStudent) => setStudents([...students, newStudent]);
  
  const removeStudent = (id) => {
    const updatedList = students.filter(s => s.id !== id);
    setStudents(updatedList);
    localStorage.setItem('students', JSON.stringify(updatedList)); 
  };

  return (
    <StudentContext.Provider value={{ 
      students, searchTerm, setSearchTerm, sortType, setSortType, addStudent, removeStudent 
    }}>
      {children}
    </StudentContext.Provider>
  );
};