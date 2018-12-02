import { connect } from 'react-redux';
import Profile from './Profile';
import { logout } from '../../actions';
import {
  userChannelFilter,
  channelGetter,
  userTaskFilter,
  taskGetter
} from './utils';
import { Event } from '../../constants';

const mapStateToProps = state => ({
  userInfo: state.users[state.auth.id],
  userChannels: channelGetter(
    state.user_channel.filter(userChannelFilter(state.auth.id)),
    state.channels
  ).filter(e => e),
  userTasks: taskGetter(
    state.user_task.filter(userTaskFilter(state.auth.id)),
    state.tasks
  ).filter(e => e),
  userActivities: state.activity_log
    .filter(
      log =>
        log.user_id === state.auth.id &&
        log.event &&
        log.event.toString() === Event.FINISH
    )
    .map(log => ({
      task_id: log.task_id,
      create_time: new Date(log.create_time)
    }))
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
