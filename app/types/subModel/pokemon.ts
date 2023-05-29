import { types } from "mobx-state-tree"
import { PokemonElementalType, PokemonStat } from "../pokemon"

/**
 * MST model describing a Pokemon.
 */
export const PokemonModel = types.model("Pokemon", {
  id: types.number,
  name: types.string,
  height: types.number,
  weight: types.number,
  types: types.array(
    types.enumeration("PokemonElementalType", Object.values(PokemonElementalType)),
  ),
  stats: types.model({
    [PokemonStat.Hp]: types.number,
    [PokemonStat.Attack]: types.number,
    [PokemonStat.Defense]: types.number,
    [PokemonStat.SpecialAttack]: types.number,
    [PokemonStat.SpecialDefense]: types.number,
    [PokemonStat.Speed]: types.number,
  }),
  sprites: types.model({
    back_default: types.maybeNull(types.string),
    back_female: types.maybeNull(types.string),
    back_shiny: types.maybeNull(types.string),
    back_shiny_female: types.maybeNull(types.string),
    front_default: types.maybeNull(types.string),
    front_female: types.maybeNull(types.string),
    front_shiny: types.maybeNull(types.string),
    front_shiny_female: types.maybeNull(types.string),
  }),
  abilities: types.array(types.string),
})
