import React from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";
import Spotlight from "../components/Spotlight";

const pickRandomArtPiece = (artPieces) => {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pickRandomArtPiece(pieces);
  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </>
  );
}
