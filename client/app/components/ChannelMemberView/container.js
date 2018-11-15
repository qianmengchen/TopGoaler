import { connect } from 'react-redux';
import ChannelMemberView from './ChannelMemberView';
import { navigateTo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ChannelMemberView);
