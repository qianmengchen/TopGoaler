import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';

const mapStateToProps = (_, ownProps) => ({
  channelName: ownProps.navigation.state.params.name
});

export default connect(mapStateToProps)(ChannelMemberView);
