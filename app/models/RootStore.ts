import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PokemonStoreModel } from "./PokemonStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  pokemonStore: types.optional(PokemonStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
