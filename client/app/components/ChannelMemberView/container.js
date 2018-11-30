import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';

const mapStateToProps = (_, ownProps) => ({
  channelId: ownProps.navigation.state.params.id
});

export default connect(mapStateToProps)(ChannelMemberView);
