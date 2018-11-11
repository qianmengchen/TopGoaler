import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { buttons, searchBars } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';

class ChannelListPage extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <SearchBar
            onChangeText={() => {}}
            onClear={() => {}}
            placeholder="Search for channels"
            containerStyle={searchBars.summary}
            icon={{ type: 'font-awesome', name: 'search' }}
          />
          <Button
            buttonStyle={buttons.summary}
            icon={<Icon name="add" size={26} color="black" />}
            title=" "
            onPress={() => {}}
          />
        </View>
        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <ChannelOverview />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ChannelOverview />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ChannelOverview />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ChannelOverview />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ChannelOverview />
        </View>
      </ScrollView>
    );
  }
}

export default ChannelListPage;
