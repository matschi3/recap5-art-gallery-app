import GlobalStyle from "../styles";
import ArtPieces from "./ArtPieces";
import ArtPiecePreview from "./ArtPiecePreview";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
