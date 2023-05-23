import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PokemonModel } from "app/types"
import { DATA_STATUS } from "app/types/dataStatus"
import { ApiResponse } from "apisauce"
import { ListPokemonDTO, apiPokemon } from "app/services/api"

export const PokemonStoreModel = types
  .model("PokemonStore")
  .props({
    pokemon: types.array(PokemonModel),
    dataStatus: DATA_STATUS.IDLE,
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    getPokemon: () =>
      flow(function* () {
        const pokemonListResponse: ApiResponse<ListPokemonDTO> = yield apiPokemon.getPokemonList(
          20,
          0,
        )
        if (!pokemonListResponse.ok) {
          self.setProp("dataStatus", DATA_STATUS.REJECTED)
          return
        }

        const pokemonList = yield Promise.all(
          pokemonListResponse.data.results.map(async (result: any) => {
            const pokemonResponse = await fetch(result.url)
            const pokemonData = await pokemonResponse.json()
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              height: pokemonData.height,
              weight: pokemonData.weight,
              types: pokemonData.types.map((type: any) => type.type.name),
              stats: pokemonData.stats.reduce((stats: any, stat: any) => {
                if (stat.stat.name === "special-attack") {
                  stat.stat.name = "specialAttack"
                } else if (stat.stat.name === "special-defense") {
                  stat.stat.name = "specialDefense"
                }
                stats[stat.stat.name] = stat.base_stat
                return stats
              }, {}),
              sprites: pokemonData.sprites,
              abilities: pokemonData.abilities.map((ability: any) => ability.ability.name),
            }
          }),
        )
        self.setProp("dataStatus", DATA_STATUS.FULFILLED)
        self.setProp("pokemon", pokemonList)
      })(),
  }))

export interface PokemonStore extends Instance<typeof PokemonStoreModel> {}
export interface PokemonStoreSnapshotOut extends SnapshotOut<typeof PokemonStoreModel> {}
export interface PokemonStoreSnapshotIn extends SnapshotIn<typeof PokemonStoreModel> {}
export const createPokemonStoreDefaultModel = () => types.optional(PokemonStoreModel, {})
