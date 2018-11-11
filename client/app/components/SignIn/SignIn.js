import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { styles } from './styles';

class SignIn extends Component {
  render() {
    let { reportNav } = this.props;
    const { navigate } = this.props.navigation;

    const goToHomepage = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskList');
    };

    const goToSignUp = () => {
      navigate('SignUp');
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
            containerStyle={{ marginBottom: 10 }}
            placeholder="Username"
            leftIcon={<Icon name="person" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
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
        <TouchableHighlight
          style={styles.signUpButton}
          underlayColor="#aaa"
          onPress={() => goToSignUp()}
        >
          <Text style={styles.signUpText}> Sign Up for Top Goaler </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignIn;
