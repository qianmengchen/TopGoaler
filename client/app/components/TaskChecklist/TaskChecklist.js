import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskEntry from './TaskEntry';
import * as styles from './styles';

/**
 * This is the component that shows a list of taskEntry component.
 *
 * @class TaskChecklist
 * @property {number} user_id - A unique number identifying a user.
 * @property {function} completeTask - A function allowing the user to mark a task as completed.
 * @property {Component} TaskEntry - A component representing a specific task within the channel.
 */
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
