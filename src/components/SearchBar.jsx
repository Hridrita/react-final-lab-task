import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const SearchBar = () => {
  const { setSearchTerm } = useContext(StudentContext);

  return (
    <div className="search-bar" style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Search students by name or major..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SearchBar;