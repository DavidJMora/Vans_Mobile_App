// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
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
class FloorScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  componentDidMount() {
    // let categories = this.props.getAllCategories();
    // console.log(categories);
    // this.props.navigation.setParams({
    //   handleGetAllCategories: this.props.getAllCategories()
    // });
    // console.log(categories);
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
export default connect(mapStateToProps, { addToQueue, getAllCategories })(
  FloorScreen
);
/**
 *  floorscreen =>
 *
 */
