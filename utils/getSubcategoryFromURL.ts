export default function getSubcategoryFromURL(pathname: string) {
  const subCategoryName = pathname.split("/")[0];

  switch (subCategoryName) {
    case "osszes-karkoto":
      return "Női,Férfi,Páros";
    case "noi-karkotok":
      return "Női,Páros";
    case "ferfi-karkotok":
      return "Férfi,Páros";
    case "paros-karkotok":
      return "Páros";
    case "natural-karkotok":
      return "Natural";
    case "tavasz":
      return "Tavasz";
    case "nyar":
      return "Nyár";
    case "osz":
      return "Ősz";
    case "tel":
      return "Tél";
    case "ujdonsag":
      return "Újdonság";
    case "szerelem":
      return "Szerelem";
    case "horoszkop":
      return "Horoszkóp";
    case "akcio":
      return "Akció";
    case "marokkovek":
      return "Marokkő";
    default:
      return ""; // All products
  }
}
