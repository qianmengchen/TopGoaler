import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements';
import { task } from './styles';

class Feed extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={task.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar
                size="medium"
                rounded
                title="QM"
                onPress={() => console.log("Goes to member's profile page")}
                activeOpacity={0.7}
                placeholderStyle={{ backgroundColor: 'greenyellow' }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={task.title}>LeetCode Daily</Text>
                <Text style={task.text}>solved problem 251!</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={task.text}>3 hours ago</Text>
              <Text style={task.text}>+30</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Feed;
