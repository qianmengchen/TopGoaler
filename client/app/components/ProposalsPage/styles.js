import { StyleSheet } from 'react-native';

const list = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

const frequency = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const vote = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 60
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10
  }
});

export { list, frequency, vote };
