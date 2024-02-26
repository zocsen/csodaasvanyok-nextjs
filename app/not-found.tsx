import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>404 - Az oldal nem található!</h2>
      <Link href="/">Vissza a főoldalra</Link>
    </div>
  );
}
