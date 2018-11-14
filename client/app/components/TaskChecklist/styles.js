import { StyleSheet } from 'react-native';

const checklist = StyleSheet.create({
  container: {
    padding: 25
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

const taskComponent = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row'
  },
  checkbox: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  desc: {
    flex: 0.7,
    paddingLeft: 20,
    flexDirection: 'row'
  },
  point: {
    flex: 0.2,
    flexDirection: 'row',
    paddingRight: 10,
    justifyContent: 'flex-end'
  }
});

const checkbox = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  }
});

export { checklist, taskComponent, checkbox };
