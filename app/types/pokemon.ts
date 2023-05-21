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

export enum PokemonStat {
  Hp = "hp",
  Attack = "attack",
  Defense = "defense",
  SpecialAttack = "specialAttack",
  SpecialDefense = "specialDefense",
  Speed = "speed",
}

export enum PokemonStatDTO {
  Hp = "hp",
  Attack = "attack",
  Defense = "defense",
  SpecialAttack = "special-attack",
  SpecialDefense = "special-defense",
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

export interface PokemonDTO {
  id: number
  name: string
  height: number
  weight: number
  types: {
    slot: number
    type: {
      name: PokemonElementalType
      url: string
    }
  }[]
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: PokemonStat
      url: string
    }
  }[]
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  sprites: {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
    other: {
      dream_world: {
        front_default: string
        front_female: string | null
      }
      "official-artwork": {
        front_default: string
      }
    }
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string
          back_gray: string
          front_default: string
          front_gray: string
        }
        yellow: {
          back_default: string
          back_gray: string
          front_default: string
          front_gray: string
        }
      }
      "generation-ii": {
        crystal: {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
        gold: {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
        silver: {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
      }
      "generation-iii": {
        emerald: {
          front_default: string
          front_shiny: string
        }
        "firered-leafgreen": {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
        "ruby-sapphire": {
          back_default: string
          back_shiny: string
          front_default: string
          front_shiny: string
        }
      }
      "generation-iv": {
        "diamond-pearl": {
          back_default: string
          back_female: string | null
          back_shiny: string
          back_shiny_female: string | null
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
        "heartgold-soulsilver": {
          back_default: string
          back_female: string | null
          back_shiny: string
          back_shiny_female: string | null
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
        platinum: {
          back_default: string
          back_female: string | null
          back_shiny: string
          back_shiny_female: string | null
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string
            back_female: string | null
            back_shiny: string
            back_shiny_female: string | null
            front_default: string
            front_female: string | null
            front_shiny: string
            front_shiny_female: string | null
          }
          back_default: string
          back_female: string | null
          back_shiny: string
          back_shiny_female: string | null
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
        "x-y": {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      "generation-vii": {
        icons: {
          front_default: string
          front_female: string | null
        }
        "ultra-sun-ultra-moon": {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      "generation-viii": {
        icons: {
          front_default: string
          front_female: string | null
        }
      }
    }
  }
}
