import Image from "next/image";

const Spotlight = ({ image, artist }) => (
  <>
    <Image src={image} alt={artist} height={300} width={300} />
    <p>Artist: {artist}</p>
  </>
);

export default Spotlight;
