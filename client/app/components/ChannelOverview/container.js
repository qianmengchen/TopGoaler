import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => ({
  user_channel: state.user_channel,
  task: state.task,
  channel: state.channel
});

export default connect(mapStateToProps)(ChannelOverview);
