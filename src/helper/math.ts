export function formatNumberWithCommas(number: number | undefined) {
  const numberString = number?.toString();

  const formattedNumber = numberString?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}

export function formatNumberWithSpaces(number: number | undefined) {
  const numberString = number?.toString();

  const formattedNumber = numberString?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formattedNumber;
}
