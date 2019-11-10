import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import NotificationScreen from "../screens/NotificationScreen";
import AdminScreen from "../screens/AdminScreen";
import FloorScreen from "../screens/FloorScreen";
import StockScreen from "../screens/StockScreen";

//create the stacks before putting them in a drawer
const DrawerStack = createDrawerNavigator({
  floor: { screen: FloorScreen },
  stock: { screen: StockScreen },
  admin: { screen: AdminScreen },
  notifications: { screen: NotificationScreen }
});

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#4C3E54" },
      title: `WELCOME`,
      headerTintColor: "white"
    })
  }
);

export default DrawerNavigation;
