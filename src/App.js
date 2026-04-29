import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { StudentProvider } from './Context/StudentContext';
import { ThemeProvider } from './Context/ThemeContext';
import DashboardHeader from './components/DashboardHeader';
import AddStudentForm from './components/AddStudentForm';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <div className="App">
          <DashboardHeader />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <AddStudentForm />
            <hr style={{ margin: '30px 0', border: '0.5px solid #ccc' }} />
            <SearchBar />
            <SortControls />
            <StudentList />
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </div>
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;