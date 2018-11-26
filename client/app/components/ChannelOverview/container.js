import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';
import { createChannelAsUser, subscribeChannel } from '../../actions';

const mapStateToProps = state => ({
  user_channel: state.user_channel
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelOverview);
