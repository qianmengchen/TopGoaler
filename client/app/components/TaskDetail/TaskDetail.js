import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { frequency, status } from './styles';
import { Event } from '../../constants';

/**
 * @class TaskDetail
 * @property {string} title - The title of the task.
 * @property {number} period - A type encoding indicating the day, week, or month period of a task.
 * @property {number} pattern - A value indicating the numbere of times a user can complete a task within a given period.
 * @property {number} points - A value indicating the points associated with the task.
 * @property {boolean} enrolled - A boolean value indicating whether the user is enrolled in a task or not.
 * @property {number} task_id - A unique number identifying the task.
 * @property {number} user_id - A unique number identifying the user.
 * @property {function} enroll - A function allowing the user to subscribe to a task.
 * @property {function} drop - A function allowing the user to unsubcribe from a task.
 * @property {function} newActivity - A function allowing a user to create a new task.
 */
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
      <Card title={title} titleStyle={{ marginBottom: 0, paddingBottom: 0 }}>
        <View style={frequency.container}>
          <Text style={frequency.cellLeft}>
            {period == 'once'
              ? 'once'
              : (pattern < 10 ? pattern : 'unlimited') +
                'time(s) per ' +
                period}
          </Text>
          <Text style={frequency.cellRight}> + {points} pt</Text>
        </View>
        {button}
      </Card>
    );
  }
}

export default TaskDetail;
