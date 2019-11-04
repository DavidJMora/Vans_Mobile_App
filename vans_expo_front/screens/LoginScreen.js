// import React from "react";
// import { View, TextInput, Button, StyleSheet } from "react-native";
// const LoginScreen = props => {
//   return (
//     <View style={styles.screen}>
//       <Text>Hello</Text>
//       {/* <TextInput placeHolder="EmployeeID" style={styles.input} />
//       <TextInput placeHolder="Password" style={styles.input} />
//       <Button title="Login" /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
//   // input: {
//   //   width: "20%",
//   //   borderColor: "black",
//   //   borderWidth: 1,
//   //   padding: 10
//   // }
// });

// export default LoginScreen;
import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export class LoginScreen extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.screen}>
        <TextInput placeHolder="EmployeeID" style={styles.input} />
        <TextInput placeHolder="Password" style={styles.input} />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Admin")}
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
  },
  input: {
    width: "20%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});

export default LoginScreen;
