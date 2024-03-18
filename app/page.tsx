import "./homepage.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import HomepageBracelets from "../public/images/homepage-bracelets.webp";
import HomepageMinerals from "../public/images/homepage-minerals.webp";
import HomepageWinter from "../public/images/homepage-winter.webp";
import HomepageLove from "../public/images/homepage-love.webp";

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
  src: StaticImageData;
  alt: string;
  name: string;
  link: string;
};

type ImageLinkProps = {
  image: ImageProps;
};

const images: ImageProps[] = [
  {
    src: HomepageBracelets,
    alt: "Bracelets Showcase",
    name: "Karkötők",
    link: "/termekek/osszes-karkoto",
  },
  {
    src: HomepageMinerals,
    alt: "Minerals Showcase",
    name: "Marokkövek",
    link: "/termekek/marokkovek",
  },
  {
    src: HomepageWinter,
    alt: "Winter Bracelets Showcase",
    name: "Téli varázs",
    link: "/termekek/tel",
  },
  {
    src: HomepageLove,
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
      placeholder="blur"
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
