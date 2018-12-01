import { connect } from 'react-redux';
import NewChannelPage from './NewChannelPage';
import { createChannelAsUser } from '../../actions';

const mapStateToProps = state => ({
  userId: state.auth.id
});

const mapDispatchToProps = dispatch => ({
  addChannel: (channel, user_id) =>
    dispatch(createChannelAsUser(channel, user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannelPage);
