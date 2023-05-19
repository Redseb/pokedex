// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#4A4A4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#FFFAFA",
  primary200: "#FFEBEE",
  primary300: "#FBC2C6",
  primary400: "#F6969E",
  primary500: "#EE3D48",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const pokemonTypes = {
  bug: {
    primary: "#A6B91A",
    secondary: "#6E7B0E"
  },
  dark: {
    primary: "#705746",
    secondary: "#3E2C1F"
  },
  dragon: {
    primary: "#6F35FC",
    secondary: "#3B0BDB"
  },
  electric: {
    primary: "#F7D02C",
    secondary: "#C7A500"
  },
  fairy: {
    primary: "#D685AD",
    secondary: "#A84D6B"
  },
  fighting: {
    primary: "#C22E28",
    secondary: "#7F1D1A"
  },
  fire: {
    primary: "#EE8130",
    secondary: "#B9471F"
  },
  flying: {
    primary: "#A98FF3",
    secondary: "#6E5BC8"
  },
  ghost: {
    primary: "#735797",
    secondary: "#4B2A5F"
  },
  grass: {
    primary: "#7AC74C",
    secondary: "#4E8C18"
  },
  ground: {
    primary: "#E2BF65",
    secondary: "#B38F3F"
  },
  ice: {
    primary: "#96D9D6",
    secondary: "#5FA7A4"
  },
  normal: {
    primary: "#A8A77A",
    secondary: "#7E7C56"
  },
  poison: {
    primary: "#A33EA1",
    secondary: "#6E1E6E"
  },
  psychic: {
    primary: "#F95587",
    secondary: "#C6245C"
  },
  rock: {
    primary: "#B6A136",
    secondary: "#7F7618"
  },
  steel: {
    primary: "#B7B7CE",
    secondary: "#8C8C9E"
  },
  water: {
    primary: "#6390F0",
    secondary: "#3E5DBF"
  }
}

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  /**
   * Types for each pokemon type
   */
  pokemonTypes,
  /**
   * The active navigation color
   */
  activeNavigation: palette.neutral100,
  /**
   * The inactive navigation color
   */
  inactiveNavigation: palette.neutral600,
}
