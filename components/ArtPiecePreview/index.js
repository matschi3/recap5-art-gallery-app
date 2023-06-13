import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  onClick,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <li onClick={onClick}>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </li>
  );
}
