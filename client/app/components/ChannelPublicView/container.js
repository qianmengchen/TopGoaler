import { connect } from 'react-redux';
import ChannelPublicView from './ChannelPublicView';
import { subscribeChannel } from '../../actions';

const mapStateToProps = (_, ownProps) => ({
  channel_id: ownProps.navigation.state.params.id
});

const mapDispatchToProps = dispatch => ({
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPublicView);
