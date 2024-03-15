import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ékszer Tervező - Csodaásványok",
  description:
    "Állítsa össze kedvenc karkötőjét az ön ízlésének megfelelően vagy fedezze fel egyedi ásványkarkötőink széles választékát webshopunkban. Mindegyik karkötő különleges ásványokból készül, melyek nem csak gyönyörűek, de különleges jelentéssel is bírnak. Ismerje meg az ásványok titkait, hatásait és válassza ki az Önnek legmegfelelőbb darabot.",
  keywords: [
    "ásvány karkötők",
    "egyedi ékszerek",
    "ásvány ékszerek",
    "gyógyító ásványok",
    "ásványok jelentése",
    "ásványok hatása",
    "ékszer tervező",
    "karkötő tervező",
    "egyedi karkötők",
  ],
};

const ProductBuilderPage = () => {
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
      <h2>
        Ezen az oldalon hamarosan saját magad is összeállíthatod kedvenc
        karkötőid!
      </h2>
      <h3 style={{ color: "green" }}>
        Ha egyedi karkötőt szeretnél, vedd fel a kapcsolatot velünk valamelyik
        elérhetőségeink közül:
      </h3>
    </div>
  );
};

export default ProductBuilderPage;
