import { connect } from 'react-redux';
import SignIn from './SignIn';
import { login } from '../../actions';

const mapDispatchToProps = dispatch => ({
  submit: (username, password) => dispatch(login(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);