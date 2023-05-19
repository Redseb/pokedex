import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface FavoritesScreenProps extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Favorites>> {}

export const FavoritesScreen: FC<FavoritesScreenProps> = observer(function FavoritesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="favorites" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
