import { createStackNavigator } from 'react-navigation';
import { Profile } from '../Profile/index';
import { ChannelMemberView } from '../ChannelMemberView/index';

const ProfileNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    ChannelMemberView: { screen: ChannelMemberView }
  },
  {
    initialRouteName: 'Profile'
  }
);

export default ProfileNav;
