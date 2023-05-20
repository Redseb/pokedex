import { ViewStyle } from "react-native"

export const ACTIVE_OPACITY = 0.9

export const $shadow: Record<"boxShadow", ViewStyle> = {
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
}
