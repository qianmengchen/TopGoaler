/**
 * Returns the action object for login failure.
 *
 * @function userChannelFilter
 * @param {number} id - The id of a user.
 * @returns {function} - The filter function to filter out user_channel entries related to the user
 */
export const userChannelFilter = id => user_channel =>
  user_channel.user_id === id;

/**
 * Returns the action object for login failure.
 *
 * @function channelGetter
 * @param {Array} user_channels - The array of user_channel relationships.
 * @param {Object} channels - The dictionary of all channels with the key being their ids.
 * @returns {Array} - The array of channel objects according to the channel_id being specified in user_channels
 */
export const channelGetter = (user_channels, channels) =>
  user_channels.map(user_channel => channels[user_channel.channel_id]);

/**
 * Returns the action object for login failure.
 *
 * @function userTaskFilter
 * @param {number} id - The id of a user.
 * @returns {function} - The filter function to filter out user_task entries related to the user
 */
export const userTaskFilter = id => user_task => user_task.user_id === id;

/**
 * Returns the action object for login failure.
 *
 * @function channelGetter
 * @param {Array} user_tasks - The array of user_tasks relationships.
 * @param {Object} tasks - The dictionary of all tasks with the key being their ids.
 * @returns {Array} - The array of task objects according to the task_id being specified in user_tasks
 */
export const taskGetter = (user_tasks, tasks) =>
  user_tasks.map(user_task => tasks[user_task.task_id]);
