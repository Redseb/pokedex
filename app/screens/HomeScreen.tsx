import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppScreenName, AppStackParamList, TabsNames, TabsNavigatorScreenProps } from "app/navigators"
import { PokeCard, Screen, Text } from "app/components"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { MOCK_POKEMON } from "app/utils/mockData"
// import { useStores } from "app/models"

interface HomeScreenProps extends NativeStackScreenProps<TabsNavigatorScreenProps<TabsNames.Home>> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="home" onPress={() => navigate(AppScreenName.PokemonDetails)} style={{marginTop: 50}}/>
      <PokeCard pokemon={MOCK_POKEMON}/>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
