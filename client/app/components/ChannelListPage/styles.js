import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'stretch'
  }
});

const searchBars = StyleSheet.create({
  summary: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '90%'
  }
});

const buttons = StyleSheet.create({
  summary: {
    paddingVertical: 5,
    backgroundColor: 'transparent'
  }
});

export { board, searchBars, buttons };