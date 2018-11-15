import { connect } from 'react-redux';
import ChannelPublicView from './ChannelPublicView';
import { navigateTo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ChannelPublicView);
