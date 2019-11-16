import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList, SafeAreaView } from "react-native";
import Constants from 'expo-constants';
import { connect } from "react-redux";
import { getQueue } from '../redux/actions/dataPassingActions';
import { Card, ListItem } from "react-native-elements";
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
      // console.log(this.props.passedData.queue,' what are you')
      this.setState({
        queue: this.props.passedData.queue
      });
    }
  }

  keyExtractor = (item) => item.queueID;

  renderItem = ({ item }) => {
    // console.log(item, 'what are you used for')

    let shoeSize = item.size.toString()
    return (
      <Card>
        <ListItem
          leftAvatar={{
            source: {
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }
          }}
          title={`${item.category.categoryName} ${item.shoeStyle} ${item.color}`}
          subtitle={`${shoeSize}`}
          />
      </Card>
    )
  }

  render() {
    if(this.state.queue.length > 0) {

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
      )
    }
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
    passedData: state.passedData
  };
};

export default connect(mapStateToProps, { getQueue })(Queue);
