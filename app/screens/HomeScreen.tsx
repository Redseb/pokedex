import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {
  AppScreenName,
  AppStackParamList,
  TabsNames,
  TabsNavigatorScreenProps,
} from "app/navigators"
import { PokeCard, Screen, Text } from "app/components"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { FlatList } from "react-native-gesture-handler"

interface HomeScreenProps
  extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Home>> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const {
    pokemonStore: { getPokemon, pokemon },
  } = useStores()

  useEffect(() => {
    getPokemon()
  }, [])

  // Pull in navigation via hook
  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>()
  return (
    <Screen style={$root} preset="scroll">
      <Text
        text="home"
        onPress={() => navigate(AppScreenName.PokemonDetails)}
        style={{ marginTop: 50 }}
      />
      <FlatList data={pokemon} renderItem={({ item }) => <PokeCard pokemon={item} />} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
