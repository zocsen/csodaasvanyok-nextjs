"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import "./mobile-accordion.scss";

import MenuIcon from "../../../public/images/icons/menu.svg";
import CloseIcon from "../../../public/images/icons/close.svg";
import RemoveIcon from "../../../public/images/icons/remove.svg";
import AddIcon from "../../../public/images/icons/add.svg";
import Image from "next/image";
import Link from "next/link";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="accordion-style" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        {isOpen ? (
          <Image
            width={34}
            height={34}
            alt="-"
            src={RemoveIcon}
            className={`rotate-icon ${isOpen ? "open" : ""} base-svg`}
            aria-label="-"
          />
        ) : (
          <Image
            width={34}
            height={34}
            alt="+"
            src={AddIcon}
            className={`rotate-icon ${isOpen ? "open" : ""} base-svg`}
            aria-label="+"
          />
        )}
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const MobileAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu" ref={dropdownRef}>
      <button className="mobile-header-menu-btn" onClick={handleOpen}>
        <Image
          width={34}
          height={34}
          alt="Menü"
          src={MenuIcon}
          className="menu-icon"
          aria-label="Menu icon"
        />
      </button>
      <div className={`mobile-accordion-container ${isOpen ? "open" : ""}`}>
        <div className="mobile-accordion-header">
          <h2>Termékek</h2>
          <button className="close-button" onClick={handleClose}>
            <Image
              src={CloseIcon}
              className="base-svg"
              alt="Close"
              width={34}
              height={34}
            />
          </button>
        </div>

        <hr />
        <AccordionItem title="Népszerűek 🔥">
          <ul>
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
        </AccordionItem>
        <hr />
        <AccordionItem title="Karkötők">
          <ul>
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
        </AccordionItem>
        <hr />
        <Link onClick={handleClose} href="/termekek/marokkovek">
          Marokkövek
        </Link>
        <hr />
        <Link onClick={handleClose} href="/termekek/fulbevalok">
          Fülbevalók
        </Link>
        <hr />
        <Link onClick={handleClose} href="/termekek/nyaklancok">
          Nyakláncok 📿
        </Link>
        <hr />
        <Link onClick={handleClose} href="/termekek/aprosagok">
          Apróságok
        </Link>
        <hr />
        <Link onClick={handleClose} href="/termekek/akcios-termekek">
          Akciós termékek 🏷️
        </Link>
        <hr />
        <Link onClick={handleClose} href="/ekszer-tervezo">
          Ékszer tervező (HAMAROSAN)
        </Link>
        <hr />
        <Link onClick={handleClose} href="/asvany-katalogus">
          Ásvány katalógus
        </Link>
        <hr />
      </div>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default MobileAccordion;
