import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import { list } from './styles';
import { TaskDetail } from '../TaskDetail/index';

class TaskListPage extends Component {
  static navigationOptions = () => ({
    title: 'Task List',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white'
    }
  });

  render() {
    return (
      <ScrollView>
        <TaskDetail
          title="Leetcode Daily"
          subtitle="Do a problem from LeetCode everyday"
          period="Daily"
          pattern="Once"
          points="200"
        />
        <TaskDetail
          title="Leetcode Daily x2"
          subtitle="Do two problem from LeetCode everyday"
          period="Daily"
          pattern="Twice"
          points="200"
        />
      </ScrollView>
    );
  }
}

export default TaskListPage;
