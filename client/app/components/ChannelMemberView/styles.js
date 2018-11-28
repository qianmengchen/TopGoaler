import { StyleSheet } from 'react-native';

const header = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  avatar: {
    backgroundColor: 'white'
  }
});

const cardLeft = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    borderRadius: 10,
    borderColor: '#555',
    marginRight: 2,
    flex: 1,
    alignItems: 'center'
  },
  statsContainer: {
    paddingVertical: 10
  },
  stats: {
    fontSize: 15,
    color: 'white',
    paddingVertical: 2
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const cardRight = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    borderRadius: 10,
    borderColor: '#555',
    marginLeft: 2,
    flex: 2.5
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
    marginTop: 5
  },
  taskButtonText: {
    color: 'white',
    fontSize: 16
  }
});

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

export { header, cardLeft, cardRight, vote };
