import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { PokeCard, Screen, Text } from "app/components"
import { useStores } from "app/models"
import { spacing } from "app/theme"
import Constants from "expo-constants"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface FavoritesScreenProps
  extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Favorites>> {}

export const FavoritesScreen: FC<FavoritesScreenProps> = observer(function FavoritesScreen() {
  const {
    pokemonStore: { getPokemon, pokemonFavorites },
  } = useStores()

  const listContainer = {
    ...$listContainer,
    paddingVertical: Constants.statusBarHeight + spacing.md,
  }

  return (
    <Screen style={$root} contentContainerStyle={$rootContentContainer}>
      <FlatList
        data={pokemonFavorites}
        renderItem={({ item }) => <PokeCard pokemon={item} key={item.name} style={$pokecard} />}
        keyExtractor={(item, index) => item.name + index}
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
