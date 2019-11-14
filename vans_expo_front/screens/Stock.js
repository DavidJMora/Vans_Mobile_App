// import React from "react";
// import { Text, StyleSheet, View } from "react-native";

// const StockScreen = props => {
//   return (
//     <View>
//       <Text> StockRoom </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
// export default StockScreen;
import React, { Component } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { getQueue } from '../redux/actions/dataPassingActions';
import { Card, ListItem } from 'react-native-elements'

class StockScreen extends Component {

  state = {
    queue: []
  };

  componentDidMount() {
    this.props.getQueue()
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('------')
    // console.log(this.props.passedData.queue)
    if(prevProps.passedData.queue !== this.props.passedData.queue) {
      // console.log('YEEET')
      this.setState({
        queue: this.props.passedData.queue
      })
    }
  }

  render() {
    let queueCards;
    if (this.state.queue.length > 0) {
      // console.log('0000000')
      // console.log(JSON.stringify(this.state.queue))
      queueCards = (
        <Card title='Shoes On Queue'>
          {
            this.state.queue.map((card, index) => {
              let { categoryName, shoeStyle, color } = card
              let cardString = card.size.toString();
              let indexPoop = index + 1
              return (
                <ListItem
                  key={index}
                  title={`${categoryName} ${shoeStyle} ${color}`}
                  leftAvatar={{ source: {uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}}
                  subtitle={cardString}
                  leftSubtitle={indexPoop.toString()}
                  bottomDivider
                />
              );
            })
          }
        </Card>
      )
    } else {
      queueCards = null 
    }
    
    return (
      <ScrollView>
        queueCards
      </ScrollView>
    )
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

export default connect(mapStateToProps, { getQueue })(StockScreen);
