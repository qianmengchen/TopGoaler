import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';
import { board, contents, desc } from './styles';

class ChannelOverview extends Component {
  constructor(props) {
    super(props);
    this.fakeProps = {
      title: 'top coder',
      subtitle: 'a really intesting group',
      desc: '8 members, 5 tasks'
    };
  }
  _submit = () => {
    let { goToChannel, title } = this.props;
    goToChannel(title);
  };

  render() {
    return (
      <View style={board.container}>
        <View style={board.contents}>
          <Text style={contents.title}>{this.props.title}</Text>
          <Text style={contents.subtitle}>{this.props.subtitle}</Text>
          <View style={contents.desc}>
            <Text style={desc.numbers}>{this.fakeProps.desc}</Text>
            <Icon style={desc.icon} name="add" size={30} color="black" />
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
                uri:
                  'https://pbs.twimg.com/profile_images/910592237695676416/7xInX10u_400x400.jpg'
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelOverview;
