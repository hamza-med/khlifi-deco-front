export default function roundPrice(price) {
  const decimalPart = price % 1;

  if (decimalPart > 0.5) {
    return Math.ceil(price);
  } else {
    return Math.floor(price) + 0.5;
  }
}
