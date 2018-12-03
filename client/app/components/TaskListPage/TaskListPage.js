import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { TaskDetail } from '../TaskDetail/index';

/**
 * This is the component that shows a list of taskDetail component.
 * It contains all the active tasks in that channel.
 *
 * @class TaskListPage
 * @property {number} user_id - A unique number identifying a user.
 * @property {array} user_task_ids - An array of a user's tasks.
 * @property {Object} tasks - An object containing all tasks belonging to a specific channel.
 */
class TaskListPage extends Component {
  _map_period_to_string = raw => {
    const period_map = { 0: 'day', 1: 'week', 2: 'month', 3: 'once' };
    return period_map[raw];
  };

  _check_is_task_enrolled = tid => {
    return this.props.user_task_ids.includes(tid);
  };
  static navigationOptions = {
    title: 'Channel Tasks',
    headerTitleStyle: { fontWeight: 'bold' }
  };

  render() {
    return (
      <ScrollView>
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
