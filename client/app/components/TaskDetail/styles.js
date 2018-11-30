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

const status = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 80
  },
  accept: {
    backgroundColor: 'blue'
  },
  done: {
    backgroundColor: 'red',
    paddingHorizontal: 15
  },
  unfollow: {
    backgroundColor: 'yellowgreen',
    paddingHorizontal: 15
  },
  multipleBtns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10
  }
});

export { list, frequency, status };
