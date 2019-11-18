// product  - category(adults, kids, toddlers) - shoes(styles i.e. "Old Schools") // needs modal for selecting

import React, { Component } from "react";
import { connect } from "react-redux";
import { addToQueue } from "../redux/actions/dataPassingActions";
import { getFloorData } from "../redux/actions/floorActions";

import {
  ListItem,
  Card,
  withTheme,
  ThemeProvider,
  Overlay
} from "react-native-elements";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Image,
  Alert,
  Modal
} from "react-native";
class FloorScreen extends Component {
  state = {
    category: [],
    modalForm: {
      id: "",
      shoeStyle: "",
      color: "",
      categoryName: "",
      size: ""
    },
    modalVisible: false
  };
  componentDidMount() {
    this.props.getFloorData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.floorInfo !== this.props.floorInfo) {
      const { key } = this.props.navigation.state;
      // console.log(prevProps, "prevProps");
      // console.log(this.state);
      this.setState({
        category: this.props.floorInfo[key]
      });
    }
  }

  handleSubmit = (data) => {
    this.setState({
      ...this.state,
      modalForm: {
        ...this.state.modalForm,
        size: data.size,
        color: data.color
      }
    }, () => this.props.addToQueue(this.state.modalForm)
                  .then(() => {
                    this.setState({
                      modalVisible: false
                    })
                  }))
  
  }

  _onSelect = item => {
    item._id;
  };

  _renderItem = ({ item }) => (
    <Card>
      <ListItem
        onPress={() => {
          // console.log(
          //   `==============`,
          //   item,
          //   `==============`,
          //   item._id,
          //   `==============`
          // );
          this.setState({
            modalVisible: true,
            modalForm: {
              id: item._id,
              shoeStyle: item.shoeStyle,
              categoryName: item.category.categoryName,
              size: item.size,
              color: item.color
            }
          });
        }}
        leftAvatar={{
          source: {
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }
        }}
        title={`${item.category.categoryName} ${item.shoeStyle}`}
        bottomDivider
      />
    </Card>
  );

  _keyExtractor = item => item._id;
  // console.log(item._id) objecID

  render() {
    // console.log(this.state);
    return !this.state.modalVisible ? (
      <FlatList
        // touchableHighlight??
        keyExtractor={this._keyExtractor}
        data={this.state.category}
        extraData={this.state}
        renderItem={this._renderItem}
      />
    ) : (
      <View>
        <Modal
          visible={this.state.modalVisible}
          presentationStyle="formSheet"
          animationType={"slide"}
          transparent={false}
          onRequestClose={() => Alert.alert(" suck it ")}
          // onDismiss={} one time function to be called <== addToStock()
        >
          <View style={{ maginTop: 22 }}>
            <Text>
              {`${this.state.modalForm.id}
              ${this.state.modalForm.categoryName}
              ${this.state.modalForm.shoeStyle}`}
            </Text>
            <Button
              title="touch me"
              onPress={() => this.handleSubmit({size: 11, color: 'blue'})}
            ></Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const theme = {};

const mapStateToProps = state => {
  return {
    passedData: state.passedData,
    floorInfo: state.floorInfo
  };
};

export default connect(mapStateToProps, { addToQueue, getFloorData })(
  FloorScreen
);
/*

  For MultiSelect https://facebook.github.io/react-native/docs/0.51/flatlist

  _onPressItem = ({ id }) => {
    this.setState(state => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return { selected };
    });
  };
  */
