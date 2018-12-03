import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskEntry from './TaskEntry';
import * as styles from './styles';

class TaskChecklist extends Component {
  _handleCompleteTaskWrap(task_id) {
    return () => this.props.completeTask(task_id, this.props.user_id);
  }

  render() {
    const { onGoingTasks, finishedTasks } = this.props;
    const allTasks = onGoingTasks
      .map(task => ({ task, finished: false }))
      .concat(finishedTasks.map(task => ({ task, finished: true })));

    return (
      <View style={styles.checklist.container}>
        <FlatList
          data={allTasks}
          renderItem={props => (
            <TaskEntry
              item={props.item.task}
              finished={props.item.finished}
              completeTask={this._handleCompleteTaskWrap(props.item.task.id)}
            />
          )}
          keyExtractor={item => item.task.id.toString()}
        />
      </View>
    );
  }
}

export default TaskChecklist;
