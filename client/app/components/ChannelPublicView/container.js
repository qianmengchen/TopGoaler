import { connect } from 'react-redux';
import ChannelPublicView from './ChannelPublicView';
import { subscribeChannelAsUser } from '../../actions';
import { Event } from '../../constants';

const _get_all_task_id = (state, ownProps) => {
  const res = [];
  const task = Object.keys(state.tasks).map(t => ({
    task_id: state.tasks[t].id,
    channel_id: state.tasks[t].channel_id
  }));
  for (const t of task) {
    if (Object.values(t)[1] === ownProps.navigation.state.params.id) {
      res.push(Object.values(t)[0]);
    }
  }
  return res;
};

const mapStateToProps = (state, ownProps) => ({
  user_id: state.auth.id,
  channel: state.channels[ownProps.navigation.state.params.id]
    ? state.channels[ownProps.navigation.state.params.id]
    : {},
  user_channel: state.user_channel,
  task: Object.keys(state.tasks).map(t => ({
    channel_id: state.tasks[t].channel_id
  })),
  channelActivities: state.activity_log.filter(
    log =>
      _get_all_task_id(state, ownProps).includes(log.task_id) &&
      log.event &&
      log.event.toString() === Event.FINISH
  ),
  subscribed_users: state.user_channel
    .filter(us => us.channel_id === ownProps.navigation.state.params.id)
    .map(log => ({
      user_id: log.user_id
    }))
});

const mapDispatchToProps = dispatch => ({
  subscribe: (channel_id, user_id) =>
    dispatch(subscribeChannelAsUser(user_id, channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPublicView);
