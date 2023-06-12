import Image from "next/image";

const Spotlight = ({ image, artist }) => (
  <div>
    <Image src={image} alt={artist} height={300} width={300} />
    <p>Artist: {artist}</p>
  </div>
);

export default Spotlight;
