import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { Button, PokeCard, Screen, TextField, Text } from "app/components"
import Constants from "expo-constants"
import { colors, spacing } from "app/theme"
import { useStores } from "app/models"
import { DATA_STATUS } from "app/types/dataStatus"
import I18n from "i18n-js"

interface SearchScreenProps
  extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Search>> {}

export const SearchScreen: FC<SearchScreenProps> = observer(function SearchScreen() {
  const {
    pokemonStore: { getSpecificPokemon, searchStatus },
  } = useStores()
  const [searchText, setSearchText] = useState("")
  const [searchPokemon, setSearchPokemon] = useState(null)

  const onPressSearch = async () => {
    setSearchPokemon(null)
    setSearchPokemon(await getSpecificPokemon(searchText))
  }

  const renderContent = () => {
    switch (searchStatus) {
      case DATA_STATUS.PENDING:
        return <ActivityIndicator color={colors.primary} />
      case DATA_STATUS.FULFILLED:
        if (!searchPokemon) break
        return <PokeCard pokemon={searchPokemon} />
      case DATA_STATUS.REJECTED:
        return <Text text={I18n.t(`searchScreen.${searchStatus}`)} style={$statusText} />
      default:
        return null
    }
  }

  const buttonDisabled = searchStatus === DATA_STATUS.PENDING

  const root = {
    ...$root,
    paddingTop: Constants.statusBarHeight + spacing.md,
  }

  return (
    <Screen style={root} contentContainerStyle={$rootContentContainer} preset="scroll">
      <TextField
        placeholderTx="searchScreen.searchPlaceholder"
        labelTx="searchScreen.searchTermLabel"
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={$centerContainer}>{renderContent()}</View>
      <Button
        tx="searchScreen.searchButton"
        onPress={onPressSearch}
        disabled={buttonDisabled}
        style={$button}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $rootContentContainer: ViewStyle = {
  flex: 1,
  // paddingHorizontal: spacing.md,
}

const $centerContainer: ViewStyle = {
  justifyContent: "center",
  flex: 1,
}

const $statusText: TextStyle = {
  textAlign: "center",
  marginTop: 16,
}

const $button: ViewStyle = {
  marginBottom: 16,
}
