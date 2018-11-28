import { connect } from 'react-redux';
import Profile from './Profile';
import { logout } from '../../actions';
import {
  userChannelFilter,
  channelGetter,
  userTaskFilter,
  taskGetter
} from './utils';

const mapStateToProps = state => ({
  userInfo: state.users[state.auth.id],
  userChannels: channelGetter(
    state.user_channel.filter(userChannelFilter(state.auth.id)),
    state.channels
  ),
  userTasks: taskGetter(
    state.user_task.filter(userTaskFilter(state.auth.id)),
    state.tasks
  )
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
