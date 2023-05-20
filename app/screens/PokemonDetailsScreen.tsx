import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppScreenName, AppStackParamList, AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PokemonDetailsScreenProps extends NativeStackScreenProps<AppStackScreenProps<"PokemonDetails">> {}
type PokemonDetailsScreenRouteProp = RouteProp<AppStackParamList, AppScreenName.PokemonDetails>

export const PokemonDetailsScreen: FC<PokemonDetailsScreenProps> = observer(function PokemonDetailsScreen() {
  const route = useRoute<PokemonDetailsScreenRouteProp>()
  const {goBack} = useNavigation<NavigationProp<AppStackParamList>>()
  
  const pokemon = route.params.pokemon

  return (
    <Screen style={$root} preset="scroll">
      <Text text={pokemon.name} onPress={() => goBack()} style={{marginTop: 50}}/>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
