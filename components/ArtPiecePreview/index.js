import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, onClick }) {
  return (
    <li onClick={onClick}>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </li>
  );
}
