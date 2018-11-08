import { createStackNavigator } from 'react-navigation';
import { TaskList } from '../TaskList/index';
import { TaskDetail } from '../TaskDetail/index';

const ChannelNav = createStackNavigator(
  {
    TaskList: { screen: TaskList },
    TaskDetail: { screen: TaskDetail }
  },
  {
    initialRouteName: 'TaskList'
  }
);

export default ChannelNav;
