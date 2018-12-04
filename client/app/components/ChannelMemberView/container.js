import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';
import { channelActivityFilterWrap } from './utils';
import { loadCurrentChannel } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  const channel_id = ownProps.navigation.state.params.channel_id;
  return {
    channel_id,
    channel: state.channels[channel_id],
    userId: state.auth.id,
    activities: state.activity_log
      .filter(channelActivityFilterWrap(channel_id, state.tasks))
      .sort((a, b) => b - a),
    users: state.users,
    tasks: state.tasks,
    navigation: ownProps.navigation,

    list_of_tasks: state.current_channel.tasks,
    ranking: state.current_channel.ranking,
    score: state.current_channel.score,
    incoming_channel_id: state.current_channel.channelId,
    shouldRefresh: state.current_channel.channelId != channel_id
  };
};

const mapDispatchToProps = dispatch => ({
  refresh: (userId, channelId) => (
    console.log('loadCurrentChannel: out of date'),
    dispatch(loadCurrentChannel(userId, channelId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMemberView);
