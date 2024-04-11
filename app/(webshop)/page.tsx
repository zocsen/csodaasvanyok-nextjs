import "./homepage.scss";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  description:
    "CsodaÁsványok Webárúház - Eredeti ásványokból készült karkötők, nyakláncok, fülbevalók, apróságok, marokkövek",
  openGraph: {
    type: "website",
  },
};

const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

type ImageProps = {
  src: string;
  alt: string;
  name: string;
  link: string;
};

type ImageLinkProps = {
  image: ImageProps;
};

const images: ImageProps[] = [
  {
    src: "/images/homepage-bracelets.webp",
    alt: "Bracelets Showcase",
    name: "Karkötők",
    link: "/termekek/osszes-karkoto",
  },
  {
    src: "/images/homepage-minerals.webp",
    alt: "Minerals Showcase",
    name: "Marokkövek",
    link: "/termekek/marokkovek",
  },
  {
    src: "/images/homepage-winter.webp",
    alt: "Winter Bracelets Showcase",
    name: "Téli varázs",
    link: "/termekek/tel",
  },
  {
    src: "/images/homepage-love.webp",
    alt: "Love Showcase",
    name: "Szerelem",
    link: "/termekek/szerelem",
  },
];

const ImageLink = ({ image }: ImageLinkProps) => (
  <Link className="image-container" href={image.link}>
    <Image
      className="collection-image"
      src={image.src}
      alt={image.alt}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      priority={true}
      // placeholder="blur"
      quality={75}
    />
    <h2 className="collection-name">{image.name}</h2>
  </Link>
);

const Homepage = () => (
  <div className="homepage">
    <h1 className="homepage-main-title">
      Mi hiszünk az ásványok <br /> természetes erejében!
    </h1>
    <div className="homepage-image-links">
      {images.map((image, index) => (
        <ImageLink key={index} image={image} />
      ))}
    </div>
  </div>
);

export default Homepage;
