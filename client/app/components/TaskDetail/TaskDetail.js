import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, status } from './styles';
import { Event } from '../../constants';

class TaskDetail extends Component {
  _accept(task_id, user_id) {
    this.props.enroll(user_id, task_id);
    this.props.newActivity(user_id, task_id, Event.JOIN);
  }

  _unfollow(task_id, user_id) {
    this.props.drop(user_id, task_id);
    this.props.newActivity(user_id, task_id, Event.DROP);
  }

  render() {
    let {
      title,
      period,
      pattern,
      points,
      enrolled,
      task_id,
      user_id
    } = this.props;
    let button;

    if (!enrolled) {
      button = (
        <TouchableHighlight
          style={[status.container, status.accept]}
          underlayColor="#aaa"
          onPress={() => this._accept(task_id, user_id)}
        >
          <Text style={status.buttonText}>Accept Challenge!</Text>
        </TouchableHighlight>
      );
    } else {
      button = (
        <View style={status.multipleBtns}>
          <TouchableHighlight
            style={[status.container, status.unfollow]}
            underlayColor="#aaa"
            onPress={() => this._unfollow(task_id, user_id)}
          >
            <Text style={status.buttonText}>Unfollow</Text>
          </TouchableHighlight>
        </View>
      );
    }

    return (
      <Card title={title}>
        <View style={frequency.container}>
          <Text>
            Frequency: {pattern} time(s) per {period}
          </Text>
          <Text>Reward: {points} point(s)!</Text>
        </View>
        {button}
      </Card>
    );
  }
}

export default TaskDetail;
