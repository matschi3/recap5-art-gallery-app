import ArtPieces from "@/components/ArtPieces";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecesPage({ artPieces }) {
  const router = useRouter();

  const handleArtPieceClick = (slug) => {
    router.push(`/art-pieces/${slug}`);
  };
  return (
    <>
      <h1>List of Art Pieces</h1>
      <ArtPieces pieces={artPieces} onClick={handleArtPieceClick} />
    </>
  );
}
