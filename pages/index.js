import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import ArtPiecePreview from "../components/ArtPiecePreview";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data: pieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load art pieces.</div>;
  if (!pieces) return <div>Loading...</div>;

  return (
    <div>
      <h1>List of Art Pieces</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
