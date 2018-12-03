import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import * as styles from './styles';
import { Alert } from 'react-native';

function _cannotComplete() {
  Alert.alert('Cannot complete this task anymore', '', [{ text: 'OK' }]);
}

/**
 * @class TaskEntry
 * @property {number} userId - A unique number identifying the user.
 * @property {Object} item - An object describing a task.
 * @property {boolean} finished - A boolean value indicating whether or not the user has completed a task.
 * @property {function} completeTask - A function that allows the user to complete task, which updates the user's profile that he or she has completed the task.
 */
const CheckEntry = props => {
  const { item, finished, completeTask } = props;
  const onCompleteTask = finished ? _cannotComplete : completeTask;

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
