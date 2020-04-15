import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account";
import LoginScreen from '../screens/Account/login'
import RegisterScreen from '../screens/Account/register'
const MyAccountScreensStacks = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Mi cuenta",
    }),
  },
  Login:{
    screen:LoginScreen, 
    navigationOptions: ()=>({
      title: "Login"
    })
  },
  Register:{
    screen:RegisterScreen, 
    navigationOptions: ()=>({
      title: "Registro"
    })
  }

});

export default MyAccountScreensStacks;