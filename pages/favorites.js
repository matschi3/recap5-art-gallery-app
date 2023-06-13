import React from "react";
import ArtPieces from "@/components/ArtPieces";
import Layout from "@/components/Layout";

export default function FavoritesPage({
  favoriteArtPieces,
  artPieces,
  setFavoriteArtPieces,
}) {
  const isFavorite = (slug) => favoriteArtPieces.includes(slug);

  const filteredArtPieces = artPieces.filter((piece) =>
    favoriteArtPieces.includes(piece.slug)
  );

  return (
    <Layout>
      <h1>Favorites</h1>
      <ArtPieces
        pieces={filteredArtPieces}
        onClick={() => {}}
        isFavorite={isFavorite}
        onToggleFavorite={() => {}}
      />
    </Layout>
  );
}
