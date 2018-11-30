import { createStackNavigator } from 'react-navigation';
import { Profile } from '../Profile/index';
import { ChannelMemberView } from '../ChannelMemberView/index';
import { PerformancePage } from '../PerformancePage/index';

const ProfileNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    ChannelMemberView: { screen: ChannelMemberView },
    PerformancePage: { screen: PerformancePage }
  },
  {
    initialRouteName: 'Profile'
  }
);

export default ProfileNav;
