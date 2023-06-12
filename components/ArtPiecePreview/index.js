export default function ArtPiecePreview({ imageSource, title, artist }) {
  return (
    <div>
      <img
        src={imageSource}
        alt={title}
        style={{ width: "20%", height: "auto" }}
      />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}
