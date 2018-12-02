import { StyleSheet } from 'react-native';

const headerBar = {
  headerTitleContainerStyle: { marginLeft: -10 },
  headerRightContainerStyle: { paddingRight: 10 },
  headerLeftContainerStyle: { paddingLeft: 10 },
  headerTintColor: '#555',
  headerStyle: { height: 50 }
};

const header = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Avenir',
    display: 'flex'
  },
  avatar: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    display: 'flex'
  }
});

const cardLeft = StyleSheet.create({
  container: {
    backgroundColor: '#777',
    borderRadius: 10,
    borderColor: '#555',
    marginRight: 2,
    flex: 1,
    alignItems: 'flex-start'
  },
  statsContainer: {
    paddingBottom: 20
  },
  stats: {
    fontSize: 15,
    color: 'white',
    paddingVertical: 2
  },
  number: {
    paddingTop: 5,
    fontSize: 22,
    fontFamily: 'Avenir-Black'
  }
});

const cardRight = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    borderRadius: 10,
    borderColor: '#555',
    marginLeft: 5,
    flex: 4
  },
  taskContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  task: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  taskButton: {
    paddingTop: 10
  },
  taskButtonText: {
    color: 'white',
    fontSize: 16
  }
});

/*
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
    fontSize: 20,
    paddingVertical: 10
  }
});
*/

export { headerBar, header, cardLeft, cardRight };
