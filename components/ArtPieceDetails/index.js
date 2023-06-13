import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

const ArtPieceDetails = ({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};

export default ArtPieceDetails;
