import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'stretch'
  },
  actions: {
    flex: 0.1,
    flexDirection: 'row'
  },
  channelList: {
    marginHorizontal: 8,
    flex: 0.9,
    flexDirection: 'column'
  }
});

const actions = StyleSheet.create({
  searchBar: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 0.9,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 20
  },
  button: {
    flex: 0.1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 10
  }
});

export { board, actions };
