import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'stretch'
  },
  personalInfo: {
    flex: 0.35
  },
  channels: {
    flex: 0.2,
    backgroundColor: 'white'
  },
  tasks: {
    flex: 0.45
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
    justifyContent: 'center',
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
    alignItems: 'flex-start'
  },
  buttons: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

const buttons = StyleSheet.create({
  summary: {
    width: 160,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'solid',
    marginLeft: 30
  },
  A: {
    width: 32,
    backgroundColor: 'white'
  },
  B: {
    width: 32,
    backgroundColor: 'white'
  }
});

const introText = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: 'white'
  },
  bio: {
    fontSize: 15,
    margin: 5,
    color: 'white'
  }
});

export { board, personalInfo, descriptions, actions, buttons, introText };
