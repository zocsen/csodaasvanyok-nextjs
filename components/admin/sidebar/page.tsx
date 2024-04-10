"use client";
import { useState } from "react";
import SidebarProps from "./SidebarProps";
import "./sidebar.scss";

import Image from "next/image";
import LogoIcon from "@public/images/logo/logo.webp";
import MobileHeader from "../MobileHeader/MobileHeader";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <>
      <MobileHeader toggleMenu={toggleMenu} />
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <nav>
          <Image
            className="sidebar-logo"
            height={140}
            src={LogoIcon}
            alt="Logo"
          />
          <SidebarProps toggleMenu={toggleMenu} />
        </nav>
      </aside>
      <div
        className={`overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default SideBar;
