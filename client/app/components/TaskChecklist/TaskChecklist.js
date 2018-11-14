import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TaskEntry from './TaskEntry';
import * as styles from './styles';

class TaskChecklist extends Component {
  constructor(props) {
    super(props);

    this.fakeProps = {
      tasks: [
        {
          key: '1',
          name: 'Leetcode Daily',
          point: 30
        },
        {
          key: '2',
          name: 'Leetcode Daily',
          point: 40
        },
        {
          key: '3',
          name: 'Leetcode Daily',
          point: 50
        },
        {
          key: '4',
          name: 'Leetcode Daily',
          point: 60
        },
        {
          key: '5',
          name: 'Leetcode Daily',
          point: 70
        },
        {
          key: '6',
          name: 'Leetcode Daily',
          point: 80
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.checklist.container}>
        <FlatList data={this.fakeProps.tasks} renderItem={TaskEntry} />
      </View>
    );
  }
}

export default TaskChecklist;
