// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting
// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const FloorScreen = props => {
//   return (
//     <View style={styles.screen}>
//       <Text> Floor View </Text>
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
// export default FloorScreen;
import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export class FloorScreen extends Component {
  state = {};

  componentDidMount() {}

  handleOnSubmit = () => {};

  someFunction = () => {};

  render() {
    console.log("hello from floor", this.props);
    return (
      <View style={styles.screen}>
        <Text> Floor Screen </Text>
        <Button
          title='To Stock Screen'
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
export default FloorScreen;
/**
 *  floorscreen =>
 *
 */
