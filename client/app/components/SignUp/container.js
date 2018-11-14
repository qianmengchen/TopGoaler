import { connect } from 'react-redux';
import SignUp from './SignUp';
import { signUp } from '../../actions';

const mapDispatchToProps = dispatch => ({
  submit: (username, password) => dispatch(signUp(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
