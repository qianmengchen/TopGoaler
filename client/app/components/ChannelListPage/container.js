import { connect } from 'react-redux';
import ChannelListPage from './ChannelListPage';
import { createChannelAsUser, subscribeChannel } from '../../actions';

const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user)),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListPage);
