import { connect } from 'react-redux';
import Feed from './Feed';
import { navigateTo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Feed);
