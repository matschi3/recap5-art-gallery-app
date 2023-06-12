import Image from "next/image";

const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
  console.log(title);
  console.log(image);
  return (
    <>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
};
export default ArtPieceDetails;
