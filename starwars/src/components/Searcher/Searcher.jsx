import React, { useState } from 'react';
import './Searcher.css';
export const Searcher = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (searchTerm) {
      onSearch(searchTerm);
    }
  };
  return (
    <div className="searcher-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search character"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
