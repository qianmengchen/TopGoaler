import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import * as styles from './styles';
import ChannelIcon from './ChannelIcon';
import { goToChannel } from '../ChannelListPage/index';

/**
 * This is the collection of all the channel icon component in a scrollable view format.
 *
 * @class ChannelIconList
 * @property {function} navigate - A function that allows the user to nagivate to another component.
 * @property {Object} channels - An object that contains all channels.
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
