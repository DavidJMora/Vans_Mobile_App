/* Modal ==>  https://facebook.github.io/react-native/docs/modal */
import React, { Component } from "react";

import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
// image, text
// text shoestyle name, price, #stocknumber 69
export class Modal extends Component {
  state = {
    isModalVisible: false
  };
  toggleModal = () => {
    this.setState({ isModalVisible: true });
  };
  render() {
    return (
    <Text>This is your modal</Text>
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
          // its hidden here
          <Image source={} />
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: ''
  },

});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
