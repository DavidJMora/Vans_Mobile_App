import React from "react";
import { Text, Animated, Easing } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import NotificationScreen from "../screens/NotificationScreen";
import LoginScreen from "../screens/LoginScreen";
import AdminScreen from "../screens/AdminScreen";
import FloorScreen from "../screens/FloorScreen";
import StockScreen from "../screens/StockScreen";
/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

// import { Ionicons } from "@expo/vector-icons";

/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

// nested for now just incase we want to pass it options
//what is going to be used for the navbar?
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

// drawer stack
const DrawerStack = DrawerNavigator(
  {
    notificationScreen: { screen: NotificationScreen },
    adminScreen: { screen: AdminScreen },
    floorScreen: { screen: FloorScreen },
    stockScreen: { screen: StockScreen }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
);
// https://reactnavigation.org/docs/en/drawer-based-navigation.html
const drawerButton = navigation => (
  <Text
    style={{ padding: 5, color: "white" }}
    onPress={() => {
      navigation.toggleDrawer();
    }}
  >
    Menu
  </Text>
);
const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#4C3E54" },
      title: "Welcome!",
      headerTintColor: "white",
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  }
);
const LoginStack = StackNavigator(
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
const VansNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack",
    transitionConfig: noTransitionConfig
  }
);

export default createAppContainer(VansNav);
