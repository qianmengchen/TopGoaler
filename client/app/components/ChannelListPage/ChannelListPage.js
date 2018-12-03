import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, SearchBar, Icon } from 'react-native-elements';
import { board, actions } from './styles';
import { ChannelOverview } from '../ChannelOverview/index';
import { goToChannel } from './utils';

class ChannelListPage extends Component {
  _addChannel() {
    this.props.navigation.navigate('NewChannelPage');
  }
  _subscribe = (channel_id, user_id) => () => {
    this.props.subscribe(parseInt(channel_id), user_id);
  };

  _handleSearch(text) {
    this.setState({ input: text });
  }

  _contains = channel => {
    return channel.title
      ? channel.title.toLowerCase().includes(this.state.input.toLowerCase())
      : false;
  };

  static navigationOptions = {
    headerVisible: false,
    headerStyle: { height: 0 }
  };

  /**
   * This contains searchBar, add icon and a list of channelOverview components.
   * It is the first page that user will be redirected to after signing in.
   * 
   * @class ChannelListPage
   * @property {number} userId - A unique number identifying the user.
   * @property {Object} channels - An object with the key as the id of the channel and the value as the channel.
   * @property {set} subscribed_channels- A set that describes those channels that the user is subscribed to.
   * @property {function} addChannel - A function that allows the user to create a new channel.
   * @property {function} subscribe - A function that allows the user to susbcribe to a particular channel
     
   */
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const { navigation, userId } = this.props;

    return (
      <View style={board.container}>
        <ScrollView>
          <View style={{ marginLeft: 10, marginTop: 40 }}>
            <Text style={{ fontSize: 24, fontFamily: 'Avenir-Black' }}>
              Search
            </Text>
          </View>

          <View style={board.actions}>
            <SearchBar
              containerStyle={actions.searchBar}
              lightTheme={true}
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

          <View style={{ marginLeft: 12, marginTop: 5, marginBottom: 10 }}>
            <Text style={{ fontSize: 24, fontFamily: 'Avenir-Black' }}>
              List
            </Text>
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
                    subscribe={this._subscribe(id, userId)}
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
