import React from "react";

const Spotlight = ({ imageSource, artist }) => (
  <div>
    <img src={imageSource} alt={artist} />
    <p>Artist: {artist}</p>
  </div>
);

export default Spotlight;
