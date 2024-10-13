import React from "react"
import { render } from "@testing-library/react-native"
import { PokeCard } from "../../app/components/PokeCard"
import { mockPokemon } from "./mockPokemon"

describe("PokeCard", () => {
  it("renders the correct Pokemon name and ID", () => {
    const { getByText } = render(<PokeCard pokemon={mockPokemon} />)
    expect(getByText("#0001 Bulbasaur")).toBeTruthy()
  })

  it("matches snapshot", () => {
    const { toJSON } = render(<PokeCard pokemon={mockPokemon} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
