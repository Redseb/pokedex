import React from "react"
import { render } from "@testing-library/react-native"
import { PokemonDetailsScreen } from "../../app/screens/PokemonDetailsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { mockPokemon } from "./mockPokemon"

const Stack = createNativeStackNavigator()

const MockedNavigator = ({ component }: { component: React.ComponentType }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonDetails"
          component={component}
          initialParams={{ pokemon: mockPokemon }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

describe("PokemonDetailsScreen", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<MockedNavigator component={PokemonDetailsScreen} />)

    expect(getByTestId("BACK")).toBeTruthy()
    expect(getByTestId("FAVORITE")).toBeTruthy()
    expect(getByTestId("POKEMON_IMAGE")).toBeTruthy()
    expect(getByText("#0001 Bulbasaur")).toBeTruthy()
    expect(getByText("grass")).toBeTruthy()
    expect(getByText("1")).toBeTruthy() // HP
    expect(getByText("2")).toBeTruthy() // Attack
    expect(getByText("3")).toBeTruthy() // Defense
    expect(getByText("4")).toBeTruthy() // Special Attack
    expect(getByText("5")).toBeTruthy() // Special Defense
    expect(getByText("6")).toBeTruthy() // Speed
    expect(getByText("Overgrow, Chlorophyll")).toBeTruthy()
    expect(getByText("100")).toBeTruthy() // Height
    expect(getByText("200")).toBeTruthy() // Weight
  })
})
