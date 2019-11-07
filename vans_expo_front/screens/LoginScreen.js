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
import { Alert, View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { login } from "../redux/actions/authUserActions";

class LoginScreen extends Component {
  state = {
    loginForm: {
      employee: "",
      password: ""
    },
    submitted: false
  };

  componentDidMount() {
    if (this.props.authUser.isAuthenticated) {
      this.props.navigation.navigate("Admin");
    }
    console.log(`componentdidmount : `, this.props.authUser);
  }
  handleOnChange = (event, name) => {
    const { loginForm } = this.state;
    let { name, text } = event;
    let data = text;

    this.setState({
      loginForm[name]: data
    });
  };
  successfullySignedIn = () => {
    this.setState({
      submitted: true,
      loginForm: {
        employee: "",
        password: ""
      }
    });
  };

  handleOnSubmit = () => {
    this.setState(
      {
        submitted: true
      },
      () => {
        this.props.login(this.state.loginForm);
        Alert.alert("Credentials", `${this.props.isAuthenticated}`);
      }
    );
  };

  render() {
    // console.log(this.props.navigation);
    /*
    TextInput=> https://docs.expo.io/versions/v35.0.0/react-native/textinput/
    */
    console.log("after render", this.props);
    return (
      <View style={styles.container}>
        <TextInput
          name="employee"
          value={this.state.loginForm[employee]}
          onChangeText={this.handleOnChange}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          name="password"
          value={this.state.loginForm[password]}
          onChangeText={this.handleOnChange}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={"Login"}
          style={styles.input}
          onPress={this.handleOnSubmit}
        />
      </View>
      // <View style={styles.screen}>
      //   <TextInput
      //     placeHolder="EmployeeID"
      //     style={styles.input}
      //     onChangeText={this.handleOnChange}
      //   />
      //   <TextInput placeHolder="Password" style={styles.input} />
      //   <Button title="Login" onPress={this.handleOnSubmit} />
      // </View>
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
