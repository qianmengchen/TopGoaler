import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    paddingTop: 22,
    flex: 1,
    flexDirection: 'column'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 40,
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  divider: {
    backgroundColor: 'grey',
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  dividerText: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 20,
    color: 'grey'
  },
  title: {
    alignSelf: 'center',
    fontSize: 40
  },
  signUpButton: {
    marginHorizontal: 100,
    marginTop: 150,
    paddingVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 20
  },
  signUpText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15
  }
});

export { styles };
