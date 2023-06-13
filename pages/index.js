import React from "react";
import Spotlight from "../components/Spotlight";

const pickRandomArtPiece = (artPieces) => {
  if (artPieces.length === 0) {
    return artpieces[0]; // Handle the case when artPieces is empty
  }

  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

export default function SpotlightPage({
  artPieces,
  favoriteArtPieces,
  setFavoriteArtPieces,
}) {
  console.log("Pieces spot:", artPieces); // Log the value of the pieces prop

  const spotlightPiece = pickRandomArtPiece(artPieces);
  console.log("Spotlight Piece spot:", spotlightPiece); // Log the spotlightPiece value

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

  console.log("Favorite Art Pieces:", favoriteArtPieces); // Log the value of favoriteArtPieces

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
