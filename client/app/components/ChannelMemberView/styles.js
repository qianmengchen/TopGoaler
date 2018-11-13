import { StyleSheet } from 'react-native';

const header = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    paddingTop: 20,
    paddingRight: 30,
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
    borderColor: 'grey',
    marginRight: 5
  },
  stats: {
    fontSize: 20,
    color: 'white',
    marginBottom: 8
  },
  number: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold'
  }
});

const cardRight = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    borderRadius: 10,
    marginLeft: 5
  },
  taskContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  task: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  taskButton: {
    marginTop: 10,
    marginHorizontal: 30
  },
  taskButtonText: {
    color: 'white',
    fontSize: 20
  }
});

export { header, cardLeft, cardRight };
