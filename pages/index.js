import GlobalStyle from "../styles";
import ArtPieces from "./ArtPieces";
import ArtPiecePreview from "./ArtPiecePreview";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  console.log(data);
}
