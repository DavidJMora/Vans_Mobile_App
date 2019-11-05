// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const AdminScreen = props => {
//   return (
//     <View style={styles.screen}>
//       <Text> Admin </Text>
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
// export default AdminScreen;
import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export class AdminScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text> Admin Screen </Text>
        <Button
          title="Check Stock Queue"
          onPress={() => this.props.navigation.navigate("Stock")}
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

export default AdminScreen;
