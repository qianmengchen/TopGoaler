import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { styles } from './styles';

class SignIn extends Component {
  _submit() {
    // arrow notation () => {...} creates a function that binds this to the context (i.e the enclosing object)
    // regular notation function () {} doesn't bind this but rather defers binding to its caller's discretion
    // (e.g. if we set a button's onpress to {regularfunc}, then regularfunc's 'this' will be the button object.
    // But here we want 'this' to point to the enclosing object, so we will HAVE to define our function in arrow notation. )
    this.props.submit(this.state.username, this.state.password);
  }
  _signUp() {
    this.props.navigation.navigate('signUp');
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
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
            />
            <Icon
              raised
              name="facebook-square"
              type="font-awesome"
              color="#3b5998"
            />
            <Icon raised name="twitter" type="font-awesome" color="#00aced" />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <Input
            containerStyle={{ marginBottom: 10 }}
            placeholder="Username"
            autoCapitalize="none"
            defaultValue={this.state.username}
            value={this.state.username}
            onChangeText={text => this.setState({ username: text })}
            leftIcon={<Icon name="person" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Password"
            textContentType="password"
            autoCapitalize="none"
            defaultValue={this.state.password}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            leftIcon={<Icon name="lock" size={24} color="grey" />}
          />

          <TouchableHighlight
            style={styles.button}
            underlayColor="#aaa"
            onPress={this._submit.bind(this)}
          >
            <Text style={styles.buttonText}> Sign In </Text>
          </TouchableHighlight>
        </Card>
        <TouchableHighlight
          style={styles.signUpButton}
          underlayColor="#aaa"
          onPress={this._signUp.bind(this)}
        >
          <Text style={styles.signUpText}> Sign Up for Top Goaler </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignIn;
