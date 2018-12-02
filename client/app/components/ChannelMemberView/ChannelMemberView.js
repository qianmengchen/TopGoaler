import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider, Icon } from 'react-native-elements';
import { headerBar, header, cardLeft, cardRight } from './styles';
import { Feed } from '../Feed/index';
import { _get } from '../../actions';
import {
  nameToInitialMap,
  timestampToDescription,
  eventToComment,
  eventPointToResult,
  _alert
} from './utils';

class ChannelMemberView extends Component {
  _goToTaskListPage() {
    const { navigate } = this.props.navigation;
    navigate('TaskListPage', { channel_id: this.props.channel.id });
  }

  _goToNewTaskPage() {
    const { navigate } = this.props.navigation;
    navigate('NewTaskPage', { channel_id: this.props.channel_id });
  }

  _goToProposalsPage() {
    const { navigate } = this.props.navigation;
    navigate('ProposalsPage', { channel_id: this.props.channel.id });
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
      return { score: 0, ranking: -1 };
    }
  }

  async _loadTasks() {
    const { channel } = this.props;
    try {
      const tasks = await (await _get(`/task/channel_id/${channel.id}`)).json();
      return { ...tasks };
    } catch (_) {
      _alert('Retrieve tasks info error');
      return null;
    }
  }

  UNSAFE_componentWillMount() {
    this._loadRankingScore().then(res => {
      this.setState({ ...res });
    });
    this._loadTasks().then(res => {
      this.setState({ tasks: res });
    });
  }

  tasklist() {
    const tasklist = this.state.tasks;
    return Object.keys(tasklist).map(idx => {
      return (
        <View key={idx} style={cardRight.taskContainer}>
          <Text style={cardRight.task}>{tasklist[idx].title}</Text>
          <Text style={cardRight.task}>{tasklist[idx].point}</Text>
        </View>
      );
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      rank: 0,
      tasks: [{ time: '1', id: '1' }, { time: '3', id: '2' }]
    };
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
  }
  render() {
    const { activities, users, tasks } = this.props;
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <Card containerStyle={cardLeft.container}>
            <View style={cardLeft.statsContainer}>
              <Text style={cardLeft.stats}>Rank</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>
                {'#' + (this.state.rank > 0 ? this.state.rank : 'N/A')}
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
