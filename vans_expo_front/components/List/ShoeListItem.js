import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Card } from "react-native-elements";
export default class ShoeListItem extends Component {
  render() {
    return (
      <Card>
        <TouchableOpacity>
          <View>
            <Text>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
}
