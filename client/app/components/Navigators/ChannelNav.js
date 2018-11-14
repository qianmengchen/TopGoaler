import { createStackNavigator } from 'react-navigation';
import { ChannelListPage } from '../ChannelListPage/index';
import { TaskDetail } from '../TaskDetail/index';

const ChannelNav = createStackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage },
    TaskDetail: { screen: TaskDetail }
  },
  {
    initialRouteName: 'ChannelListPage'
  }
);

export default ChannelNav;
