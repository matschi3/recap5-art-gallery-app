import React from "react";
import Image from "next/image";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  const heartIconStyle = {
    fill: isFavorite ? "red" : "none",
    stroke: isFavorite ? "none" : "black",
  };

  return (
    <button onClick={onToggleFavorite}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={heartIconStyle}
      >
        <path d="M12 4.067c-3.382-7.161-12-3.494-12 3.933 0 8.11 12 16 12 16s12-7.89 12-16c0-7.427-8.617-11.094-12-3.933z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
