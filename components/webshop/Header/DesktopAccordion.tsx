"use client";

import { useEffect, useRef, useState } from "react";
import "./desktop-accordion.scss";

import ExpandMoreIcon from "@public/images/icons/expand-more.svg";
import Image from "next/image";
import Link from "next/link";

const DesktopAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="desktop-menu" ref={dropdownRef}>
      <button className="desktop-header-menu-btn" onClick={handleOpen}>
        <p className="desktop-header-menu-title">
          Termékek{" "}
          <Image
            src={ExpandMoreIcon}
            alt="Expand"
            className={`arrow-img base-svg ${isOpen ? "rotate-180" : ""}`}
            width={34}
            height={34}
          />
        </p>
      </button>
      <div className={`desktop-accordion ${isOpen ? "open" : ""}`}>
        <div className="desktop-accordion-container">
          <nav className="desktop-menu-navigation ">
            <ul className="desktop-menu-items">
              <h2>Népszerűek 🔥</h2>
              <li>
                <Link onClick={handleClose} href="/termekek/tel">
                  Téli varázs ❄️
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/szerelem">
                  Szerelmeseknek 💖
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/horoszkop">
                  Horoszkóp ♌
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/akcio">
                  Akciós termékek 🏷️
                </Link>
              </li>
            </ul>
            <ul className="desktop-menu-items">
              <h2>Karkötők</h2>
              <li>
                <Link onClick={handleClose} href="/termekek/osszes-karkoto">
                  Összes karkötő
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/noi-karkotok">
                  Női karkötők
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/ferfi-karkotok">
                  Férfi karkötők
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/paros-karkotok">
                  Páros karkötők
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/natural-karkotok">
                  Natural karkötők
                </Link>
              </li>
            </ul>
            <ul className="desktop-menu-items">
              <h2>Egyéb</h2>
              <li>
                <Link onClick={handleClose} href="/termekek/marokkovek">
                  Marokkövek
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/fulbevalok">
                  Fülbevalók
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/nyaklancok">
                  Nyakláncok 📿
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} href="/termekek/aprosagok">
                  Apróságok
                </Link>
              </li>
            </ul>
            <ul className="desktop-menu-items">
              <h2>
                <Link onClick={handleClose} href="/asvany-katalogus">
                  Ásvány katalógus
                </Link>
              </h2>
              {/* <h2>
                <Link onClick={handleClose} href="/gyakran-ismetelt-kerdesek">
                  GYIK
                </Link>
              </h2> */}
              <h2>
                <Link onClick={handleClose} href="/rolunk">
                  Rólunk
                </Link>
              </h2>
              <h2>
                <Link
                  style={{ color: "red" }}
                  onClick={handleClose}
                  href="/ekszer-tervezo"
                >
                  Ékszer tervező <br />
                  (HAMAROSAN)
                </Link>
              </h2>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default DesktopAccordion;
