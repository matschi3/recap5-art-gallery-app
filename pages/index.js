import React from "react";
import Spotlight from "../components/Spotlight";

const pickRandomArtPiece = (artPieces) => {
  if (artPieces.length === 0) {
    return artpieces[0];
  }

  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

export default function SpotlightPage({
  artPieces,
  favoriteArtPieces,
  setFavoriteArtPieces,
}) {
  const spotlightPiece = pickRandomArtPiece(artPieces);

  const isFavorite = (slug) => favoriteArtPieces.includes(slug);

  const onToggleFavorite = (slug) => {
    if (isFavorite(slug)) {
      const updatedFavorites = favoriteArtPieces.filter(
        (favoriteSlug) => favoriteSlug !== slug
      );
      setFavoriteArtPieces(updatedFavorites);
    } else {
      setFavoriteArtPieces([...favoriteArtPieces, slug]);
    }
  };

  return (
    <>
      <h1>Spotlight</h1>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={isFavorite(spotlightPiece.slug)}
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      )}
    </>
  );
}
