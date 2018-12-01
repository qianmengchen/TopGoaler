import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { list } from './styles';
import { TaskDetail } from '../TaskDetail/index';

class TaskListPage extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={list.title}>Channel Tasks</Text>

        <TaskDetail
          title="Leetcode Daily"
          subtitle="Do a problem from LeetCode everyday"
          period="Daily"
          pattern="Once"
          points="200"
        />
        <TaskDetail
          title="Leetcode Daily x2"
          subtitle="Do two problems from LeetCode everyday"
          period="Daily"
          pattern="Twice"
          points="300"
        />
        <TaskDetail
          title="Solve 100 Problems"
          subtitle="Solve 100 Problems from LeetCode"
          period="Monthly"
          pattern="Once"
          points="350"
        />
      </ScrollView>
    );
  }
}

export default TaskListPage;
