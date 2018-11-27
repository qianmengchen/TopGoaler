import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => {
  console.log(state);
  return {
    user_channel: state.user_channel,
    task: state.task
  };
};

export default connect(mapStateToProps)(ChannelOverview);
