// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { connect } from "react-redux";
import { addToQueue } from "../redux/actions/dataPassingActions";
import { getFloorData } from "../redux/actions/floorActions";
import ShoeListItem from "../components/List/ShoeListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
class FloorScreen extends Component {
  state = {
    category: []
  };
  componentDidMount() {
    this.props.getFloorData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.floorInfo !== this.props.floorInfo) {
      const { key } = this.props.navigation.state;
      console.log(prevProps, "prevProps");
      this.setState({
        category: this.props.floorInfo[key]
      });
    }
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity>
      <Card>
        <ListItem
          leftAvatar={{
            source: {
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }
          }}
          title={`${item.category.categoryName} ${item.shoeStyle}`}
        />
      </Card>
    </TouchableOpacity>
  );
  _keyExtractor = item => item.id;
  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.state.category}
        renderItem={this._renderItem}
      />
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
    floorInfo: state.floorInfo
  };
};

export default connect(mapStateToProps, { addToQueue, getFloorData })(
  FloorScreen
);
