import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';

class ChannelListPage extends Component {
  _goToChannel = subscribed => cid => {
    if (subscribed)
      this.props.navigation.navigate('ChannelMemberView', { cid });
    else this.props.navigation.navigate('ChannelPublicView', { cid });
  };
  _addChannel() {
    this.props.navigation.navigate('NewChannelPage');
  }
  _subscribe = ch => () => {
    this.props.subscribe(ch.channel);
  };
  //_checkSubscribed = ()
  render() {
    console.log(this.props.subscribed_channels);
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
            {Object.keys(this.props.channels).map(id => {
              const ch = this.props.channels[id];
              return (
                <ChannelOverview
                  key={id}
                  channel={ch}
                  goToChannel={this._goToChannel(ch.subscribed)}
                  subscribe={this._subscribe(ch)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelListPage;
