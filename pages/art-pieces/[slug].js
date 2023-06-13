import React from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

const ArtPiecePage = ({
  artPieces,
  favoriteArtPieces,
  setFavoriteArtPieces,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = artPieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return <div>Art piece not found</div>;
  }

  const { imageSource, name, artist, year, genre } = selectedArtPiece;

  const isFavorite = favoriteArtPieces.includes(slug);

  const onToggleFavorite = () => {
    if (isFavorite) {
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
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
};

export default ArtPiecePage;
