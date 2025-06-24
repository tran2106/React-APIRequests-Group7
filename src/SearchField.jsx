import React, { useState } from "react";


const SearchField = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
