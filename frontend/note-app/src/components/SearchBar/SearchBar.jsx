// SearchBar.jsx
import React, { useState, useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, onSearch, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Update searchTerm when value changes
    setSearchTerm(value);
  }, [value]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onChange(e); // Pass the event to the parent component
        }}
        onKeyDown={handleKeyPress} // Add onKeyDown for Enter key
      />

      {searchTerm && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaPaw
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={() => onSearch(searchTerm)} // Trigger search on click
      />
    </div>
  );
};

export default SearchBar;