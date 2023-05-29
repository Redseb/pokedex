import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppScreenName, AppStackParamList, AppStackScreenProps } from "app/navigators"
import { AutoImage, Icon, Screen, Text } from "app/components"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { colors, rounding, spacing } from "app/theme"
import { padNumber } from "app/utils/helpersCommon"
import { useStores } from "app/models"

interface PokemonDetailsScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<"PokemonDetails">> {}
type PokemonDetailsScreenRouteProp = RouteProp<AppStackParamList, AppScreenName.PokemonDetails>

export const PokemonDetailsScreen: FC<PokemonDetailsScreenProps> = observer(
  function PokemonDetailsScreen() {
    const {
      pokemonStore: { toggleFavorite, favorites },
    } = useStores()
    const route = useRoute<PokemonDetailsScreenRouteProp>()
    const { goBack } = useNavigation<NavigationProp<AppStackParamList>>()

    const pokemon = route.params.pokemon
    const primaryColor = colors.pokemonTypes[pokemon.types[0]].primary
    const secondaryColor = colors.pokemonTypes[pokemon.types[0]].secondary

    const screenStyle = [$root, { backgroundColor: primaryColor }]
    const nameContainer = [$nameContainer, { backgroundColor: secondaryColor }]
    const contentContainer = [$contentContainer, { backgroundColor: secondaryColor }]
    const dataContainer = [$dataContainer, { backgroundColor: primaryColor }]

    const isFavorite = favorites.includes(route.params.pokemon.id)

    const onPressFavorite = () => {
      toggleFavorite(route.params.pokemon.id)
    }

    return (
      <Screen style={screenStyle} contentContainerStyle={$rootContentContainer} preset="scroll">
        <View style={$headerContainer}>
          <Icon icon="back" onPress={() => goBack()} />
          <Icon
            icon="star"
            onPress={onPressFavorite}
            color={isFavorite ? colors.palette.accent500 : null}
          />
        </View>
        <View style={$imageContainer}>
          <AutoImage
            source={{ uri: pokemon.sprites.front_default }}
            maxHeight={200}
            maxWidth={200}
          />
        </View>
        <View style={nameContainer}>
          <Text style={$whiteText}>{`#${padNumber(pokemon.id)} ${pokemon.name}`}</Text>
        </View>
        <View style={contentContainer}>
          <View style={dataContainer}>
            <Text>
              <Text weight="bold" tx="pokemonDetails.types" />
              <Text
                text={`${
                  pokemon.types.length > 1
                    ? `${pokemon.types[0]} / ${pokemon.types[1]}`
                    : pokemon.types[0]
                }`}
              />
            </Text>
          </View>

          <View style={dataContainer}>
            <Text weight="bold" tx="pokemonDetails.baseStats" />
            <View style={$statsContainer}>
              <View style={$statsColumn}>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.hp" />
                  <Text text={pokemon.stats.hp.toString()} />
                </Text>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.attack" />
                  <Text text={pokemon.stats.attack.toString()} />
                </Text>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.defense" />
                  <Text text={pokemon.stats.defense.toString()} />
                </Text>
              </View>

              <View style={$statsColumn}>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.speed" />
                  <Text text={pokemon.stats.speed.toString()} />
                </Text>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.specialAttack" />
                  <Text text={pokemon.stats.specialAttack.toString()} />
                </Text>
                <Text>
                  <Text weight="bold" tx="pokemonDetails.specialDefense" />
                  <Text text={pokemon.stats.specialDefense.toString()} />
                </Text>
              </View>
            </View>
          </View>

          <View style={dataContainer}>
            <Text>
              <Text weight="bold" tx="pokemonDetails.abilities" />
              <Text text={pokemon.abilities.join(", ")} />
            </Text>
          </View>

          <View style={dataContainer}>
            <Text>
              <Text weight="bold" tx="pokemonDetails.height" />
              <Text text={pokemon.height.toString()} />
            </Text>
            <Text>
              <Text weight="bold" tx="pokemonDetails.weight" />
              <Text text={pokemon.weight.toString()} />
            </Text>
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $rootContentContainer: ViewStyle = {
  flexGrow: 1,
}

const $headerContainer: ViewStyle = {
  paddingTop: spacing.lg,
  paddingHorizontal: spacing.sm,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $imageContainer: ViewStyle = {
  alignItems: "center",
}

const $nameContainer: ViewStyle = {
  width: "50%",
  alignItems: "flex-end",
  marginTop: -spacing.md,
  paddingRight: spacing.sm,
  paddingVertical: spacing.xxs,
  borderTopRightRadius: rounding.m,
}

const $contentContainer: ViewStyle = {
  flexGrow: 1,
}

const $dataContainer: ViewStyle = {
  marginTop: spacing.md,
  marginHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.xs,
  borderRadius: rounding.m,
}

const $statsContainer: ViewStyle = {
  flexDirection: "row",
}

const $statsColumn: ViewStyle = {
  flex: 1,
}

const $whiteText: TextStyle = {
  color: colors.palette.neutral100,
}
