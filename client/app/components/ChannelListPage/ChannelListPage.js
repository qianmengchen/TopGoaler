import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native';
import {
  Button,
  ThemeProvider,
  ListItem,
  SearchBar
} from 'react-native-elements';

const theme = {
  Button: {
    raised: true
  }
};

/*
class ChannelListPage extends Component {
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
*/

class ChannelListPage extends Component {
  render() {
    return (
      <SearchBar
        onChangeText={() => {}}
        onClear={() => {}}
        placeholder="Type Here..."
      />
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

export default ChannelListPage;
