import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import { createChannelAsUser, subscribeChannelAsUser } from '../../actions';

const _getSubscribedChannels = (user_channels, uid) => {
  return new Set(
    user_channels
      .filter(user_channel => user_channel.user_id === uid)
      .map(entry => entry.channel_id)
  );
};

const mapStateToProps = state => ({
  userId: state.auth.id,
  channels: state.channels,
  subscribed_channels: _getSubscribedChannels(state.user_channel, state.auth.id)
});

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user)),
  subscribe: (channel_id, user_id) =>
    dispatch(subscribeChannelAsUser(user_id, channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
