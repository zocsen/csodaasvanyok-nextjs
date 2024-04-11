"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DashboardIcon from "public/images/icons/dashboard.svg";
import ProductsIcon from "public/images/icons/products.svg";
import CategoriesIcon from "public/images/icons/categories.svg";
import MineralsIcon from "public/images/icons/minerals.svg";
import BenefitsIcon from "public/images/icons/benefits.svg";
import UsersIcon from "public/images/icons/users.svg";
import OrdersIcon from "public/images/icons/orders.svg";
import Link from "next/link";

export default function SidebarProps({ toggleMenu }) {
  const pathname = usePathname();
  return (
    <ul>
      <li className={pathname === "/admin" ? "active" : ""}>
        <Link onClick={toggleMenu} className="layout-link" href="/admin">
          <Image
            src={DashboardIcon}
            width={30}
            height={30}
            alt="Dashboard-icon"
          />
          Irányítópult
        </Link>
      </li>
      <li className={pathname === "/admin/termekek" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/termekek"
        >
          <Image
            src={ProductsIcon}
            width={30}
            height={30}
            alt="Products-icon"
          />
          Termékek
        </Link>
      </li>
      <li className={pathname === "/admin/kategoriak" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/kategoriak"
        >
          <Image
            src={CategoriesIcon}
            width={30}
            height={30}
            alt="Category-icon"
          />
          Kategóriák
        </Link>
      </li>
      <li className={pathname === "/admin/alkategoriak" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/alkategoriak"
        >
          <Image
            src={CategoriesIcon}
            width={30}
            height={30}
            alt="Subcategories-icon"
          />
          Alkategóriák
        </Link>
      </li>
      <li className={pathname === "/admin/asvanyok" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/asvanyok"
        >
          <Image
            src={MineralsIcon}
            width={30}
            height={30}
            alt="Minerals-icon"
          />
          Ásványok
        </Link>
      </li>
      <li className={pathname === "/admin/hatasok" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/hatasok"
        >
          <Image
            src={BenefitsIcon}
            width={30}
            height={30}
            alt="Benefits-icon"
          />
          Ásvány hatások
        </Link>
      </li>
      <li className={pathname === "/admin/felhasznalok" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/felhasznalok"
        >
          <Image src={UsersIcon} width={30} height={30} alt="Users-icon" />
          Felhasználók
        </Link>
      </li>
      <li className={pathname === "/admin/rendelesek" ? "active" : ""}>
        <Link
          onClick={toggleMenu}
          className="layout-link"
          href="/admin/rendelesek"
        >
          <Image src={OrdersIcon} width={30} height={30} alt="Orders-icon" />
          Rendelések
        </Link>
      </li>
    </ul>
  );
}
