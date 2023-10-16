export function formatNumberWithCommas(number: number) {
  // Convert the number to a string to work with individual digits
  const numberString = number.toString();

  // Use regular expression to add commas for every three digits
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}
