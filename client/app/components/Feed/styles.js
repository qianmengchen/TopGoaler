import { StyleSheet } from 'react-native';

const iconColors = [
  'dodgerblue',
  'red',
  'greenyellow',
  'orange',
  'lightgreen',
  'magenta',
  'lightgrey',
  'purple',
  'pink',
  'tan',
  'yellowgreen'
];

const task = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    fontFamily: 'Avenir-Light',
    fontSize: 14
  }
});

export { iconColors, task };
