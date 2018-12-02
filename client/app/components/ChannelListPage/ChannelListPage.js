import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';
import { goToChannel } from './utils';

class ChannelListPage extends Component {
  _addChannel() {
    this.props.navigation.navigate('NewChannelPage');
  }
  _subscribe = ch => () => {
    this.props.subscribe(ch.channel);
  };

  _handleSearch(text) {
    this.setState({ input: text });
  }

  _contains = channel => {
    return channel.title
      ? channel.title.includes(this.state.input.toLowerCase())
      : false;
  };

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={board.container}>
        <ScrollView>
          <View style={board.actions}>
            <SearchBar
              containerStyle={actions.searchBar}
              clearIcon={false}
              onChangeText={this._handleSearch.bind(this)}
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
              const check_subscribed = this.props.subscribed_channels
                ? this.props.subscribed_channels.has(parseInt(id))
                : false;
              let channel_overview;
              if (this._contains(ch)) {
                channel_overview = (
                  <ChannelOverview
                    key={id}
                    channel={ch}
                    is_subscribed={check_subscribed}
                    goToChannel={goToChannel(
                      check_subscribed,
                      navigation.navigate
                    )}
                    subscribe={this._subscribe(ch)}
                  />
                );
              }
              return channel_overview;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ChannelListPage;
