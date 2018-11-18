import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'stretch'
  },
  personalInfo: {
    flex: 0.35
  },
  channels: {
    flex: 0.2,
    backgroundColor: 'white'
  },
  tasks: {
    flex: 0.45,
    alignItems: 'stretch'
  }
});

export { board };
