import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Count from './components/count';

export default class App extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState(({count}) => {
      return {
        count: count + 1
      }
    })
  }

  decrement = () => {
    this.setState(({count}) => {
      return {
        count: count - 1
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Count style={styles.biggerText} count={this.state.count}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.decrement}
            style={styles.button}>
            <Text style={styles.bigText}>SUB</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.increment}
            style={styles.button}>
            <Text style={styles.bigText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    margin: 50,
    backgroundColor: '#f1f1f1',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  bigText: {
    fontSize: 20
  },
  biggerText: {
    fontSize: 40
  }
});
