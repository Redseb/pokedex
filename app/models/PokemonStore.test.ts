import { PokemonStoreModel } from "./PokemonStore"

test("can be created", () => {
  const instance = PokemonStoreModel.create({})

  expect(instance).toBeTruthy()
})
