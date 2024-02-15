import "./side-drawer.scss";

import CloseIcon from "../../../public/images/icons/close.svg";
import Image from "next/image";

interface SideDrawerProps {
  isDrawerOpen: boolean;
  closeSideDrawer: () => void;
  title: string;
  ContentComponent: React.ComponentType<any>;
  FooterComponent: React.ComponentType<any>;
}

export default function SideDrawer({
  isDrawerOpen,
  closeSideDrawer,
  title,
  ContentComponent,
  FooterComponent,
}: SideDrawerProps) {
  return (
    <>
      <div className={`side-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="side-drawer-header">
          <h2>{title}</h2>
          <button onClick={() => closeSideDrawer()}>
            <Image
              src={CloseIcon}
              className="base-svg"
              alt="Close"
              width={34}
              height={34}
            />
          </button>
        </div>
        <div className="side-drawer-content"><ContentComponent/></div>
        <div className="side-drawer-footer"><FooterComponent/></div>
      </div>
      <div
        className={`overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={() => closeSideDrawer()}
      ></div>
    </>
  );
}