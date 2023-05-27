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

/**
 * Converts a string to title case and removes all non alhpabetical characters.
 * @param str The string to convert.
 * @returns The converted string.
 */
export function toTitleCase(str: string): string {
  return str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Converts a string to title case and removes all non alhpabetical characters, AND returns only the first word
 * @param str The string to convert.
 * @returns The converted string.
 */
export function toTitleCaseFirstWord(str: string): string {
  return (
    str
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
      .split(" ")[0]
      .charAt(0)
      .toUpperCase() + str.slice(1)
  )
}
