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
    fontSize: 30,
    paddingTop: 20,
    paddingRight: 30,
    fontWeight: 'bold'
  },
  avatar: {
    backgroundColor: 'white'
  }
});

const description = StyleSheet.create({
  card: {
    backgroundColor: '#555',
    borderRadius: 10
  },
  description: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 5
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  statsItem: {
    paddingTop: 20,
    paddingHorizontal: 10
  },
  stats: {
    textAlign: 'center',
    color: 'white'
  },
  number: {
    fontSize: 40,
    marginBottom: 10
  }
});

const follow = StyleSheet.create({
  button: {
    marginHorizontal: 80,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#ddd',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'black'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24
  }
});

export { header, description, follow };
