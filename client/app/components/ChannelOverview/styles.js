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

const avatar = StyleSheet.create({
  summary: {
    marginLeft: 40
  }
});

const text = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  subtitle: {
    fontSize: 20,
    paddingLeft: 10
  },
  desc: {
    fontSize: 20,
    paddingLeft: 10
  }
});

export { avatar, board, text };
