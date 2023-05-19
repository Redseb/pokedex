import React from "react"
import {
  HomeScreen,
  FavoritesScreen,
  SearchScreen,
} from "app/screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { IconTypes, NavigationBottomTab } from "app/components"

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

export const TabsIcons = {
  Home: 'home' as  IconTypes,
  Favorites: 'star' as IconTypes,
  Search: 'search' as IconTypes,
}

const Tabs = createBottomTabNavigator<TabsNavigatorParamList>()
export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false,  }} tabBar={props => <NavigationBottomTab {...props}/>}>
      <Tabs.Screen name={TabsNames.Favorites} component={FavoritesScreen} />
      <Tabs.Screen name={TabsNames.Home} component={HomeScreen} />
      <Tabs.Screen name={TabsNames.Search} component={SearchScreen} />
    </Tabs.Navigator>
  )
}
