import { Api } from "./api"
import { ApiPokemon } from "./apiPokemon"

export * from "./api"
export * from "./api.types"

// Singleton instances of Apis
export const api = new Api()
export const apiPokemon = new ApiPokemon(api)
