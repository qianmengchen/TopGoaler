import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { memberList } from './styles';

class MemberList extends Component {
  render() {
    return (
      <View>
        <View style={memberList.container}>
          <Text style={memberList.text}> Member List</Text>

          <ScrollView horizontal>
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
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MemberList;
