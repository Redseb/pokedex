import { Pokemon, PokemonStat } from "app/types"
import { Api, API_ROUTES } from "./api"
import { ListPokemonDTO, PokemonDTO, PokemonStatDTO } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"
import { toTitleCase, toTitleCaseFirstWord } from "app/utils/helpersCommon"

export class ApiPokemon {
  api: Api

  constructor(api: Api) {
    this.api = api
  }

  /**
   * Takes a pokemonDTO object and maps it to a Pokemon object
   * @param pokemon pokemonDTO object to map
   * @returns Pokemon object
   */
  pokemonMapper = (pokemon: PokemonDTO): Pokemon => ({
    id: pokemon.id,
    name: toTitleCaseFirstWord(pokemon.name),
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((type) => type.type.name),
    stats: {
      [PokemonStat.Hp]: 0,
      [PokemonStat.Attack]: 0,
      [PokemonStat.Defense]: 0,
      [PokemonStat.SpecialAttack]: 0,
      [PokemonStat.SpecialDefense]: 0,
      [PokemonStat.Speed]: 0,
      ...pokemon.stats.reduce((statsList, stat) => {
        if (stat.stat.name === PokemonStatDTO.SpecialAttack) {
          statsList[PokemonStat.SpecialAttack] = stat.base_stat
        } else if (stat.stat.name === PokemonStatDTO.SpecialDefense) {
          statsList[PokemonStat.SpecialDefense] = stat.base_stat
        } else {
          statsList[stat.stat.name] = stat.base_stat
        }
        return statsList
      }, {}),
    },
    sprites: pokemon.sprites,
    abilities: pokemon.abilities.map((ability) => toTitleCase(ability.ability.name)),
  })

  /**
   * Fetches a list of PokemonShortDTO objects from the API
   * @param limit number of pokemon to fetch
   * @param offset number of pokemon to skip
   */
  async getPokemonList(limit: number, offset: number) {
    const response = await this.api.apisauce.get<ListPokemonDTO[]>(
      API_ROUTES.pokemonList(limit, offset),
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        console.log(problem)
        // showErrorAlert(response?.data, response?.status) // TODO
        throw problem
      }
    }

    return response
  }

  /**
   * Fetches a PokemonDTO object from the API and maps it to a Pokemon object
   * @param name name of the pokemon to fetch (OR id)
   * @returns Pokemon object
   */
  async getPokemonSpecific(name: string) {
    const response = await this.api.apisauce.get<PokemonDTO>(
      API_ROUTES.pokemonSpecific(name.toLowerCase()),
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        console.log(problem)
        // showErrorAlert(response?.data, response?.status) // TODO
        throw problem
      }
    }

    return this.pokemonMapper(response.data)
  }
}
