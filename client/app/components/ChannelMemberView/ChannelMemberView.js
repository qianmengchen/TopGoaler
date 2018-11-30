import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Alert
} from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements';
import { header, cardLeft, cardRight, vote } from './styles';
import { Feed } from '../Feed/index';
import { _get } from '../../actions';
import {
  nameToInitialMap,
  timestampToDescription,
  eventToComment,
  eventPointToResult
} from './utils';

class ChannelMemberView extends Component {
  _goToHomepage() {
    const { navigate } = this.props.navigation;
    navigate('ChannelListPage');
  }

  _goToNewTaskPage() {
    const { navigate } = this.props.navigation;
    navigate('NewTaskPage');
  }

  _goToProposalsPage() {
    const { navigate } = this.props.navigation;
    navigate('ProposalsPage');
  }

  async _loadRankingScore() {
    const { userId, channel } = this.props;
    try {
      const score = await (await _get(`/score/${userId}&${channel.id}`)).json();
      const ranking = await (await _get(
        `/ranking/${userId}&${channel.id}`
      )).json();
      return { ...score, ...ranking };
    } catch (_) {
      Alert('Retrive ranking info error');
      return null;
    }
  }

  UNSAFE_componentWillMount() {
    this._loadRankingScore().then(res => {
      this.setState({ ...res });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      rank: 0
    };
  }

  render() {
    const { channel, activities, users, tasks } = this.props;

    return (
      <View>
        <View style={header.container}>
          <Text style={header.title}>{channel.title}</Text>
          <Avatar
            size={100}
            rounded
            source={require('../../images/leetcodeIcon.png')}
            containerStyle={header.avatar}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <Card containerStyle={cardLeft.container}>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Rank</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>
                {this.state.rank}
              </Text>
            </View>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Score</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>
                {this.state.score}
              </Text>
            </View>
          </Card>

          <Card containerStyle={cardRight.container}>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily</Text>
              <Text style={cardRight.task}>30</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily 2x</Text>
              <Text style={cardRight.task}>60</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Learn Data Struct</Text>
              <Text style={cardRight.task}>100</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Solve 100 Probs</Text>
              <Text style={cardRight.task}>500</Text>
            </View>

            <Divider style={{ backgroundColor: '#bbb', height: 1 }} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}
            >
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={this._goToHomepage.bind(this)}
              >
                <Text style={cardRight.taskButtonText}>More</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={this._goToNewTaskPage.bind(this)}
              >
                <Text style={cardRight.taskButtonText}>Add</Text>
              </TouchableHighlight>
            </View>
          </Card>
        </View>

        <TouchableHighlight
          style={vote.container}
          underlayColor="#aaa"
          onPress={this._goToProposalsPage.bind(this)}
        >
          <View>
            <Text style={vote.buttonText}> Vote on Task Proposals </Text>
          </View>
        </TouchableHighlight>

        <Divider
          style={{
            backgroundColor: '#999',
            marginTop: 20,
            marginHorizontal: 20
          }}
        />

        <ScrollView>
          {activities.map((activity, idx) => (
            <Feed
              name={nameToInitialMap(users[activity.user_id].name)}
              taskTitle={tasks[activity.task_id].title}
              comment={eventToComment(activity.event)}
              timestamp={timestampToDescription(activity.create_time)}
              point={eventPointToResult(
                activity.event,
                tasks[activity.task_id].point
              )}
              key={activity.create_time + idx.toString()}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ChannelMemberView;
