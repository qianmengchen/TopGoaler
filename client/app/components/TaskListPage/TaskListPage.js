import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { TaskDetail } from '../TaskDetail/index';

class TaskListPage extends Component {
  static navigationOptions = () => ({
    title: 'Task List',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  _map_period_to_string = raw => {
    const period_map = { 0: 'day', 1: 'week', 2: 'month', 3: 'once' };
    return period_map[raw];
  };

  _check_is_task_enrolled = tid => {
    return this.props.user_task_ids.includes(tid);
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
