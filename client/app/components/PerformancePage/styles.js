import { StyleSheet } from 'react-native';

const board = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    flex: 0.1,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20
  },
  infoCard: {
    flex: 0.45,
    flexDirection: 'row'
  },
  chart: {
    flex: 0.45,
    flexDirection: 'row'
  }
});

const infoCard = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    borderRadius: 10,
    borderColor: '#555',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftPart: {
    flex: 0.45
  },
  line: {
    flex: 0.1
  },
  rightPart: {
    flex: 0.45
  }
});

const leftPart = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    flex: 0.3,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 2
  },
  number: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    color: 'orange'
  },
  period: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white'
  }
});

const rightPart = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    flex: 0.3,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 2
  },
  stats: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 10,
    color: 'white'
  }
});

const chart = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export { board, infoCard, leftPart, rightPart, chart };
