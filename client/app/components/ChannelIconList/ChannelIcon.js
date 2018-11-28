import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as styles from './styles';

const ChannelIcon = props => {
  const { item } = props;

  return (
    <TouchableOpacity style={styles.list.iconContainer}>
      <Image style={styles.list.icon} source={{ uri: item.image_url }} />
    </TouchableOpacity>
  );
};

export default ChannelIcon;
