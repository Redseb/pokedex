const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  pokemonDetails: {
    types: "Types: ",
    baseStats: "Base Stats",
    abilities: "Abilities: ",
    hp: "HP: ",
    attack: "Attack: ",
    defense: "Defense: ",
    specialAttack: "Special Attack: ",
    specialDefense: "Special Defense: ",
    speed: "Speed: ",
    height: "Height: ",
    weight: "Weight: ",
  },
  searchScreen: {
    searchTermLabel: "Name or ID",
    searchButton: "Search!",
    searchPlaceholder: "Search for a Pokemon",
    idle: "",
    pending: "Searching...",
    rejected: "Hmm we couldn't find that Pokemon. Please enter a valid Pokemon name or ID",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
