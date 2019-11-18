// PureComponent : https://reactjs.org/docs/react-api.html#reactpurecomponent
import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
export default class ListItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  render() {
    return (
      <TouchableOpacity>
        <Card>
          <ListItem
            leftAvatar={{
              source: {
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                /* we can prop it later */
              }
            }}
            title={this.props.title}
          />
        </Card>
      </TouchableOpacity>
    );
  }
}
