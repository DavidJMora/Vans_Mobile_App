// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
<<<<<<< HEAD
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addToQueue } from "../redux/actions/dataPassingActions";
import { getAllCategories } from "../redux/actions/floorActions";
import { ListItem, Card } from "react-native-elements";
=======
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux'
import { addToQueue } from '../redux/actions/dataPassingActions';
import { getFloorData } from '../redux/actions/floorActions';

>>>>>>> d963ec757848628272747a0c860c1c8321a37388
class FloorScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  componentDidMount() {
<<<<<<< HEAD
    // let categories = this.props.getAllCategories();
    // console.log(categories);
    // this.props.navigation.setParams({
    //   handleGetAllCategories: this.props.getAllCategories()
    // });
    // console.log(categories);
=======
    this.props.getFloorData()
        .then(() => {
          console.log(this.props.floorInfo);
          // console.log(this.props.floorInfo.Kids);
          // console.log(this.props.floorInfo.Toddlers);
        })
>>>>>>> d963ec757848628272747a0c860c1c8321a37388
  }
  toggleModal = () => {
    this.setState({ modalVisisble: true });
  };

  render() {
    const list = Object.keys(this.props.floorInfo);
    return (
      <View style={styles.screen}>
        {list.map((list, i) => (
          <TouchableOpacity onPress={() => this.toggleModal}>
            <ListItem key={i} title={list[i]} bottomDivider />
          </TouchableOpacity>
        ))}
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
