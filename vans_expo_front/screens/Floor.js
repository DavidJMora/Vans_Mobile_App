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
import { getAllCategories } from '../redux/actions/floorActions';

class FloorScreen extends Component {
  state = {
    submitform: {}
  };

  componentDidMount() {
    let categories = this.props.getAllCategories();
    console.log(categories)
  }

  handleGetStyle = () => {};
  handleGetProduct = () => {};
  handleSendToStock = () => {};


  render() {
    
    return (
      <View style={styles.screen}>
        <Text> Floor Screen </Text>
        <Button
          title='Add Fake Stock'
          onPress={() => this.props.addToQueue({productID: '5dcc72272e919b857480e8be'}, {data: {
            size: "9",
            user: {
              sentBy: "5dc1b8e520ada9e222c66a5b",
              receivedBy: "5dc1b98f20ada9e222c66a5f"
            },
            categoryName: "Kids",
            color: "blue"
          }})}
        />
        <Button
          title={"ADULTS"}
          style={styles.input}
          onPress={this.handleGetCategory}
        />
        <Button
          title={"Kids"}
          style={styles.input}
          onPress={this.handleGetCategory}
        />
        <Button
          title={"Toddlers"}
          style={styles.input}
          onPress={this.handleGetCategory}
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
    passedData: state.passedData,
    floorInfo: state.floorData
  };
};

export default connect(mapStateToProps, { addToQueue, getAllCategories })(FloorScreen);
/**
 *  floorscreen =>
 *
 */
