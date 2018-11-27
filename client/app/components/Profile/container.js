import { connect } from 'react-redux';
import Profile from './Profile';
import { logout } from '../../actions';

const mapStateToProps = state => {
  //console.log(state);
  return {
    username: state.auth.username
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
