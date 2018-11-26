import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';
import { createChannelAsUser, subscribeChannel } from '../../actions';

const mapStateToProps = state => ({
  user_channel: state.user_channel
});

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user)),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelOverview);
