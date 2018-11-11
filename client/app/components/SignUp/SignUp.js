import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';
import { card, alt } from './styles';

class SignUp extends Component {
  render() {
    let { reportNav } = this.props;
    const { navigate } = this.props.navigation;

    const goToHomepage = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskList');
    };

    return (
      <View style={card.container}>
        <Text style={card.title}>Top Goaler</Text>
        <Card title="Sign up for free">
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
          <Input
            containerStyle={{ marginVertical: 10 }}
            placeholder="Email"
            leftIcon={<Icon name="email" size={24} color="grey" />}
          />
          <TouchableHighlight
            style={card.button}
            underlayColor="#aaa"
            onPress={() => goToHomepage()}
          >
            <Text style={card.buttonText}> Create Account </Text>
          </TouchableHighlight>
        </Card>

        <Text style={alt.text}>Or you can also:</Text>
        <TouchableHighlight
          style={[alt.button, alt.facebook]}
          underlayColor="#aaa"
          onPress={() => goToHomepage()}
        >
          <View style={alt.container}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              color="white"
              onPress={() => goToHomepage()}
            />
            <Text style={alt.buttonText}> Log in with Facebook </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.google]}
          underlayColor="#aaa"
          onPress={() => goToHomepage()}
        >
          <View style={alt.container}>
            <Icon
              name="google-plus"
              type="font-awesome"
              color="white"
              onPress={() => goToHomepage()}
            />
            <Text style={alt.buttonText}> Log in with Google </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[alt.button, alt.twitter]}
          underlayColor="#aaa"
          onPress={() => goToHomepage()}
        >
          <View style={alt.container}>
            <Icon
              name="twitter"
              type="font-awesome"
              color="white"
              onPress={() => goToHomepage()}
            />
            <Text style={alt.buttonText}> Log in with Twitter </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;
