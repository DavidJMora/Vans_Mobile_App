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

class AdminScreen extends Component {
  state = {};

  componentDidMount() {}

  handleOnSubmit = () => {};

  someFunction = () => {};
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

{
  /*      mapStateToProps

    this is where you decide
     which reducer's state you
    want to make changes to   */
}

//  const  mapStateToProps = state => {
//  return {
//      someName4Reducer: state.someReducer

//    }

/**

 *  R E D U X  P A T T E R N

1 *  - create a class component *snippets => "rcne"
       *** if you have ES7 React Snippets installed ***
       ** remove the first export infront of the class **

2 *  - { connect }     <---      connects to the instantiated
        someReducer        ( state = {}  || state = initialState )
      from ./reducers

3 *  - mapStateToProps <--- map the the new "state" you manipulated to update          declare yourself        instantiated state "initial state"

4 *  - { actions }     <--- like a controller for server side                         confusedActions.js              "{ middleware }"
        from ./actions

5 *  - export default < ---
     connect(
     mapStateToProps,
      { actions }
      )(component)

 */
export default AdminScreen;
/**{ connect } by
< export default connect( mapStateToProps , {} )(classComponent) >
pass in the class component actions used from actionTypes
*/
