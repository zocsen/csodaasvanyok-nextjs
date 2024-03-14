import "./footer.scss";
import FacebookLogo from "../../../public/images/icons/logo-facebook.svg";
import InstagramLogo from "../../../public/images/icons/logo-instagram.svg";
import TiktokLogo from "../../../public/images/icons/logo-tiktok.svg";

import MasterCard from "../../../public/images/icons/payments/MasterCard.png";
import Visa from "../../../public/images/icons/payments/Visa.png";
import ApplePay from "../../../public/images/icons/payments/ApplePay.png";
import GooglePay from "../../../public/images/icons/payments/GooglePay.png";
import StripePay from "../../../public/images/icons/payments/StripePay.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="upper-footer">
          <div className="footer-menu">
            <h3>Menü</h3>

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
            <h3>Segítség</h3>
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
            <h3>Elérhetőségeink</h3>
            <p className="email">info@csodaasvanyok.hu</p>
            <div className="contact-icons">
              <a href="https://www.facebook.com/csodaasvanyok">
                <Image
                  src={FacebookLogo}
                  alt="Facebook"
                  height={24}
                  width={24}
                />
              </a>
              <a href="https://www.instagram.com/csodaasvanyok">
                <Image
                  src={InstagramLogo}
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </a>
              {/* <a href="https://www.tikhrefk.com/csodaasvanyok">
                <TikhrefkLogo width={24} />
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
              <Image src={MasterCard} alt="MasterCard" />
            </li>
            <li>
              <Image src={Visa} alt="Visa" />
            </li>
            <li>
              <Image src={ApplePay} alt="ApplePay" />
            </li>
            <li>
              <Image src={GooglePay} alt="GooglePay" />
            </li>
            <li>
              <Image src={StripePay} alt="StripePay" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
