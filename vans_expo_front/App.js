import React, { Component } from "react";
// import { Image, Text, View, StyleSheet } from "react-native";

// import { AppLoading } from "expo";
import AppContainer from "./navigation/AppNavigation";
import store from "./redux/store/store";
import { Provider } from "react-redux";
// import * as Font from "expo-font";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// state = {
//   fontLoaded: false
// };

// async componentDidMount() {
//   await Font.loadAsync({
//     "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
//   });
// }

// if (!this.state.isLoading) {
//   return (
//     <AppLoading
//       startAsync={this.fetchFont}
//       // create a function to handle isLoading
//       onFinish={() => this.setState({ fontLoaded: true })}
//     />
//   );
// }

/*
  ****** I M P O R T A N T *******

 ** startAsync (function)  **
    -- A function that returns a Promise, and the Promise should resolve when the app is done loading required data and assets.

 ** onError (function) **
    -- If startAsync throws an error, it is caught and passed into the function provided to onError.

 ** onFinish (function) **
  -- (Required if you provide startAsync). Called when startAsync resolves or rejects. This should be used to set state and unmount the AppLoading component.
 ** autoHideSplash (boolean) **
  -- Whether to hide the native splash screen as soon as you unmount the AppLoading component. See SplashScreen module for an example.
 */
