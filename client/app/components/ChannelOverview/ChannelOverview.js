import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';
import { board, contents, desc } from './styles';

class ChannelOverview extends Component {
  _submit = () => {
    let { goToChannel, title } = this.props;
    goToChannel(title);
  };

  _subscribe = () => {
    let { subscribe, title } = this.props;
    subscribe(title);
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

  render() {
    return (
      <View style={board.container}>
        <View style={board.contents}>
          <Text style={contents.title}>{this.props.title}</Text>
          <Text style={contents.subtitle}>{this.props.subtitle}</Text>
          <View style={contents.desc}>
            <Text
              style={desc.numbers}
            >{`${this._number_of_users()} users, 0 tasks`}</Text>
            <TouchableWithoutFeedback onPress={this._subscribe}>
              <Icon style={desc.icon} name="add" size={30} color="black" />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableHighlight
          underlayColor="#aaa"
          onPress={this._submit.bind(this)}
          style={board.avatar}
        >
          <View>
            <Avatar
              size={120}
              source={{
                uri: this.props.channel.image_url
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelOverview;
