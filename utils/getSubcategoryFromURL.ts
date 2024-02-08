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
    case "teli-termekek":
      return "Tél";
    case "szerelmes-termekek":
      return "Szerelem";
    case "horoszkop-termekek":
      return "Horoszkóp";
    case "akcios-termekek":
      return "Akció";
    case "marokkovek":
      return "Marokkő";
    default: 
      return ""; // All products
  }
}
