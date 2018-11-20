import { connect } from 'react-redux';
import ChannelIconList from './ChannelIconList';

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(ChannelIconList);
