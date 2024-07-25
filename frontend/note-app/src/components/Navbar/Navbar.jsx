// Navbar.jsx
import React, { useState, useEffect } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    // Update showSearchBar based on whether userInfo exists
    setShowSearchBar(!!userInfo);
  }, [userInfo]);

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="flex bg-[#120249] items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-[#b9c4e8] py-2">Note</h2>

      {showSearchBar && (
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      )}

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;