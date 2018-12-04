import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider, Icon } from 'react-native-elements';
import { headerBar, header, cardLeft, cardRight } from './styles';
import { Feed } from '../Feed/index';
import {
  nameToInitialMap,
  timestampToDescription,
  eventToComment,
  eventPointToResult
} from './utils';

/**
 * This is the page that an user will be redirected to if the user is subscribed to that channel.
 * It shows the user's score, ranking and newsFeed from all the users in that channel.
 * Users can also add new task, view taskList and vote on proposals.
 *
 * @class ChannelMemberView
 * @property {number} channel_id - A unique number identifying a channel.
 * @property {Object} channel - An object containing the specific channel based on the channel_id.
 * @property {number} userId - A unique number identifying a user.
 * @property {Object} activities - An object containing all activities in this specific channel.
 * @property {Object} users - An object containing all users.
 * @property {Object} tasks - An object containing all tasks.
 * @property {Object} navigation - An object that contains the navigate function to navigate between components.
 */
class ChannelMemberView extends Component {
  _goToTaskListPage() {
    const { navigate } = this.props.navigation;
    navigate('TaskListPage', { channel_id: this.props.channel_id });
  }

  _goToNewTaskPage() {
    const { navigate } = this.props.navigation;
    navigate('NewTaskPage', { channel_id: this.props.channel_id });
  }

  _goToProposalsPage() {
    const { navigate } = this.props.navigation;
    navigate('ProposalsPage', { channel_id: this.props.channel_id });
  }

  tasklist() {
    const tasklist = this.props.list_of_tasks || {};
    return Object.keys(tasklist).map(idx => {
      return (
        <View key={idx} style={cardRight.taskContainer}>
          <Text style={cardRight.task}>{tasklist[idx].title}</Text>
          <Text style={cardRight.task}>{tasklist[idx].point}</Text>
        </View>
      );
    });
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const channel = params ? (params.channel ? params.channel : null) : null;
    return {
      headerTitle: <ChannelTitle channel={channel} />,
      headerRight: <ChannelRight channel={channel} />,
      headerBackImage: <BackImage />,
      ...headerBar
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      channel: this.props.channel
    });
    this.props.refresh(this.props.userId, this.props.channel.id);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.incoming_channel_id, prevProps.incoming_channel_id);
    if (this.props.isClearing) {
      return;
    }
    if (
      this.props.userId !== prevProps.userId ||
      this.props.incoming_channel_id !== prevProps.channel_id
    ) {
      this.props.refresh(this.props.userId, this.props.channel.id);
      this.props.clear();
    } else {
      if (prevProps.channel != this.props.channel) {
        this.props.navigation.setParams({
          channel: this.props.channel
        });
      }
    }
  }

  render() {
    const { activities, users, tasks, ranking, score } = this.props;
    const rankingStr =
      typeof ranking === 'string'
        ? ranking
        : ranking > 0
        ? '#' + ranking
        : 'N/A';
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <Card containerStyle={cardLeft.container}>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Rank</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>
                {rankingStr}
              </Text>
            </View>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Score</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>{score}</Text>
            </View>
          </Card>

          <Card containerStyle={cardRight.container}>
            <ScrollView style={{ height: 140 }}>{this.tasklist()}</ScrollView>

            <Divider style={{ backgroundColor: '#bbb', height: 1 }} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5
              }}
            >
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={this._goToTaskListPage.bind(this)}
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

              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={this._goToProposalsPage.bind(this)}
              >
                <View>
                  <Text style={cardRight.taskButtonText}> Vote </Text>
                </View>
              </TouchableHighlight>
            </View>
          </Card>
        </View>

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

const ChannelTitle = ({ channel }) => {
  const title = channel ? '#' + channel.title : '';
  return (
    <View style={header.container}>
      <Text style={header.title}>{title}</Text>
    </View>
  );
};

const BackImage = () => <Icon color="#888" name="chevron-left" size={30} />;

const ChannelRight = ({ channel }) => {
  const default_url = 'http://shortlink.in/themes/v3/styles/img/url-link.png';
  const image_url = channel ? channel.image_url : default_url;
  return (
    <Avatar
      size={35}
      rounded
      source={{ uri: image_url }}
      containerStyle={header.avatar}
    />
  );
};

export default ChannelMemberView;
