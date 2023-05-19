import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import {Icon, IconTypes} from './'

export interface NavigationIconProps {
  /**
   * Whether the icon is currently focused.
   */
  focused: boolean,
  /**
   * What icon to show.
   */
  icon: IconTypes
}

/**
 * An Icon used in the BottomTabBar component. Depending on focused, it will be colored differently.
 */
export const NavigationIcon = observer(function NavigationIcon(props: NavigationIconProps) {
  const { focused, icon } = props

  return (
    <View style={$container}>
      <Icon icon={icon} size={25} color={focused ? colors.activeNavigation : colors.inactiveNavigation}/>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}