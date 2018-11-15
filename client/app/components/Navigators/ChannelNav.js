import { createStackNavigator } from 'react-navigation';
import { ChannelListPage } from '../ChannelListPage/index';
import { ChannelPublicView } from '../ChannelPublicView/index';
import { ChannelMemberView } from '../ChannelMemberView/index';

const ChannelNav = createStackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage },
    ChannelPublicView: { screen: ChannelPublicView },
    ChannelMemberView: { screen: ChannelMemberView }
  },
  {
    initialRouteName: 'ChannelListPage'
  }
);

export default ChannelNav;
