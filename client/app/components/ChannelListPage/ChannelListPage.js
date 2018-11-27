import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';

class ChannelListPage extends Component {
  _goToChannel = subscribed => name => {
    if (subscribed)
      this.props.navigation.navigate('ChannelMemberView', { name });
    else this.props.navigation.navigate('ChannelPublicView', { name });
  };
  _addChannel() {
    this.props.navigation.navigate('NewChannelPage');
  }
  _subscribe = ch => () => {
    this.props.subscribe(ch.channel);
  };
  _subscribe = ch => () => {
    this.props.subscribe(ch.channel);
  };
  render() {
    return (
      <View style={board.container}>
        <ScrollView>
          <View style={board.actions}>
            <SearchBar
              containerStyle={actions.searchBar}
              onChangeText={() => {}}
              onClear={() => {}}
              placeholder="Search for channels"
              icon={{ type: 'font-awesome', name: 'search' }}
            />
            <Button
              containerStyle={actions.button}
              buttonStyle={{ backgroundColor: 'transparent' }}
              icon={<Icon name="add" size={30} color="black" />}
              title=""
              onPress={this._addChannel.bind(this)}
            />
          </View>
          <View style={board.channelList}>
            {this.props.channels.map((ch, idx) => (
              <ChannelOverview
                key={idx}
                channel={ch}
                goToChannel={this._goToChannel(ch.subscribed)}
                subscribe={this._subscribe(ch)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelListPage;
