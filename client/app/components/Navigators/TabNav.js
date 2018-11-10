import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBarBottom } from 'react-native';
import { Profile } from '../Profile/index';
import { Ionicons } from '@expo/vector-icons';
import ChannelNav from './ChannelNav';
import { SignIn } from '../SignIn/index';

const TabNav = createBottomTabNavigator(
  {
    Channel: { screen: ChannelNav },
    Profile: { screen: Profile },
    SignIn: { screen: SignIn }
  },
  {
    // initialRouteName: 'Channel',
    initialRouteName: 'SignIn',
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ /*focused*/ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = routeName == 'Channel' ? 'ios-list-box' : 'ios-person';
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    swipeEnabled: true
  }
);

export default TabNav;
