import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import {
  board,
  personalInfo,
  descriptions,
  actions,
  intro,
  buttons,
  introText
} from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.fakeProps = {
      name: 'Joseph Bruin',
      bio: 'A passionate todo artist'
    };
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.personalInfo}>
          <View style={personalInfo.descriptions}>
            <View style={descriptions.intro}>
              <Text style={introText.name}>{this.fakeProps.name}</Text>
              <Text style={introText.bio}>{this.fakeProps.bio}</Text>
            </View>
            <View style={descriptions.avatar}>
              <Avatar
                height={128}
                width={128}
                source={require('../../images/boy.png')}
              />
            </View>
          </View>
          <View style={personalInfo.actions}>
            <View style={actions.summary}>
              <Button title="My Summary" buttonStyle={buttons.summary} />
            </View>
            <View style={actions.buttons}>
              <Button title="A" buttonStyle={buttons.A} />
              <Button title="B" buttonStyle={buttons.B} />
            </View>
          </View>
        </View>
        <View style={board.channels} />
        <View style={board.tasks} />
      </View>
    );
  }
}

export default Profile;
