import { Pokemon, PokemonElementalType } from "app/types"

export const MOCK_POKEMON: Pokemon = {
  id: 1,
  height: 7,
  weight: 69,
  name: "Bulbasaur",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
  },
  types: [PokemonElementalType.Grass, PokemonElementalType.Poison],
}
