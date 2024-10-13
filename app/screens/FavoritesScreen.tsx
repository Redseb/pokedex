import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { PokeCard, Screen, Text } from "app/components"
import { useStores } from "app/models"
import { spacing } from "app/theme"
import Constants from "expo-constants"
import { Pokemon } from "app/types"

interface FavoritesScreenProps
  extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Favorites>> {}

export const FavoritesScreen: FC<FavoritesScreenProps> = observer(function FavoritesScreen() {
  const {
    pokemonStore: { pokemonFavorites },
  } = useStores()

  const listContainer = {
    ...$listContainer,
    paddingVertical: Constants.statusBarHeight + spacing.md,
  }

  const keyExtractor = (item: Pokemon, index: number) => `${item.name}${index}`

  const renderItem = ({ item }: { item: Pokemon }) => (
    <PokeCard pokemon={item} key={item.name} style={$pokecard} />
  )

  return (
    <Screen style={$root} contentContainerStyle={$rootContentContainer}>
      <FlatList
        data={pokemonFavorites}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={listContainer}
        ListEmptyComponent={ListEmptyComponent}
        extraData={pokemonFavorites.length}
      />
    </Screen>
  )
})

const ListEmptyComponent = () => (
  <View style={$emptyContainer}>
    <Text tx="favoritesScreen.empty" style={$emptyText} />
  </View>
)

const $root: ViewStyle = {
  flex: 1,
}

const $rootContentContainer: ViewStyle = {
  flex: 1,
  flexGrow: 1,
  height: "100%",
}

const $listContainer: ViewStyle = {
  flexGrow: 1,
  paddingHorizontal: spacing.xxs,
}

const $pokecard: ViewStyle = {
  flex: 1,
}

const $emptyContainer: ViewStyle = {
  justifyContent: "center",
  flex: 1,
}
const $emptyText: TextStyle = {
  textAlign: "center",
}
