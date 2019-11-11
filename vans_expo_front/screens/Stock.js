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

    this.setState({
      queue: [...this.props.passedData.queue]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, 'prevState')
    console.log(prevProps, 'prevProps')
    if(prevProps.passedData.queue !== this.props.passedData.queue) {
      console.log("hello you've made it")
      console.log(prevProps.passedData.queue)
      console.log(this.state.queue)
    }
  }

  render() {

    let queueCards = (
      <Card title='Shoes On Queue'>
        {
          this.state.queue.map((card) => {
            return (
              <ListItem
                key={card.id}
                title={card.title}
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
