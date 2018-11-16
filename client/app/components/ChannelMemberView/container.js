import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';
import { navigateTo } from '../../actions';

const mapStateToProps = (_, ownProps) => ({
  channelName: ownProps.navigation.state.params.name
});
const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelMemberView);
