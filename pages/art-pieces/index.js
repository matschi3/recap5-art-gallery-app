import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ artPieces }) {
  return (
    <>
      <h1>List of Art Pieces</h1>
      <ArtPieces pieces={artPieces} />
    </>
  );
}
