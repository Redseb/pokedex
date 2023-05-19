import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PokemonDetailsScreenProps extends NativeStackScreenProps<AppStackScreenProps<"PokemonDetails">> {}

export const PokemonDetailsScreen: FC<PokemonDetailsScreenProps> = observer(function PokemonDetailsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const {goBack} = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="pokemonDetails" onPress={() => goBack()} style={{marginTop: 50}}/>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
