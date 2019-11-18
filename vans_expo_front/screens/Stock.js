import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView
} from "react-native";
import Constants from "expo-constants";
import { connect } from "react-redux";
import { getQueue, deleteFromQueue } from "../redux/actions/dataPassingActions";
import { Card, ListItem, Avatar, Button } from "react-native-elements";
// scrollable list https://facebook.github.io/react-native/docs/sectionlist

class Queue extends Component {
  state = {
    queue: []
  };

  componentDidMount() {
    this.props.getQueue();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('------')
    // console.log(this.props.passedData.queue)
    if (prevProps.passedData.queue !== this.props.passedData.queue) {
      console.log('Theres been a change')
      this.setState({
        queue: this.props.passedData.queue
      });
    }
  }

  keyExtractor = item => item.queueID;

  renderItem = ({ item }) => {
    // console.log(item, 'what are you used for')

    let shoeSize = item.size.toString();
    return (
      <Card containerStyle={styles.cardStyle}>
        <Avatar 
          // overlayContainerStyle={{backgroundColor: 'blue'}}
          rounded
          size='large'
          containerStyle={styles.avatarStyle}
        />
        <View>
          <ListItem
            title={`${item.category.categoryName} ${item.shoeStyle} ${item.color}`}
            subtitle={`${shoeSize}`}
            style={styles.textStyle}
          />
        </View>
        <Button 
          title='Complete Item'
          onPress={() => {this.props.deleteFromQueue(item.queueID)}}
        />
      </Card>
    );
  };

  render() {
    if (this.state.queue !== undefined) {
      // console.log(this.state, 'you made it to line 45')
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.queue}
          renderItem={this.renderItem}
        />
      );
    } else {
      // console.log('i need to render')
      return (
        <View>
          <Text>Waiting For Product from Sales Floor</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardStyle: {
    flexDirection: "row",
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8,
    flexWrap: 'nowrap'
  },
  avatarStyle: {
    borderColor: 'green',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  textStyle: {
    borderColor: 'blue',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 450,
    display: 'flex'
  }
});

const mapStateToProps = state => {
  return {
    passedData: state.passedData
  };
};

export default connect(mapStateToProps, { getQueue, deleteFromQueue })(Queue);
