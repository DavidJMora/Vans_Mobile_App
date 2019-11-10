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
import { Card } from 'react-native-elements'

class StockScreen extends Component {

  render() {

    const { queue } = this.props.passedData;

    console.log(this.props.queue, 'b,lyhdhgrt')
    return (
      <Card>
        <View style={styles.screen}>
          <Text> StockScreen </Text>
          <Button
            title="Check Notifications"
            onPress={() => this.props.navigation.navigate("Notifications")}
          />
        </View>
      </Card> 
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
    queue: state.queue
  }
}

export default connect(mapStateToProps, { getQueue })(StockScreen);
