import configProd from "app/config/config.prod"
import { Api, API_ROUTES } from "./api"
import { ListPokemonDTO, PokemonDTO } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

export class ApiPokemon {
  api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getPokemonList(limit: number, offset: number) {
    console.log(configProd.API_URL)
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

  async getPokemonSpecific(id: number) {
    const response = await this.api.apisauce.get<PokemonDTO[]>(API_ROUTES.pokemonSpecific(id))

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
}
