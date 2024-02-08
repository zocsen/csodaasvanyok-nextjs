const formatPrice = (price: number): string => {
  if (!price) return "Az ár nem elérhető";
  const formattedPrice = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedPrice} Ft`;
};

export default formatPrice;
