import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { board } from './styles';

class NewChannelPage extends Component {
  render() {
    return (
      <View style={board.container}>
        <Text>add new channel</Text>
      </View>
    );
  }
}

export default NewChannelPage;
