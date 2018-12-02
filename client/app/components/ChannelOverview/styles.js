import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    borderColor: 'black',
    borderWidth: 0,
    marginBottom: 10,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 6
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
    fontSize: 20,
    flex: 0.3,
    fontFamily: 'Avenir-Heavy'
  },
  subtitle: {
    alignItems: 'center',
    fontFamily: 'Avenir-Light',
    fontSize: 16,
    flex: 0.35
  },
  desc: {
    alignItems: 'center',
    flex: 0.35,
    flexDirection: 'row',
    paddingBottom: 10
  }
});

const desc = StyleSheet.create({
  numbers: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    fontFamily: 'Helvetica-Light'
  },
  icon: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  }
});

export { board, contents, desc };
