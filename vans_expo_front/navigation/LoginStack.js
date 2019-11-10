import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/LoginScreen";

const LoginStack = createStackNavigator(
  {
    loginScreen: { screen: LoginScreen }
  },
  {
    headerMode: "float",
    navigationOptions: {
      headerStyle: { backgroundColor: "#E73536" },
      title: "You are not logged in",
      headerTintColor: "white"
    }
  }
);

export default LoginStack;
