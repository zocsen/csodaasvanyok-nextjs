import "./footer.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="upper-footer">
          <div className="footer-menu">
            <h2>Menü</h2>

            <Link className="footer-link" href="/termekek/osszes-karkohref">
              Karkötők
            </Link>
            <Link className="footer-link" href="/termekek/marokkovek">
              Marokkövek
            </Link>
            <Link className="footer-link" href="/termekek/fulbevalok">
              Fülbevalók
            </Link>
            <Link className="footer-link" href="/termekek/nyaklancok">
              Nyakláncok
            </Link>
            <Link className="footer-link" href="/termekek/aprosagok">
              Apróságok
            </Link>
            <Link className="footer-link" href="/ekszer-tervezo">
              Ékszer tervező (hamarosan)
            </Link>
          </div>
          <div className="footer-help">
            <h2>Segítség</h2>
            <Link className="footer-link" href="/asvany-katalogus">
              Ásvány katalógus
            </Link>
            <Link className="footer-link" href="/rolunk">
              Rólunk
            </Link>
            {/* <Link className="footer-link" href="/gyakran-ismetelt-kerdesek">
              Gyakran ismételt kérdések
            </Link> */}
            <Link
              className="footer-link"
              href="/altalanos-szerzodesi-feltetelek"
            >
              Általános szerződési feltételek
            </Link>
            <Link href="/adatkezelesi-tajekoztato">
              Adatkezelési tájékoztató
            </Link>
          </div>
          <div className="footer-contact">
            <h2>Elérhetőségeink</h2>
            <p className="email">info@csodaasvanyok.hu</p>
            <div className="contact-icons">
              <a href="https://www.facebook.com/csodaasvanyok">
                <Image
                  src={"/images/icons/logo-facebook.svg"}
                  alt="Facebook"
                  height={24}
                  width={24}
                />
              </a>
              <a href="https://www.instagram.com/csodaasvanyok">
                <Image
                  src={"/images/icons/logo-instagram.svg"}
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </a>
              {/* <a href="https://www.tiktok.com/csodaasvanyok">
                <Image
                  src={"/images/icons/logo-tiktok.svg"}
                  alt="TikTok"
                  height={24}
                  width={24}
                />
              </a> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="lower-footer">
          <p className="law-info">
            © 2024 Csodaásványok. Minden jog fenntartva.
          </p>
          <ul className="payment-options">
            <li>
              <Image
                src={"/images/icons/payments/MasterCard.png"}
                alt="MasterCard"
                width={35}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/images/icons/payments/Visa.png"}
                alt="Visa"
                width={35}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/images/icons/payments/ApplePay.png"}
                alt="ApplePay"
                width={35}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/images/icons/payments/GooglePay.png"}
                alt="GooglePay"
                width={35}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/images/icons/payments/StripePay.png"}
                alt="StripePay"
                width={35}
                height={24}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
