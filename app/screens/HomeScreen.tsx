import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { PokeCard, Screen } from "app/components"
import { useStores } from "app/models"
import { FlashList } from "@shopify/flash-list"

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

  return (
    <Screen style={$root} contentContainerStyle={$rootContentContainer}>
      <FlashList
        data={pokemon}
        renderItem={({ item }) => <PokeCard pokemon={item} />}
        estimatedItemSize={100}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $rootContentContainer: ViewStyle = {
  height: "100%",
}
