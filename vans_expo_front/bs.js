// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addToQueue } from "../redux/actions/dataPassingActions";
import { getFloorData } from "../redux/actions/floorActions";

class FloorScreen extends Component {
  state = {
    category: []
  };
  componentDidMount() {
    this.props.getFloorData();
    if (
      this.props.navigation.state.key === "Adults" ||
      this.props.navigation.state.key === "Toddlers" ||
      this.props.navigation.state.key === "Kids"
    ) {
      const { key } = this.props.navigation.state;

      this.setState(this.props.floorInfo[key]);
      // console.log(this.props.navigation.state.key, "LINE 24 ================");
    }
    // this.props.getFloorData();
    // console.log(this.props.floorInfo);

    // console.log(this.props.floorInfo[key], "===== is this the key?");
  }

  render() {
    // console.log(this.props.navigation.state.params, "======LINE 46=======");
    console.log(
      "==========================",
      this.props.navigation.state,
      "DEEEZ KEYSSS"
    );
    // const { category } = this.state;
    // console.log(this.state.categoryID);
    // const category = this.state;
    // console.log(category, "++++++++++++++++");
    return (
      <View style={styles.screen}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state}
          renderItem={item => (
            <View style={styles.listItem}>
              <Text>{`${item.categoryName}`}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  listItem: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return {
    passedData: state.passedData,
    floorInfo: state.floorInfo
  };
};

export default connect(mapStateToProps, { addToQueue, getFloorData })(
  FloorScreen
);
