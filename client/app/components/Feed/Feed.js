import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { iconColors, task } from './styles';

class Feed extends Component {
  render() {
    const name = this.props.name;
    const taskTitle = this.props.taskTitle;
    const comment = this.props.comment;
    const timestamp = this.props.timestamp;
    const points = this.props.points;

    const getRandomIconColor = () => {
      return iconColors[Math.floor(Math.random() * iconColors.length)];
    };

    return (
      <View>
        <ScrollView>
          <View style={task.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar
                size="medium"
                rounded
                title={name}
                activeOpacity={0.7}
                placeholderStyle={{ backgroundColor: getRandomIconColor() }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={task.title}>{taskTitle}</Text>
                <Text style={task.text}>{comment}</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={task.text}>{timestamp}</Text>
              <Text style={task.text}>{points}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Feed;
