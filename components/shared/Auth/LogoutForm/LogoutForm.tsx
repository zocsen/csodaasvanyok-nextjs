"use server";

import { redirect } from "next/navigation";
import { logout } from "@/lib";

export default async function LogoutForm() {
  return (
    <form
      action={async () => {
        "use server";
        await logout();
        redirect("/auth/login");
      }}
    >
      <button type="submit">Kijelentkezés</button>
    </form>
  );
}
