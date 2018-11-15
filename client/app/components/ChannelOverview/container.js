import { connect } from 'react-redux';
import ChannelOverview from './ChannelOverview';

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(ChannelOverview);
