import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { header, description, follow } from './styles';
import { MemberList } from '../MemberList/index';
import { NavigationActions, StackActions } from 'react-navigation';

/**
 * @property {number} user_id - A unique number identifying the user.
 * @property {Object} channel - An object describing a specific channel.
 * @property {Object} user_channel - An array of channels that the user is subscribed to.
 * @property {Object} task - An object containing all tasks related to this channel.
 * @property {array} channelActivities - An array of all completed activities by a user.
 * @property {Object} subscribed_users - An object containing all users subscribed to a particular channel.
 * @property {function} subscribe - A function allowing the user to subscribe to a particular channel.
 */

class ChannelPublicView extends Component {
  _goToMemberPage() {
    const { dispatch } = this.props.navigation;
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'ChannelListPage' }),
        NavigationActions.navigate({
          routeName: 'ChannelMemberView',
          params: { id: this.props.channel.id }
        })
      ]
    });
    dispatch(resetAction);
  }

  _subscribe = (channel_id, user_id) => {
    this.props.subscribe(parseInt(channel_id), user_id);
  };

  _on_subscribe = (channel_id, user_id) => {
    this._subscribe(channel_id, user_id);
    this._goToMemberPage();
  };
  //utils function
  _count_users_reducer = (acc, val) => {
    if (val.channel_id === this.props.channel.id) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _number_of_users = () => {
    return this.props.user_channel.reduce(this._count_users_reducer, 0);
  };

  _count_tasks_reducer = (acc, val) => {
    if (val.channel_id === this.props.channel.id) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _number_of_tasks = () => {
    return this.props.task.reduce(this._count_tasks_reducer, 0);
  };

  _number_of_completed_goals = () => {
    return this.props.channelActivities.length;
  };

  _get_all_subscribed_user_ids = () => {
    const res = [];
    for (const p of this.props.subscribed_users) {
      res.push(p.user_id);
    }
    return res;
  };

  render() {
    return (
      <View>
        <View style={header.container}>
          <Text style={header.title}>{this.props.channel.title}</Text>
          <Avatar
            size={100}
            rounded
            source={{
              uri: this.props.channel.image_url
            }}
            containerStyle={header.avatar}
          />
        </View>

        <Card containerStyle={description.card}>
          <Text style={description.description}>
            {this.props.channel.subtitle}
          </Text>

          <View style={description.statsContainer}>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>
                {this._number_of_users()}
              </Text>
              <Text style={description.stats}>Users</Text>
            </View>
            <View style={[description.statsItem, { paddingHorizontal: 60 }]}>
              <Text style={[description.stats, description.number]}>
                {this._number_of_tasks()}
              </Text>
              <Text style={description.stats}>Tasks</Text>
            </View>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>
                {this._number_of_completed_goals()}
              </Text>
              <Text style={description.stats}>Goals</Text>
              <Text style={description.stats}>Completed</Text>
            </View>
          </View>
        </Card>

        <MemberList user_ids={this._get_all_subscribed_user_ids()} />

        <TouchableHighlight
          style={follow.button}
          underlayColor="#aaa"
          onPress={() =>
            this._on_subscribe(this.props.channel.id, this.props.user_id)
          }
        >
          <Text style={follow.buttonText}> Follow </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelPublicView;
