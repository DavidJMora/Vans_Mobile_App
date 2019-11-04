import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";

/*
    @ DESC
    *{ AppLoading }
    *    Font

    https://docs.expo.io/versions/v35.0.0/sdk/app-loading
    https://docs.expo.io/versions/latest/sdk/font/

    @ PURPOSE
    * AppLoading * is a component that tells expo helps buy time to preload fonts.
    * Font.loadAsync(object) * used load multiple fonts at once.
    * To instructions on how to Font go here:

    @ DOCS
    * https://docs.expo.io/versions/v35.0.0/guides/using-custom-fonts/#using-custom-fonts




  Install packages accordingly specified by documentation.

                ******** Note ************
                * expo install <package> *
                *     -   or    -        *
                * npm install <package>  *
                **************************



*/

export default class App extends React.Component {
  state = {
    isLoading: false
  };

  /*

  @ DESC

    ** React Lifecycles still apply. **


    How to => promise.
  * async the compnentDidMount()
  * await Font.loadAsync to handle its promise.

  @ DOCS
  * https://docs.expo.io/versions/v35.0.0/guides/using-custom-fonts/#using-custom-fonts

*/

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     "open-sans": require("./assets/fonts/OpenSans-Regular.tff"),
  //     "open-sans-bold": require("./assets/fonts/OpenSans-Regular.tff")
  //   });
  //   this.setState({
  //     fontLoaded: true
  //   });
  // }

  render() {
    if (!this.state.isLoading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          // create a function to handle isLoading
          onFinish={() => this.setState({ isLoading: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Image source={require("./assets/VansLogo.png")} />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require("./assets/VansLogo.png")];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
