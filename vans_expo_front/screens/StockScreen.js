// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const StockScreen = props => {
//   return (
//     <View>
//       <Text> StockRoom </Text>
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
// export default StockScreen;
import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export class StockScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> StockScreen </Text>
        <Button
          title="Check Notifications"
          onPress={() => this.props.navigation.navigate("Notifications")}
        />
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

export default StockScreen;
