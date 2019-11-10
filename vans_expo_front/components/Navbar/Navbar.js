import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const getAvailableRoutes = navigation => {
  let availableRoutes = [];
  if (!navigation) return availableRoutes;

  const parent = navigation.dangerouslyGetParent();
  if (parent) {
    if (parent.router && parent.router.childRouters) {
      // Grab all the routes the parent defines and add it the list
      availableRoutes = [
        ...availableRoutes,
        ...Object.keys(parent.router.childRouters)
      ];
    }

    // Recursively work up the tree until there are none left
    availableRoutes = [...availableRoutes, ...getAvailableRoutes(parent)];
  }

  // De-dupe the list and then remove the current route from the list
  return [...new Set(availableRoutes)].filter(
    route => route !== navigation.state.routeName
  );
};
const NavBar = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4C3E54"
      }}
    >
      {getAvailableRoutes(navigation).map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route)}
          key={route}
          style={{
            backgroundColor: "#fff",
            padding: 10,
            margin: 10
          }}
        >
          <Text>{route}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Navbar;
