import Image from "next/image";
const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
  return (
    <>
      <Image src={image} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};
export default ArtPieceDetails;
