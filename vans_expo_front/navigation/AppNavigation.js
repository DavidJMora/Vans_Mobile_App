import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import DashboardScreen from "../screens/DashboardScreen";
import Notifications from "../screens/Notifications";
import LoginScreen from "../screens/LoginScreen";
import Admin from "../screens/Admin";
import Floor from "../screens/Floor";
import Stock from "../screens/Stock";
/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

// import Icon from "@expo/vector-icons";

/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

// nested for now just incase we want to pass it options
//what is going to be used for the navbar?

// drawer stack

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Admin,
    Floor,
    Stock,
    Notifications
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Text
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export default createAppContainer(AppSwitchNavigator);
