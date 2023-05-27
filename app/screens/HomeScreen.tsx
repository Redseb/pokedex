import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { PokeCard, Screen } from "app/components"
import { useStores } from "app/models"
import Constants from "expo-constants"
import { spacing } from "app/theme"
import { Pokemon } from "app/types"

interface HomeScreenProps
  extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Home>> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  const {
    pokemonStore: { getPokemon, pokemon },
  } = useStores()

  useEffect(() => {
    getPokemon()
  }, [])

  const listContainer = {
    ...$listContainer,
    paddingVertical: Constants.statusBarHeight + spacing.md,
  }

  const renderItem = ({ item }: { item: Pokemon }) => (
    <PokeCard pokemon={item} key={item.name} style={$pokecard} />
  )

  const keyExtractor = (item: Pokemon, index: number) => `${item.name}${index}`

  return (
    <Screen style={$root} contentContainerStyle={$rootContentContainer}>
      <FlatList
        data={pokemon}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={listContainer}
        onEndReachedThreshold={0.5}
        onEndReached={getPokemon}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $rootContentContainer: ViewStyle = {
  flex: 1,
  height: "100%",
}

const $listContainer: ViewStyle = {
  paddingHorizontal: spacing.xxs,
}

const $pokecard: ViewStyle = {
  flex: 1,
}
