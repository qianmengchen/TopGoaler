import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
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
  _handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.personalInfo}>
          <View style={personalInfo.descriptions}>
            <View style={descriptions.intro}>
              <Text style={introText.name}>{this.props.userInfo.name}</Text>
              <Text style={introText.bio}>
                {this.props.userInfo.description}
              </Text>
            </View>
            <View style={descriptions.avatar}>
              <Avatar
                height={128}
                width={128}
                source={{ uri: this.props.userInfo.avatar_url }}
              />
            </View>
          </View>
          <View style={personalInfo.actions}>
            <View style={actions.summary}>
              <Button title="My Summary" buttonStyle={buttons.summary} />
            </View>
            <View style={actions.buttons}>
              <Button
                title="Log Out"
                buttonStyle={buttons.logout}
                onPress={this._handleLogout.bind(this)}
              />
            </View>
          </View>
        </View>
        <View style={board.channels}>
          <ChannelIconList channels={this.props.userChannels} />
        </View>
        <View style={board.tasks}>
          <TaskChecklist tasks={this.props.userTasks} />
        </View>
      </View>
    );
  }
}

export default Profile;
