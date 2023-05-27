import { Instance, SnapshotIn, SnapshotOut, flow, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PokemonModel } from "app/types"
import { DATA_STATUS } from "app/types/dataStatus"
import { PokemonShortDTO, apiPokemon } from "app/services/api"

export const PokemonStoreModel = types
  .model("PokemonStore")
  .props({
    pokemon: types.array(PokemonModel),
    dataStatus: DATA_STATUS.IDLE,
    currentOffset: 0,
    favorites: types.array(types.number),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    getPokemon: () =>
      flow(function* () {
        const pokemonListResponse = yield apiPokemon.getPokemonList(20, self.currentOffset)
        if (!pokemonListResponse.ok) {
          self.setProp("dataStatus", DATA_STATUS.REJECTED)
          return
        }

        const pokemonList = yield Promise.all(
          pokemonListResponse.data.results.map(async (result: PokemonShortDTO) => {
            return await apiPokemon.getPokemonSpecific(result.name)
          }),
        )
        const mergedPokemonList = [...self.pokemon, ...pokemonList]
        self.setProp("dataStatus", DATA_STATUS.FULFILLED)
        self.setProp("pokemon", mergedPokemonList)
        self.setProp("currentOffset", self.currentOffset + 20)
      })(),
    toggleFavorite: (id: number) => {
      const index = self.favorites.indexOf(id)
      if (index === -1) {
        self.favorites.push(id)
        self.favorites.sort((a, b) => a - b)
      } else {
        self.favorites.splice(index, 1)
      }
    },
  }))
  .views((self) => ({
    get pokemonFavorites() {
      return self.pokemon.filter((pokemon) => self.favorites.includes(pokemon.id))
    },
  }))

export interface PokemonStore extends Instance<typeof PokemonStoreModel> {}
export interface PokemonStoreSnapshotOut extends SnapshotOut<typeof PokemonStoreModel> {}
export interface PokemonStoreSnapshotIn extends SnapshotIn<typeof PokemonStoreModel> {}
export const createPokemonStoreDefaultModel = () => types.optional(PokemonStoreModel, {})
