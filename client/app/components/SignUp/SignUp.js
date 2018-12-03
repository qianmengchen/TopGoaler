import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { card, alt } from './styles';

class SignUp extends Component {
  _submit() {
    this.props.submit(this.state.username, this.state.password);
    this.props.navigation.navigate('signIn');
  }
  _signIn() {
    this.props.navigation.navigate('signIn');
  }

  /**
   * This is the component that allows new users to signup to the application.
   * It will redirect users to signin page after signup succeeded.
   *
   * @class SignUp
   * @property {function} submit -  A function allowing for submitting the username and password to verify the credentials in our database.
   * @property {Object} navigation - An object that contains a navigate function allowing the user to navigate between components.
   */

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={card.container}>
        <Text style={card.title}>Top Goaler</Text>
        <Card title="Sign up for free">
          <Input
            containerStyle={{ marginBottom: 10 }}
            placeholder="Username"
            autoCapitalize="none"
            value={this.state.username}
            onChangeText={text => this.setState({ username: text })}
            leftIcon={<Icon name="person" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Password"
            autoCapitalize="none"
            textContentType="password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            leftIcon={<Icon name="lock" size={24} color="grey" />}
          />
          <Input
            containerStyle={{ marginVertical: 10 }}
            autoCapitalize="none"
            placeholder="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            leftIcon={<Icon name="email" size={24} color="grey" />}
          />
          <TouchableHighlight
            style={card.button}
            underlayColor="#aaa"
            onPress={this._submit.bind(this)}
          >
            <Text style={card.buttonText}> Create Account </Text>
          </TouchableHighlight>
        </Card>

        <Text style={alt.text}>Or you can also:</Text>
        <TouchableHighlight
          style={[alt.button, alt.facebook]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="facebook-square" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Facebook </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.google]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="google-plus" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Google </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.twitter]}
          underlayColor="#aaa"
        >
          <View style={alt.container}>
            <Icon name="twitter" type="font-awesome" color="white" />
            <Text style={alt.buttonText}> Log in with Twitter </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={alt.button}
          underlayColor="#aaa"
          onPress={this._signIn.bind(this)}
        >
          <Text style={alt.buttonText}> I have an account </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;
