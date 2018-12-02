import { Event } from '../../constants';
import { Alert } from 'react-native';

/**
 * Returns a boolean showing if task is in the channel.
 *
 * @function channelActivityFilterWrap
 * @param {number} channek_id - The id of the channel.
 * @param {Object} tasks - The collection of all tasks.
 * @returns {boolean} - The boolean showing if task is in the channel.
 */
export const channelActivityFilterWrap = (channel_id, tasks) => activity_log =>
  channel_id === tasks[activity_log.task_id].channel_id;

/**
 * Returns a string which is the initial of the full name.
 *
 * @function nameToInitialMap
 * @param {string} name - The full name.
 * @returns {string} - The initial of the full name.
 */

export const nameToInitialMap = name =>
  name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('');

//note: this 'timestamp' should be ISO format time
/**
 * Returns a description of the timestamp.
 *
 * @function timestampToDescription
 * @param {string} timestamp - The timestamp.
 * @returns {string} - The description of the timestamp.
 */

export const timestampToDescription = timestamp => {
  if (!timestamp) {
    return 'some time';
  }

  var s = new Date(Date.now()) - new Date(timestamp);
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

/**
 * Returns a comment of the event.
 *
 * @function eventToComment
 * @param {event} event - The event status.
 * @returns {string} - The comment of the event.
 */

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

/**
 * Returns the result for event and point.
 *
 * @function eventPointToResult
 * @param {event} event - The event status.
 * @param {point} point - The point of the task in the event.
 * @returns {string} - The result for event and point.
 */

export const eventPointToResult = (event, point) => {
  switch (event.toString()) {
    case Event.FINISH:
      return `+${point}`;
    default:
      return '';
  }
};

/**
 * Generates an alert.
 *
 * @function _alert
 * @param {string} msg - The alert message.
 */

export const _alert = msg => Alert.alert(msg, '', [{ text: 'OK' }]);
