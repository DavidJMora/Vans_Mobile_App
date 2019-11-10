import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginStack from "./LoginStack";
import DrawerNavigation from "./DrawerStack";

/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

// import { Ionicons } from "@expo/vector-icons";

/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

// nested for now just incase we want to pass it options
//what is going to be used for the navbar?

const Stacked = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack"
  }
);
const OffTheWall = createAppContainer(Stacked);
export default OffTheWall;
