import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';
import StudentCard from './StudentCard';

const StudentList = () => {
  const { students, searchTerm, sortType } = useContext(StudentContext);

  
  const filteredAndSorted = [...students]
    .filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.major.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'gpa') return b.gpa - a.gpa;
      return 0;
    });

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Student Directory — {filteredAndSorted.length} Students</h2>
      <div className="student-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredAndSorted.map(student => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;