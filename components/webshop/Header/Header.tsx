"use client";

import React from "react";
import "./header.scss";
import DesktopAccordion from "./DesktopAccordion";
import MobileAccordion from "./MobileAccordion";

import Logo from "@public/images/logo/logo.webp";

import ShoppingBagIcon from "@public/images/icons/shopping-bag.svg";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/CartContext";

const Header = () => {
  const { openCart, cartItemsCount } = useCart();

  return (
    <header>
      <div className="header-container">
        <div className="menu">
          <MobileAccordion />
          <DesktopAccordion />
        </div>
        <Link href="/" className="logo">
          <Image
            src={Logo}
            height={140}
            alt="Company Logo"
            placeholder="blur"
            priority
          />
        </Link>
        <button className="cart-icon" onClick={openCart}>
          <Image
            src={ShoppingBagIcon}
            alt="Shopping bag"
            aria-label="Shopping Bag"
            width={40}
            height={40}
          />
          <p className="items-in-cart">{cartItemsCount}</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
