import { connect } from 'react-redux';
import SignUp from './SignUp';
import { navigateTo } from '../../actions';

const mapDispatchToProps = dispatch => ({
  reportNav: () => dispatch(navigateTo('TaskList'))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(SignUp);
