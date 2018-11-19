import { connect } from 'react-redux';
import NewChannelPage from './NewChannelPage';
import { createChannelAsUser } from '../../actions';

const mapStateToProps = state => ({
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user) => dispatch(createChannelAsUser(channel, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannelPage);
