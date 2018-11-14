import { StyleSheet } from 'react-native';

const list = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  iconContainer: {
    justifyContent: 'center'
  },
  icon: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 40
  }
});

export { list };
