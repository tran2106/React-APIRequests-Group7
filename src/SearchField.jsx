import React, { useState } from "react";


const SearchField = ({ onSearch}) => { //omSearch prop to handle search logic
  //added states
  const [input,setInput] = useState(""); // state to hold the input value/keep track of the input
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input); //call onSearch
    // handle the search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-bar"></div>
      <input 
      type="text"
    placeholder="Search..."
    value={input}
    onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
