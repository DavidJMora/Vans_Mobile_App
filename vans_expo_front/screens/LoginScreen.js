import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button, Image } from "react-native";
import { connect } from "react-redux";
import { login } from "../redux/actions/authUserActions";

class LoginScreen extends Component {
  state = {
    loginForm: {
      employee_number: "",
      password: ""
    },
    submitted: false,
    isLoading: false
  };

  componentDidMount() {
    if (this.props.authUser.isAuthenticated) {
      this.props.navigation.navigate("");
    }
    // console.log(`componentdidmount : `, this.props.authUser);
  }

  handleOnChange = (text, name) => {
    const { loginForm } = this.state;
    loginForm[name] = text;
    this.setState({ loginForm });
  };

  successfullySignedIn = () => {
    this.setState({
      submitted: true,
      loginForm: {
        employee_number: "",
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
        this.props.login(this.state.loginForm).then(() => {
          this.props.navigation.navigate("Floor");
        });
      }
    );
  };

  render() {
    // console.log(this.props.navigation);
    /*
    TextInput=> https://docs.expo.io/versions/v35.0.0/react-native/textinput/
    */

    return (
      <View style={styles.screen}>
        <Image source={require("../assets/vansBG.jpg")} />
        <TextInput
          name="employee_number"
          value={this.state.loginForm.employee_number}
          onChangeText={text => this.handleOnChange(text, "employee_number")}
          placeholder={"Employee Number"}
          style={styles.input}
        />
        <TextInput
          name="password"
          value={this.state.loginForm.password}
          onChangeText={text => this.handleOnChange(text, "password")}
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
export default connect(mapStateToProps, { login })(LoginScreen);
