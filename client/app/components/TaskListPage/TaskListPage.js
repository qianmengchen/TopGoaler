import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
// import { list } from './styles';

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
        <Text>TaskList Page</Text>
      </ScrollView>
    );
  }
}

export default TaskListPage;
