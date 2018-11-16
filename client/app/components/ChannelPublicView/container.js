import { connect } from 'react-redux';
import ChannelPublicView from './ChannelPublicView';
import { navigateTo, subscribeChannel } from '../../actions';

const mapStateToProps = (_, ownProps) => ({
  channelName: ownProps.navigation.state.params.name
});

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList')),
  subscribe: channel => dispatch(subscribeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPublicView);
