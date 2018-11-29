import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as styles from './styles';

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
