import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="pl-4 pr-5 pt-3 pb-7">
      <input
        type="text"
        placeholder="Søg for activiteter..."
        className="w-full p-3 bg-gray-400 bg-opacity-30 text-white rounded"
        value={searchTerm}
        onChange={handleChange}/>
    </div>
  );
};

export default SearchBar;