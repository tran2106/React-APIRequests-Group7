import React, { useState } from "react";


const SearchField = () => {
  //added states
  const [input,setInput] = useState(""); // state to hold the input value
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-bar"></div>
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
