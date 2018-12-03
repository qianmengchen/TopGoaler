import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { memberList } from './styles';
import { nameToInitialMap } from '../ChannelMemberView/utils';

class MemberList extends Component {
  _getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
                activeOpacity={0.7}
                placeholderStyle={{ backgroundColor: 'greenyellow' }}
                containerStyle={memberList.icon}
              />
              {this.props.user_ids.map(uid => {
                if (this.props.users[uid]) {
                  const name = nameToInitialMap(this.props.users[uid].name);
                  const avatar = (
                    <Avatar
                      size="medium"
                      rounded
                      title={name}
                      activeOpacity={0.7}
                      placeholderStyle={{
                        backgroundColor: this._getRandomColor()
                      }}
                      containerStyle={memberList.icon}
                    />
                  );
                  return avatar;
                }
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default MemberList;
