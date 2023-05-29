/**
 * Pokemon types
 * @see https://pokeapi.co/docs/v2#types
 */
export enum PokemonElementalType {
  Normal = "normal",
  Fighting = "fighting",
  Flying = "flying",
  Poison = "poison",
  Ground = "ground",
  Rock = "rock",
  Bug = "bug",
  Ghost = "ghost",
  Steel = "steel",
  Fire = "fire",
  Water = "water",
  Grass = "grass",
  Electric = "electric",
  Psychic = "psychic",
  Ice = "ice",
  Dragon = "dragon",
  Dark = "dark",
  Fairy = "fairy",
}

/**
 * Pokemon stats
 * @see https://pokeapi.co/docs/v2#stats
 */
export enum PokemonStat {
  Hp = "hp",
  Attack = "attack",
  Defense = "defense",
  SpecialAttack = "specialAttack",
  SpecialDefense = "specialDefense",
  Speed = "speed",
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  types: PokemonElementalType[]
  stats: {
    [key in PokemonStat]: number
  }
  sprites: {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  abilities: string[]
}
