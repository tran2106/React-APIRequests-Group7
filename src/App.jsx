import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import SearchField from "./SearchField";
import GifCard from "./GifCard";
import "./style.css";

// const GIPHY_API_KEY = "YOUR_API_KEY";
const GIPHY_API_KEY = "3OSO9K8tBsI2u8bUlgc6Qg6ZgwyJ2Lrp";

const App = () => { //main app component
  const [gifs, setGifs] = React.useState([]); // state to hold the GIFs
  const [query, setQuery] = React.useState(""); // state to hold the search terms

  useEffect(() => {
  fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setGifs(data.data));
  }, []);

  // //handle search 
  // const handleSearch = (searchTerm) => {
    
  //   //fetch gifs seach ternms ///
  return (
     <div className="app">
    <h1 className="title">Find a GIF!</h1>
    <SearchField />    
    <div className="gif-list">
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} />
      ))}
    </div>
   </div>
  );
};


// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
