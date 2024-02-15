const getCategoryFromURL = (url: string): string => {
  const categoryMap = {
    karkoto: "Karkötő",
    nyaklanc: "Nyaklánc",
    fulbevalo: "Fülbevaló",
    aprosag: "Apróság",
    marokko: "Marokkő",
  };

  for (const [key, value] of Object.entries(categoryMap)) {
    if (url.includes(key)) {
      return value;
    }
  }

  return "";
};

export default getCategoryFromURL;
