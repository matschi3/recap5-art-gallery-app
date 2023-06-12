import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onClick }) {
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
          />
        ))}
      </ul>
    </>
  );
}
