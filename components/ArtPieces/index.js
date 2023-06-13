import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({
  pieces,
  onClick,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            onClick={() => onClick(piece.slug)}
            isFavorite={isFavorite(piece.slug)} // Pass isFavorite prop
            onToggleFavorite={() => onToggleFavorite(piece.slug)} // Pass onToggleFavorite prop
          />
        ))}
      </ul>
    </>
  );
}
