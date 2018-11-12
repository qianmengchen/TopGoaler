import { createStackNavigator } from 'react-navigation';
import { TaskList } from '../TaskList/index';
import { TaskDetail } from '../TaskDetail/index';
import { ChannelMemberView } from '../ChannelMemberView/index';

const ChannelNav = createStackNavigator(
  {
    TaskList: { screen: TaskList },
    TaskDetail: { screen: TaskDetail },
    ChannelMemberView: { screen: ChannelMemberView }
  },
  {
    // initialRouteName: 'TaskList'
    initialRouteName: 'ChannelMemberView'
  }
);

export default ChannelNav;
