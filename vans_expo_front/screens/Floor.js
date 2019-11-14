// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux'
import { addToQueue } from '../redux/actions/dataPassingActions';
import { getFloorData } from '../redux/actions/floorActions';

class FloorScreen extends Component {
  componentDidMount() {
    this.props.getFloorData()
        .then(() => {
          console.log(this.props.floorInfo);
          // console.log(this.props.floorInfo.Kids);
          // console.log(this.props.floorInfo.Toddlers);
        })
  }
  toggleModal = () => {
    this.setState({ modalVisisble: true });
  };

  render() {
    return (
      <View>
        <Text>{this.props.floorInfo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    passedData: state.passedData,
    floorInfo: state.floorInfo
  };
};

export default connect(mapStateToProps, { addToQueue, getFloorData })(FloorScreen);
/**
 *  floorscreen =>
 *
 */
