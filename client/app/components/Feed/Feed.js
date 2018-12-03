import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { iconColors, task } from './styles';

/**
 * @class Feed
 * @property {string} name - The name of the user associated with the task.
 * @property {string} taskTitle - The title of the task.
 * @property {string} comment - A short status description of the task.
 * @property {string} timestamp - A description of the time the comment regarding the task was created.
 * @property {number} points - A value indicating the numebr of points for the task.
 */
class Feed extends Component {
  render() {
    let { name, taskTitle, comment, timestamp, points } = this.props;

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
