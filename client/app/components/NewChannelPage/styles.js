import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  input: {
    paddingLeft: 10,
    marginBottom: 10
  },
  button: {
    marginVertical: 10,
    alignItems: 'center'
  }
});

const text = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 15,
    fontWeight: '300',
    color: 'grey'
  }
});

const button = StyleSheet.create({
  create: {
    backgroundColor: 'rgba(40, 160, 147, 1)',
    width: 120,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20
  }
});

export { board, text, button };
