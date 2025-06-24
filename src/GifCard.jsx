import React from "react";

const GifCard = ( { gif } ) => {
  return (
    <div className="gif-card">
      <p>{gif.title}</p>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
    </div>
  );
};

export default GifCard;
