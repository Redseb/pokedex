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
  weight: 200,
  stats: {
    hp: 1,
    attack: 2,
    defense: 3,
    specialAttack: 4,
    specialDefense: 5,
    speed: 6,
  },
  abilities: ["Overgrow", "Chlorophyll"],
}
