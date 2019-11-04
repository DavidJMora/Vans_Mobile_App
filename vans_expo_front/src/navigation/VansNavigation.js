import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
/** https://reactnavigation.org/docs/en/tab-based-navigation.html */

import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";
/** https://docs.expo.io/versions/latest/guides/icons/#expovector-icons **/

import AdminScreen from "../Screens/AdminScreen";
import FloorScreen from "../Screens/FloorScreen";
import LoginScreen from "../Screens/LoginScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import StockScreen from "../Screens/StockScreen";
