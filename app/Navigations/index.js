import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopRestaurantsStacks from "./TopRestaurantsStacks";
import SearchStacks from "./SearchStacks";
import MyAccountStacks from "./MyAccountStacks";

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestaurantsScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />
      ),
    }),
  },
  TopRestaurants: {
    screen: TopRestaurantsStacks,
    navigationOptions: () => ({
      tabBarLabel: "TopRestaurants",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="star-outline"
          size={22}
          color={tintColor}
        />
      ),
    }),
  },
  Search: {
    screen: SearchStacks,
    navigationOptions: () => ({
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="magnify"
          size={22}
          color={tintColor}
        />
      ),
    }),
  },
  MyAccount: {
    screen: MyAccountStacks,
    navigationOptions: () => ({
      tabBarLabel: "MyAccount",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="home-outline"
          size={22}
          color={tintColor}
        />
      ),
    }),
  }
  // ...
},{
    initialRouteName:"MyAccount",
    order:["Restaurants","TopRestaurants","Search","MyAccount"],
    tabBarOptions:{
        inactiveTintColor: "#646464",
        activeTintColor:"#00a680",
        activeBackgroundColor:"#00000F",

    }
});
export default createAppContainer(NavigationStacks);
