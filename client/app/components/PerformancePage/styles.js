import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  infoCard: {
    flex: 0.35,
    flexDirection: 'row',
    marginHorizontal: 20
  },
  chart: {
    borderRadius: 15,
    borderWidth: 0,
    flex: 0.55,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  }
});

const title = StyleSheet.create({
  main: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black'
  },
  sub: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  }
});

const text = StyleSheet.create({
  number: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'orange'
  },
  period: {
    fontSize: 20,
    color: 'white'
  },
  stat: {
    fontSize: 14,
    color: 'white'
  }
});

const infoCard = StyleSheet.create({
  leftPart: {
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: '#555',
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 1
  },
  rightPart: {
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: '#555',
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 1
  }
});

const leftPart = StyleSheet.create({
  subtitle: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 20
  },
  number: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  period: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const rightPart = StyleSheet.create({
  subtitle: {
    flex: 0.3,
    alignItems: 'center',
    paddingTop: 20
  },
  stats: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20
  }
});

export { board, title, text, infoCard, leftPart, rightPart };
