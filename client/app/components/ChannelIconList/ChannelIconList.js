import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import * as styles from './styles';
import ChannelIcon from './ChannelIcon';
import { goToChannel } from '../ChannelListPage/index';

/**
 * @property {number} navigate
 * @property {} channels
 */

class ChannelIconList extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.list.container}>
        <FlatList
          horizontal
          data={this.props.channels}
          renderItem={({ item }) => (
            <ChannelIcon
              item={item}
              goToChannel={goToChannel(true, navigate)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default ChannelIconList;
