import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

const pieces = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    year: "2019",
    genre: "Abstract Painting",
    colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
    dimensions: { height: 2560, width: 1920, type: "jpg" },
  },
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
    genre: "Classics",
    colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
    dimensions: { height: 1280, width: 1920, type: "jpg" },
  },
  {
    slug: "bread-and-fruits",
    artist: "Lisa vhb",
    name: "Flatlay Photography of Bread and Fruits",
    imageSource:
      "https://example-apis.vercel.app/assets/art/bread-and-fruits.jpg",
    year: "unknown",
    genre: "Veggie Foods",
    colors: ["#dadee1", "#3c2938", "#994836", "#e1be47", "#8f9197"],
    dimensions: { height: 3229, width: 1920, type: "jpg" },
  },
  {
    slug: "kiwi-juice-on-glass",
    artist: "Alexander Mils",
    name: "Kiwi Juice on Glass",
    imageSource:
      "https://example-apis.vercel.app/assets/art/kiwi-juice-on-glass.jpg",
    year: "2015",
    genre: "Veggie Foods",
    colors: ["#a6b33f", "#356e0b", "#eeeee4", "#bec99e", "#635523"],
    dimensions: { height: 2899, width: 1920, type: "jpg" },
  },
  {
    slug: "silhouette-of-trees",
    artist: "Min An",
    name: "Silhouette Photo of Trees",
    imageSource:
      "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg",
    year: "2017",
    genre: "Nature",
    colors: ["#f1f3f4", "#161718", "#979898", "#7c7c7c", "#7c747c"],
    dimensions: { height: 1278, width: 1920, type: "jpg" },
  },
  {
    slug: "split-shot-of-whale",
    artist: "Elianne Dipp",
    name: "Split Shot of Whale",
    imageSource:
      "https://example-apis.vercel.app/assets/art/split-shot-of-whale.jpg",
    year: "2016",
    genre: "Nature",
    colors: ["#bccbd5", "#13517b", "#80acc5", "#78a2c4", "#081931"],
    dimensions: { height: 2875, width: 1920, type: "jpg" },
  },
  {
    slug: "body-of-water",
    artist: "Jeremy Bishop",
    name: "Body of Water",
    imageSource: "https://example-apis.vercel.app/assets/art/body-of-water.jpg",
    year: "2017",
    genre: "Nature",
    colors: ["#203f4a", "#9ca1a5", "#2d738d", "#3a8bb1", "#74a5bf"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
  {
    slug: "man-digital-illustration",
    artist: "Francesco Ungaro",
    name: "Man Digital Illustration",
    imageSource:
      "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
    year: "2006",
    genre: "Modern Art",
    colors: ["#3d803b", "#073204", "#c5dedb", "#90b59f", "#afc6b5"],
    dimensions: { height: 2581, width: 1920, type: "jpg" },
  },
  {
    slug: "woman-statue",
    artist: "Zack Jarosz",
    name: "Woman Statue",
    imageSource: "https://example-apis.vercel.app/assets/art/woman-statue.jpg",
    year: "2017",
    genre: "Classics",
    colors: ["#161616", "#c9c8c5", "#6b6a69", "#8c8c89", "#8c848c"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
  {
    slug: "majestic-greek-sculpture",
    artist: "Rachel Claire",
    name: "Majestic Greek Sculpture",
    imageSource:
      "https://example-apis.vercel.app/assets/art/majestic-greek-sculpture.jpg",
    year: "2019",
    genre: "Classics",
    colors: ["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"],
    dimensions: { height: 2880, width: 1920, type: "jpg" },
  },
];

test("render an ul for all the ArtPiecePreview", () => {
  render(<ArtPieces pieces={pieces} />);
  const unorderedList = screen.getByRole("list");
  //console.log(unorderedList);
  expect(unorderedList).toBeInTheDocument();
});

test("render an li for each ArtPiecePreview", () => {
  render(<ArtPieces pieces={pieces} />);
  const listItems = screen.getAllByRole("listitem");
  //console.log(listItems);
  expect(listItems).toHaveLength(pieces.length);
});

test("render an img for each ArtPiecePreview", () => {
  render(<ArtPieces pieces={pieces} />);
  const listImages = screen.getAllByRole("img", { name: pieces.title });
  //console.log(listImages);
  expect(listImages).toHaveLength(pieces.length);
});

// Each art piece's {image, title, artist} is displayed // test on [0]

test("render all images from artPieces with correct alt-Text", () => {
  render(<ArtPieces pieces={pieces} />);
  const imagesArtPiece = screen.getAllByRole("img");
  expect(imagesArtPiece).toHaveLength(pieces.length);

  imagesArtPiece.forEach((image, index) => {
    expect(image).toHaveProperty("alt", pieces[index].name);
    //expect(image).toHaveProperty("src", `${pieces[index].imageSource}/$/i`);
    // regularExpression: '/$' to check if it just ends with expected url. because of local dev server having differt path.
    // deaktivated, because of way too differt url's  :/
  });
});

test("render all titles from artPieces with correct titleNames", () => {
  render(<ArtPieces pieces={pieces} />);
  const titleHeadings = screen.getAllByRole("heading", { level: 2 }); // 'level: 2 is the h2 element

  expect(titleHeadings).toHaveLength(pieces.length);

  titleHeadings.forEach((heading, index) => {
    expect(heading).toHaveTextContent(pieces[index].name);
  });
});

test("render all artists from artPieces with correct artistNames", () => {
  render(<ArtPieces pieces={pieces} />);
  const artistParagraphs = screen.getAllByText(/^Artist: /); // starts with 'Artist: '
  //console.log(artistParagraphs);
  expect(artistParagraphs).toHaveLength(pieces.length);

  artistParagraphs.forEach((paragraph, index) => {
    expect(paragraph).toHaveTextContent(`Artist: ${pieces[index].artist}`);
  });
});
