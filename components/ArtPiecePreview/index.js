import Image from "next/image";

export default function ArtPiecePreview({ imageSource, title, artist }) {
  return (
    <div>
      <Image src={imageSource} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}
