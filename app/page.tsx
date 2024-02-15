import "./homepage.scss";
import Image from "next/image";
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

export default function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage-main-title">
        Mi hiszünk az ásványok <br /> természetes erejében!
      </h1>
      <div className="homepage-image-links">
        <Link className="image-container" href="/termekek/osszes-karkoto">
          <Image
            className="collection-image"
            src={HomepageBracelets}
            alt="Bracelets Showcase"
            width={500}
            height={500}
          />
          <h2 className="collection-name">Karkötők</h2>
        </Link>
        <Link className="image-container" href="/termekek/marokkovek">
          <Image
            className="collection-image"
            src={HomepageMinerals}
            alt="Minerals Showcase"
            width={500}
            height={500}
          />
          <h2 className="collection-name">Marokkövek</h2>
        </Link>
        <Link className="image-container" href="/termekek/tel">
          <Image
            className="collection-image"
            src={HomepageWinter}
            alt="Winter Bracelets Showcase"
            width={500}
            height={500}
          />
          <h2 className="collection-name">Téli varázs</h2>
        </Link>
        <Link className="image-container" href="/termekek/szerelem">
          <Image
            className="collection-image"
            src={HomepageLove}
            alt="Love Showcase"
            width={500}
            height={500}
          />
          <h2 className="collection-name">Szerelem</h2>
        </Link>
      </div>
    </div>
  );
}
