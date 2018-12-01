import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => ({
  task: Object.keys(state.tasks).map(t => ({
    channel_id: state.tasks[t].channel_id
  })),
  user_channel: state.user_channel
});

export default connect(mapStateToProps)(ChannelOverview);
