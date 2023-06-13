import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";

const ArtPieceDetails = ({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  comments,
  onSubmitComment,
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
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <p>{new Date(comment.date).toLocaleDateString()}</p>
          <p>{new Date(comment.date).toLocaleTimeString()}</p>
        </div>
      ))}
      <CommentForm onSubmitComment={onSubmitComment} />
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};

export default ArtPieceDetails;
