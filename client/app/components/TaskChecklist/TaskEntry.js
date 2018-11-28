import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as styles from './styles';

const CheckEntry = props => {
  const { item, finished, completeTask } = props;
  const onCompleteTask = finished ? () => {} : completeTask;

  return (
    <TouchableOpacity
      style={styles.taskComponent.container}
      onPress={onCompleteTask}
    >
      <View style={styles.taskComponent.checkbox}>
        {finished ? (
          <View style={styles.checkbox.dot} />
        ) : (
          <View style={styles.checkbox.circle} />
        )}
      </View>
      <View style={styles.taskComponent.desc}>
        {finished ? (
          <Text style={styles.checklist.deleteText}>{item.title}</Text>
        ) : (
          <Text style={styles.checklist.text}>{item.title}</Text>
        )}
      </View>
      <View style={styles.taskComponent.point}>
        <Text style={styles.checklist.text}>{item.point}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckEntry;
