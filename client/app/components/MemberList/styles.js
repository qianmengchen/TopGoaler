import { StyleSheet } from 'react-native';

const memberList = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderLeftColor: 'grey',
    marginHorizontal: 15,
    marginVertical: 20
  },
  text: {
    color: 'grey',
    fontSize: 22,
    paddingLeft: 5
  },
  iconList: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10
  },
  icon: {
    marginHorizontal: 5
  }
});

export { memberList };
