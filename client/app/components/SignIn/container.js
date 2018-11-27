import { connect } from 'react-redux';
import SignIn from './SignIn';
import { login } from '../../actions';

const mapStateToProps = state => {
  //console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  submit: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
