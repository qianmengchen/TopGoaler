import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  channels: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black'
  }
});

const icon = StyleSheet.create({
  summary: {
    marginLeft: 40
  }
});

const avatar = StyleSheet.create({
  summary: {
    marginLeft: 62
  }
});

const text = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20
  },
  desc: {
    fontSize: 20
  }
});

export { icon, avatar, board, text };
