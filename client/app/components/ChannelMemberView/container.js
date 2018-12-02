import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';
import { channelActivityFilterWrap } from './utils';

const mapStateToProps = (state, ownProps) => ({
  channel: state.channels[ownProps.navigation.state.params.id],
  userId: state.auth.id,
  activities: state.activity_log.filter(
    channelActivityFilterWrap(ownProps.navigation.state.params.id, state.tasks)
  ),
  users: state.users,
  tasks: state.tasks,
  navigation: ownProps.navigation
});

export default connect(mapStateToProps)(ChannelMemberView);
