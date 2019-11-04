// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const NotificationScreen = props => {
//   return (
//     <View style={styles.screen}>
//       <Text> Notifications </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

// export default NotificationScreen;

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> Notifications </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default NotificationScreen;
