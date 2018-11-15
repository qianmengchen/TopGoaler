import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';

class ChannelListPage extends Component {
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
              onPress={() => {}}
            />
          </View>
          <View style={board.channelList}>
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
            <ChannelOverview />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelListPage;
