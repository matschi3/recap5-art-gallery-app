import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

const ArtPiecePage = ({ artPieces }) => {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = artPieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return <div>Art piece not found</div>;
  }

  const { imageSource, name, artist, year, genre } = selectedArtPiece;

  return (
    <>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </>
  );
};

export default ArtPiecePage;
