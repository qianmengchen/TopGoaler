import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

class TaskList extends Component {
  render() {
    let { tasks, refreshTasks } = this.props;
    tasks = tasks.map(x => ({ key: x, value: x }));
    return (
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.value}</Text>
          )}
        />
        <Button onPress={() => refreshTasks()} title="refresh" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

/*
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
  refreshTasks: PropTypes.func(PropTypes.any)
}
*/

export default TaskList;
