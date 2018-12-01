import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { header, description, follow } from './styles';
import { MemberList } from '../MemberList/index';
import { NavigationActions, StackActions } from 'react-navigation';

class ChannelPublicView extends Component {
  _goToMemberPage() {
    this.props.subscribe(this.props.channelName);
    const { dispatch } = this.props.navigation;
    // the idiom to change the route
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'ChannelListPage' }),
        NavigationActions.navigate({
          routeName: 'ChannelMemberView',
          params: { id: this.props.channel_id }
        })
      ]
    });
    dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <View style={header.container}>
          <Text style={header.title}>{this.props.channel_id}</Text>
          <Avatar
            size={100}
            rounded
            source={require('../../images/leetcodeIcon.png')}
            containerStyle={header.avatar}
          />
        </View>

        <Card containerStyle={description.card}>
          <Text style={description.description}>
            Learn yourself some {this.props.channelName} with friends!
          </Text>

          <View style={description.statsContainer}>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>8</Text>
              <Text style={description.stats}>Tasks</Text>
            </View>
            <View style={[description.statsItem, { paddingHorizontal: 60 }]}>
              <Text style={[description.stats, description.number]}>15</Text>
              <Text style={description.stats}>Members</Text>
            </View>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>148</Text>
              <Text style={description.stats}>Goals</Text>
              <Text style={description.stats}>Completed</Text>
            </View>
          </View>
        </Card>

        <MemberList />

        <TouchableHighlight
          style={follow.button}
          underlayColor="#aaa"
          onPress={this._goToMemberPage.bind(this)}
        >
          <Text style={follow.buttonText}> Follow </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelPublicView;
