import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { storeTest } from './store';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TopGoaler is an awesome app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

storeTest()