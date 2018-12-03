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
    let { goToChannel, channel } = this.props;
    goToChannel(channel.id);
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
    let button;
    if (this.props.is_subscribed) {
      button = (
        <TouchableWithoutFeedback>
          <Icon style={desc.icon} name="check" size={30} color="black" />
        </TouchableWithoutFeedback>
      );
    } else {
      button = (
        <TouchableWithoutFeedback onPress={this._subscribe.bind(this)}>
          <Icon style={desc.icon} name="add" size={30} color="black" />
        </TouchableWithoutFeedback>
      );
    }

    return (
      <TouchableHighlight
        underlayColor="#aaa"
        onPress={this._submit.bind(this)}
      >
        <View style={board.container}>
          <View style={board.contents}>
            <Text style={contents.title}>{this.props.channel.title}</Text>
            <Text style={contents.subtitle}>{this.props.channel.subtitle}</Text>
            <View style={contents.desc}>
              <Text
                style={desc.numbers}
              >{`${this._number_of_users()} users, ${this._number_of_tasks()} tasks`}</Text>
              {button}
            </View>
          </View>
          <View style={board.avatar}>
            <Avatar
              size={80}
              source={{
                uri: this.props.channel.image_url
              }}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ChannelOverview;
