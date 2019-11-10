import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// import { connect } from "react-redux";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <Text> DashBoardScreen </Text>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     authUser: state.authUser
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(DashboardScreen);
