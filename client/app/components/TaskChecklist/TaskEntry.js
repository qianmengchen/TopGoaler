import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as styles from './styles';

const CheckEntry = props => {
  const { item } = props;

  return (
    <TouchableOpacity style={styles.taskComponent.container}>
      <View style={styles.taskComponent.checkbox}>
        <View style={styles.checkbox.circle} />
      </View>
      <View style={styles.taskComponent.desc}>
        <Text style={styles.checklist.text}>{item.name}</Text>
      </View>
      <View style={styles.taskComponent.point}>
        <Text style={styles.checklist.text}>{item.point}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckEntry;
