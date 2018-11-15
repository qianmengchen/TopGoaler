import { createStackNavigator } from 'react-navigation';
import { ChannelListPage } from '../ChannelListPage/index';
import { TaskDetail } from '../TaskDetail/index';
import { ChannelPublicView } from '../ChannelPublicView/index';

const ChannelNav = createStackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage },
    TaskDetail: { screen: TaskDetail },
    ChannelPublicView: { screen: ChannelPublicView }
  },
  {
    initialRouteName: 'ChannelListPage'
  }
);

export default ChannelNav;
