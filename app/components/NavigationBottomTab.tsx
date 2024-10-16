import { TabsIcons } from "app/navigators"
import { $shadow, colors, rounding, spacing } from "app/theme"
import React from "react"
import { View, TouchableOpacity, ViewStyle } from "react-native"
import { NavigationIcon } from "./NavigationIcon"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"

export const NavigationBottomTab = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => {
  return (
    <View style={[$tabBarContainer, { marginBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true, params: {} })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={$tabContainer}
            key={index}
          >
            <NavigationIcon focused={isFocused} icon={TabsIcons[route.name]} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const $tabBarContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: colors.primary,
  borderTopRightRadius: rounding.s,
  borderTopLeftRadius: rounding.s,
  ...$shadow.boxShadow,
}

const $tabContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.sm,
}
