import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, status } from './styles';

class TaskDetail extends Component {
  _accept() {
    this.setState({ status: 'in-progress' });
    console.log('Task is now In-Progress; update database');
  }

  _unfollow() {
    this.setState({ status: 'available' });
    console.log('Task is now available; update database');
  }

  _done() {
    this.setState({ status: 'done' });
    console.log('Remove task card for user; update database');
  }

  constructor(props) {
    super(props);
    this.state = {
      status: 'available'
    };
  }

  render() {
    let { title, subtitle, period, pattern, points } = this.props;

    let button;

    if (this.state.status == 'available') {
      button = (
        <TouchableHighlight
          style={[status.container, { backgroundColor: 'blue' }]}
          underlayColor="#aaa"
          onPress={this._accept.bind(this)}
        >
          <Text style={status.buttonText}>Accept Challenge!</Text>
        </TouchableHighlight>
      );
    } else {
      button = (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableHighlight
            style={[
              status.container,
              { backgroundColor: 'red', paddingHorizontal: 15 }
            ]}
            underlayColor="#aaa"
            onPress={this._unfollow.bind(this)}
          >
            <Text style={status.buttonText}>Unfollow</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              status.container,
              { backgroundColor: 'yellowgreen', paddingHorizontal: 15 }
            ]}
            underlayColor="#aaa"
            onPress={this._done.bind(this)}
          >
            <Text style={status.buttonText}>Done!</Text>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <Card title={title}>
        <Text>{subtitle}</Text>

        <View style={frequency.container}>
          <Text>
            Frequency: {pattern} {period}
          </Text>
          <Text>Reward: {points} points!</Text>
        </View>

        {button}
      </Card>
    );
  }
}

export default TaskDetail;
