import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const SortControls = () => {
  const { setSortType } = useContext(StudentContext);

  return (
    <div className="sort-controls" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <button onClick={() => setSortType('name')}>Sort by Name (A-Z)</button>
      <button onClick={() => setSortType('gpa')}>Sort by GPA (High-Low)</button>
      <button onClick={() => setSortType('default')}>Reset Sort</button>
    </div>
  );
};

export default SortControls;