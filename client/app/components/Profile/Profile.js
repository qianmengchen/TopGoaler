import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';
import { ChannelIconList } from '../ChannelIconList/index';
import { TaskChecklist } from '../TaskChecklist/index';
import {
  board,
  personalInfo,
  descriptions,
  actions,
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
              <Icon name="favorite" size={32} color="white" />
              <Icon name="share" size={32} color="white" />
            </View>
          </View>
        </View>
        <View style={board.channels}>
          <ChannelIconList />
        </View>
        <View style={board.tasks}>
          <TaskChecklist />
        </View>
      </View>
    );
  }
}

export default Profile;
