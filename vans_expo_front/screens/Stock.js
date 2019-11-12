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
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';
import { getQueue } from '../redux/actions/dataPassingActions';
import { Card, ListItem } from 'react-native-elements'

class StockScreen extends Component {

  state = {
    queue: []
  };

  componentDidMount() {
    this.props.getQueue()
    .then( queue => {
      // console.log(queue, 'stock line 36')
      this.setState({
        queue: queue
      })
      // console.log(this.props, 'line 33')
        // console.log(this.state, 'line 40')
      })
      .catch(error => {
        console.log(error)
      })
      // console.log(this.state.queue, 'line 45')
    // console.log(this.props.getQueue(), 'stock line 42')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, 'prevState')
    console.log(prevProps, 'prevProps')
    if(prevProps.passedData.queue !== this.props.passedData.queue) {
      console.log("hello you've made it")
      // console.log(prevProps.passedData.queue)
      // console.log(this.state.queue)
    }
  }

  render() {

    let queueCards = (
      <Card title='Shoes On Queue'>
        {
          this.state.queue.map((card, index) => {
            // {console.log(card, index, 'line 64')}
            // {console.log(this.state.queue, 'line 66')}
            {console.log(card.size, 'line 67 stock')}
            return (
              <ListItem
                key={index}
                title={card.description}
                leftAvatar={{ source: {uri: card.image}}}
                subtitle={card.size.toString()}
                bottomDivider
              />
            );
          })
        }
      </Card>
    )
    
    return (
      queueCards
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
