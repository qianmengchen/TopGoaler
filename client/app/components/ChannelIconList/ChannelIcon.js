import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as styles from './styles';

/**
 * @class ChannelIcon
 * @property {Object} item - An object describing a task.
 * @property {function} goToChannel - A function that allows the user to navigate to the specified channel.
 */
const ChannelIcon = props => {
  const { item, goToChannel } = props;

  return (
    <TouchableOpacity
      style={styles.list.iconContainer}
      onPress={() => goToChannel(item.id)}
    >
      <Image style={styles.list.icon} source={{ uri: item.image_url }} />
    </TouchableOpacity>
  );
};

export default ChannelIcon;
