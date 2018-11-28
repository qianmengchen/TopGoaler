import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import * as styles from './styles';
import ChannelIcon from './ChannelIcon';

class ChannelIconList extends Component {
  render() {
    return (
      <View style={styles.list.container}>
        <FlatList
          horizontal
          data={this.props.channels}
          renderItem={ChannelIcon}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default ChannelIconList;
