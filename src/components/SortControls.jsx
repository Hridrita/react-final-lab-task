import React from 'react';

const SortControls = ({ onSort }) => {
  return (
    <div className="sort-controls" style={{ margin: '10px 0' }}>
      <button onClick={() => onSort('name')}>Sort by Name (A-Z)</button>
      <button onClick={() => onSort('gpa')}>Sort by GPA (High to Low)</button>
      <button onClick={() => onSort('default')}>Default Order</button>
    </div>
  );
};

export default SortControls;