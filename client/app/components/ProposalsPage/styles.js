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
    justifyContent: 'space-between',
    marginTop: 10
  },
  textgroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginHorizontal: 80
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10
  }
});

export { list, frequency, vote };
