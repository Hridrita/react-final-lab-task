import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar" style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search by name or major..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
};

export default SearchBar;