import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

class TaskDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Card title="Task Detail">
        <Text>{params.time}</Text>
      </Card>
    );
  }
}
export default TaskDetail;
