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

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      subtitle: '',
      goToChannel: () => {},
      subscribe: () => {}
    };
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.contents}>
          <Text style={contents.title}>{this.props.title}</Text>
          <Text style={contents.subtitle}>{this.props.subtitle}</Text>
          <View style={contents.desc}>
            <Text style={desc.numbers}>{this.props.user_channel}</Text>
            <TouchableWithoutFeedback onPress={this._subscribe}>
              <Icon style={desc.icon} name="add" size={30} color="black" />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableHighlight
          underlayColor="#aaa"
          onPress={this._submit}
          style={board.avatar}
        >
          <View>
            <Avatar
              size={120}
              source={{
                uri: this.props.user_channel //need more backend support here
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelOverview;
