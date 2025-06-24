import React from "react";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import SearchField from "./SearchField";
import GifCard from "./GifCard";
import "./style.css";

// const GIPHY_API_KEY = "YOUR_API_KEY";
const GIPHY_API_KEY = "3OSO9K8tBsI2u8bUlgc6Qg6ZgwyJ2Lrp";

const App = () => {
  return (
     <div className="app">
  <SearchField />    {/* //   <h1 className="title">Let's Make Some API Requests!</h1>
    //   <form className="search-form">
    //   <input type="text" placeholder="Search..." />
    //   <button type="submit">Search</button>
    // </form> */}
   </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);




