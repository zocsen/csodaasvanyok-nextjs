"use server";
import { redirect } from "next/navigation";
import { logout } from "@/lib";
import "./logout-form.scss";
import Image from "next/image";
import LogoutIcon from "public/images/icons/logout.svg";

export default async function LogoutForm() {
  return (
    <form
      className="logout-btn"
      action={async () => {
        "use server";
        await logout();
        redirect("/auth/login");
      }}
    >
      <button className="auth-btn" type="submit">
        <Image
          className="logout-img"
          src={LogoutIcon}
          width={30}
          height={30}
          alt="Kijelentkezés"
        />{" "}
        Kijelentkezés
      </button>
    </form>
  );
}
