import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency } from './styles';

class Proposal extends Component {
  render() {
    let { title, subtitle, period, pattern } = this.props;

    return (
      <Card title={title}>
        <Text>{subtitle}</Text>

        <View style={frequency.container}>
          <Text>Period: {period}</Text>
          <Text>Pattern: {pattern}</Text>
        </View>
      </Card>
    );
  }
}

export default Proposal;
