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
import { periodDecoder } from '../../constants';

class Profile extends Component {
  _handleLogout() {
    this.props.logout();
  }

  _goToPerformancePage() {
    const { navigate } = this.props.navigation;
    navigate('PerformancePage');
  }

  _activityAggregateReducer(acc, obj) {
    const { userTasks } = this.props;

    const now = new Date();
    const task = userTasks[obj.task_id];
    if (task && now - obj.create_time <= periodDecoder[task.period]) {
      if (acc[obj.task_id]) {
        acc[obj.task_id]++;
      } else {
        acc[obj.task_id] = 1;
      }
    }
    return acc;
  }

  render() {
    const { userInfo, userChannels, userTasks, userActivities } = this.props;

    //numActivities maps task_id to the number of FINISH activities within its period
    const numActivities = userActivities.reduce(
      this._activityAggregateReducer.bind(this),
      {}
    );

    const onGoingTasks = [],
      finishedTasks = [];
    for (const task of userTasks) {
      if (!task.pattern || numActivities[task.id] < task.pattern) {
        onGoingTasks.push(task);
      } else {
        finishedTasks.push(task);
      }
    }

    return (
      <View style={board.container}>
        <View style={board.personalInfo}>
          <View style={personalInfo.descriptions}>
            <View style={descriptions.intro}>
              <Text style={introText.name}>{userInfo.name}</Text>
              <Text style={introText.bio}>{userInfo.description}</Text>
            </View>
            <View style={descriptions.avatar}>
              <Avatar
                height={128}
                width={128}
                source={{ uri: userInfo.avatar_url }}
              />
            </View>
          </View>
          <View style={personalInfo.actions}>
            <View style={actions.summary}>
              <Button
                title="My Summary"
                buttonStyle={buttons.summary}
                onPress={this._goToPerformancePage.bind(this)}
              />
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
          <ChannelIconList channels={userChannels} />
        </View>
        <View style={board.tasks}>
          <TaskChecklist
            onGoingTasks={onGoingTasks}
            finishedTasks={finishedTasks}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
