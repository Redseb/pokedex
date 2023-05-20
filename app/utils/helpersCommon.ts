/**
 * Pads a number with leading zeros until it has the specified number of digits.
 * @param num The number to pad.
 * @param size The total number of digits that the padded number should have. Defaults to 3.
 * @returns The padded number as a string.
 */
export default function padNumber(num: number, size = 3): string {
  let padded = num.toString()
  while (padded.length < size) {
    padded = "0" + padded
  }
  return padded
}
