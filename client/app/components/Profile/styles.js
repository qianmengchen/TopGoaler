import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'stretch'
  },
  personalInfo: {
    flex: 0.35,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1
  },
  channels: {
    flex: 0.2,
    backgroundColor: 'white',
    marginLeft: 10,
    justifyContent: 'space-around',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1
  },
  tasks: {
    flex: 0.45,
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1
  }
});

const personalInfo = StyleSheet.create({
  descriptions: {
    flex: 0.7,
    flexDirection: 'row'
  },
  actions: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const descriptions = StyleSheet.create({
  intro: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 50
  },
  avatar: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

const actions = StyleSheet.create({
  summary: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const buttons = StyleSheet.create({
  summary: {
    width: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1
  },
  logout: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1
  }
});

const introText = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
    color: 'black'
  },
  bio: {
    fontSize: 15,
    margin: 5,
    color: 'black'
  }
});

export { board, personalInfo, descriptions, actions, buttons, introText };
