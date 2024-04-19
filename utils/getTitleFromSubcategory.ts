export function getTitleFromSubcategories(
  category: string,
  subcategories: string
) {
  if (subcategories)
    switch (subcategories) {
      case "Női,Férfi,Páros":
        return "Összes karkötő ";
      case "Női,Páros":
        return "Női karkötők ";
      case "Férfi,Páros":
        return "Férfi karkötők ";
      case "Páros":
        return "Páros karkötők ";
      case "Natural":
        return "Natural karkötők ";
      case "Újdonság":
        return "Újdonságok 🎉 ";
      case "Tavasz":
        return "Tavasz 🌸 ";
      case "Nyár":
        return "Nyár ☀️ ";
      case "Ősz":
        return "Ősz 🍂";
      case "Tél":
        return "Tél ❄️ ";
      case "Szerelem":
        return "Szerelmeseknek 💖 ";
      case "Horoszkóp":
        return "Horoszkóp ♌ ";
      case "Akció":
        return "Akciós termékek 🏷️ ";
      case "Marokkő":
        return "Marokkövek ";
      default:
        "Összes termék ";
    }
  else {
    switch (category) {
      case "Fülbevaló":
        return "Fülbevalók ";
      case "Nyaklánc":
        return "Nyakláncok 📿 ";
      case "Apróság":
        return "Apróságok ";
    }
  }
  return "Összes termék ";
}
