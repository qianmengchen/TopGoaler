import { createStackNavigator } from 'react-navigation';
import { TaskList } from '../TaskList/index';
import { TaskDetail } from '../TaskDetail/index';
import { ChannelPublicView } from '../ChannelPublicView/index';

const ChannelNav = createStackNavigator(
  {
    TaskList: { screen: TaskList },
    TaskDetail: { screen: TaskDetail },
    ChannelPublicView: { screen: ChannelPublicView }
  },
  {
    // initialRouteName: 'TaskList'
    initialRouteName: 'ChannelPublicView'
  }
);

export default ChannelNav;
