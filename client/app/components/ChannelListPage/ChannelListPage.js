import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { buttons, searchBars } from './styles';

class ChannelListPage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          placeholder="Search for channels"
          containerStyle={searchBars.summary}
          icon={{ type: 'font-awesome', name: 'search' }}
        />
        ,
        <Button
          buttonStyle={buttons.summary}
          icon={<Icon name="plus" size={30} color="black" />}
          title=" "
          onPress={() => {}}
        />
      </View>
    );
  }
}

export default ChannelListPage;
