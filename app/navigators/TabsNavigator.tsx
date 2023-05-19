import React from "react"
import {
  HomeScreen,
  FavoritesScreen,
  SearchScreen,
} from "app/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

export type TabsNavigatorParamList = {
  Home: undefined,
  Favorites: undefined,
  Search: undefined,
}

export enum TabsNames {
  Home = "Home",
  Favorites = "Favorites",
  Search = "Search",
}

const Tabs = createBottomTabNavigator<TabsNavigatorParamList>()
export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Tabs.Screen name={TabsNames.Favorites} component={FavoritesScreen} />
      <Tabs.Screen name={TabsNames.Home} component={HomeScreen} />
      <Tabs.Screen name={TabsNames.Search} component={SearchScreen} />
    </Tabs.Navigator>
  )
}
