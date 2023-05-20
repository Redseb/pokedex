import React from 'react';
import { Image, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Pokemon } from '../types';
import { $shadow, colors, rounding, typography } from '../theme';
import { AutoImage, Text } from './';
import padNumber from 'app/utils/helpersCommon';

const CARD_HEIGHT = 100;
const CARD_WIDTH = 160;

interface PokeCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * The Pokemon to get the data from
   */
  pokemon: Pokemon
}

/**
 * A small card displaying a Pokemon sprite, name, and id.
 * The card is clickable and will navigate to the Pokemon's details screen.
 * The card's color is based on the Pokemon's type.
 */
export const PokeCard = observer(function PokeCard(props: PokeCardProps) {
  const { style, pokemon } = props

  const primaryColor = colors.pokemonTypes[pokemon.types[0]].primary;
  const secondaryColor = colors.pokemonTypes[pokemon.types[0]].secondary;
  const spriteUrl = pokemon.sprites.front_default;

  const $styles = [
    $container,
    style,
    { backgroundColor: primaryColor },
  ]

  return (
    <View style={$styles}>
      <AutoImage source={{ uri: spriteUrl }} maxHeight={CARD_HEIGHT*0.75} maxWidth={CARD_WIDTH}/>
      <View style={[$nameContainer, {backgroundColor: secondaryColor}]}>
      <Text style={$text}>{`#${padNumber(pokemon.id)} ${pokemon.name}`}</Text>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: rounding.s,
  ...$shadow.boxShadow,
}

const $nameContainer: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  borderBottomLeftRadius: rounding.s,
  borderBottomRightRadius: rounding.s,
}

const $text: TextStyle = {
  color: colors.palette.neutral100,
}