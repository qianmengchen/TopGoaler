import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => ({
  //task: state.task
  user_channel: state.user_channel
});

export default connect(mapStateToProps)(ChannelOverview);
