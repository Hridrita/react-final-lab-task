import React from 'react';
// ফোল্ডারের নাম ছোট হাতের 'context' দিয়ে আপডেট করা হয়েছে
import { ThemeProvider } from './Context/ThemeContext';
import { StudentProvider } from './Context/StudentContext';

import DashboardHeader from './components/DashboardHeader';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        {/* এখানে কোনো inline background-color রাখবেন না */}
        <div className="App" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <DashboardHeader />
          <div style={{ padding: '20px' }}>
            <AddStudentForm />
            <hr style={{ margin: '30px 0', border: '0.5px solid #ccc' }} />
            <h2 style={{ textAlign: 'center' }}>Student Directory</h2>
            <StudentList /> 
          </div>
        </div>
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;