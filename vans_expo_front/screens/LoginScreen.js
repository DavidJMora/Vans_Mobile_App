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
import { View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { login } from "../redux/actions/authUserActions";

class LoginScreen extends Component {
  state = {
    isAuthenticated: null,
    loginForm: {
      employeeID: "",
      password: ""
    }
  };

  componentDidMount() {
    if (this.props.authUser.isAuthenticated) {
      this.props.navigation.navigate(" ");
    }
    console.log(this.props.authUser.isAuthenticated);
  }
  handleOnChange = event => {
    [event.target.name] = event.target.value;
    this.setState({
      loginForm
    });
  };
  handleOnPress = event => {};

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.screen}>
        <TextInput placeHolder='EmployeeID' style={styles.input} />
        <TextInput placeHolder='Password' style={styles.input} />
        <Button
          title='Login'
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

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};
export default connect(
  mapStateToProps,
  { login }
)(LoginScreen);
