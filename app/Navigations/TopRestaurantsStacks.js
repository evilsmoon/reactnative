
import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../screens/TopRestaurants";

const TopRestaurantsStacks = createStackNavigator({
  Restaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: "Top Restaurants",
    }),
  },
});

export default TopRestaurantsStacks;
