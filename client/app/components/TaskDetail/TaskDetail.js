import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, vote } from './styles';

class TaskDetail extends Component {
  _handleAccept() {
    console.log(
      'Remove task card for user or update card to say following and update database'
    );
  }

  constructor(props) {
    super(props);
  }

  render() {
    let { title, subtitle, period, pattern, points } = this.props;

    return (
      <Card title={title}>
        <Text>{subtitle}</Text>

        <View style={frequency.container}>
          <Text>
            Frequency: {pattern} {period}
          </Text>
          <Text>Reward: {points} points!</Text>
        </View>

        <TouchableHighlight
          style={vote.container}
          underlayColor="#aaa"
          onPress={this._handleAccept.bind(this)}
        >
          <Text style={vote.buttonText}>Accept!</Text>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default TaskDetail;
