import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { header, description, memberList, follow } from './styles';

class ChannelPublicView extends Component {
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

        <Card containerStyle={description.card}>
          <Text style={description.description}>
            Learn yourself some algorithms thru competition with friends!
          </Text>

          <View style={description.statsContainer}>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>8</Text>
              <Text style={description.stats}>Tasks</Text>
            </View>
            <View style={[description.statsItem, { paddingHorizontal: 60 }]}>
              <Text style={[description.stats, description.number]}>15</Text>
              <Text style={description.stats}>Members</Text>
            </View>
            <View style={description.statsItem}>
              <Text style={[description.stats, description.number]}>148</Text>
              <Text style={description.stats}>Goals</Text>
              <Text style={description.stats}>Completed</Text>
            </View>
          </View>
        </Card>

        <View style={memberList.container}>
          <Text style={memberList.text}> Member List</Text>

          <View style={memberList.iconList}>
            <Avatar
              size="medium"
              rounded
              title="QM"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'greenyellow' }}
              containerStyle={memberList.icon}
            />
            <Avatar
              size="medium"
              rounded
              title="BB"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'dodgerblue' }}
              containerStyle={memberList.icon}
            />
            <Avatar
              size="medium"
              rounded
              title="AS"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'orange' }}
              containerStyle={memberList.icon}
            />
            <Avatar
              size="medium"
              rounded
              title="SY"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'lightgreen' }}
              containerStyle={memberList.icon}
            />
            <Avatar
              size="medium"
              rounded
              title="JS"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'magenta' }}
              containerStyle={memberList.icon}
            />
            <Avatar
              size="medium"
              rounded
              title="BX"
              onPress={() => console.log("Goes to member's profile page")}
              activeOpacity={0.7}
              placeholderStyle={{ backgroundColor: 'red' }}
              containerStyle={memberList.icon}
            />
          </View>
        </View>

        <TouchableHighlight
          style={follow.button}
          underlayColor="#aaa"
          onPress={() => goToHomepage()}
        >
          <Text style={follow.buttonText}> Follow </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChannelPublicView;
