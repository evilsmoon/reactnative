import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account";

const MyAccountScreensStacks = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Mi cuenta",
    }),
  },
});

export default MyAccountScreensStacks;