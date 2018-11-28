import { createStackNavigator } from 'react-navigation';
import { ChannelListPage } from '../ChannelListPage/index';
import { ChannelPublicView } from '../ChannelPublicView/index';
import { ChannelMemberView } from '../ChannelMemberView/index';
import { NewChannelPage } from '../NewChannelPage/index';
import { NewTaskPage } from '../NewTaskPage/index';

const ChannelNav = createStackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage },
    ChannelPublicView: { screen: ChannelPublicView },
    ChannelMemberView: { screen: ChannelMemberView },
    NewChannelPage: { screen: NewChannelPage },
    NewTaskPage: { screen: NewTaskPage }
  },
  {
    initialRouteName: 'ChannelListPage'
  }
);

export default ChannelNav;
