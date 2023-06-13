import React from "react";
import ArtPieces from "@/components/ArtPieces";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecesPage({
  artPieces,
  favoriteArtPieces,
  setFavoriteArtPieces,
}) {
  const router = useRouter();

  const handleArtPieceClick = (slug) => {
    router.push(`/art-pieces/${slug}`);
  };

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
      <h1>List of Art Pieces</h1>
      <ArtPieces
        pieces={artPieces}
        onClick={handleArtPieceClick}
        isFavorite={isFavorite} // Pass isFavorite prop
        onToggleFavorite={onToggleFavorite} // Pass onToggleFavorite prop
      />
    </>
  );
}
