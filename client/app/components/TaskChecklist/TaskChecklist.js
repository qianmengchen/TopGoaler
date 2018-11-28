import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskEntry from './TaskEntry';
import * as styles from './styles';

class TaskChecklist extends Component {
  render() {
    return (
      <View style={styles.checklist.container}>
        <FlatList
          data={this.props.tasks}
          renderItem={TaskEntry}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default TaskChecklist;
