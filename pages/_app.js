import React, { useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useRouter } from "next/router";
import SpotlightPage from "./index";
import ArtPiecesPage from "./art-pieces/index";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [artPieces, setArtPieces] = useState([]);
  const [favoriteArtPieces, setFavoriteArtPieces] = useState([]); // Add favoriteArtPieces state

  const { data: pieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load art pieces.</div>;
  if (!pieces) return <div>Loading...</div>;

  const appProps = {
    ...pageProps,
    artPieces: pieces,
    setArtPieces,
    favoriteArtPieces,
    setFavoriteArtPieces,
  };

  if (router.pathname === "/") {
    return (
      <>
        <Layout>
          <SpotlightPage {...appProps} />
        </Layout>
      </>
    );
  } else if (router.pathname === "/art-pieces") {
    return (
      <>
        <Layout>
          <ArtPiecesPage {...appProps} />
        </Layout>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component {...appProps} />
    </>
  );
}
