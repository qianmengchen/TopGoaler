import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements';
import { header, cardLeft, cardRight } from './styles';
import { Feed } from '../Feed/index';

class ChannelMemberView extends Component {
  render() {
    let { reportNav } = this.props;
    const { navigate } = this.props.navigation;

    const goToHomepage = () => {
      reportNav(); // this is an example of how you can listen to navigation
      // but you can also subscribe to actual navigation events
      navigate('TaskList');
    };

    return (
      <View>
        <View style={header.container}>
          <Text style={header.title}>#Leetcoders</Text>
          <Avatar
            size={100}
            rounded
            source={require('../../images/leetcodeIcon.png')}
            containerStyle={header.avatar}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <Card containerStyle={cardLeft.container}>
            <View>
              <Text style={cardLeft.stats}>Rank</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>Top 10%</Text>
            </View>
            <View>
              <Text style={cardLeft.stats}>Rating</Text>
              <Text style={[cardLeft.stats, cardLeft.number]}>1830</Text>
            </View>
          </Card>

          <Card containerStyle={cardRight.container}>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily</Text>
              <Text style={cardRight.task}>30</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>LeetCode Daily 2x</Text>
              <Text style={cardRight.task}>60</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Learn Data Struct</Text>
              <Text style={cardRight.task}>100</Text>
            </View>
            <View style={cardRight.taskContainer}>
              <Text style={cardRight.task}>Solve 100 Probs</Text>
              <Text style={cardRight.task}>500</Text>
            </View>

            <Divider style={{ backgroundColor: '#bbb' }} />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={() => goToHomepage()}
              >
                <Text style={cardRight.taskButtonText}>More</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={cardRight.taskButton}
                underlayColor="#aaa"
                onPress={() => console.log('Go to create task page')}
              >
                <Text style={cardRight.taskButtonText}>Add</Text>
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
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </ScrollView>
      </View>
    );
  }
}

export default ChannelMemberView;
