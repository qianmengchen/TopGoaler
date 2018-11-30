import { connect } from 'react-redux';
import PerformancePage from './PerformancePage';
import { Event } from '../../constants';

const _getSubscribedChannels = (user_channels, uid) => {
  return new Set(
    user_channels
      .filter(user_channel => user_channel.user_id === uid)
      .map(entry => ({
        channel_id: entry.channel_id
      }))
  );
};

const mapStateToProps = state => ({
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
    })),
  subscribed_channels: _getSubscribedChannels(
    state.user_channel,
    state.auth.id
  ),
  channels: state.channels
});

export default connect(mapStateToProps)(PerformancePage);
