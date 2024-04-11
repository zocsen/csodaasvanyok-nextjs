import Image from "next/image";
import LogoIcon from "public/images/logo/logo.webp";
import MenuIcon from "public/images/icons/menu.svg";

const MobileHeader = ({ toggleMenu }) => {
  return (
    <div className="mobile-header">
      <Image onClick={toggleMenu} src={MenuIcon} alt="Menu" />{" "}
      <Image height={140} src={LogoIcon} alt="Logo" />
      <Image
        style={{ visibility: "hidden" }}
        onClick={toggleMenu}
        src={MenuIcon}
        alt="Menu"
      />{" "}
    </div>
  );
};

export default MobileHeader;
