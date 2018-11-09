import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, Card, Input, Icon } from 'react-native-elements';

class SignIn extends Component {
  render() {
    let { reportNav } = this.props;
    const { navigate } = this.props.navigation;

    const goToHomepage = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskList');
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top Goaler</Text>

        <Card title="Sign-in Using">
          <View style={styles.icons}>
            <Icon
              raised
              name="google-plus"
              type="font-awesome"
              color="#dd4b39"
              onPress={() => goToHomepage()}
            />
            <Icon
              raised
              name="facebook-square"
              type="font-awesome"
              color="#3b5998"
              onPress={() => goToHomepage()}
            />
            <Icon
              raised
              name="twitter"
              type="font-awesome"
              color="#00aced"
              onPress={() => goToHomepage()}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <Input
            placeholder="Username"
            leftIcon={<Icon name="person" size={24} color="grey" />}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} color="grey" />}
          />

          <TouchableHighlight
            style={styles.button}
            underlayColor="#aaa"
            onPress={() => goToHomepage()}
          >
            <Text style={styles.buttonText}> Sign In </Text>
          </TouchableHighlight>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    // alignItems: 'center',
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
  }
});

export default SignIn;
