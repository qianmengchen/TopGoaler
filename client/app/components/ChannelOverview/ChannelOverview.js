import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icon, avatar, board, text } from './styles';

class ChannelOverview extends Component {
  constructor(props) {
    super(props);
    this.fakeProps = {
      title: 'top coder',
      subtitle: 'a really intesting group',
      desc: '8 members, 5 tasks'
    };
  }

  render() {
    return (
      <View style={board.container}>
        <View style={board.channels}>
          <View>
            <Text style={text.title}>{this.fakeProps.title}</Text>
            <Text style={text.subtitle}>{this.fakeProps.subtitle}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={text.desc}>{this.fakeProps.desc}</Text>
              <Icon style={icon.summary} name="plus" size={30} color="black" />
            </View>
          </View>
          <View>
            <Avatar
              height={96}
              width={96}
              style={avatar.summary}
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/910592237695676416/7xInX10u_400x400.jpg'
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ChannelOverview;
