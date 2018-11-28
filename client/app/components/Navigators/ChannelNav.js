import { createStackNavigator } from 'react-navigation';
import { ChannelListPage } from '../ChannelListPage/index';
import { ChannelPublicView } from '../ChannelPublicView/index';
import { ChannelMemberView } from '../ChannelMemberView/index';
import { NewChannelPage } from '../NewChannelPage/index';
import { ProposalsPage } from '../ProposalsPage/index';

const ChannelNav = createStackNavigator(
  {
    ChannelListPage: { screen: ChannelListPage },
    ChannelPublicView: { screen: ChannelPublicView },
    ChannelMemberView: { screen: ChannelMemberView },
    NewChannelPage: { screen: NewChannelPage },
    ProposalsPage: { screen: ProposalsPage }
  },
  {
    initialRouteName: 'ChannelListPage'
    // initialRouteName: 'ProposalsPage'
  }
);

export default ChannelNav;
