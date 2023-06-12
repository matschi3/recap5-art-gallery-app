import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          imageSource={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
