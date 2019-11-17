import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import DashboardScreen from "../screens/DashboardScreen";
import Notifications from "../screens/Notifications";
import LoginScreen from "../screens/LoginScreen";
import Admin from "../screens/Admin";
import Floor from "../screens/Floor";
import Queue from "../screens/Stock";
/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

// import Icon from "@expo/vector-icons";

/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

// nested for now just incase we want to pass it options
//what is going to be used for the navbar?

// drawer stack

const BottomTabNavigator = createBottomTabNavigator(
  // assign tabs
  {
    Admin,
    Floor,
    Queue,
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
const BottomStackNavigator = createStackNavigator(
  // stack the tabs
  {
    BottomTabNavigator: BottomTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          // <TouchableOpacity
          //   onPress={() => navigation.state.params.handleGetAllCategories()}
          // >
          <FontAwesome.Button
            name="resistance"
            backgroundColor="#ff0000"
            style={{ paddingLeft: 10 }}
            size={20}
          />
          // </TouchableOpacity>
        )
      };
    }
  }
);
/*
for category sidemenu buttons
onpress={
  () => ** " toggle modal"
}
*/
const AppDrawerNavigator = createDrawerNavigator({
  // items to be stored in drawer or sidemenu
  Dashboard: {
    screen: BottomStackNavigator
  },
  Adults: { screen: Floor },
  Kids: { screen: Floor },
  Toddlers: { screen: Floor }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

export default createAppContainer(AppSwitchNavigator);
