import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => {
  return {
    user_channel: state.user_channel
  };
};

export default connect(mapStateToProps)(ChannelOverview);
