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
import { connect } from 'react-redux'
import { addToQueue } from '../redux/actions/dataPassingActions';

class FloorScreen extends Component {
  state = {};

  componentDidMount() {}

  handleOnSubmit = () => {};

  someFunction = () => {};

  render() {
    
    return (
      <View style={styles.screen}>
        <Text> Floor Screen </Text>
        <Button
          title='Add Fake Stock'
          onPress={() => this.props.addToQueue({productID: '5dcaeab8c2601c88c0794968'}, {data: {
            size: "42",
            user: {
              sentBy: "5dc1b8e520ada9e222c66a5b",
              receivedBy: "5dc1b98f20ada9e222c66a5f"
            }
          }})}
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

const mapStateToProps = state => {

  return {
    passedData: state.passedData
  };
};

export default connect(mapStateToProps, { addToQueue })(FloorScreen);
/**
 *  floorscreen =>
 *
 */
