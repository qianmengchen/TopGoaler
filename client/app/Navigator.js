import React, { Component } from 'react';
import { ChannelListPage } from '../ChannelListPage';
import { StackNavigator } from 'react-navigation';

export const Navigator = new StackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage }
  },
  {
    initialRouteName: 'ChannelListPage'
  }
);

class Nav extends Component {
  render() {
    return <Navigator />;
  }
}

export default Nav;
