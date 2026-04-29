import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';
import StudentCard from './StudentCard';

const StudentList = () => {
  const { students, searchTerm, sortType } = useContext(StudentContext);

  const filteredStudents = students
    .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'gpa') return b.gpa - a.gpa;
      return 0;
    });

  return (
    <div className="student-list">
      {filteredStudents.map(student => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  );
};

export default StudentList;