import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

import { Ionicons } from "@expo/vector-icons";
/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

import LoginScreen from "../screens/LoginScreen";
import AdminScreen from "../screens/AdminScreen";
import FloorScreen from "../screens/FloorScreen";
import NotificationScreen from "../screens/NotificationScreen";
import StockScreen from "../screens/StockScreen";

const VansNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Floor: {
    screen: FloorScreen
  },
  Notifications: {
    screen: NotificationScreen
  },
  Stock: {
    screen: StockScreen
  },
  Admin: {
    screen: AdminScreen
  },
  initialRoute: "Login"
});

export default createAppContainer(VansNavigator);
