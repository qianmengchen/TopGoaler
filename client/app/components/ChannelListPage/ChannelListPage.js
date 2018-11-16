import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';

class ChannelListPage extends Component {
  _goToChannel = name => {
    this.props.navigation.navigate('ChannelMemberView', { name });
  };
  _addChannel = () => {
    this.props.addChannelLocal('Test' + new Date().getSeconds(), 'admin');
    // addChannelLocal is for unit testing.
    // In production, we always fetch the entire database and never make local, incremental state updates.
    // use this.props.addChannel to actually add to server
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
              onPress={this._addChannel}
            />
          </View>
          <View style={board.channelList}>
            {this.props.channels.map(ch => (
              <ChannelOverview
                key={ch.channel}
                title={ch.channel}
                subtitle={`Created by ${ch.user}`}
                goToChannel={this._goToChannel}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelListPage;
