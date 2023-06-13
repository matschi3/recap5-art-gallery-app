import React, { useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import CommentForm from "../../components/CommentForm";

const ArtPiecePage = ({
  artPieces,
  favoriteArtPieces,
  setFavoriteArtPieces,
  comments,
  setComments,
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

  const handleCommentSubmit = (comment) => {
    const newComment = {
      text: comment,
      date: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
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
        comments={comments} // Pass the comments prop
        onSubmitComment={handleCommentSubmit} // Pass the onSubmitComment prop
      />
    </>
  );
};

export default ArtPiecePage;
