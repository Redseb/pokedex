import { Pokemon, PokemonElementalType } from "app/types"

export const mockPokemon: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: [PokemonElementalType.Grass],
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
  },
  height: 100,
  weight: 100,
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
  },
  abilities: ["Overgrow", "Chlorophyll"],
}
