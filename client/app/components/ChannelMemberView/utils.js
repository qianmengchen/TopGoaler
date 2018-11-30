import { Event } from '../../constants';

export const channelActivityFilterWrap = (channel_id, tasks) => activity_log =>
  channel_id === tasks[activity_log.task_id].channel_id;

export const nameToInitialMap = name =>
  name
    .split(' ')
    .map(word => word[0])
    .join('');

//note: this 'timestamp' should be ISO format time
export const timestampToDescription = timestamp => {
  if (!timestamp) {
    return 'some time';
  }

  var s = new Date() - new Date(timestamp);
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  s = (s - mins) / 60;
  var hrs = s % 24;
  var days = Math.floor(s / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hrs > 0) {
    return `${hrs} hours ago`;
  } else if (mins > 0) {
    return `${mins} minutes ago`;
  } else {
    return 'Just now';
  }
};

export const eventToComment = event => {
  switch (event.toString()) {
    case Event.JOIN:
      return 'Finished task';
    case Event.FINISH:
      return 'Joined task';
    case Event.DROP:
      return 'Dropped task';
    default:
      return '';
  }
};

export const eventPointToResult = (event, point) => {
  switch (event.toString()) {
    case Event.FINISH:
      return `+${point}`;
    default:
      return '';
  }
};
