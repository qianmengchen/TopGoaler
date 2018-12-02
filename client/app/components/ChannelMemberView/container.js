import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';
import { channelActivityFilterWrap } from './utils';

const mapStateToProps = (state, ownProps) => {
  const channel_id = ownProps.navigation.state.params.channel_id;
  return {
    channel_id,
    channel: state.channels[channel_id],
    userId: state.auth.id,
    activities: state.activity_log.filter(
      channelActivityFilterWrap(channel_id, state.tasks)
    ),
    users: state.users,
    tasks: state.tasks,
    navigation: ownProps.navigation
  };
};

export default connect(mapStateToProps)(ChannelMemberView);
