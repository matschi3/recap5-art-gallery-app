import React from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";
import Spotlight from "../components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const pickRandomArtPiece = (artPieces) => {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

export default function Home() {
  const { data: pieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load art pieces.</div>;
  if (!pieces) return <div>Loading...</div>;

  const spotlightPiece = pickRandomArtPiece(pieces);

  return (
    <div>
      <h1>List of Art Pieces</h1>
      <ArtPieces pieces={pieces} />
      <h2>Spotlight Piece</h2>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}
