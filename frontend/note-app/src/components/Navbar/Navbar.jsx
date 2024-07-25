// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Debounce timer ref
  const debounceTimer = useRef(null);

  useEffect(() => {
    // Update showSearchBar based on whether userInfo exists
    setShowSearchBar(!!userInfo);
  }, [userInfo]);

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const handleSearch = (query) => {
    // Clear any previous debounce timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new debounce timer
    debounceTimer.current = setTimeout(() => {
      onSearchNote(query); // Trigger search after a delay
    }, 300); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <div className="flex bg-[#120249] items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-[#b9c4e8] py-2">Note</h2>

      {showSearchBar && (
        <SearchBar
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value); // Trigger debounced search
          }}
          onSearch={handleSearch} // Pass handleSearch to SearchBar
          onClearSearch={onClearSearch}
        />
      )}

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;