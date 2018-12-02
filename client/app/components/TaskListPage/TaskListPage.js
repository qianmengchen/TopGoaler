import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { TaskDetail } from '../TaskDetail/index';
import { list } from './styles';

class TaskListPage extends Component {
  _map_period_to_string = raw => {
    const period_map = { 0: 'day', 1: 'week', 2: 'month' };
    return period_map[raw];
  };

  _check_is_task_enrolled = tid => {
    return this.props.user_task_ids.includes(tid);
  };

  render() {
    return (
      <ScrollView>
        <Text style={list.title}>Channel Tasks</Text>
        {this.props.tasks.map(task => (
          <TaskDetail
            key={task.task_id}
            task_id={task.task_id}
            enrolled={this._check_is_task_enrolled(task.task_id)}
            title={task.title}
            period={this._map_period_to_string(task.period)}
            pattern={task.pattern}
            points={task.point}
          />
        ))}
      </ScrollView>
    );
  }
}

export default TaskListPage;
