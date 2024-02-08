interface CharMap {
  [key: string]: string;
}

const convertToSlug = (text: string): string => {
  const map: CharMap = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ö: "o",
    ő: "o",
    ú: "u",
    ü: "u",
    ű: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ö: "O",
    Ő: "O",
    Ú: "U",
    Ü: "U",
    Ű: "U",
  };

  return text
    .split("")
    .map((char) => map[char] || char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "_") // Replace any non-alphanumeric character with _
    .replace(/_+/g, "_"); // Replace multiple underscores with a single underscore
};

export default convertToSlug;
