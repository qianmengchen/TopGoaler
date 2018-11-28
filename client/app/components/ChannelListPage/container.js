import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import { createChannelAsUser, subscribeChannel } from '../../actions';

const _getSubscribedChannels = (user_channels, uid) => {
  return new Set(
    user_channels
      .filter(user_channel => user_channel.user_id === uid)
      .map(entry => entry.channel_id)
  );
};

const mapStateToProps = state => ({
  channels: state.channels,
  subscribed_channels: _getSubscribedChannels(state.user_channel, state.auth.id)
});

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user)),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
