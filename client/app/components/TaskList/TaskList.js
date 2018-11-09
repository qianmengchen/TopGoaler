import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native';
import { Button, ThemeProvider, ListItem } from 'react-native-elements';

const theme = {
  Button: {
    raised: true
  }
};

class TaskList extends Component {
  render() {
    let { tasks, refreshTasks, reportNav } = this.props;
    const { navigate } = this.props.navigation;
    tasks = tasks.map(x => ({ key: x, value: x }));
    let renderItem = ({ item }) => <ListItem title={item.value} />;

    const goToDetail = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskDetail', { time: new Date().toISOString() });
    };

    return (
      <ThemeProvider theme={theme}>
        <View>
          <FlatList data={tasks} renderItem={renderItem} />
          <Button
            onPress={() => refreshTasks()}
            title="refresh (open server first)"
          />
          <Button onPress={() => goToDetail()} title="Go to Detail" />
        </View>
      </ThemeProvider>
    );
  }
}
/*
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
*/
/*
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
  refreshTasks: PropTypes.func(PropTypes.any)
}
*/

export default TaskList;
