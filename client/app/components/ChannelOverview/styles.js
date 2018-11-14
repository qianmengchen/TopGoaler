import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  contents: {
    paddingLeft: 20,
    flexDirection: 'column',
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  avatar: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  }
});

const contents = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 0.3
  },
  subtitle: {
    alignItems: 'center',
    flex: 0.35
  },
  desc: {
    alignItems: 'center',
    flex: 0.35,
    flexDirection: 'row'
  }
});

const desc = StyleSheet.create({
  numbers: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { board, contents, desc };
